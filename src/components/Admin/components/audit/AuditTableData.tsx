import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { formatAmount } from '@/utils/helpers';
import { AuditMenu } from '@/components/Admin/components/audit/AuditMenu';

export const AuditTable = (props) => {
    console.log(props);
    const dataSource = [
        {
            key: '1',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '2',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '3',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '4',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '5',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '6',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '7',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '8',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '9',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '10',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '11',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
        {
            key: '12',
            date: '19/08/2020',
            product: 'Mac Book Pro',
            qty: '1',
            itemId: '#20695',
            tracking: '3cw32gvf',
            amount: 4500,
            status: 'Approved',
            paymentType: 'Debit Card',
        },
    ];

    interface auditData {
        key: any;
        date: string;
        qty: string;
        itemId: any;
        tracking: string;
        amount: any;
        status: string;
        paymentType: string;
    }

    const columns: ColumnsType<auditData> = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
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
            dataIndex: 'amount',
            render: (_text, record) => <>{formatAmount(record.amount)}</>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
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
            <Table<auditData> rowKey="key" loading={props.fetching} dataSource={dataSource} columns={columns} />
        </>
    );
};

export default AuditTable;
