import React, { useState } from 'react';
import { Button, Col, Input, Modal, notification, Row } from 'antd';
import axios from 'axios';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useForm } from 'react-hook-form';
import { getFromLocalStorage } from '@/utils/browserStorage';

const CreateCategoryModal = (props) => {
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('supertoken');
    const [modal, showModal] = useState(true);
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

    const CreateNewCategory = async (data: any) => {
        await axios
            .post(`${APP_BASE}${ADMIN.createCategory}`, data, {
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
                        description: 'Your Category has been created successfully',
                        duration: 15,
                    });
                    notification.close('succ');
                }
                showModal(false);
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
            {
                modal ? <div>
                    <Modal
                title={`Create A New Category`}
                onCancel={cancelModal}
                visible={props.visible}
                footer={null}
                width={'400px'}
                centered={true}
                maskClosable={false}
            >
                <form className="pt-4" autoComplete={'off'} onSubmit={handleSubmit(CreateNewCategory)}>
                    <Row gutter={24}>
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
                                <label htmlFor="name">Name of Category</label>
                                <Input size="large" {...register('name', { required: true })} />
                                {errors.name && <span className="error">Category Name is Required</span>}
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
                                onClick={handleSubmit(CreateNewCategory)}
                                
                            >
                                CREATE A NEW CATEGORY
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal>
                </div> : ''
            }
        </>
    );
};

export default CreateCategoryModal;
