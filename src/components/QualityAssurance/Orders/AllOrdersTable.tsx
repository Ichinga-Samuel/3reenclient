import React, { useState, useEffect } from 'react';
import { Button, Input, Row, Col, DatePicker, Select } from 'antd';
import QAMainLayout from '@/components/QualityAssurance/QALayout/QAMainLayout';
import { Tabs, notification } from 'antd';
import { OrderTableContainer } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, QA_ORDER } from '@/utils/ApiList';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import OrderDataTable from './OrderDataTable';

const { TabPane } = Tabs;
const { Option } = Select;

const AllOrdersTable = () => {
    const { register, handleSubmit } = useForm();
    const token = getFromLocalStorage('qatoken');
    const [fetchorders, setfetchorders] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [orders, setorders] = useState([]);
    const [allorders, setAllOrders] = useState([]);
    const [tabcount, setTabCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [holdCount, setHoldCount] = useState(0);
    const [refundCount, setRefundCount] = useState(0);
    const [failedCount, setFailedCount] = useState(0);
    const [cancelCount, setCancelCount] = useState(0);
    const [pagination, setPagination] = useState(0);
    const [total, setTotal] = useState(0);

    const searchOrders = async (data: any) => {
        setfetchorders(true);
        await axios
            .get(`${APP_BASE}${QA_ORDER.byStatus(data.id)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response: any) => {
                const { doc, data, pages, results } = response;
                if (data.status === 'success') {
                    setPagination(pages);
                    setorders(doc);
                    setTotal(results);
                    setfetchorders(false);
                }
            })
            .catch((err) => {
                setfetchorders(false);
                // setorders([]);
                notification.error({
                    message: 'Error',
                    description: err?.response?.data.message,
                    duration: 0,
                });
            });
    };

    useEffect(() => {
        const fetchAllOrders = async () => {
            setFetching(true);
            try {
                const response = await axios.get(`${APP_BASE}${QA_ORDER.getAllOrders}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc, result } = response.data;
                setorders(doc);
                setAllOrders(doc);
                setTabCount(doc.length);
                setTotal(result);
                setPagination(result);
                setTimeout(() => {
                    // setAllOrders(doc);
                    setTabCount(orders.length);
                }, 1000);
                setTimeout(() => {
                    setFetching(false);
                }, 500);
            } catch (err) {
                notification.error({
                    message: 'Orders Error',
                    description: err.response?.data.message,
                    duration: 0,
                });
            }
        };
        fetchAllOrders();
    }, []);

    const onShowSizeChange = (current: BigInteger, pageSize: BigInteger) => {
        console.log(current, pageSize);
    };

    const filterTabOnStatus = (key: string) => {
        setTotal(allorders.length);
        if (key === '1') {
            setorders(orders);
            setTabCount(allorders.length);
        }
        if (key === '2') {
            const tableStatus = 'Completed';
            const completed = orders.filter((tb) => tb.status === tableStatus);
            setorders(completed);
            setCompletedCount(completed.length);
        }
        if (key === '3') {
            const tableStatus = 'Pending';
            const pending = orders.filter((tb) => tb.status === tableStatus);
            setorders(pending);
            setPendingCount(pending.length);
        }
        if (key === '4') {
            const tableStatus = 'Onhold';
            const ohHold = orders.filter((tb) => tb.status === tableStatus);
            setorders(ohHold);
            setHoldCount(ohHold.length);
        }
        if (key === '5') {
            const tableStatus = 'Cancelled';
            const cancel = orders.filter((tb) => tb.status === tableStatus);
            setorders(cancel);
            setCancelCount(cancel.length);
        }
        if (key === '6') {
            const tableStatus = 'Refunded';
            const refunded = orders.filter((tb) => tb.status === tableStatus);
            setorders(refunded);
            setRefundCount(refunded.length);
        }
        if (key === '7') {
            const tableStatus = 'Failed';
            const failed = orders.filter((tb) => tb.status === tableStatus);
            setorders(failed);
            setFailedCount(failed.length);
        }
    };

    return (
        <>
            <QAMainLayout pageTitle="Orders" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                <Row gutter={12} justify="end">
                    <Col xs={24} xl={9}>
                        <Input placeholder="Search By Order ID" {...register('id')} />
                    </Col>
                    <Col xs={24} xl={3}>
                        <Button loading={fetchorders} onClick={handleSubmit(searchOrders)} type="primary">
                            Search Orders
                        </Button>
                    </Col>
                </Row>
                <Row gutter={12} justify="end" className="pt-3">
                    <Col xs={24} xl={3}>
                        <DatePicker placeholder="Date" {...register('orderdate')} />
                    </Col>
                    <Col xs={24} xl={3}>
                        <Select style={{ width: '115px' }} placeholder="Currency" {...register('currency')}>
                            <Option value="NGN">NGN</Option>
                            <Option value="USD">USD</Option>
                            <Option value="EUR">EUR</Option>
                        </Select>
                    </Col>
                    <Col xs={24} xl={3}>
                        <Select style={{ width: '115px' }} placeholder="Registered User" {...register('users')}>
                            <Option value="User 1">User 1</Option>
                        </Select>
                    </Col>
                    <Col xs={24} xl={3}>
                        <Button loading={fetchorders} type="default">
                            Apply Orders
                        </Button>
                    </Col>
                </Row>
                <OrderTableContainer>
                    <Tabs defaultActiveKey="1" onChange={filterTabOnStatus}>
                        <TabPane tab={`All Orders (${tabcount})`} key="1">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={allorders}
                                fetching={fetching}
                            />
                        </TabPane>
                        <TabPane tab={`Completed (${completedCount})`} key="2">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={orders}
                            />
                        </TabPane>
                        <TabPane tab={`Pending Payment (${pendingCount})`} key="3">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={orders}
                            />
                        </TabPane>
                        <TabPane tab={`Onhold (${holdCount})`} key="4">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={orders}
                            />
                        </TabPane>
                        <TabPane tab={`Cancelled (${cancelCount})`} key="5">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={orders}
                            />
                        </TabPane>
                        <TabPane tab={`Refunded ${refundCount}`} key="6">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={orders}
                            />
                        </TabPane>
                        <TabPane tab={`Failed (${failedCount})`} key="7">
                            <OrderDataTable
                                total={total}
                                pagination={pagination}
                                onShowSizeChange={onShowSizeChange}
                                token={token}
                                orders={orders}
                            />
                        </TabPane>
                    </Tabs>
                </OrderTableContainer>
            </QAMainLayout>
        </>
    );
};

export default AllOrdersTable;
