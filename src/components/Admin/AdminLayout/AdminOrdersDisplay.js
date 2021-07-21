import React from 'react';
import AdminHomeLayout from './AdminHomeLayout';
import AdminHeader from './AdminHeader';

const AdminOrdersDisplay = () => {
    return (
        <>
            <AdminHeader />
            <AdminHomeLayout pageTitle="OrdersDisplay">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    OrdersDisplay
                </div>
            </AdminHomeLayout>
        </>
    );
};

export default AdminOrdersDisplay;
