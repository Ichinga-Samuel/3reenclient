import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { USER } from '@/utils/ApiList';
import { addToLocalStorage, getFromLocalStorage } from '@/utils/browserStorage';
import AdminHomeLayout from './AdminHomeLayout';
import AdminHeader from './AdminHeader';
import SearchHeader from './SearchHeader';
import AdminSearch from './AdminSearch';
import Profile from '../PageBuilder/Profile';
import BestSellerSectionHome from '@/components/BestSellerItems/BestSellerSectionHome/BestSellerSectionHome';

const AdminInventory = () => {
    
    return (
        <>
            
            <AdminHomeLayout pageTitle="Inventory" >
                <AdminSearch/>
                <div className="content" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    <BestSellerSectionHome/>
                </div>
            </AdminHomeLayout>
        </>
    );
};


export default AdminInventory;
