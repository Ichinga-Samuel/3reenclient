import React, { useState } from 'react';
import { Button, Input, Row, Col } from 'antd';
import QAMainLayout from '@/components/QualityAssurance/QALayout/QAMainLayout';
import { Tabs } from 'antd';
import { OrderTableContainer } from '../QALayout/QAGeneral.styled';

const { TabPane } = Tabs;

const AllOrdersTable = () => {
    const [fetchorders, setfetchorders] = useState(false);

    const searchOrders = () => {
        setfetchorders(true);
        setTimeout(() => {
            setfetchorders(false);
        }, 2000);
    };

    const callback = (key: string) => {
        console.log(key);
    };
    return (
        <>
            <QAMainLayout pageTitle="Orders">
                <Row gutter={12} justify="end">
                    <Col xs={24} xl={6}>
                        <Input />
                    </Col>
                    <Col xs={24} xl={4}>
                        <Button loading={fetchorders} onClick={searchOrders} type="primary">
                            Search Orders
                        </Button>
                    </Col>
                </Row>
                <OrderTableContainer>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="All Orders (20,300)" key="1">
                            All Orders
                        </TabPane>
                        <TabPane tab="Completed" key="2">
                            Completed Orders
                        </TabPane>
                        <TabPane tab="Pending Payment (10,210)" key="3">
                            Pending Payment
                        </TabPane>
                        <TabPane tab="Onhold (2,300)" key="4">
                            On Hold
                        </TabPane>
                        <TabPane tab="Cancelled (100)" key="5">
                            Cancelled Orders
                        </TabPane>
                        <TabPane tab="Refunded (179)" key="6">
                            Refunded
                        </TabPane>
                        <TabPane tab="Failed (179)" key="7">
                            Failed
                        </TabPane>
                    </Tabs>
                </OrderTableContainer>
            </QAMainLayout>
        </>
    );
};

export default AllOrdersTable;
