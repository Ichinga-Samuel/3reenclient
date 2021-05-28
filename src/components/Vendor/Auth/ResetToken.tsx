import { Row, Col, Button, Input } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ResetToken = () => {
    const [loading, setloading] = useState(false);
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    //handle auto focus of input
    const numOfFields = 4;
    const handleAutoFocus = (e: any) => {
        console.log('eee', e);
        const { maxLength, value, name } = e.target;
        const [fieldIndex] = name.split('-');
        if (value.length >= maxLength) {
            if (parseInt(fieldIndex, 10) < numOfFields) {
                const nextSibling = document.querySelector(`input[name=code${parseInt(fieldIndex, 10) + 1}]`);

                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }
    };

    const conifirmResetCode = (data: any) => {
        const { code1, code2, code3, code4 } = data;
        const token = {
            resetCode: `${code1}${code2}${code3}${code4}`,
        };
        console.log('token', token);
        setloading(true);
        setTimeout(() => {
            router.push('/vendor/reset-password');
            setloading(false);
        }, 2000);
    };

    return (
        <div className="auth-cover">
            <div className="resetpass">
                <h2>ENTER REST CODE</h2>
                <form>
                    <Row gutter={24}>
                        <Col span={6}>
                            <Input
                                maxLength={1}
                                onChange={handleAutoFocus}
                                {...register('code1', { required: true })}
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                maxLength={1}
                                onChange={handleAutoFocus}
                                {...register('code2', { required: true })}
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                maxLength={1}
                                onChange={handleAutoFocus}
                                {...register('code3', { required: true })}
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                maxLength={1}
                                {...register('code4', { required: true })}
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
    );
};

export default ResetToken;
