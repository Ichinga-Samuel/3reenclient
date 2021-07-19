import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { APP_BASE, USER } from '@/utils/ApiList';
import CSTPlainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTPlainLayout';
import axios from 'axios';
import { Row, Col, Card, Input, Button, notification } from 'antd';
import SuccessMessage from '@/components/Vendor/Auth/SuccessMessage';

const CSTForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [success, setSuccess] = useState(false);
    const resetPassword = async (data: any) => {
        setloading(true);
        await axios
            .post(`${APP_BASE}${USER.forgotPassword}`, data)
            .then((response) => {
                const { data } = response;
                if (data.status === 'success') {
                    setSuccess(true);
                    notification.close('error');
                    setloading(false);
                }
            })
            .catch((err) => {
                setloading(false);
                notification.error({
                    key: 'error',
                    message: 'Error',
                    description: err?.response?.data?.message,
                    duration: 25,
                });
            });
    };

    const proceedResetPassword = () => {
        const fakeResp = 'ee33e5ee2a5c74950df13';
        setloading(true);
        setTimeout(() => {
            router.push(`/cst/reset-token?${encodeURIComponent(fakeResp)}`);
        }, 500);
    };

    return (
        <>
            {success ? (
                <SuccessMessage
                    loading={loading}
                    description="Code has been sent to your mail, check your inbox"
                    successTitle="SUCCESSFULLY SENT"
                    action={proceedResetPassword}
                />
            ) : (
                <>
                    <CSTPlainLayout pageTitle="Forgot Password">
                        <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                            <Card>
                                <div className="">
                                    <div className="">
                                        <div className="forgotpass__header">
                                            <h1>RESET PASSWORD</h1>
                                            <h3>Please enter your registered email adress or phone number</h3>
                                        </div>
                                        <div className="forgotpass__details">
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
                                                            {errors.email && (
                                                                <span className="error">
                                                                    Enter a valid email address
                                                                </span>
                                                            )}
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <Button
                                                            loading={loading}
                                                            type="primary"
                                                            block
                                                            onClick={handleSubmit(resetPassword)}
                                                        >
                                                            SEND CODE
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </CSTPlainLayout>
                </>
            )}
        </>
    );
};

export default CSTForgotPassword;
