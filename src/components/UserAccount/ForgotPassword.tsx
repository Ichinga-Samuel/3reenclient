import React, { useState } from 'react';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { AuthHeader,  UserLoginContainer } from '@/components/UserAccount/UserAccount.styled';
import { Button, Col, Input, notification, Row } from 'antd';
import Link from 'next/link';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { APP_BASE, USER } from '@/utils/ApiList';
import router from 'next/router';

const ForgotPassword = () => {
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('usertoken');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const recoverPassword = async (details, e) => {
        setloading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${APP_BASE}${USER.forgotPassword}`, details);
            const { data } = response;
            console.log(data);
            if (data.status === 'success') {
                notification.success({
                    message: 'Your Reset Token Has been sent succesfully, check your mail',
                });
                setloading(false);
                setTimeout(() => {
                    router.push('/account/password-reset-token');
                }, 2000);
            }
        } catch (err) {
            notification.error({
                message: 'Login Error',
                description: err?.response?.data?.message,
                duration: 20,
            });
            setloading(false);
        }
    };

    return (
        <>
            <UserWebLayout webtitle="Forgot Password">
                    <UserLoginContainer data-aos="zoom-in">
                        <AuthHeader>RESET YOUR PASSWORD</AuthHeader>
                        <div className="login form">
                            {token === null ? (
                                <>
                                    <h4>Enter your registered Email</h4>
                                    <form onSubmit={handleSubmit(recoverPassword)}>
                                        <div className="form-group">
                                            <Row>
                                                <Col span={24}>
                                                    <div className="form-group2">
                                                        <Input
                                                            name="email"
                                                            placeholder="Enter your email address"
                                                            {...register('email', {
                                                                required: true,
                                                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                            })}
                                                        />
                                                        {errors.email && (
                                                            <span className="error">Enter a valid email address</span>
                                                        )}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="form-group2">
                                            <Row>
                                                <Col span={24}>
                                                    <Button
                                                        loading={loading}
                                                        type="primary"
                                                        block
                                                        onClick={handleSubmit(recoverPassword)}
                                                    >
                                                        SEND CODE
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <p style={{ textAlign: 'center' }}>
                                        Missed road? <Link href="/">Go back home</Link>
                                    </p>
                                </>
                            )}
                        </div>
                    </UserLoginContainer>
            </UserWebLayout>
        </>
    );
};

export default ForgotPassword;
