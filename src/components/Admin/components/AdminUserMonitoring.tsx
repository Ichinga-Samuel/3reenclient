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
    const [length, setLength] = useState(0)
    const [useractivities, setUserActivities] = useState([]);
    const [fetching, setfetching] = useState(false);
    interface useractivities {
        id: number | string;
        key: number | string;
        username: string;
        lastLoginTime: any;
        timeOfLogout: string;
        actionTaken: string;
    }

    const columns: ColumnsType<useractivities> = [
        {
            title: 'Username',
            dataIndex: 'fullName',
            key: 'fullName',
        },

        {
            title: 'Time Of Login',
            dataIndex: 'lastLoginTime',
            render: (_text, record) => <>{record.lastLoginTime ? <>{record.lastLoginTime.split('T')[1].slice(0, 5)}</>: ''}</>,
            
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


    useEffect(() => {
        const fetchUserActions = async () => {
            setfetching(true);
            try {
                const response = await axios.get(`${APP_BASE}/users/allUsers`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { All_Users, length } = response?.data;
                All_Users.map(user => {
                    while(user.email == 'user'){
                        console.log('Hello')
                    }
                })
                // setPages(pages);
                setLength(length)
                setUserActivities(All_Users);
                console.log('res',);
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
                        <UserCountCard title="Number of Users" count={length} />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <UserCountCard title="Number of Users Online" count={'0'} />
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
