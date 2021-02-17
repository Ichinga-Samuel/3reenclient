import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'username',
        dataIndex: 'username',
        key: 'username',
    },

    {
        title: 'Time Of Login',
        dataIndex: 'TimeOfLogin',
        key: 'TimeOfLogin',
    },
    {
        title: 'Time Of Logout',
        dataIndex: 'TimeOfLogout',
        key: 'TimeOfLogout',
    },
    {
        title: 'Action Taken',
        dataIndex: 'ActionTaken',
        key: 'ActionTaken',
        width: '40%',
    },
];
const userData = [
    {
        key: 1,
        username: 'user@firstuseroftheyear',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
    {
        key: 2,
        username: 'user@firstuseroftheyear1',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
    {
        key: 3,
        username: 'user@firstuseroftheyear2',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
    {
        key: 4,
        username: 'user@firstuseroftheyear2',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
    {
        key: 5,
        username: 'user@firstuseroftheyear2',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
    {
        key: 6,
        username: 'user@firstuseroftheyear2',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
    {
        key: 7,
        username: 'user@firstuseroftheyear2',
        TimeOfLogin: '11:59am',
        TimeOfLogout: '12:30pm',
        ActionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    },
];

export const UserMonitorTable = () => {
    return (
        <div style={{ margin: '10px', padding: '5px' }}>
            <Table
                dataSource={userData}
                columns={columns}
                width="20"
                pagination={{
                    defaultCurrent: '1',
                    total: '30',
                    position: ['bottomCenter'],
                    size: 'small',
                }}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default UserMonitorTable;
