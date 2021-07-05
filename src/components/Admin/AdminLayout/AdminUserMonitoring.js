import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { USER } from '@/utils/ApiList';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import AdminHomeLayout from './AdminHomeLayout';
import AdminHeader from './AdminHeader';

const AdminUserMonitiring = () => {
    
    return (
        <>  
            <AdminHeader/>
            <AdminHomeLayout pageTitle="UserMonitiring">
                <div className="login" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    UserMonitiring
                </div>
            </AdminHomeLayout>
        </>
    );
};


export default AdminUserMonitiring;
