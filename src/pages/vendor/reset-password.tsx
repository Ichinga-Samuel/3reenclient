import CreateNewPassword from '@/components/Vendor/Auth/CreateNewPassword';
import DocumentTitle from '@/utils/DocumentTitle';
import React from 'react';

const resetPassword = () => {
    return (
        <div>
            <DocumentTitle pageTitle="Create New Password" />
            <CreateNewPassword />
        </div>
    );
};

export default resetPassword;
