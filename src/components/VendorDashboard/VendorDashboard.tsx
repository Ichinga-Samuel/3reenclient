import React from 'react';
import Navbar from '../VendorNavbar/Navbar';
import { VendorDashboardStyled } from './VendorDashboard.styled';

const VendorDashboard = () => {
    return (
        <>
            <Navbar />
            <VendorDashboardStyled>hello</VendorDashboardStyled>
        </>
    );
};

export default VendorDashboard;
