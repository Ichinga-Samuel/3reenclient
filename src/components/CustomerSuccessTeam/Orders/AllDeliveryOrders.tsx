import React, { useState, useEffect } from 'react';
import CSTMainLayout from '@/components/CustomerSuccessTeam/CSTLayout/CSTMainLayout';
import { Table, notification, Pagination } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { OrderTableContainer } from '@/components/CustomerSuccessTeam/CSTLayout/CSTGeneral.styled';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, CST_API } from '@/utils/ApiList';
import axios from 'axios';

const AllDeliveryOrders = () => {
    const token = getFromLocalStorage('csttoken');
    const [deliveryList, setdeliveryList] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [total, setTotal] = useState(0);
    interface deliveryList {
        id: string;
        date: string;
        product: string;
        qty: string | number;
        name: string;
        address: string;
        phoneNumber: string;
        lga: string;
        state: string;
    }

    const deliveryColumn: ColumnsType<deliveryList> = [
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            // render: (_text, record) => <>{record.products?[0].product?.name}</>
        },
        {
            title: 'Qty',
            dataIndex: 'quantity',
        },
        {
            title: 'Customer Name',
            dataIndex: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'State',
            dataIndex: 'state',
        },
        {
            title: 'LGA',
            dataIndex: 'LGA',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
        },
    ];

    useEffect(() => {
        const fetchAllOrders = async () => {
            setFetching(true);
            try {
                const response = await axios.get(`${APP_BASE}${CST_API.getAllOrders}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc, result } = response.data;
                setdeliveryList(doc);
                setTotal(result);
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
    }, [token]);

    return (
        <>
            <CSTMainLayout pageTitle="All Delivery Details" layoutTitle="Order Notification">
                <OrderTableContainer>
                    <Table
                        loading={fetching}
                        rowKey="_id"
                        columns={deliveryColumn}
                        dataSource={deliveryList}
                        pagination={false}
                    />
                    <div className="pagination">
                        <Pagination defaultCurrent={1} total={total} />
                    </div>
                </OrderTableContainer>
            </CSTMainLayout>
        </>
    );
};

export default AllDeliveryOrders;
