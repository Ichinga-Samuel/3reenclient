import React, { useState } from 'react';
import { SigninStyled, LoginForm } from './Signin.styled';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button, notification, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { addToLocalStorage /*isUserLoggedIn*/ } from '@/utils/browserStorage';
import { USER } from '@/utils/ApiList';

const Signin = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tipContent, setContent] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();

    const APP_BASE = process.env.APP_BASE_URL;

    // const RedirectToLastPage = () => {
    //     console.log('test lgg', isUserLoggedIn);
    //     if (isUserLoggedIn) {
    //         if (window.history.length > 1 && document.referrer.indexOf(window.location.host) !== -1) {
    //             router.back();
    //         } else {
    //             router.push('/venor/dashboard');
    //         }
    //         router.push('');
    //     }
    //     router.push('/vendor/login');
    // };

    // useEffect(() => {
    //     RedirectToLastPage();
    // }, []);

    const login = async (data) => {
        console.log('login', data);
        setIsProcessing(true);
        setLoading(true);
        setContent('Authenticating In Progress. Please wait...');
        await axios
            .post(`${APP_BASE}${USER.login}`, data)
            .then((response) => {
                console.log('login response', response);
                const { data } = response;
                if (data.status === 'success' && data.user.role !== 'user') {
                    notification.error({
                        message: 'Error',
                        description: 'Account Does not belong to a vendor',
                        duration: 15,
                    });
                    setIsProcessing(false);
                    setLoading(false);
                    return;
                }
                if (data.status === 'success' && data.user.role === 'user') {
                    setContent('Authentication Successful. Redirecting...');
                    setTimeout(() => {
                        router.push('/vendor/dashboard');
                    }, 1000);
                    addToLocalStorage('token', response.data.token);
                    addToLocalStorage('user', response.data.user);
                }
            })
            .catch((err) => {
                console.log('login err', err.response);
                setIsProcessing(false);
                setLoading(false);
                notification.error({
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 15,
                });
            });
    };

    return (
        <div className="login">
            <Spin spinning={isProcessing} indicator={<LoadingOutlined />} tip={tipContent}>
                <SigninStyled>
                    {/* <div className="intro">
                <p>
                    SIGN IN TO START <span>SELLING ON 3REEN</span>
                </p>
            </div> */}
                    <LoginForm onSubmit={login}>
                        <div className="logo-div">
                            <img src="/img/vendor-logo.svg" alt="vendor-logo" />
                        </div>

                        <div className="header-div">
                            <h4>Log in</h4>
                            <p>
                                Log in to your account <span>to start selling</span>
                            </p>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email" id="email" {...register('email', { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" {...register('password', { required: true })} />
                            {errors.password && <span className="error">This field is required</span>}
                        </div>
                        <Button loading={loading} type="primary" onClick={handleSubmit(login)}>
                            LOG IN
                        </Button>
                        <Link href="/vendor/forgot-password">
                            <a>forgot password?</a>
                        </Link>
                        <p>
                            Do not have an account?
                            <Link href="/vendor/signup">
                                <a>REGSTER NOW</a>
                            </Link>
                        </p>
                    </LoginForm>
                </SigninStyled>
            </Spin>
        </div>
    );
};

export default Signin;
