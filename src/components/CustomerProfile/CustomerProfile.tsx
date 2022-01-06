import React from 'react';
//import axios from "axios"
import { AuthHeader, UserLoginContainer } from '@/components/UserAccount/UserAccount.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { Row, Col, Input, Button} from 'antd';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
const Profile = () => {
    const {
        register,
        formState: { errors },
    } = useForm();

    return (
        <>
            <UserWebLayout webtitle="My Account">
                <UserLoginContainer data-aos="zoom-in">
                    <AuthHeader>CUSTOMER PROFILE</AuthHeader>
                    <div className="login register">
                        <>
                            <form
                                className="login__form"
                                autoComplete="off"
                                // onSubmit={handleSubmit(performRegister)}
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
                                            {errors.email && <span className="error">Email Address is required</span>}
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
                                                {...register('passwordConfirm', {
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
                                <Row gutter={24}>
                                    <Col xs={24} xl={12} lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="fullname">Phone Number</label>
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
                                            <label htmlFor="email">STATE</label>
                                            <Input
                                                {...register('email', { required: true })}
                                                size="large"
                                                style={{ height: '46px' }}
                                            />
                                            {errors.email && <span className="error">Email Address is required</span>}
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={30}>
                                    <Col xs={24} xl={12} lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="password">Address</label>
                                            <Input.TextArea
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
                                </Row>
                                <div className="form-group">
                                    <Row>
                                        <Col
                                            xs={{ span: 24, offset: 0 }}
                                            xl={{ span: 8, offset: 7 }}
                                            lg={{ span: 8, offset: 7 }}
                                        >
                                          <Link href='/profile/update-user-profile'>
                                          <Button type="primary" size="large" block>
                                                EDIT PROFILE
                                            </Button>
                                          </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </>
                    </div>
                </UserLoginContainer>
            </UserWebLayout>
        </>
    );
};

export default Profile;
