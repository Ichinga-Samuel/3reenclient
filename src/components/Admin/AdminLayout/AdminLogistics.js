import React from 'react';
import AdminHomeLayout from './AdminHomeLayout';
import AdminHeader from './AdminHeader';

const AdminLogistics = () => {
    return (
        <>
            <AdminHeader />
            <AdminHomeLayout pageTitle="Logistics">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    Logistics
                </div>
            </AdminHomeLayout>
        </>
    );
};

export default AdminLogistics;
