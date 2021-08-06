import React, { useState } from 'react';
import { Button, Col, Input, Modal, notification, Row } from 'antd';
import axios from 'axios';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useForm } from 'react-hook-form';
import { getFromLocalStorage } from '@/utils/browserStorage';


const UpdateCompany = (props) => {
    const {record} = props;
    const {_id, enabled, state, email, companyName, address, phone} = record;
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('admintoken');
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const cancelModal = () => {
        props.closeModal();
        reset();
        setloading(false);
    };

    const UpdateACompany = async (data: any) => {
        setloading(true);
        await axios
            .put(`${APP_BASE}${ADMIN.updateACompany(_id)}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const { data } = response;
                if (data.status === 'success') {
                    props.fetchAllCompany();
                    notification.success({
                        message: 'Success',
                        description: 'Your Company has been updated successfully',
                        duration: 15,
                    });
                    cancelModal();
                    setloading(false);
                }
            })
            .catch((err) => {
                console.log('login err', err);
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
                title={`Update A Company`}
                onCancel={cancelModal}
                visible={props.visible}
                footer={null}
                width={'400px'}
                centered={true}
                maskClosable={false}
            >
                <form className="pt-4" autoComplete={'off'} onSubmit={handleSubmit(UpdateACompany)}>
                    <Row gutter={24}>
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
                                <label htmlFor="companyName">Name of Company</label>
                                <Input size="large"  defaultValue={companyName} {...register('companyName')} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="email">Email</label>
                                <Input  size="large" defaultValue={email} {...register('email')} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="address">Company Address</label>
                                <Input size="large" defaultValue={address} {...register('address')} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="state">Name of State</label>
                                <Input  size="large" defaultValue={state} {...register('state')} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="phone">Phone Number</label>
                                <Input  size="large" defaultValue={phone} {...register('phone')} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="enabled">Select Company</label>
                                <Input  defaultValue={enabled} size="large" placeholder='True or False' {...register('enabled')} /> <h4 style={{fontWeight:'bolder'}}>Note: true or false not True of False</h4>
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
                                onClick={handleSubmit(UpdateACompany)}
                            >
                                UPDATE A COMPANY
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal>
        </>
    );
};

export default UpdateCompany;
