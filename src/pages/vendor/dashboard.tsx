import VendorNavbar from '@/components/VendorNavbar/VendorNavbar';
import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

const dashboardscreen = () => {
    return (
        <div>
            <VendorNavbar />
            <Dashboard />
        </div>
    );
};

export default dashboardscreen;
