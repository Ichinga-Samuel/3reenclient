import React from 'react';
import ResetToken from '@/components/Vendor/Auth/ResetToken';
import DocumentTitle from '@/utils/DocumentTitle';

const ResetCode = () => {
    return (
        <div>
            <DocumentTitle pageTitle="Reset Code" applicationTitle />
            <ResetToken />
        </div>
    );
};

export default ResetCode;
