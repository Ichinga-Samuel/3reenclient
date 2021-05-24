import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import React from 'react';

const CustomerServices = () => {
    const title = 'Customer Services';
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div>
                <h3>Customer Services Page Should be here</h3>
            </div>
        </VendorLayout>
    );
};

export default CustomerServices;
