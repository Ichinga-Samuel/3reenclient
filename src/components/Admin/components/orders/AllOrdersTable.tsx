import React, { useState, useEffect } from 'react';
import { Button, Input, Row, Col, notification } from 'antd';
import { OrderTableContainer } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, QA_ORDER } from '@/utils/ApiList';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import OrderDataTable from './OrderDataTable';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';

const AllOrdersTable = () => {
    const { register, handleSubmit } = useForm();
    const token = getFromLocalStorage('admintoken');
    const [fetchorders, setfetchorders] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [allorders, setAllOrders] = useState([]);
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
                    setAllOrders(doc);
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
                setAllOrders(doc);
                setTotal(result);
                setPagination(result);
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

    return (
        <>
            <DefaultLayout breadTitle="Orders" browserTitle="Orders">
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
                <OrderTableContainer>
                    <OrderDataTable
                        total={total}
                        pagination={pagination}
                        onShowSizeChange={onShowSizeChange}
                        token={token}
                        orders={allorders}
                        fetching={fetching}
                    />
                </OrderTableContainer>
            </DefaultLayout>
        </>
    );
};

export default AllOrdersTable;
