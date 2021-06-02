import React from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { OrderTableContainer } from '@/components/Vendor/Orders/Orders.styled';

const SingleOrderDetails = () => {
    const title = 'Order Details';
    return (
        <VendorLayout pageTitle={title} crumbName="All Orders" dashboardTitle={title}>
            <OrderTableContainer data-aos="fade-up" data-aos-delay="2s" data-aos-duration="1s">
                <div className="orderheader"></div>
                <div className="orderdetails"></div>
            </OrderTableContainer>
        </VendorLayout>
    );
};

export default SingleOrderDetails;
