import React from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';

const AdminLogisticCompany = () => {
    const title = 'Logistics Company';
    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <h3>Logistics Company</h3>
        </DefaultLayout>
    );
};

export default AdminLogisticCompany;
