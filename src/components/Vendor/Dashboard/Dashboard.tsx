/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React from 'react';
import { DashboardStyled } from './Dashboard.styled';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';

const Dashboard = () => {
    return (
        <VendorLayout pageTitle="Dashboard" crumbName="Dashboard" dashboardTitle="Dashboard">
            <DashboardStyled>
                <span>Dashboard Data should be here</span>
            </DashboardStyled>
        </VendorLayout>
    );
};

export default Dashboard;
