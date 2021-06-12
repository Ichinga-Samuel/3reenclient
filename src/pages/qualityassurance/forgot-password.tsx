import React from 'react';
import ForgotPassword from '@/components/Vendor/Auth/ForgotPassword';
import DocumentTitle from '@/utils/DocumentTitle';

const forgotPassword = () => {
    return (
        <div>
            <DocumentTitle pageTitle="Reset Password" applicationTitle="Quality Assurance" />
            <ForgotPassword />
        </div>
    );
};

export default forgotPassword;
