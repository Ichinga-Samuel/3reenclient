import React, { useState } from 'react';
import { AuthHeader, BodyContainer, UserLoginContainer } from '@/components/UserAccount/UserAccount.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { Input, Button, notification, Divider } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { USER, APP_BASE } from '@/utils/ApiList';
import Link from 'next/link';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import { LOGGER } from '@/utils/helpers';

const UserLogin = () => {
    const [loading, setloading] = useState(false);
    const [userCart, setUserCart] = useState([]);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const token = getFromLocalStorage('usertoken');

    const fetchUserCart = async (token) => {
        try {
            const { data } = await axios.get(`${APP_BASE}/cart/myCart`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const usersCart = data.cart;
            setUserCart(usersCart);
            LOGGER('cart', userCart);
            localStorage.setItem('cartItems', JSON.stringify(usersCart));
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err?.response?.data?.message,
            });
        }
    };

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
                addToLocalStorage('usertoken', response.data.token);
                addToLocalStorage('userdetails', response.data.user);
                setloading(true);
                setTimeout(() => {
                    fetchUserCart(response.data.token);
                }, 1000);
                router.push('/');
                return;
            } else {
                setloading(false);
                notification.error({
                    message: 'Login Error',
                    description: 'Account does not belong to user',
                    duration: 20,
                });
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
        <UserWebLayout webtitle="Login">
            <BodyContainer>
                <UserLoginContainer data-aos="zoom-in">
                    <AuthHeader>CUSTOMER LOGIN</AuthHeader>
                    <div className="login">
                        {token === null ? (
                            <>
                                <h4>Log in to your account</h4>
                                <form
                                    className="login__form"
                                    autoComplete="off"
                                    onSubmit={handleSubmit(performAdminLogin)}
                                >
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
                                    <div className="login__pwd">
                                        <Link href="/account/forgot-password">Forgot Password?</Link>
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
                                    <Divider>Or Login with</Divider>
                                    <div className="form-group">
                                        <p>Social Media Login</p>
                                    </div>
                                    <p className="login__regtext">
                                        Don’t have an account? <Link href="/account/register">Register</Link>
                                    </p>
                                </form>
                            </>
                        ) : (
                            <>
                                <p style={{ textAlign: 'center' }}>
                                    Seems you are already logged in. <br />
                                    Missed road? <Link href="/">Go back home</Link>
                                </p>
                            </>
                        )}
                    </div>
                </UserLoginContainer>
            </BodyContainer>
        </UserWebLayout>
    );
};

export default UserLogin;
