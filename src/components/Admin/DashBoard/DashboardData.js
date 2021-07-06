import React from 'react';
import DisplayBox from '@/components/AdminPages/PageBuilder/DisplayBox';
import Profile from '@/components/AdminPages/PageBuilder/Profile';
import DisplayBoxLg from '@/components/AdminPages/PageBuilder/DisplayBoxLg';
import DisplayBoxMd from '@/components/AdminPages/PageBuilder/DisplayBoxMd';
import { MainContainer, HeaderContainer, BoxContainer } from '@/components/AdminPages/PageBuilder/Styled';

function DashboardData() {
    return (
        <MainContainer>
            <Profile />
            <HeaderContainer>
                <div className="rec">
                    <div className="pageheader">
                        <h1>Admin Dashboard</h1>
                    </div>
                    <BoxContainer>
                        <DisplayBox title={'registered users'} info={'3,500'} icon={'/img/edit 1.png'} color={true} />
                        <DisplayBox title={'verified users'} info={'2,356'} icon={'/img/verify 1.png'} color={true} />
                        <DisplayBox title={'total users'} info={'5,856'} icon={'/img/userProfile.png'} color={true} />
                    </BoxContainer>
                </div>
            </HeaderContainer>
            <BoxContainer style={{ marginTop: '100px' }}>
                <DisplayBoxLg
                    title={'Number of users'}
                    info={'120 users'}
                    icon1={'/img/dashboard (2).png'}
                    icon2={'/img/yellow-ellipse.png'}
                    secondarytitle1={'Number of CST'}
                    secondaryinfo1={"60 CST'S "}
                    secondarytitle2={'Number of Vendors'}
                    secondaryinfo2={'60 Vendors '}
                />
                <DisplayBoxLg
                    title={'Revenue'}
                    info={'300,000,000.00'}
                    icon1={'/img/dashboard-vector2.png'}
                    icon2={'/img/purple-ellipse.png'}
                    secondarytitle1={'Amount Sold'}
                    secondaryinfo1={'N50,000.00'}
                    secondarytitle2={'Unapproved'}
                    secondaryinfo2={'N900,000,000.00 '}
                />
                <DisplayBoxLg
                    title={'Orders'}
                    info={'20 Orders Completed'}
                    icon1={'/img/dashboard-vector3.png'}
                    icon2={'/img/red-ellipse.png'}
                    secondarytitle1={'Amount Sold'}
                    secondaryinfo1={'N50,000.00'}
                    secondarytitle2={'Unapproved'}
                    secondaryinfo2={'N900,000,000.00 '}
                />
            </BoxContainer>
            <BoxContainer style={{ marginTop: '270px' }}>
                <DisplayBoxMd
                    logistics={'Amount Paid to Logistic Companies'}
                    logisticamount={'N3,000,000.00'}
                    ads={'Total Amount Made from Ads'}
                    adsamount={'N3,000,000.00'}
                    products={'Total Amount of Products sold'}
                    productamount={'N3,000,000.00'}
                />
            </BoxContainer>
        </MainContainer>
    );
}

export default DashboardData;
