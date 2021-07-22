import React from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';

const AdminInventory = () => {
    const title = 'Inventory';
    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <div>Table Here</div>
        </DefaultLayout>
    );
};

export default AdminInventory;
