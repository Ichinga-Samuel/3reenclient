import { Row, Col, Input, Button } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [success, setSuccess] = useState(false);
    const resetPassword = (data) => {
        console.log('data', data);
        setloading(true);
        setTimeout(() => {
            setSuccess(true);
        }, 500);
        setTimeout(() => {
            setloading(false);
        }, 1000);
    };

    const proceedResetPassword = () => {
        // console.log('data', data);
        setloading(true);
        setTimeout(() => {
            // setSuccess(false);
            router.push('/vendor/reset-token');
        }, 500);
        setTimeout(() => {
            setloading(false);
        }, 1000);
    };

    return (
        <>
            {success ? (
                <div className="emailsent">
                    <div className="emailsent__message">
                        <div className="icon">
                            <img src="/img/successIcon.png" alt="success" />
                        </div>
                        <Row>
                            <Col span={24}>
                                <h3>SUCCESSFULLY SENT</h3>
                                <h4>Code has been sent to your mail, check your inbox</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Button block type="primary" onClick={proceedResetPassword}>
                                    PROCEED
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
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
