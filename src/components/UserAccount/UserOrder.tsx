import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react';
import UserWebLayout from '../UserLayout/UserWebLayout';
import { TableStyled } from './UserCustomerProfile.styled';
import UserSideNav from './UserSideNav';

const UserOrders = () => {
    interface order {
        _id: any;
        name: string;
    }
    const orderCol: ColumnsType<order> = [
        {
            title: 'Image',
            dataIndex: 'image',
        },
        {
            title: 'Name',
            dataIndex: 'productName',
        },
        {
            title: 'Order ID',
            dataIndex: '_id',
        },
        {
            title: 'Date Ordered',
            dataIndex: 'dat',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'View Details',
            dataIndex: 'viewDetails',
        },
    ];
    return (
        <UserWebLayout webtitle="Customer Order">
            <div style={{ display: 'flex' }}>
                <UserSideNav />
                <TableStyled>
                    <h2>All Orders</h2>
                <Table columns={orderCol} style={{width:'100%'}}/>
                </TableStyled>
            </div>
        </UserWebLayout>
    );
};

export default UserOrders;
