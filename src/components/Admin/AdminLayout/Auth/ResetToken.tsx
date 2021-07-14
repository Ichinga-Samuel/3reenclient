import { Row, Col, Button, Input, notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { APP_BASE, USER } from '@/utils/ApiList';
import axios from 'axios';
import { LogoIcon } from '@/utils/Icons';
import Header from '@/components/Header/Header';

const ResetToken = () => {
    const [loading, setloading] = useState(false);
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    //handle auto focus of input
    const numOfFields = 4;
    const handleAutoFocus = (e: any) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split('_');

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
                const data = {
                    code_1: value,
                    code_2: value,
                    code_3: value,
                    code_4: value,
                };
                conifirmResetCode(data);
            }
        }
    };

    const conifirmResetCode = async (data: any) => {
        const { code_1, code_2, code_3, code_4 } = data;
        const token = {
            resetCode: `${code_1}${code_2}${code_3}${code_4}`,
        };
        console.log('token', token);
        setloading(true);
        await axios
            .post(`${APP_BASE}${USER.confirmToken}`, token)
            .then((response) => {
                console.log('reset response', response);
                const { data } = response;
                if (data.status === 'success') {
                    setTimeout(() => {
                        router.push('/admin/resetPassword');
                    }, 2000);
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
                <Header/>
                <div className="authcontainer">
                    <div className='logoicon'>
                             
                             <LogoIcon/>
                         
                    </div>
                           
                    <div className="reset_code">
                        <h2>ENTER REST CODE</h2>
                        <form>
                            <Row gutter={24}>
                                <Col span={6}>
                                    <Input
                                        name="code_1"
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
                                    <Button block loading={loading} type="primary" onClick={handleSubmit(conifirmResetCode)}>
                                        CONTINUE
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default ResetToken;
