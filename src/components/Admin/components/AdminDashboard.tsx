import React from 'react';
import DefaultLayout from '../Layout/DefaultLayout';
// import { formatAmount } from '../../../utils/Helpers';
import { Card, Col, Row } from 'antd';
import DashboardCard from './DashboardCard';
import { GroupOutlined } from '@material-ui/icons';
import { CountHolder } from '../../Admin/styles/AdminStyle.styled';

const AdminDashboard = () => {
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
            <DefaultLayout browserTitle="Admin Dashboard">
                <Row gutter={45} justify="space-between">
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<GroupOutlined />} title="Registered Users" count="0" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<GroupOutlined />} title="Verified Users" count="0" />
                    </Col>
                    <Col xs={24} xl={8} lg={6}>
                        <DashboardCard icon={<GroupOutlined />} title="Total Users" count="0" />
                    </Col>
                </Row>
                <Row gutter={46}>
                    <Col xs={24} xl={18} lg={16}>
                        <Card>
                            <h3>Last 8 Orders</h3>
                            <div>Test</div>
                        </Card>
                    </Col>
                    <Col xs={24} xl={6} lg={8}>
                        <Card>
                            <CountHolder>
                                <h3>Total Services</h3>
                            </CountHolder>
                        </Card>
                    </Col>
                </Row>
            </DefaultLayout>
        </>
    );
};

export default AdminDashboard;
