import React from 'react';
import SideNav from '../SideNav/SideNav';
import CustomerService from './CustomerService';

const AdminCustomer = () => {
    return (
        <div>
            <CustomerService />
            <SideNav />
        </div>
    );
};

export default AdminCustomer;
