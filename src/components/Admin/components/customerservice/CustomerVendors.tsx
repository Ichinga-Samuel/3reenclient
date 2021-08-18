import { APP_BASE } from '@/utils/ApiList';
import { Col, Row, Spin, notification } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CustomerVendors = () => {
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
                const { All_Users} = response?.data;
                // setPages(pages);
                All_Users.forEach(user => {
                    if(user.role === 'user'){
                        console.log(user)
                    }
                })
                setUserActivities(All_Users);
                console.log('res');
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
        <>
            {fetching ? (
                <div className="fetchingloading">
                    <Spin />
                    <small>Fetching Logistic Companies...</small>
                </div>
            ) : (
                <div>
                    <Row gutter={28} justify="space-between">
                        <Col xs={24} xl={12} lg={12}>
                            <Row gutter={28}>
                                <Col xs={10} xl={8} lg={10}></Col>
                            </Row>
                        </Col>
                    </Row>
                    <br></br>
                    <Table rowKey="key" loading={fetching} dataSource={useractivities} columns={columns} />
                </div>
            )}
        </>
    );
};

export default CustomerVendors;
