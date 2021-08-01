import React, { useState } from 'react';
import { Button, Col, Input, Modal, notification, Row } from 'antd';
import axios from 'axios';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useForm } from 'react-hook-form';
import { getFromLocalStorage } from '@/utils/browserStorage';

const CreateCategoryModal = (props) => {
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('admintoken');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const cancelModal = () => {
        props.closeModal();
        reset();
        setloading(false);
    };

    const CreateNewCategory = async (data: any) => {
        setloading(true);
        await axios
            .post(`${APP_BASE}${ADMIN.createCategory}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const { data } = response;
                if (data.status === 'success') {
                    props.fetchAllCategory();
                    notification.success({
                        message: 'Success',
                        description: 'Your Category has been created successfully',
                        duration: 15,
                    });
                    cancelModal();
                    setloading(false);
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
                                <Input name="name" size="large" {...register('name', { required: true })} />
                                {errors.name && <small className="error">Category Name is Required</small>}
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
        </>
    );
};

export default CreateCategoryModal;
