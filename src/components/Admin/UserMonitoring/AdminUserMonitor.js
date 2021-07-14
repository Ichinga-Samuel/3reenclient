import React from 'react';
import Profile from '../../AdminPages/PageBuilder/Profile';
import DisplayBox from '../../AdminPages/PageBuilder/DisplayBox';
import AdminUserMonitorTable from './AdminUserMonitorTable';
import { MainContainer, HeaderContainer, BoxContainer, TableContainer } from '../../AdminPages/PageBuilder/Styled';

function AdminUserMonitor() {
    return (
        <MainContainer>
            <Profile />
            <HeaderContainer>
                <div className="rec">
                    <div className="pageheader">
                        <div className="title">
                            <h1>User Monitoring</h1>
                        </div>
                        <div className="quantity" style={{ fontSize: '16px' }}>
                            <input type="text" id="qty" value="50" />
                        </div>
                    </div>
                    <BoxContainer>
                        <DisplayBox title={'number of users'} info={'120 users'} />
                        <DisplayBox title={'number of users online'} info={'45 online users'} />
                        <DisplayBox title={'total cancelled'} info={'N 300 000 000 000'} />
                    </BoxContainer>
                </div>
            </HeaderContainer>

            <TableContainer style={{ marginTop: '70px' }}>
                <AdminUserMonitorTable />
            </TableContainer>
        </MainContainer>
    );
}

export default AdminUserMonitor;