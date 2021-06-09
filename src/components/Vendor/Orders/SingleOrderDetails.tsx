import React from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { OrderDetailsContainer } from '@/components/Vendor/Orders/Orders.styled';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { VENDOR_ORDER } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { Button, Steps, Row, Col } from 'antd';
import { MoreOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { formatAmount } from '@/utils/helpers';

const { Step } = Steps;

const SingleOrderDetails = () => {
    const title = 'Order Details';
    const router = useRouter();
    const { id } = router.query;

    return (
        <VendorLayout pageTitle={title} crumbName="All Orders" dashboardTitle="">
            <OrderDetailsContainer data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <div className="title">
                    <Link href="/vendor/orders">
                        <a>
                            <ArrowLeftOutlined /> <span>View Orders</span>
                        </a>
                    </Link>
                </div>
                <div className="header">
                    <div className="header__order">
                        <h3>Order {id}</h3>
                        <p>Place on 31st/12/2020</p>
                    </div>
                    <div className="header__actions">
                        <Button type="primary">View Invoice</Button>
                        <Button type="primary">
                            <MoreOutlined />
                        </Button>
                    </div>
                </div>
                <div className="orderdetails">
                    <div className="orderdetails__invoice">
                        <Row gutter={24}>
                            <Col xs={24} xl={10} lg={8}>
                                <h4>Order Info</h4>
                                <div className="orderdetails__summary">
                                    <div>
                                        <span>RefID</span>
                                        <span>{id}</span>
                                    </div>
                                    <div>
                                        <span>Placed on</span>
                                        <span>1/1/2021</span>
                                    </div>
                                    <div>
                                        <span>Number Of Items</span>
                                        <span>3</span>
                                    </div>
                                    <div>
                                        <span>Mode of Payment</span>
                                        <span>Credit Card</span>
                                    </div>
                                    <div>
                                        <span>Order Amount</span>
                                        <span>{formatAmount(1250)}</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} xl={10} lg={8}>
                                <h4>Billing Summary</h4>
                                <div className="orderdetails__summary">
                                    <div>
                                        <span>Order Total</span>
                                        <span>{formatAmount(3450)}</span>
                                    </div>
                                    <div>
                                        <span>Delivery Charges</span>
                                        <span>{formatAmount(500)}</span>
                                    </div>
                                    <div>
                                        <span>Commission</span>
                                        <span>{formatAmount(1200)}</span>
                                    </div>
                                    <div>
                                        <span>Your Earning</span>
                                        <span>{formatAmount(2300)}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="orderdetails__items">
                        <h3>Items in Order: 3</h3>
                        <div className="orderdetails__items__main">
                            <Row>
                                <Col xs={12} xl={3} lg={4}>
                                    <div className="image">image</div>
                                </Col>
                                <Col xs={12} xl={6} lg={4}>
                                    <div className="item_details">
                                        <h4>Nike summer Combo Sports</h4>
                                        <div className="qty">
                                            <span>Size: 41</span>
                                            <span>Quantity: 4</span>
                                        </div>
                                        <div className="price">Price: {formatAmount(1350)}</div>
                                    </div>
                                </Col>
                                <Col xs={24} xl={15} lg={4}>
                                    <div className="item_steps">
                                        <Steps current={1} progressDot>
                                            <Step title="Picked Up" description="31 Dec" />
                                            <Step title="Processed" description="2 Jan" />
                                            <Step title="Dispatched" description="2 Jan" />
                                            <Step title="Delivered" description="2 Jan" />
                                        </Steps>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </OrderDetailsContainer>
        </VendorLayout>
    );
};

export default SingleOrderDetails;

export async function getInitialProps({ params }) {
    const token = getFromLocalStorage('token');
    const APP_BASE = process.env.APP_BASE_URL;
    const res = await axios.get(`${APP_BASE}${VENDOR_ORDER.getSingleOrder(params.id)}`, {
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
    const res = await fetch(`${APP_BASE}${VENDOR_ORDER.getAllOrders}`);
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
