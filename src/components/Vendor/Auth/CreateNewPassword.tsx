import { Row, Col, Button, Input } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateNewPassword = () => {
    const [loading, setloading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const SaveNewPassword = (data: any) => {
        console.log(data);
        setloading(true);
    };

    // let confirmPassMsg = '';
    const matchPwd = (e: any) => {
        const { value } = e.target;
        // if (value === )
        console.log('value', value);
    };

    return (
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
                            <Button block loading={loading} type="primary" onClick={handleSubmit(SaveNewPassword)}>
                                SAVE PASSWORD
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPassword;
