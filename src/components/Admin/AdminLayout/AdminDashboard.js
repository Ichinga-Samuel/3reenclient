import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { USER } from '@/utils/ApiList';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import AdminHomeLayout from './AdminHomeLayout';
import AdminHeader from './AdminHeader';

const AdminDashboard = () => {
    
    return (
        <>  
            <AdminHeader/>
            <AdminHomeLayout pageTitle="Dashboard">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    Dashboard for admin
                </div>
            </AdminHomeLayout>
        </>
    );
};


export default AdminDashboard;
