import { Row, Col, Input, Button, notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import SuccessMessage from '@/components/Vendor/Auth/SuccessMessage';
import { APP_BASE, USER } from '@/utils/ApiList';
import Header from '@/components/Header/Header';
import { LogoIcon } from '@/utils/Icons';

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [success, setSuccess] = useState(false);
    const resetPassword = async (data: any) => {
        console.log('data', data);
        setloading(true);
        await axios
            .post(`${APP_BASE}${USER.forgotPassword}`, data)
            .then((response) => {
                console.log('for', response);
                const { data } = response;
                if (data.status === 'success') {
                    setSuccess(true);
                    notification.close('error');
                    setloading(false);
                }
            })
            .catch((err) => {
                console.log('login err', err.response);
                setloading(false);
                notification.error({
                    key: 'error',
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 25,
                });
            });
    };

    const proceedResetPassword = () => {
        const fakeResp = 'ee33e5ee2a5c74950df13';
        setloading(true);
        setTimeout(() => {
            router.push(`/admin/reset-token?${encodeURIComponent(fakeResp)}`);
        }, 500);
    };

    return (
        <>
            <Header />
            {success ? (
                <SuccessMessage
                    loading={loading}
                    description="Code has been sent to your mail, check your inbox"
                    successTitle="SUCCESSFULLY SENT"
                    action={proceedResetPassword}
                />
            ) : (
                <div className="authcontainer">
                    <div className='logoicon'>
                     
                         <LogoIcon/>
                     
                    </div>
                    
                    <div className="reset_newpass">
                        <h2>RESET PASSWORD</h2>
                        <h3 style={{fontWeight:'bold'}}>Please enter your registered email adress or phone number</h3>
                        <form onSubmit={handleSubmit(resetPassword)}> 
                            <Row>
                                <Col span={24}>
                                    <div className="form-group">
                                        <Input
                                            name="email"
                                            placeholder="Enter your email address"
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                            })}
                                          
                                        />
                                        <span className="error">
                                         {errors.email && <span className="error">Enter a valid email address</span>}
                                        </span>
                                    </div>
                                </Col>
                                
                            </Row>
                        </form>

                        <div className="resetpass__btn">
                            <Row>
                                <Col span={24}>
                                    <Button
                                        block
                                        loading={loading}
                                        type="primary"
                                        onClick={handleSubmit(resetPassword)}
                                    >
                                         SEND CODE
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default ForgotPassword;
