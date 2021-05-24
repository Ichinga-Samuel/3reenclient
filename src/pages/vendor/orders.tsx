import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import React from 'react';

const Orders = () => {
    const title = 'Orders';
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div>
                <h3>Order Page Should be here</h3>
            </div>
        </VendorLayout>
    );
};

export default Orders;
