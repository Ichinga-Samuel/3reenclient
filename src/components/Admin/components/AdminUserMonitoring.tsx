import React from 'react';
import DefaultLayout from '@/components/Admin/Layout/DefaultLayout';
import { GeneralContainer } from '@/components/Admin/styles/AdminStyle.styled';

const AdminUserMonitoring = () => {
    const title = 'User Monitoring';
    return (
        <DefaultLayout breadTitle={title} browserTitle={title}>
            <GeneralContainer>
                <h3>User Monitoring</h3>
            </GeneralContainer>
        </DefaultLayout>
    );
};

export default AdminUserMonitoring;
