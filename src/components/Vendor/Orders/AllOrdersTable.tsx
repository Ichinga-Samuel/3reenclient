import React, { useState, useEffect } from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { OrderTableContainer } from '@/components/Vendor/Orders/Orders.styled';
import { Button, Select, Pagination, notification, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { EyeOutlined, SearchOutlined, MoreOutlined } from '@ant-design/icons';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE, VENDOR_ORDER } from '@/utils/ApiList';
import axios from 'axios';
import { useRouter } from 'next/router';
import { formatAmount } from '@/utils/helpers';
// import { VendorOrders } from './fakeOrder';

const { Option } = Select;

const AllOrdersTable = () => {
    // const testOrder = VendorOrders || [];
    const router = useRouter();
    const title = 'All Orders';
    const [fetching, setFetching] = useState(false);
    const [orders, setorders] = useState([]);
    const token = getFromLocalStorage('token');
    const [pagination, setPagination] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
            }, 500);
        } catch (err) {
            console.log('error', err);
            notification.error({
                message: 'Orders Error',
                description: err,
                duration: 0,
            });
        }
    };

    const filterOrders = () => {
        setFetching(true);
        fetchAllOrders();
        setTimeout(() => {
            setFetching(false);
        }, 1000);
    };

    const filterByStatus = async (value: string) => {
        console.log('searc', value);
        await axios
            .get(`${APP_BASE}${VENDOR_ORDER.byStatus(value)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response: any) => {
                const { doc, data, pages, results } = response;
                if (data.status === 'success') {
                    console.log('record', orders);
                    setPagination(pages);
                    setorders(doc);
                    setTotal(results);
                    setFetching(false);
                }
            })
            .catch((err) => {
                setFetching(false);
                // setorders([]);
                notification.error({
                    message: 'Error',
                    description: err?.response?.data.message,
                    duration: 0,
                });
            });
    };

    const getOneRecord = (record: any) => {
        console.log('record', record);
        router.push({
            pathname: '/vendor/orders/[id]',
            query: { id: record._id },
        });
    };

    useEffect(() => {
        // return () => {};
        fetchAllOrders();
    }, []);

    const onSelectChange = (selectedRowKeys: any, record: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        console.log('selected record', record);
        setSelectedRowKeys(selectedRowKeys);
    };

    interface orders {
        _id: number | string;
        key: number | string;
        placedOn: string;
        quantity: number | string;
        status: string;
        paymentMode: string;
        totalCost: any;
    }

    const orderColumns: ColumnsType<orders> = [
        {
            title: 'Ref ID',
            dataIndex: '_id',
        },
        {
            title: 'Placed On',
            dataIndex: 'placedOn',
        },
        {
            title: 'No Of Items',
            dataIndex: 'quantity',
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            align: 'center',
            render: (status) => (
                <>
                    {status === 'delivered' || status === 'Delivered' ? (
                        <Tag color="#93f365">
                            <span style={{ color: '#008B1F' }}>Delivered</span>
                        </Tag>
                    ) : status === 'dispatched' || status === 'Dispatched' ? (
                        <Tag color="#f9e9b2">
                            <span style={{ color: '#A57700' }}>Dispatched</span>
                        </Tag>
                    ) : status === 'pickedup' || status === 'Pickedup' ? (
                        <Tag color="#b697f8">
                            <span style={{ color: '#00278B' }}>Picked Up</span>
                        </Tag>
                    ) : status === 'returned' || status === 'Returned' ? (
                        <Tag color="#FFA9A9">
                            <span style={{ color: '#FF0000' }}>Returned</span>
                        </Tag>
                    ) : status === 'pending' || status === 'Pending' ? (
                        <Tag color="#f9e9b2">
                            <span style={{ color: '#A57700' }}>Pending</span>
                        </Tag>
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
            dataIndex: 'totalCost',
            render: (_text, record) => <>{formatAmount(record.totalCost)}</>,
        },
        {
            title: '',
            dataIndex: '',
            key: 'operation1',
            width: 100,
            align: 'center',
            render: (_text, record) => (
                <>
                    <div
                        style={{ cursor: 'pointer', fontSize: '2rem' }}
                        onClick={() => getOneRecord(record)}
                        onKeyPress={() => getOneRecord(record)}
                        role="button"
                        tabIndex={0}
                    >
                        <EyeOutlined />
                    </div>
                </>
            ),
        },
        {
            title: '',
            dataIndex: '',
            key: 'operation1',
            width: 100,
            align: 'center',
            render: (_text) => (
                <>
                    <div style={{ cursor: 'pointer', fontSize: '2rem' }}>
                        <MoreOutlined />
                    </div>
                </>
            ),
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
                        <Select defaultValue="Delivered" style={{ width: 150 }} onChange={filterByStatus}>
                            <Option value="Delivered">Delivered</Option>
                            <Option value="Dispatched">Dispatched</Option>
                            <Option value="Pickedup">Picked up</Option>
                            <Option value="Returned">Returned</Option>
                            <Option value="Pending">Pending</Option>
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
                        rowKey="refId"
                        loading={fetching}
                        columns={orderColumns}
                        dataSource={orders}
                        pagination={false}
                    />
                </div>
            </OrderTableContainer>
        </VendorLayout>
    );
};

export default AllOrdersTable;
