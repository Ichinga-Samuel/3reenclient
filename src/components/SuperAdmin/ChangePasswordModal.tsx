import React, { useState } from 'react';
import { Button, Col, Input, Modal, notification, Row } from 'antd';
import axios from 'axios';
import { APP_BASE, USER } from '@/utils/ApiList';
import { useForm } from 'react-hook-form';

const ChangePasswordModal = (props) => {
    const [loading, setloading] = useState(false);
    const { user } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const cancelModal = () => {
        props.closeModal();
        reset();
    };

    const SaveAdminNewPassword = async (data: any) => {
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
                    notification.success({
                        message: 'Success',
                        description: 'Your Password Reset Is Successfully.',
                        duration: 15,
                    });
                    notification.close('error');
                    setTimeout(() => {
                        props.closeModal;
                    }, 1000);
                }
            })
            .catch((err) => {
                setloading(false);
                notification.error({
                    key: 'error',
                    message: 'Error',
                    description: err.response.data.message,
                    duration: 25,
                });
            });
    };

    return (
        <>
            <Modal
                title={`Create New Password for ${user.full}`}
                onCancel={cancelModal}
                visible={props.visible}
                footer={null}
                width={'400px'}
                maskClosable={false}
            >
                <form onSubmit={handleSubmit(SaveAdminNewPassword)}>
                    <Row>
                        <Col span={24}>
                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <Input.Password
                                    name="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: 'Password must have at least 8 characters',
                                        },
                                    })}
                                />
                                <span className="error">
                                    {errors.password && 'Password must have at least 8 characters'}
                                </span>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="form-group" style={{ marginTop: '10px' }}>
                                <label htmlFor="passwordConfirm">Confirm Password</label>
                                <Input.Password
                                    name="passwordConfirm"
                                    {...register('passwordConfirm', {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: 'Password must have at least 8 characters',
                                        },
                                    })}
                                />
                                <span className="error">
                                    {errors.passwordConfirm && 'Password must have at least 8 characters'}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <div className="resetpass__btn">
                        <Row>
                            <Col span={24}>
                                <Button
                                    block
                                    loading={loading}
                                    type="primary"
                                    onClick={handleSubmit(SaveAdminNewPassword)}
                                >
                                    SAVE NEW PASSWORD
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ChangePasswordModal;
