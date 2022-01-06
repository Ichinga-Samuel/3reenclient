import React, { useState } from 'react';
import { AuthHeader, BodyContainer, UserLoginContainer } from '@/components/UserAccount/UserAccount.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { Row, Col, Input, Button, notification, Divider } from 'antd';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { USER, APP_BASE } from '@/utils/ApiList';
import Link from 'next/link';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';

const UserRegister = () => {
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('usertoken');
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const performRegister = async (details, e) => {
        console.log(details)
                setloading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${APP_BASE}${USER.onlyUser}`, details);
            const { data } = response;
            console.log(data)
            if (data.status === 'success') {
                notification.success({
                    message: 'Success',
                    description: 'Account Created Successfully',
                    duration: 5,
                });
                addToLocalStorage('usertoken', response.data.token);
                addToLocalStorage('userdetails', response.data.fullName);
                console.log(response.data)
                setloading(false);
                router.push('/');
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
        <UserWebLayout webtitle="Register Account">
            <BodyContainer>
                <UserLoginContainer data-aos="zoom-in">
                    <AuthHeader>CUSTOMER REGISTRATION</AuthHeader>
                    <div className="login register">
                        <h4>Fill in your information below</h4>
                        {token === null ? (
                            <>
                                <form
                                    className="login__form"
                                    autoComplete="off"
                                    onSubmit={handleSubmit(performRegister)}
                                >
                                    <Row gutter={24}>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name</label>
                                                <Input
                                                    {...register('fullName', { required: true })}
                                                    size="large"
                                                    style={{ height: '46px' }}
                                                />
                                                {errors.fullName && (
                                                    <span className="error">Full Name Address is required</span>
                                                )}
                                            </div>
                                        </Col>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Input
                                                    {...register('email', { required: true })}
                                                    size="large"
                                                    style={{ height: '46px' }}
                                                />
                                                {errors.email && (
                                                    <span className="error">Email Address is required</span>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Input.Password
                                                    {...register('password', {
                                                        required: true,
                                                        minLength: {
                                                            value: 8,
                                                            message: 'Password must have at least 8 characters',
                                                        },
                                                    })}
                                                    size="large"
                                                    style={{ height: 'auto' }}
                                                />
                                                {errors.password && <span className="error">Password is required</span>}
                                            </div>
                                        </Col>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="password">Confirm Password</label>
                                                <Input.Password
                                                    {...register('confirmPassword', {
                                                        required: true,
                                                        minLength: {
                                                            value: 8,
                                                            message: 'Password must be the same 8 characters',
                                                        },
                                                    })}
                                                    size="large"
                                                    style={{ height: 'auto' }}
                                                />
                                                {errors.passwordConfirm && (
                                                    <span className="error">Confirm Password is required</span>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="form-group">
                                        <Row gutter={24}>
                                            <Col xs={24} xl={24} lg={24}>
                                                <div className="pretty p-svg p-curve">
                                                    <input
                                                        id="tandc"
                                                        type="checkbox"
                                                        {...register('tandc', { required: true })}
                                                    />
                                                    <div className="state p-warning">
                                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                            <path
                                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                style={{ stroke: 'white', fill: 'white' }}
                                                            />
                                                        </svg>
                                                        <label htmlFor="tandc" className='terms'>
                                                            I accept Terms and condition in private policy
                                                        </label>
                                                    </div>
                                                </div>
                                                {errors.tandc && (
                                                    <small className="error">
                                                        You have not accepted the term & conditions
                                                    </small>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="form-group">
                                        <Row>
                                            <Col
                                                xs={{ span: 24, offset: 0 }}
                                                xl={{ span: 8, offset: 7 }}
                                                lg={{ span: 8, offset: 7 }}
                                            >
                                                <Button
                                                    onClick={handleSubmit(performRegister)}
                                                    loading={loading}
                                                    type="primary"
                                                    size="large"
                                                    block
                                                >
                                                    {loading ? 'Processing...' : 'CREATE ACCOUNT'}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Divider>Or Register with</Divider>
                                    <div className="form-group">
                                        <p>Social Media Register</p>
                                    </div>
                                    <p className="login__regtext">
                                        Already have an account? <Link href="/account/login">Login</Link>
                                    </p>
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
            </BodyContainer>
        </UserWebLayout>
    );
};

export default UserRegister;
