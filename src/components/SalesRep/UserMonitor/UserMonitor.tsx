import React from 'react';
import SalesRepSidebar from '../Sidebar/Sidebar';

import SalesRepUserCard from './UserCard/SalesRepUserCard';
import TableData from '../UserMonitor/TableData/TableData';
import SalesRepHeader from '../UserMonitor/Header/Header';

import { UserMonitorStyled } from './UserMonitor.styled';

const UserMonitor = () => {
    return (
        <UserMonitorStyled>
            <SalesRepSidebar />

            <div className="contain container">
                <SalesRepHeader />

                <h2>User Monitor</h2>

                <div className="cards">
                    <div className="col-lg-4 col-md-4">
                        <SalesRepUserCard title={'Registered Users'} figure={3500} image={'/Icons/edit.svg'} />
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <SalesRepUserCard title={'Verifed Users'} figure={2356} image={'/Icons/verify.svg'} />
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <SalesRepUserCard title={'Total Users'} figure={5856} image={'/Icons/user.svg'} />
                    </div>
                </div>

                <TableData />
            </div>
        </UserMonitorStyled>
    );
};

export default UserMonitor;
