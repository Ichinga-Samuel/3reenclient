import React from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { Row, Col, Card } from 'antd';

const CSTWelcomeScreen = () => {
    return (
        <>
            <CSTMainLayout pageTitle="Welcome" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                {/* <h4>Welcome, </h4> */}
                <Row gutter={12} justify="end">
                    <Col xs={24} xl={6} lg={6}>
                        <Card>Products</Card>
                    </Col>
                    <Col xs={24} xl={6} lg={6}>
                        <Card>Orders</Card>
                    </Col>
                    <Col xs={24} xl={6} lg={6}>
                        <Card>Messages</Card>
                    </Col>
                    <Col xs={24} xl={6} lg={6}>
                        <Card>Registered Users</Card>
                    </Col>
                </Row>
            </CSTMainLayout>
        </>
    );
};

export default CSTWelcomeScreen;
