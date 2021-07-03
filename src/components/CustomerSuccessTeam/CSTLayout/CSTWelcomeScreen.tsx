import React from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { Row, Col } from 'antd';
import Link from 'next/link';
import { WelcomeCard } from './CSTGeneral.styled';
import { Dashboard, Order, Inventory, Ratings } from '@/utils/Icons';

const CSTWelcomeScreen = () => {
    return (
        <>
            <CSTMainLayout pageTitle="Welcome" layoutTitle="">
                {/* <h4>Welcome, </h4> */}
                <div className="welcometext">Welcome to CST Portal</div>
                <Row gutter={30} justify="space-between">
                    <Col xs={24} xl={6} lg={6} data-aos="fade-right" data-aos-delay="2s" data-aos-duration="1s">
                        <Link href="/cst/products">
                            <a>
                                <WelcomeCard>
                                    <Inventory />
                                    Products
                                </WelcomeCard>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={24} xl={6} lg={6} data-aos="fade-right" data-aos-delay="2s" data-aos-duration="1s">
                        <Link href="/cst/orders">
                            <a>
                                <WelcomeCard>
                                    <Order />
                                    Orders
                                </WelcomeCard>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={24} xl={6} lg={6} data-aos="fade-right" data-aos-delay="2s" data-aos-duration="1s">
                        <Link href="/cst/product-reviews">
                            <a>
                                <WelcomeCard>
                                    <Ratings />
                                    Reviews
                                </WelcomeCard>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={24} xl={6} lg={6} data-aos="fade-right" data-aos-delay="2s" data-aos-duration="1s">
                        <Link href="/cst/messages">
                            <a>
                                <WelcomeCard>
                                    <Dashboard />
                                    Messages
                                </WelcomeCard>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={24} xl={6} lg={6} data-aos="fade-right" data-aos-delay="2s" data-aos-duration="1s">
                        <Link href="/cst/registered-user">
                            <a>
                                <WelcomeCard>
                                    <Dashboard />
                                    Registered Users
                                </WelcomeCard>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </CSTMainLayout>
        </>
    );
};

export default CSTWelcomeScreen;
