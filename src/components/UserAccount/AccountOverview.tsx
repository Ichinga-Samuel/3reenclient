
import React from 'react';
import { AccountInfo } from './UserCustomerProfile.styled';
import UserSideNav from './UserSideNav';

const AccountOverview = () => {
    return <div style={{display:'flex'}}>
        <UserSideNav/>
        <AccountInfo>
          <div className='account-info'>
          <h3>Account Details</h3>
            <ul>
                <li>Customer Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
            </ul>
          </div>
          <div className='account-info'>
          <h3>Address Book</h3>
          <p>Default Address</p>
          </div>
        </AccountInfo>
    </div>;
};

export default AccountOverview;
