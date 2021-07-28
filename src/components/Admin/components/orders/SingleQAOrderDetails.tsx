import React, { useEffect, useState } from 'react';
import QAMainLayout from '@/components/QualityAssurance/QALayout/QAMainLayout';
import { QAOrderDetailsContainer } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { APP_BASE, QA_ORDER } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { Button, Input, Spin, Row, Select, Col, Card, notification } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { findAllTotal, formatAmount } from '@/utils/helpers';
import NotificationCard from '@/components/QualityAssurance/Orders/NotificationCard';
import { ActionList } from './UtilsOrderData';
import OrderProducts from './OrderProducts';
import ProductImageCard from './ProductImageCard';

const { Option } = Select;

const SingleQAOrderDetails = () => {
    const title = 'Order Details';
    const router = useRouter();
    const { id } = router.query;
    const token = getFromLocalStorage('qatoken');
    const [details, setdetails] = useState(null);
    const [updating, setUpdating] = useState(false);
    const [val, setVal] = useState('');

    useEffect(() => {
        const fetchOrderDetails = async () => {
            if (id === undefined) {
                return;
            }
            try {
                setUpdating(true);
                const response = await axios.get(`${APP_BASE}${QA_ORDER.getSingleOrder(id)}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc } = response?.data;
                setdetails(doc);
                setUpdating(false);
            } catch (err) {
                setUpdating(true);
                console.log('error', err);
                notification.error({
                    message: 'Orders Error',
                    description: err.response?.data.message,
                    duration: 0,
                });
            }
        };
        fetchOrderDetails();
    }, [id, token]);

    const UpdateOrderStatus = async () => {
        if (val === '' || val === undefined) {
            notification.error({
                message: 'Error',
                description: 'Please, select an action',
                duration: 10,
            });
            setUpdating(false);
            return;
        }
        try {
            setUpdating(true);
            const response = await axios.patch(`${APP_BASE}${QA_ORDER.updateStatus(id, val)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('action res', response);
            notification.success({
                message: 'Success',
                description: 'Order Status Updated Successfully',
                duration: 10,
            });
            setUpdating(false);
        } catch (err) {
            notification.error({
                message: 'Error',
                description: err.response?.data.message,
                duration: 0,
            });
            setUpdating(false);
        }
    };

    const handleChange = (value: string) => {
        setVal(value);
    };

    return (
        <QAMainLayout pageTitle={title}>
            <QAOrderDetailsContainer>
                <div className="title">
                    <Link href="/qualityassurance/orders">
                        <a>
                            <ArrowLeftOutlined /> <span>View Orders</span>
                        </a>
                    </Link>
                </div>
                {details === null ? (
                    <div className="loading">
                        <Spin />
                    </div>
                ) : (
                    <>
                        <div className="header">
                            <div className="header__order">
                                <h3>#{id}</h3>
                            </div>
                        </div>
                        <div>
                            <Row gutter={24}>
                                <Col xs={24} xl={16} lg={16} style={{ marginBottom: '15px' }}>
                                    <Row gutter={24}>
                                        <Col xs={24} xl={24} lg={24} style={{ marginBottom: '15px' }}>
                                            <Card bordered={false}>
                                                <Row gutter={48}>
                                                    <Col xs={24} xl={8} lg={8}>
                                                        <div className="general">
                                                            <h3>General Information</h3>
                                                            <div className="detailsform">
                                                                <Row gutter={10}>
                                                                    <Col xs={24} xl={24} lg={24}>
                                                                        <div className="form-group">
                                                                            <label htmlFor="date">Date</label>
                                                                            <Input value={'31/12/2021'} disabled />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={24} xl={24} lg={24}>
                                                                        <div className="form-group">
                                                                            <label htmlFor="time">Time</label>
                                                                            <Input value={'10 : 53 AM'} disabled />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={24} xl={24} lg={24}>
                                                                        <div className="form-group">
                                                                            <label htmlFor="status">Status</label>
                                                                            <Input value={details.status} disabled />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={24} xl={24} lg={24}>
                                                                        <div className="form-group">
                                                                            <label htmlFor="customer">Customer</label>
                                                                            <Input value={details.name} disabled />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} xl={8} lg={8}>
                                                        <div className="general">
                                                            <h3>Billing Address</h3>
                                                            <div className="address">
                                                                <p>
                                                                    Anastesia Steel, <br /> No 18, Wolfstreet crescent,{' '}
                                                                    <br />
                                                                    Central Area,
                                                                </p>
                                                                <p>Abuja</p>
                                                                <p>Nigeria</p>
                                                                <div className="address__user">
                                                                    <p>{details.name}</p>
                                                                    <p>
                                                                        <a href="tel:09032160942">090-321-609-42</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} xl={8} lg={8}>
                                                        <div className="general">
                                                            <h3>Shipping</h3>
                                                            <div className="address">
                                                                <p>
                                                                    Anastesia Steel, <br /> No 18, Wolfstreet crescent,{' '}
                                                                    <br />
                                                                    Central Area,
                                                                </p>
                                                                <p>Abuja</p>
                                                                <p>Nigeria</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                        <Col xs={24} xl={24} lg={24}>
                                            <Card bordered={false}>
                                                <Row gutter={24}>
                                                    <Col xs={24} xl={16} lg={16}>
                                                        <div className="general">
                                                            <h3>Order Summary</h3>
                                                        </div>
                                                        <Row gutter={36}>
                                                            <Col xs={24} xl={10} lg={12}>
                                                                <ProductImageCard details={details} />
                                                            </Col>
                                                            <Col xs={24} xl={14} lg={12}>
                                                                <div className="orderdetails__summary">
                                                                    <div>
                                                                        <span>Qty</span>
                                                                        <span>{details.quantity}</span>
                                                                    </div>
                                                                    <div>
                                                                        <span>Subtotal Charges</span>
                                                                        <span>
                                                                            &#x20A6;{formatAmount(details.totalCost)}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span>Shipping</span>
                                                                        <span>&#x20A6;{formatAmount(4)}</span>
                                                                    </div>
                                                                    <div>
                                                                        <span>Tax</span>
                                                                        <span
                                                                            style={{ textDecoration: 'line-through' }}
                                                                        >
                                                                            &#x20A6;{formatAmount(0.59)}
                                                                        </span>
                                                                    </div>
                                                                    <div className="total">
                                                                        <span>Total</span>
                                                                        <span>
                                                                            &#x20A6;
                                                                            {formatAmount(
                                                                                findAllTotal([
                                                                                    details.totalCost,
                                                                                    4,
                                                                                    0.59,
                                                                                ]),
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={24} xl={8} lg={16}>
                                                        <div className="general delivery">
                                                            <h3>Delivery Method</h3>
                                                            <div className="delivery__details">
                                                                <p>Door Delivery</p>
                                                                <p>January 4, 2021</p>
                                                                <p>12:00 PM - 1:00 PM</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={24} xl={24} lg={24}>
                                                        <OrderProducts productOrder={details?.products} />
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={24} xl={8} lg={8}>
                                    <Row>
                                        <Col xs={24} xl={24} lg={24} style={{ marginBottom: '15px' }}>
                                            <Card bordered={false}>
                                                <div className="actiondetails">
                                                    <h4>Order Action</h4>
                                                    <Row gutter={6}>
                                                        <Col xs={24} xl={17} lg={8}>
                                                            <form>
                                                                <Select
                                                                    style={{ width: '100%' }}
                                                                    onChange={handleChange}
                                                                    allowClear
                                                                >
                                                                    {ActionList
                                                                        ? ActionList.map((list) => {
                                                                              return (
                                                                                  <Option
                                                                                      key={list.id}
                                                                                      value={list.name}
                                                                                  >
                                                                                      {list.name}
                                                                                  </Option>
                                                                              );
                                                                          })
                                                                        : null}
                                                                </Select>
                                                            </form>
                                                        </Col>
                                                        <Col xs={24} xl={7} lg={8}>
                                                            <Button
                                                                loading={updating}
                                                                onClick={UpdateOrderStatus}
                                                                type="primary"
                                                            >
                                                                Update
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col xs={24} xl={24} lg={24}>
                                            <Card bordered={false}>
                                                <div className="actiondetails">
                                                    <h4>Notification</h4>
                                                </div>
                                                <NotificationCard
                                                    status="Order status has been changed from pending payment to completed"
                                                    style=""
                                                />
                                                <NotificationCard
                                                    status="Order status has been changed from pending payment to completed"
                                                    style={{ background: '#ccc' }}
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </>
                )}
            </QAOrderDetailsContainer>
        </QAMainLayout>
    );
};

export default SingleQAOrderDetails;

export async function getInitialProps({ params }) {
    console.log(params);
    const token = getFromLocalStorage('token');
    const APP_BASE = process.env.APP_BASE_URL;
    const res = await axios.get(`${APP_BASE}${QA_ORDER.getSingleOrder(params.id)}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('order res', res);
    return {
        props: { details: res },
    };
}

export async function getStaticPaths() {
    const APP_BASE = process.env.APP_BASE_URL;
    const res = await fetch(`${APP_BASE}${QA_ORDER.getAllOrders}`);
    console.log('order res', res);
    const response = await res.json();
    console.log('order res', response);
    const path = response.map((order: any) => {
        return { params: { id: order.refId } };
    });

    return {
        path,
        fallback: false,
    };
}
