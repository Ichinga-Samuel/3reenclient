import React, { useState, useEffect } from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { OrderTableContainer } from '@/components/Vendor/Orders/Orders.styled';
import { Button, Select, Pagination, notification, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, VENDOR_ORDER } from '@/utils/ApiList';
import axios from 'axios';
import { formatAmount } from '@/utils/helpers';

const { Option } = Select;

const AllOrdersTable = () => {
    const title = 'All Orders';
    const [fetching, setFetching] = useState(false);
    const [orders, setorders] = useState([]);
    const token = getFromLocalStorage('token');
    const [pagination, setPagination] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const filterOrders = () => {
        setFetching(true);
    };

    const handleChange = (value: string) => {
        console.log('searc', value);
    };

    useEffect(() => {
        const fetchAllOrders = async () => {
            setFetching(true);
            try {
                const response = await axios.get(`${APP_BASE}${VENDOR_ORDER.getAllOrders}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc, result } = response.data;
                setorders(doc);
                setTotal(result);
                setPagination(result);
                // setTotal(results);
                console.log('orders', orders);
                console.log('res', response);
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            } catch (err) {
                console.log('error', err);
                notification.error({
                    message: 'Orders Error',
                    description: err,
                    duration: 15,
                });
                setTimeout(() => {
                    setFetching(false);
                }, 1000);
            }
        };
        // return () => {};
        fetchAllOrders();
    }, []);

    const onSelectChange = (selectedRowKeys: any, record: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        console.log('selected record', record);
        setSelectedRowKeys(selectedRowKeys);
    };

    interface orders {
        refId: number;
        key: number;
        placedOn: string;
        noOfItems: number | string;
        status: string;
        paymentMode: string;
        amount: any;
    }

    const orderColumns: ColumnsType<orders> = [
        {
            title: 'Ref ID',
            dataIndex: 'refId',
        },
        {
            title: 'Placed On',
            dataIndex: 'placedOn',
        },
        {
            title: 'No Of Items',
            dataIndex: 'noOfItems',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status) => (
                <>
                    {status === 'Delivered' ? (
                        <Tag color="#CEFFB7">Delivered</Tag>
                    ) : status === 'dispatched' ? (
                        <Tag color="#FFF0BB">Dispatched</Tag>
                    ) : status === 'pickup' ? (
                        <Tag color="#C4A8FF">Pick Up</Tag>
                    ) : status === 'returned' ? (
                        <Tag color="#FFA9A9">Returned Up</Tag>
                    ) : (
                        ''
                    )}
                </>
            ),
        },
        {
            title: 'Payment Mode',
            dataIndex: 'paymentMode',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            render: (_text, record) => <>{formatAmount(record.amount)}</>,
        },
        {
            title: 'View',
            dataIndex: '',
            key: 'operation1',
            width: 100,
            align: 'center',
        },
        {
            title: 'Ac',
            dataIndex: '',
            key: 'operation1',
            width: 100,
            align: 'center',
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <OrderTableContainer data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <div className="filter">
                    <div className="product__view-filters">
                        <Button loading={fetching} type="primary" onClick={filterOrders}>
                            View Filters
                        </Button>
                    </div>
                    <div className="product__search">
                        <SearchOutlined />
                        <input className="search-product" type="text" name="" id="" placeholder="Search By Order ID" />
                    </div>
                    <div className="product__status">
                        <span>Status</span>
                        <Select defaultValue="Delivered" style={{ width: 150 }} onChange={handleChange}>
                            <Option value="Delivered">Delivered</Option>
                        </Select>
                    </div>
                </div>
                <div className="export">
                    <div>
                        {!hasSelected ? (
                            <Button type="primary">Export all</Button>
                        ) : (
                            <Button type="primary">Export {hasSelected ? `${selectedRowKeys.length}` : ''}</Button>
                        )}
                    </div>
                    <div className="pagination">
                        <Pagination
                            size="small"
                            total={pagination}
                            defaultPageSize={10}
                            defaultCurrent={1}
                            showTotal={(_total, range) =>
                                `Showing ${range[0]}-${range[1]} of ${total !== undefined ? total : 0} items`
                            }
                        />
                    </div>
                </div>
                <div className="productdata">
                    <Table<orders>
                        rowSelection={rowSelection}
                        rowKey="id"
                        loading={fetching}
                        columns={orderColumns}
                        dataSource={orders}
                    />
                </div>
            </OrderTableContainer>
        </VendorLayout>
    );
};

export default AllOrdersTable;
