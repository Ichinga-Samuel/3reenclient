import React, { useState } from 'react';
import { SignupStyled } from './Signup.styled';
import { SignupForm } from './Signup.styled';
import Link from 'next/link';
import { Row, Col, Button, Spin, Input, notification, Radio } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
// import { EmailValidation } from '@/utils/helpers';
import { useForm } from 'react-hook-form';
import { LoadingOutlined } from '@ant-design/icons';
import { addToLocalStorage /*isUserLoggedIn*/ } from '@/utils/browserStorage';

const Signup = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [loading, setloading] = useState(false);
    const [tipContent, setContent] = useState('');

    const APP_BASE = process.env.APP_BASE_URL;
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onChange = (e) => {
        console.log(e.target.value);
    };

    // Call Login after Register is successful
    const PerformLogin = async (email, password) => {
        setIsProcessing(true);
        setloading(true);
        setContent('Authenticating In Progress. Please wait...');
        await axios
            .post(`${APP_BASE}/users/login`, {
                email,
                password,
            })
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
                    setloading(false);
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
                setloading(false);
                notification.error({
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 15,
                });
            });
    };

    const createVendor = async (data) => {
        console.log('data', data);
        const { email, password, confirmPassword } = data;
        if (password !== confirmPassword) {
            notification.error({
                message: 'Error',
                description: 'Password does not match',
                duration: 10,
            });
            return;
        }
        setIsProcessing(true);
        setloading(true);
        setContent('Processing Data. Please wait...');
        await axios
            .post(`${APP_BASE}/users/sign`, data)
            .then((response) => {
                console.log('login response', response);
                const { data } = response;
                if (data.status === 'success' && data.user.role === 'user') {
                    setContent('Registration Successful. Authenticating In Progress...');
                    setTimeout(() => {
                        PerformLogin(email, password);
                    }, 500);
                    addToLocalStorage('token', response.data.token);
                    addToLocalStorage('user', response.data.user);
                }
            })
            .catch((err) => {
                console.log('login err', err.response);
                setIsProcessing(false);
                setloading(false);
                notification.error({
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 15,
                });
            });
    };

    return (
        <Spin spinning={isProcessing} indicator={<LoadingOutlined />} tip={tipContent}>
            <SignupStyled>
                <div className="intro">
                    <p>
                        REGISTER TO START <span>SELLING ON 3REEN</span>
                    </p>
                </div>
                <SignupForm onSubmit={createVendor}>
                    <div className="logo-div">
                        <img src="/img/vendor-logo.svg" alt="vendor-logo" />
                    </div>

                    <div className="header-div">
                        <p>
                            To become a part of the 3reen Shop, <span>please fill out and submit the form below.</span>
                        </p>
                    </div>
                    <div className="form-details">
                        <Row gutter={24}>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <Input size="large" {...register('fullname', { required: true })} />
                                    {errors.fullname && <span className="error">Full Name is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="emailaddress">Email Address</label>
                                    <Input
                                        size="large"
                                        {...register('emailaddress', {
                                            required: true,
                                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                        })}
                                    />
                                    {errors.emailaddress && (
                                        <span className="error">Please, enter valid email address</span>
                                    )}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="emailaddress">Password</label>
                                    <Input.Password
                                        size="large"
                                        {...register('password', {
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: 'Password must have at least 8 characters',
                                            },
                                        })}
                                    />
                                    {errors.password && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="emailaddress">Confirm Password</label>
                                    <Input.Password size="large" {...register('confirmPassword', { required: true })} />
                                    {errors.confirmPassword && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="fullname">Address</label>
                                    <Input size="large" {...register('address', { required: true })} />
                                    {errors.address && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <Input size="large" {...register('phoneNumber', { required: true })} />
                                    {errors.phoneNumber && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="gender" style={{ display: 'block' }}>
                                        Sex:
                                    </label>
                                    <Radio.Group onChange={onChange} {...register('gender', { required: true })}>
                                        <Radio value="Male">Male</Radio>
                                        <Radio value="Female">Female</Radio>
                                    </Radio.Group>
                                    {errors.gender && <span className="error">Please select your sex</span>}
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col xs={{ span: 24 }} xl={{ span: 24 }} lg={24}>
                                <div className="form-group">
                                    <label htmlFor="description">Brief Description</label>
                                    <Input.TextArea
                                        showCount
                                        maxLength={250}
                                        {...register('description', { required: true })}
                                    ></Input.TextArea>
                                    {errors.description && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                        </Row>

                        <Row justify="center">
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={8}>
                                <Button loading={loading} type="primary" onClick={handleSubmit(createVendor)}>
                                    REGISTER NOW
                                </Button>
                            </Col>
                        </Row>
                        <p className="new-account-info">
                            Already have an account?
                            <Link href="/vendor/login">
                                <a>Log in</a>
                            </Link>
                        </p>
                    </div>
                </SignupForm>
            </SignupStyled>
        </Spin>
    );
};

export default Signup;
