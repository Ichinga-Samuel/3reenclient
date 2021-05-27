import React, { useState } from 'react';
import { SignupStyled } from './Signup.styled';
import { SignupForm } from './Signup.styled';
import Link from 'next/link';
import { Row, Col, Button, Spin, Input, Radio } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Signup = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [number, setNumber] = useState('');
    // const [gender, setGender] = useState<'male' | 'female' | null>(null);
    // const [description, setDescription] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [loading, setloading] = useState(false);

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onChange = (e) => {
        console.log(e.target.value);
    };
    const createVendor = (data) => {
        setIsProcessing(true);
        setloading(true);
        axios
            .post('backend url', data)
            .then((res) => {
                router.push('/vendor/login');
                localStorage.setItem('user', res.data);
            })
            .catch((e) => {
                alert(e.message);
            });
    };

    return (
        <Spin spinning={isProcessing}>
            <SignupStyled>
                <div className="intro">
                    <p>
                        REGISTER TO START <span>SELLING ON 3REEN</span>
                    </p>
                </div>
                <SignupForm onSubmit={createVendor}>
                    <div className="logo-div">
                        <img src="/img/vendor-logo.svg" alt="vendor-logo" />
                    </div>

                    <div className="header-div">
                        <p>
                            To become a part of the 3reen Shop, <span>please fill out and submit the form below.</span>
                        </p>
                    </div>
                    <div className="form-details">
                        <Row gutter={24}>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <Input size="large" {...register('fullname', { required: true })} />
                                    {errors.fullname && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="emailaddress">Email Address</label>
                                    <Input size="large" {...register('emailaddress', { required: true })} />
                                    {errors.emailaddress && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="fullname">Address</label>
                                    <Input size="large" {...register('address', { required: true })} />
                                    {errors.fullname && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <Input size="large" {...register('phoneNumber', { required: true })} />
                                    {errors.phoneNumber && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={12}>
                                <div className="form-group">
                                    <label htmlFor="gender" style={{ display: 'block' }}>
                                        Sex:
                                    </label>
                                    <Radio.Group onChange={onChange} {...register('gender', { required: true })}>
                                        <Radio value={1}>Male</Radio>
                                        <Radio value={2}>Female</Radio>
                                    </Radio.Group>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col xs={{ span: 24 }} xl={{ span: 24 }} lg={24}>
                                <div className="form-group">
                                    <label htmlFor="description">Brief Description</label>
                                    <Input.TextArea
                                        showCount
                                        maxLength={250}
                                        {...register('description', { required: true })}
                                    ></Input.TextArea>
                                    {errors.description && <span className="error">This field is required</span>}
                                </div>
                            </Col>
                        </Row>

                        <Row justify="center">
                            <Col xs={{ span: 24 }} xl={{ span: 12 }} lg={8}>
                                <Button loading={loading} type="primary" onClick={handleSubmit(createVendor)}>
                                    REGISTER NOW
                                </Button>
                            </Col>
                        </Row>
                        <p className="new-accout-info">
                            Already have an account?
                            <Link href="/vendor/login">
                                <a>Log in</a>
                            </Link>
                        </p>
                    </div>
                </SignupForm>
            </SignupStyled>
        </Spin>
    );
};

export default Signup;
