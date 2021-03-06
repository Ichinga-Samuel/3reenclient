import React, { useState, useCallback, useEffect } from 'react';
import AdminPlainLayout from '@/components/Admin/Layout/AdminPlainLayout';
import { Button, Input, notification } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { APP_BASE, USER } from '@/utils/ApiList';
import { addToLocalStorage } from '@/utils/browserStorage';
// import Link from 'next/link';

const SuperAdminLogin = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const PerformLogin = useCallback(
        async (data: any) => {
            console.log('login', data);
            setLoading(true);
            await axios
                .post(`${APP_BASE}${USER.login}`, data)
                .then((response) => {
                    const { data } = response;
                    if (data.status === 'success' && data.user.role !== 'admin') {
                        notification.error({
                            message: 'Error',
                            description: 'Account Does not belong to an Admin',
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
                            router.push('/superadmin/admin-users');
                        }, 1000);
                        addToLocalStorage('supertoken', response.data.token);
                        addToLocalStorage('superdetails', response.data.user);
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
        router.prefetch('/superadmin/admin-users');
    }, [router]);
    return (
        <>
            <AdminPlainLayout pageTitle="Super Admin Login">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    <div className="login__form">
                        <h3
                            style={{
                                color: '#590A5B',
                                fontSize: '28px',
                                lineHeight: '90.9%',
                            }}
                        >
                            Log In
                        </h3>
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
                                    style={{
                                        background: '#FFAF38',
                                        borderColor: 'white',
                                    }}
                                >
                                    {loading ? 'Authenticating...' : 'LOG IN'}
                                </Button>
                            </div>
                            {/*<div className="login__pwd">*/}
                            {/*    <Link href="/admin/resetnewpassword">Forgot Password?</Link>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
            </AdminPlainLayout>
        </>
    );
};

export default SuperAdminLogin;
