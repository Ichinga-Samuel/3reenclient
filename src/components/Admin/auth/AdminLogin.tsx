import React, { useState } from 'react';
import { AuthHeader } from '@/components/UserAccount/UserAccount.styled';
import { Input, Button, notification } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { USER, APP_BASE } from '@/utils/ApiList';
import Link from 'next/link';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import AdminPlainLayout from '@/components/Admin/Layout/AdminPlainLayout';
// import { LOGGER } from '@/utils/helpers';

const AdminLogin = () => {
    const [loading, setloading] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const token = getFromLocalStorage('admintoken');

    const performAdminLogin = async (details, e) => {
        setloading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${APP_BASE}${USER.login}`, details);
            const { data } = response;
            if (data.status === 'success' && data.user.role === 'user') {
                notification.success({
                    message: 'Success',
                    description: 'Login Successfully',
                    duration: 5,
                });
                addToLocalStorage('admintoken', response.data.token);
                addToLocalStorage('admindetails', response.data.user);
                setloading(true);
                router.push('/admin/dashboard');
                return;
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
        <AdminPlainLayout pageTitle="Login">
            <div data-aos="zoom-in">
                <AuthHeader>ADMIN LOGIN</AuthHeader>
                <div className="login">
                    {token === null ? (
                        <>
                            <h4>Log in to your account</h4>
                            <form className="login__form" autoComplete="off" onSubmit={handleSubmit(performAdminLogin)}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        {...register('email', { required: true })}
                                        size="large"
                                        style={{ height: '46px' }}
                                    />
                                    {errors.email && <span className="error">Email Address is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Input.Password
                                        {...register('password', { required: true })}
                                        size="large"
                                        style={{ height: 'auto' }}
                                    />
                                    {errors.password && <span className="error">Password is required</span>}
                                </div>
                                <div className="form-group">
                                    <Button
                                        onClick={handleSubmit(performAdminLogin)}
                                        loading={loading}
                                        type="primary"
                                        size="large"
                                        block
                                    >
                                        {loading ? 'Authenticating...' : 'Sign In'}
                                    </Button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <p style={{ textAlign: 'center' }}>
                                Seems you are already logged in. <br />
                                Missed road? <Link href="/admin/dashboard">Enter Dashboard</Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </AdminPlainLayout>
    );
};

export default AdminLogin;
