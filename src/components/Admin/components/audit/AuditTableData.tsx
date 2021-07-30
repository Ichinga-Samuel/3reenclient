import React from 'react';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { formatAmount } from '@/utils/helpers';
import { AuditMenu } from '@/components/Admin/components/audit/AuditMenu';

export const AuditTable = (props) => {
    console.log(props);

    interface auditData {
        _id: any;
        datePurchased: string;
        quantity: string;
        itemId: any;
        product: {
            name: string;
        };
        tracking: string;
        totalPrice: any;
        ordered: boolean;
        paymentType: string;
    }

    const columns: ColumnsType<auditData> = [
        {
            title: 'Date',
            dataIndex: 'datePurchased',
            key: 'datePurchased',
            render: (_text, record) => <>{record.datePurchased.split('T')[0]}</>,
        },
        {
            title: 'Product',
            dataIndex: 'product',
            render: (_text, record) => <>{record.product.name}</>,
        },
        {
            title: 'Qty',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Item ID',
            dataIndex: 'itemId',
            key: 'itemId',
        },
        {
            title: 'Tracking',
            dataIndex: 'tracking',
            key: 'tracking',
        },
        {
            title: 'Amount',
            dataIndex: 'totalPrice',
            render: (_text, record) => <>{formatAmount(record.totalPrice)}</>,
        },
        {
            title: 'Ordered?',
            dataIndex: 'ordered',
            key: 'status',
            render: (_text, record) => (
                <>{record.ordered ? <Tag color="green">YES</Tag> : <Tag color="cyan">NO</Tag>}</>
            ),
        },
        {
            title: 'Payment Type',
            dataIndex: 'paymentType',
            key: 'paymentType',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            render: (_text, record) => (
                <>
                    <AuditMenu record={record} />
                </>
            ),
        },
    ];

    return (
        <>
            <Table<auditData> rowKey="_id" loading={props.fetching} dataSource={props.auditData} columns={columns} />
        </>
    );
};

export default AuditTable;
