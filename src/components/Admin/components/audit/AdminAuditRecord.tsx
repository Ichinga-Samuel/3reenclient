import React from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';

const AdminAuditRecord = () => {
    const title = 'Audit';
    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <div>Table Here</div>
        </DefaultLayout>
    );
};

export default AdminAuditRecord;
