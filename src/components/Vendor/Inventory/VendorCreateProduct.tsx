import React from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';

const VendorCreateProduct = () => {
    const title = 'Create Products';
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div></div>
        </VendorLayout>
    );
};

export default VendorCreateProduct;
