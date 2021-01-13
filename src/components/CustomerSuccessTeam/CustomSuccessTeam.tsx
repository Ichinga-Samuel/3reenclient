/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React from 'react';
import { MainWrapper } from './CustomerProdInfo/CustomerProdInfo';
// import { ViewProduct } from "./CustomerViewProduct/ViewProduct";
// import { ProductDetails } from "./CustomerProductDetails/ProductDetails";
// import { DeliveryDetails } from "./CustomerDeliveryDetails/DeliveryDetails";
import { CustomerSidebar } from './CustomerSidebar/CustomerSiderbar';
// import { UserId, NotifyUser } from './User/User';
import './CustomerSuccessTeam.css';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import './Utils.css';
// import boxImg from './Images/Box-img.svg';
// import viewDots from './Icons/view-dots.svg';
// import exitViewProduct from './Icons/exit-view-product.svg';
// import lineIcon from './Icons/Line.svg';
// import lineIcons from './Icons/Line-1.svg';
// import star from './Icons/Star 1.svg';
// import star1 from './Icons/Star 2.svg';
// import group1 from './Icons/Group-5.svg';
// import group2 from './Icons/Group-4.svg';
// import group3 from './Icons/Group-3.svg';
// import group4 from './Icons/Group-2.svg';
// import group5 from './Icons/Group-1.svg'
// import { action } from '@storybook/addon-actions';
// import { CustomerMessage } from './CustomerMessage/CustomerMessage';

// export default {
//     title: 'img',
// };

// const image = {
//     cstLogo: cstLogo,
// };

export const CustomerSuccessTeam = () => {
    return (
        <>
            <CustomerSidebar />
            <MainWrapper />
            {/* <ViewProduct /> */}
            {/* <DeliveryDetails /> */}
            {/* <ProductDetails /> */}
            {/* <CustomerMessage /> */}
        </>
    );
};
