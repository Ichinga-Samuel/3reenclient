import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { GeneralContainer } from '@/components/Admin/styles/AdminStyle.styled';
import { Col, notification, Row, Table } from 'antd';
import axios from 'axios';
import { APP_BASE } from '@/utils/ApiList';
import { ColumnsType } from 'antd/es/table';
import UserCountCard from '@/components/Admin/components/cards/UserCountCard';

const AdminUserMonitoring = () => {
    const title = 'User Monitoring';

    const [useractivities, setUserActivities] = useState([]);
    const [fetching, setfetching] = useState(false);

    interface useractivities {
        id: number | string;
        key: number | string;
        username: string;
        timeOfLogin: string;
        timeOfLogout: string;
        actionTaken: string;
    }

    const columns: ColumnsType<useractivities> = [
        {
            title: 'Username',
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
    // const userData = [
    //     {
    //         key: 1,
    //         username: 'user@firstuseroftheyear',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    //     {
    //         key: 2,
    //         username: 'user@firstuseroftheyear1',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    //     {
    //         key: 3,
    //         username: 'user@firstuseroftheyear2',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    //     {
    //         key: 4,
    //         username: 'user@firstuseroftheyear2',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    //     {
    //         key: 5,
    //         username: 'user@firstuseroftheyear2',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    //     {
    //         key: 6,
    //         username: 'user@firstuseroftheyear2',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    //     {
    //         key: 7,
    //         username: 'user@firstuseroftheyear2',
    //         timeOfLogin: '11:59am',
    //         timeOfLogout: '12:30pm',
    //         actionTaken: 'added a new product, made a delivery, applied for a new dispatch, rider',
    //     },
    // ];

    useEffect(() => {
        const fetchUserActions = async () => {
            setfetching(true);
            try {
                const response = await axios.get(`${APP_BASE}/allusers/activities`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc } = response?.data;
                // setPages(pages);
                setUserActivities(doc);
                console.log('res', response.data);
                setTimeout(() => {
                    setfetching(false);
                }, 200);
            } catch (err) {
                console.log('error', err.response);
                notification.error({
                    message: 'Activity Error',
                    description: err?.response?.data?.message,
                    duration: 15,
                });
                setTimeout(() => {
                    setfetching(false);
                }, 200);
            }
        };
        fetchUserActions();
    }, []);

    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <div>
                <Row gutter={40} justify="space-between">
                    <Col xs={24} xl={8} lg={6}>
                        <UserCountCard title="Number of Users" count="3500" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <UserCountCard title="Number of Users Online" count="45" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <UserCountCard title="Total Cancelled" count="40000" />
                    </Col>
                </Row>
            </div>
            <GeneralContainer>
                <Table rowKey="key" loading={fetching} dataSource={useractivities} columns={columns} />
            </GeneralContainer>
        </DefaultLayout>
    );
};

export default AdminUserMonitoring;
