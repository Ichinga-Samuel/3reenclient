import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import React from 'react';

const Inventory = () => {
    const title = 'Inventory';
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div>
                <h3>Inventory Page Should be here</h3>
            </div>
        </VendorLayout>
    );
};

export default Inventory;
