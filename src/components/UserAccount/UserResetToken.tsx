import { Row, Col, Button, Input, notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { APP_BASE, USER } from '@/utils/ApiList';
import axios from 'axios';
import { BodyContainer, UserLoginContainer } from './UserAccount.styled';
import UserWebLayout from '../UserLayout/UserWebLayout';
import { getFromLocalStorage } from '@/utils/browserStorage';

const UserResetToken = () => {
    const [loading, setloading] = useState(false);
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const token = getFromLocalStorage('usertoken');
    //handle auto focus of input
    const numOfFields = 4;
    const handleAutoFocus = (e: any) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split('_');
        console.log(document.querySelector('.codeOne').nodeValue);
        let fieldIntIndex = parseInt(fieldIndex, 10);
        console.log('fie', fieldName);
        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {
            // It should not be last input field
            if (fieldIntIndex < numOfFields) {
                // Get the next input field using it's name
                const nextfield = document.querySelector(`input[name=code_${fieldIntIndex + 1}]`);

                // If found, focus the next field
                if (nextfield !== null) {
                    (nextfield as HTMLInputElement).focus();
                }
                // else {
                //     document.querySelector(`button`);
                // }
            } else if ((fieldIntIndex = numOfFields)) {
            }
        }
    };

    const conifirmResetCode = async (data: any) => {
        setloading(true);
        console.log(data);
        await axios
            .post(`${APP_BASE}${USER.confirmToken}`)
            .then((response) => {
                console.log('reset response', response);
                const { data } = response;
                if (data.status === 'success') {
                    setTimeout(() => {
                        router.push('/');
                    }, 2000);
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
        <UserWebLayout webtitle="Reset Token">
            <BodyContainer>
                <UserLoginContainer>
                    <div className="auth-cover">
                        <div className="resetpass">
                            {token === null ? (
                                <div>
                                    {' '}
                                    <h2>ENTER REST CODE</h2>
                                    <form>
                                        <Row gutter={24}>
                                            <Col span={6}>
                                                <Input
                                                    name="code_1"
                                                    className="codeOne"
                                                    maxLength={1}
                                                    {...register('code_1', { required: true })}
                                                    onChange={handleAutoFocus}
                                                />
                                            </Col>
                                            <Col span={6}>
                                                <Input
                                                    name="code_2"
                                                    maxLength={1}
                                                    {...register('code_2', { required: true })}
                                                    onChange={handleAutoFocus}
                                                />
                                            </Col>
                                            <Col span={6}>
                                                <Input
                                                    name="code_3"
                                                    maxLength={1}
                                                    {...register('code_3', { required: true })}
                                                    onChange={handleAutoFocus}
                                                />
                                            </Col>
                                            <Col span={6}>
                                                <Input
                                                    name="code_4"
                                                    maxLength={1}
                                                    {...register('code_4', { required: true })}
                                                    onChange={handleAutoFocus}
                                                    onBlur={handleSubmit(conifirmResetCode)}
                                                />
                                            </Col>
                                        </Row>
                                    </form>
                                    <div className="resetpass__btn">
                                        <Row>
                                            <Col span={16} offset={4}>
                                                <Button
                                                    block
                                                    loading={loading}
                                                    type="primary"
                                                    onClick={handleSubmit(conifirmResetCode)}
                                                >
                                                    CONTINUE
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </UserLoginContainer>
            </BodyContainer>
        </UserWebLayout>
    );
};

export default UserResetToken;
