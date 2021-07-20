import React from 'react';
import AdminHomeLayout from './AdminHomeLayout';
import AdminHeader from './AdminHeader';

const AdminAudit = () => {
    return (
        <>
            <AdminHeader />
            <AdminHomeLayout pageTitle="Audit">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    Audit
                </div>
            </AdminHomeLayout>
        </>
    );
};

export default AdminAudit;
