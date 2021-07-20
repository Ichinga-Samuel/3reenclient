import React from 'react';
import AdminHomeLayout from './AdminHomeLayout';
import AdminSearch from './AdminSearch';
// import BestSellerSectionHome from '@/components/BestSellerItems/BestSellerSectionHome/BestSellerSectionHome';

const AdminInventory = () => {
    return (
        <>
            <AdminHomeLayout pageTitle="Inventory">
                <AdminSearch />
                <div className="content" data-aos="slide-right" data-aos-delay="2s" data-aos-duration="1s">
                    {/*<BestSellerSectionHome/>*/}
                    <div>Product Card here</div>
                </div>
            </AdminHomeLayout>
        </>
    );
};

export default AdminInventory;
