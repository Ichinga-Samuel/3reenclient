import React from 'react';
import SalesRepSidebar from '../Sidebar/Sidebar';
import SalesRepHeader from '../UserMonitor/Header/Header';

import { UserMonitorStyled } from './UserMonitor.styled';
import Link from 'next/link';

const LoginToAccess = () => {
    return (
        <UserMonitorStyled>
            <SalesRepSidebar />

            <div className="contain container">
                <SalesRepHeader />

                <h1>
                    Please <Link href="/salesrepresentative/login">LOG IN</Link> to access this page
                </h1>
            </div>
        </UserMonitorStyled>
    );
};

export default LoginToAccess;
