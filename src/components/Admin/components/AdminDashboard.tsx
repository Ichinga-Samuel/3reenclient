import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
import { Col, Row } from 'antd';
import DashboardCard from './cards/DashboardCard';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import PaidCountCard from '@/components/Admin/components/cards/PaidCountCard';
import LargeMetricCard from '@/components/Admin/components/cards/LargeMetricCard';
import { OrderDisplayIcon, RegIcon, RevenueIcon, TotalIcon, UserCountIcon, VerifiedIcon } from '@/utils/NewIcons2';

const AdminDashboard = () => {
    const title = 'Admin Dashboard';
    // useEffect(() => {
    //     const getDashboardMetrics = async () => {
    //         const res = await GetDashboardData();
    //         if (!res.success) {
    //             toast.error(res.message, {});
    //         }
    //     };
    //     getDashboardMetrics();
    // }, []);

    // useEffect(() => {
    //     const getAgentOrder = async () => {
    //         setloadingdata(true);
    //         const res = await AdminAllOrders();
    //         if (!res.success) {
    //             setloadingdata(false);
    //             toast.error(res.message, {});
    //         }
    //         setloadingdata(false);
    //         setTimeout(() => {
    //             setloadingdata(false);
    //         }, 500);
    //     };
    //     getAgentOrder();
    // }, []);
    return (
        <>
            <DefaultLayout browserTitle={title} breadTitle={title}>
                <Row gutter={40} justify="space-between">
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<RegIcon />} title="Registered Users" count="3500" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<VerifiedIcon />} title="Verified Users" count="0" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<TotalIcon />} title="Total Users" count="0" />
                    </Col>
                </Row>
                <Row gutter={40}>
                    <Col xs={24} xl={8} lg={6}>
                        <LargeMetricCard
                            cardIcon={<UserCountIcon />}
                            cardTitle="Number of Users"
                            count="120"
                            bTitle="Number of CST"
                            bCount1={`60 CSTs`}
                            bTitle2="Number of Vendor"
                            bCount2={`60 Vendor`}
                        />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <LargeMetricCard
                            cardIcon={<RevenueIcon />}
                            cardTitle="Revenue"
                            count="709000"
                            circleColor={'#000'}
                            bTitle="Amount Sold"
                            bCount1={`${CURRENCY} ${formatAmount('50000')}`}
                            bTitle2="Unapproved"
                            bCount2={`${CURRENCY} ${formatAmount('9080000')}`}
                        />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <LargeMetricCard
                            cardIcon={<OrderDisplayIcon />}
                            cardTitle="Orders"
                            count="20"
                            circleColor={'#BE1E2D'}
                            bTitle="Amount Sold"
                            bTitle2="Unapproved"
                        />
                    </Col>
                </Row>
                <div style={{ marginTop: '2rem' }} />
                <Row gutter={40}>
                    <Col xs={24} xl={8} lg={6}>
                        <PaidCountCard title="Amount Paid To Logistic Company" amount="3000000" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <PaidCountCard title="Total Amount Made From Ads" amount="400000" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <PaidCountCard title="Total Amount of Product Sold" amount="670000" />
                    </Col>
                </Row>
            </DefaultLayout>
        </>
    );
};

export default AdminDashboard;
