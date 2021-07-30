import React, { useState } from 'react';
import { Button, Col, Input, Modal, notification, Row } from 'antd';
import axios from 'axios';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useForm } from 'react-hook-form';
import { getFromLocalStorage } from '@/utils/browserStorage';

const CreateNewAdminModal = (props) => {
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('supertoken');

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

    const AddNewAdmin = async (data: any) => {
        setloading(true);
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
            .post(`${APP_BASE}${ADMIN.addAdmin}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log('login response', response);
                const { data } = response;
                if (data.status === 'success') {
                    notification.success({
                        key: 'succ',
                        message: 'Success',
                        description: 'Your Account has been created successfully',
                        duration: 15,
                    });
                    notification.close('succ');
                }
            })
            .catch((err) => {
                console.log('login err', err.response);
                setloading(false);
                notification.error({
                    message: 'Error',
                    description: err.response?.data.message,
                    duration: 15,
                });
            });
    };

    return (
        <>
            <Modal
                title={`Create New Admin User`}
                onCancel={cancelModal}
                visible={props.visible}
                footer={null}
                width={'400px'}
                maskClosable={false}
            >
                <form className="pt-4" autoComplete={'off'} onSubmit={handleSubmit(AddNewAdmin)}>
                    <Row gutter={24}>
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
                                <label htmlFor="name">Full Name</label>
                                <Input size="large" {...register('fullName', { required: true })} />
                                {errors.fullName && <span className="error">Full Name is required</span>}
                            </div>
                        </Col>
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
                                <label htmlFor="email">Email Address</label>
                                <Input
                                    size="large"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    })}
                                />
                                {errors.email && <span className="error">Please, enter a valid email address</span>}
                            </div>
                        </Col>
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
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
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
                                <label htmlFor="email">Re-enter Password</label>
                                <Input.Password size="large" {...register('passwordConfirm', { required: true })} />
                                {errors.passwordConfirm && <span className="error">Password does not match</span>}
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col xs={24} xl={24} lg={24}>
                            <Button
                                loading={loading}
                                type="primary"
                                size="large"
                                block
                                onClick={handleSubmit(AddNewAdmin)}
                            >
                                CREATE A SUB ADMIN
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal>
        </>
    );
};

export default CreateNewAdminModal;
