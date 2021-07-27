import React from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';

const AdminUserMonitoring = () => {
    const title = 'User Monitoring';
    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <h3>User Monitoring</h3>
        </DefaultLayout>
    );
};

export default AdminUserMonitoring;
