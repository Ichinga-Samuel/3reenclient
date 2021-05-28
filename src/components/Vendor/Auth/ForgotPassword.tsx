import { Row, Col, Input, Button, notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { APP_BASE, USER } from '@/utils/ApiList';
import axios from 'axios';
import SuccessMessage from '@/components/Vendor/Auth/SuccessMessage';

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
            .patch(`${APP_BASE}${USER.forgotPassword}`, data)
            .then((response) => {
                console.log('for', response);
                const { data } = response;
                if (data.status === 'success') {
                    setSuccess(true);
                    // notification.success({
                    //     message: 'Success',
                    //     description: 'Your Password Reset Is Successfully. Redirecting to login...',
                    //     duration: 15,
                    // });
                    notification.close('error');
                    setTimeout(() => {
                        router.push('/vendor/login');
                    }, 2000);
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
        setTimeout(() => {
            setSuccess(true);
        }, 500);
        setTimeout(() => {
            setloading(false);
        }, 1000);
    };

    const proceedResetPassword = () => {
        // console.log('data', data);
        const fakeResp = 'ee33e5ee2a5c74950df13';
        setloading(true);
        setTimeout(() => {
            // setSuccess(false);
            router.push(`/vendor/reset-token?${encodeURIComponent(fakeResp)}`);
        }, 500);
        setTimeout(() => {
            setloading(false);
        }, 1000);
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
                <div className="forgotpass">
                    <div className="forgotpass__inner">
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
                                            {errors.email && <span className="error">Enter a valid email address</span>}
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
            )}
        </>
    );
};

export default ForgotPassword;
