import React, { useState } from 'react';
import QAPlainLayout from '@/components/QualityAssurance/QAPlainLayout';
import { Button, Card, Input } from 'antd';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [loading, setloading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const PerformLogin = (data: any) => {
        setloading(true);
        console.log(data);
    };
    return (
        <>
            <QAPlainLayout pageTitle="Login">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    <Card>
                        <div className="login__form">
                            <h3>Log In</h3>
                            <h4>Log in to your account</h4>

                            <form className="pt-4" onSubmit={handleSubmit(PerformLogin)} autoComplete="off">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <Input size="large" {...register('email', { required: true })} />
                                    {errors.email && <span className="error">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Password</label>
                                    <Input.Password size="large" {...register('password', { required: true })} />
                                    {errors.password && <span className="error">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <Button
                                        loading={loading}
                                        size="large"
                                        type="primary"
                                        block
                                        onClick={handleSubmit(PerformLogin)}
                                    >
                                        LOG IN
                                    </Button>
                                </div>
                                <div className="login__pwd">
                                    <Link href="/qualityassurance/forgot-password">Forgot Password?</Link>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </QAPlainLayout>
        </>
    );
};

export default Login;
