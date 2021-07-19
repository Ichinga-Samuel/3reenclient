// import { AuthContainer } from '@/components/QualityAssurance/Header/QAHeader.styled';
import QAPlainLayout from '@/components/QualityAssurance/QALayout/QAPlainLayout';
import React, { useState } from 'react';
import { Button, Card, Input, Row, Col, Checkbox, notification } from 'antd';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { USER } from '@/utils/ApiList';
import { addToLocalStorage /*isUserLoggedIn*/ } from '@/utils/browserStorage';
import axios from 'axios';

const QARegister = () => {
    const [loading, setloading] = useState(false);
    const APP_BASE = process.env.APP_BASE_URL;
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const PerformRegister = async (data: any) => {
        setloading(true);
        console.log(data);
        const { password, passwordConfirm } = data;
        if (password !== passwordConfirm) {
            notification.error({
                message: 'Error',
                description: 'Password does not match',
                duration: 10,
            });
            setloading(false);
            return;
        }
        setloading(true);
        await axios
            .post(`${APP_BASE}${USER.onlyUser}`, data)
            .then((response) => {
                const { data } = response;
                if (data.status === 'success') {
                    addToLocalStorage('qatoken', response.data.token);
                    addToLocalStorage('qauser', response.data.user);
                    notification.success({
                        key: 'succ',
                        message: 'Success',
                        description: 'Your Account has been created sucessfully',
                        duration: 15,
                    });
                    router.push('/qualityassurance');
                    notification.close('succ');
                }
            })
            .catch((err) => {
                setloading(false);
                notification.error({
                    message: 'Error',
                    description: err.response?.data.message,
                    duration: 15,
                });
            });
    };
    return (
        <div>
            <QAPlainLayout pageTitle="Register">
                <div className="login register" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    <Card>
                        <div className="login__form">
                            <h3>REGISTER</h3>
                            <h4>Fill in your information below</h4>
                            <form className="pt-4" autoComplete={'off'} onSubmit={handleSubmit(PerformRegister)}>
                                <Row gutter={24}>
                                    <Col xs={24} xl={12} lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <Input size="large" {...register('fullName', { required: true })} />
                                            {errors.fullName && <span className="error">Full Name is required</span>}
                                        </div>
                                    </Col>
                                    <Col xs={24} xl={12} lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <Input
                                                size="large"
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                })}
                                            />
                                            {errors.email && (
                                                <span className="error">Please, enter a valid email address</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col xs={24} xl={12} lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="email">Password</label>
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
                                    <Col xs={24} xl={12} lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="email">Re-enter Password</label>
                                            <Input.Password
                                                size="large"
                                                {...register('passwordConfirm', { required: true })}
                                            />
                                            {errors.passwordConfirm && (
                                                <span className="error">Password does not match</span>
                                            )}
                                        </div>
                                    </Col>
                                    <Col>
                                        <Checkbox {...register('tandc')}>
                                            I accept{' '}
                                            <Link href="/termsandconditions">
                                                <a>Terms and Conditions</a>
                                            </Link>{' '}
                                            in private policy
                                        </Checkbox>
                                        {/* {errors.tandc && <span className="error">Accept Terms and Conditions</span>} */}
                                    </Col>
                                </Row>
                                <Row className="pt-5">
                                    <Col xs={{ span: 24, offset: 2 }} xl={{ span: 11, offset: 7 }}>
                                        <Button
                                            loading={loading}
                                            type="primary"
                                            size="large"
                                            block
                                            onClick={handleSubmit(PerformRegister)}
                                        >
                                            REGISTER
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Card>
                </div>
            </QAPlainLayout>
        </div>
    );
};

export default QARegister;
