import React, { useState } from 'react';
import { Button, Col, Input, Modal, notification, Row, Switch } from 'antd';
import axios from 'axios';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { useForm, Controller } from 'react-hook-form';
import { getFromLocalStorage } from '@/utils/browserStorage';
// import { DownOutlined } from '@ant-design/icons';
// import { LOGGER } from '@/utils/helpers';

const CreateCompanyModal = (props) => {
    const [loading, setloading] = useState(false);
    const token = getFromLocalStorage('admintoken');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm();

    const cancelModal = () => {
        props.closeModal();
        reset();
        setloading(false);
    };

    const CreateNewCompany = async (data: any) => {
        console.log('a', data);
        setloading(true);
        await axios
            .post(`${APP_BASE}${ADMIN.createNewCompany}`, data, {
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
                        description: 'Your Company has been created successfully',
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
    // const handleClick = (key) => {
    //     //you can perform setState here
    //     LOGGER('k', key);
    // };

    // const menu = (
    //     <Menu onClick={handleClick}>
    //         <Menu.Item key="true">True</Menu.Item>
    //         <Menu.Item key="false">False</Menu.Item>
    //     </Menu>
    // );
    return (
        <>
            <Modal
                title={`Create A New Company`}
                onCancel={cancelModal}
                visible={props.visible}
                footer={null}
                width={'400px'}
                centered={true}
                maskClosable={false}
            >
                <form className="pt-4" autoComplete={'off'} onSubmit={handleSubmit(CreateNewCompany)}>
                    <Row gutter={24}>
                        <Col xs={24} xl={24} lg={24}>
                            <div className="form-group2">
                                <label htmlFor="companyName">Name of Company</label>
                                <Input size="large" {...register('companyName', { required: true })} />
                                {errors.companyName && <small className="error">Company Name is Required</small>}
                            </div>
                            <div className="form-group2">
                                <label htmlFor="email">Email</label>
                                <Input size="large" {...register('email', { required: true })} />
                                {errors.email && <small className="error">Email is Requried</small>}
                            </div>
                            
                            <div className="form-group2">
                                <label htmlFor="address">Company Address</label>
                                <Input size="large" {...register('address')} />
                                {errors.address && <small className="error">Address is Required</small>}
                            </div>
                            <div className="form-group2">
                                <label htmlFor="state">Name of State</label>
                                <Input size="large" {...register('state')} />
                                {errors.state && <small className="error">State is Required</small>}
                            </div>
                            <div className="form-group2">
                                <label htmlFor="phone">Phone Number</label>
                                <Input size="large" {...register('phone', { required: true })} />
                                {errors.phone && <small className="error">Phone Number is Required</small>}
                            </div>
                            <div className="form-group2">
                                <label htmlFor="phone">Set As Selected Company</label>
                                <div className="form-group2">
                                    <Controller
                                        name="enabled"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Switch
                                                unCheckedChildren="No"
                                                checkedChildren="Yes"
                                                onChange={onChange}
                                                checked={value}
                                            />
                                        )}
                                    />
                                </div>
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
                                onClick={handleSubmit(CreateNewCompany)}
                            >
                                CREATE A NEW COMPANY
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal>
        </>
    );
};

export default CreateCompanyModal;
