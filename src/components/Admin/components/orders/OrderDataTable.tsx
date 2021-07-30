import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { EyeOutlined, MoreOutlined } from '@ant-design/icons';
import { Table, Pagination } from 'antd';
import { useRouter } from 'next/router';
import { formatAmount } from '@/utils/helpers'

const OrderDataTable = (props: any) => {
    const { total, onShowSizeChange, pagination, fetching, orders } = props;
    console.log('order tab', pagination);
    const router = useRouter();

    interface orders {
        _id: number | string;
        key: number | string;
        placedOn: string;
        quantity: number | string;
        status: string;
        trackingID: string;
        paymentType: string;
        totalCost: any;
        product: string;
    }

    const getOneOrderRecord = (record: any) => {
        console.log('record', record);
        router.push({
            pathname: '/qualityassurance/orders/[id]',
            query: { id: record._id },
        });
    };

    const orderColumns: ColumnsType<orders> = [
        {
            title: 'Date',
            dataIndex: 'placedOn',
        },
        {
            title: 'Product',
            dataIndex: 'product',
        },
        {
            title: 'Qty',
            dataIndex: 'quantity',
            align: 'center',
        },
        {
            title: 'Item ID',
            dataIndex: '_id',
        },
        {
            title: 'Tracking',
            dataIndex: 'trackingID',
        },
        {
            title: 'Amount',
            dataIndex: 'totalCost',
            render: (_text, record) => <>{formatAmount(record.totalCost)}</>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            align: 'center',
            render: (status) => (
                <>
                    {status === 'completed' || status === 'Completed' ? (
                        <span style={{ color: '#219653' }}>Completed</span>
                    ) : status === 'refunded' || status === 'Refunded' ? (
                        <span style={{ color: '#7F7806' }}>Refunded</span>
                    ) : status === 'onhold' || status === 'Onhold' ? (
                        <span style={{ color: '#C5BC09' }}>On Hold</span>
                    ) : status === 'cancelled' || status === 'Cancelled' ? (
                        <span style={{ color: '#BE1E2D' }}>Cancelled</span>
                    ) : status === 'pending' || status === 'Pending' ? (
                        <span style={{ color: '#FFAF38' }}>Pending</span>
                    ) : status === 'failed' || status === 'Failed' ? (
                        <span style={{ color: '#BE1E2D' }}>Failed</span>
                    ) : (
                        ''
                    )}
                </>
            ),
        },
        {
            title: 'Payment Type',
            dataIndex: 'paymentType',
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
                        onClick={() => getOneOrderRecord(record)}
                        onKeyPress={() => getOneOrderRecord(record)}
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

    return (
        <div>
            <Table<orders>
                rowKey="_id"
                loading={fetching}
                columns={orderColumns}
                dataSource={orders}
                pagination={false}
            />
            <div className="pagination">
                <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={total} />
            </div>
        </div>
    );
};

export default OrderDataTable;
