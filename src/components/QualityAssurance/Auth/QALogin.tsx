import React, { useState, useCallback, useEffect } from 'react';
import QAPlainLayout from '@/components/QualityAssurance/QALayout/QAPlainLayout';
import { Button, Card, Input, notification } from 'antd';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { USER } from '@/utils/ApiList';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';

const QALogin = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const APP_BASE = process.env.APP_BASE_URL;

    const PerformLogin = useCallback(
        async (data: any) => {
            console.log('login', data);
            setLoading(true);
            await axios
                .post(`${APP_BASE}${USER.login}`, data)
                .then((response) => {
                    console.log('login response', response);
                    const { data } = response;
                    if (data.status === 'success' && data.user.role !== 'user') {
                        notification.error({
                            message: 'Error',
                            description: 'Account Does not belong to a QA',
                            duration: 15,
                        });
                        setLoading(false);
                        return;
                    }
                    if (data.status === 'success') {
                        notification.success({
                            key: 'done',
                            message: 'Success',
                            description: 'Login Successfully. Redirecting to Dashboard',
                            duration: 15,
                        });
                        setTimeout(() => {
                            notification.close('done');
                            router.push('/qualityassurance');
                        }, 1000);
                        addToLocalStorage('qatoken', response.data.token);
                        addToLocalStorage('qauser', response.data.user);
                        // setCookie('', 'token', response.data.token, {
                        //     maxAge: 30 * 24 * 60 * 60,
                        //     path: '/',
                        // });
                    }
                })
                .catch((err) => {
                    console.log('login err', err.response);
                    setLoading(false);
                    notification.error({
                        message: 'Error',
                        description: err.response.data.message,
                        duration: 15,
                    });
                });
        },
        [APP_BASE, router],
    );

    useEffect(() => {
        router.prefetch('/qualityassurance');
    }, [router]);
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
                                        {loading ? 'Authenticating...' : 'LOG IN'}
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

export async function getServerSideProps(context: any) {
    const token = getFromLocalStorage('qatoken');
    console.log('token', token);
    console.log('conte', context);
    if (token) {
        return {
            redirect: {
                destination: '/qualityassurance',
                permanent: false,
            },
        };
    }
    return { props: {} };
}

export default QALogin;
