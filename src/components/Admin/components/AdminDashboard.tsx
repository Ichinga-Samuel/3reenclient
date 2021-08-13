import React, { useEffect, useState } from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import { Col, notification, Row } from 'antd';
import DashboardCard from './cards/DashboardCard';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import PaidCountCard from '@/components/Admin/components/cards/PaidCountCard';
import LargeMetricCard from '@/components/Admin/components/cards/LargeMetricCard';
import { OrderDisplayIcon, RegIcon, RevenueIcon, TotalIcon, UserCountIcon, VerifiedIcon } from '@/utils/NewIcons2';
import axios from 'axios';
import { APP_BASE, ADMIN } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';

const AdminDashboard = () => {
    const title = 'Admin Dashboard';
    const [metricObject, setmetricObject] = useState({
        registered: {
            total: 0,
        },
        verified: {
            total: 0,
        },
        totalUsers: 0,
        users: [],
        totalRevenue: 0,
        totalOrders: 0,
    });

    const token = getFromLocalStorage('admintoken');

    useEffect(() => {
        const getDashboardMetric = async () => {
            try {
                const res = await axios.get(`${APP_BASE}${ADMIN.dashboard}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Beaer ${token}`,
                    },
                });
                console.log('met', res);
                if (res) {
                    setmetricObject(res?.data);
                }
            } catch (e) {
                notification.error({
                    message: 'Error',
                    description: e?.response?.data?.message,
                });
            }
        };
        getDashboardMetric();
    }, [token]);
    console.log('state', metricObject);

    return (
        <>
            <DefaultLayout browserTitle={title} breadTitle={title}>
                <Row gutter={40} justify="space-between">
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard
                            icon={<RegIcon />}
                            title="Registered Users"
                            count={metricObject?.registered?.total}
                        />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard
                            icon={<VerifiedIcon />}
                            title="Verified Users"
                            count={metricObject?.verified?.total}
                        />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<TotalIcon />} title="Total Users" count={metricObject?.totalUsers} />
                    </Col>
                </Row>
                <Row gutter={40}>
                    <Col xs={24} xl={8} lg={6}>
                        <LargeMetricCard
                            cardIcon={<UserCountIcon />}
                            cardTitle="Number of Users"
                            // count={metricObject?.users?.[0].total + metricObject?.users?.[1]?.total}
                            bTitle="Number of CST"
                            bCount1={`${metricObject?.users?.[0]?.total} CST`}
                            bTitle2="Number of Vendor"
                            bCount2={`${metricObject?.users?.[1]?.total} Vendor`}
                        />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <LargeMetricCard
                            cardIcon={<RevenueIcon />}
                            cardTitle="Revenue"
                            count={metricObject?.totalRevenue || '0'}
                            circleColor={'#000'}
                            bTitle="Amount Sold"
                            bCount1={`${CURRENCY} ${formatAmount('0')}`}
                            bTitle2="Unapproved"
                            bCount2={`${CURRENCY} ${formatAmount('0')}`}
                        />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <LargeMetricCard
                            cardIcon={<OrderDisplayIcon />}
                            cardTitle="Orders"
                            count={metricObject?.totalOrders}
                            circleColor={'#BE1E2D'}
                            bTitle="Amount Sold"
                            bTitle2="Unapproved"
                        />
                    </Col>
                </Row>
                <div style={{ marginTop: '2rem' }} />
                <Row gutter={40}>
                    <Col xs={24} xl={8} lg={6}>
                        <PaidCountCard title="Amount Paid To Logistic Company" amount="0" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <PaidCountCard title="Total Amount Made From Ads" amount="0" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <PaidCountCard title="Total Amount of Product Sold" amount="0" />
                    </Col>
                </Row>
            </DefaultLayout>
        </>
    );
};

export default AdminDashboard;
