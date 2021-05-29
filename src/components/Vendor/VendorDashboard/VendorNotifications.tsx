import React from 'react';
import { NavItem } from 'reactstrap';
import { CartIcon } from '@/components/AdminPages/icons/Icons';

const VendorNotifications = () => {
    return (
        <NavItem className="navItemMain">
            <div className="navItemContainer">
                <div className="dropDownNavIcon">
                    {' '}
                    <CartIcon />
                </div>

                <div className="orderStatusContainer">
                    <p className="orderStatus">order delivered</p>
                    <p>35 mins ago|3 items</p>
                </div>
            </div>
            <div style={{ margin: '10px' }}>Today</div>
        </NavItem>
    );
};

export default VendorNotifications;
