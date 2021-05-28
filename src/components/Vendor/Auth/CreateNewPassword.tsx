import { Row, Col, Button, Input, notification } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { APP_BASE, USER } from '@/utils/ApiList';
import axios from 'axios';
import SuccessMessage from '@/components/Vendor/Auth/SuccessMessage';

const CreateNewPassword = () => {
    const [loading, setloading] = useState(false);
    const [success, setsuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const SaveNewPassword = async (data: any) => {
        console.log(data);
        const { password, passwordConfirm } = data;
        if (password !== passwordConfirm) {
            notification.error({
                message: 'Error',
                description: 'Password does not match',
                duration: 10,
            });
            return;
        }
        setloading(true);
        await axios
            .patch(`${APP_BASE}${USER.resetPassword('434545')}`, data)
            .then((response) => {
                console.log('reset response', response);
                const { data } = response;
                if (data.status === 'success') {
                    setsuccess(true);
                    notification.success({
                        message: 'Success',
                        description: 'Your Password Reset Is Successfully. Redirecting to login...',
                        duration: 15,
                    });
                    notification.close('error');
                    setTimeout(() => {
                        router.push('/vendor/login');
                    }, 2000);
                }
            })
            .catch((err) => {
                console.log('login err', err.response);
                setloading(false);
                notification.error({
                    key: 'error',
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 25,
                });
            });
    };

    // let confirmPassMsg = '';
    const matchPwd = (e: any) => {
        const { value } = e.target;
        // if (value === )
        console.log('value', value);
    };

    const proceedLogin = () => {
        setTimeout(() => {
            setloading(true);
            // setSuccess(false);
            router.push(`/vendor/login`);
        }, 500);
        setTimeout(() => {
            setloading(false);
        }, 1000);
    };

    return (
        <>
            {success ? (
                <SuccessMessage
                    loading={loading}
                    description="Your password has succefully been reset,
                you can proceed now to login"
                    successTitle="SUCCESSFULLY  RESET"
                    action={proceedLogin}
                />
            ) : (
                <div className="auth-cover">
                    <div className="create-new">
                        <h2>ENTER NEW PASSWORD</h2>
                        <h3>Create and confirm your new password</h3>
                        <form>
                            <Row>
                                <Col span={24}>
                                    <div className="form-group">
                                        <label htmlFor="newPasswprd">New Password</label>
                                        <Input.Password
                                            name="password"
                                            {...register('password', {
                                                required: true,
                                                minLength: {
                                                    value: 8,
                                                    message: 'Password must have at least 8 characters',
                                                },
                                            })}
                                            onChange={matchPwd}
                                        />
                                        <span className="error">
                                            {errors.password && 'Password must have at least 8 characters'}
                                        </span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="form-group" style={{ marginTop: '10px' }}>
                                        <label htmlFor="newConfirmPasswprd">Confirm Password</label>
                                        <Input.Password
                                            name="passwordConfirm"
                                            {...register('passwordConfirm', {
                                                required: true,
                                                minLength: {
                                                    value: 8,
                                                    message: 'Password must have at least 8 characters',
                                                },
                                            })}
                                            onChange={matchPwd}
                                        />
                                        <span className="error">
                                            {errors.passwordConfirm && 'Password must have at least 8 characters'}
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </form>

                        <div className="resetpass__btn">
                            <Row>
                                <Col span={24}>
                                    <Button
                                        block
                                        loading={loading}
                                        type="primary"
                                        onClick={handleSubmit(SaveNewPassword)}
                                    >
                                        SAVE PASSWORD
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateNewPassword;
