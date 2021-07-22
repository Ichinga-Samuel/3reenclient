import React, { useState } from 'react';
import { useEffect } from 'react';
import DisplayBox from '@/components/AdminPages/PageBuilder/DisplayBox';
import Profile from '@/components/AdminPages/PageBuilder/Profile';
import axios from 'axios'
import DisplayBoxLg from '@/components/AdminPages/PageBuilder/DisplayBoxLg';
import DisplayBoxMd from '@/components/AdminPages/PageBuilder/DisplayBoxMd';
import { MainContainer, HeaderContainer, BoxContainer } from '@/components/AdminPages/PageBuilder/Styled';

const APP_BASE = process.env.APP_BASE_URL;
function DashboardData() {
    const [registeredUsers, setAllRegisterdUsers] = useState();
    const [verifiedUsers, setVerifiedUsers] = useState();
    const [getTotalUsers, setTotalUsers] = useState();
    const [vendors , setVendors] = useState();
    const [totalRevenues, setTotalRevenue] = useState();
    const [totalOrder, setTotalOrders] = useState();
    const [cst, setCst] = useState();
    //Get The Api
    useEffect(async () => {
        try {
            const res = await axios.get(`${APP_BASE}/users/admin/dashboard`);
            //Destructuring
            const {registered, verified, totalUsers, users, totalRevenue, totalOrders} = res.data;
            console.log(res.data)
            setAllRegisterdUsers(registered.total);
            setVerifiedUsers(verified.total);
            setTotalUsers(totalUsers);
            setCst(users[0].total)
            setVendors(users[1].total);
            setTotalRevenue(totalRevenue);
            setTotalOrders(totalOrders);
        } catch (error) {
            if(error){
                console.log(error);
        }
        }
    }, [])
    return (
        <MainContainer>
            <Profile />
            <HeaderContainer>
                <div className="rec">
                    <div className="pageheader">
                        <h1>Admin Dashboard</h1>
                    </div>
                    <BoxContainer>
                        <DisplayBox title={'registered users'} info={registeredUsers} icon={'/img/edit 1.png'} color={true} />
                        <DisplayBox title={'verified users'} info={verifiedUsers} icon={'/img/verify 1.png'} color={true} />
                        <DisplayBox title={'total users'} info={getTotalUsers} icon={'/img/userProfile.png'} color={true} />
                    </BoxContainer>
                </div>
            </HeaderContainer>
            <BoxContainer style={{ marginTop: '100px' }}>
                <DisplayBoxLg
                    title={'Number of users'}
                    info={cst + vendors}
                    icon1={'/img/dashboard (2).png'}
                    icon2={'/img/yellow-ellipse.png'}
                    secondarytitle1={'Number of CST'}
                    secondaryinfo1={`${cst} CTS'S`}
                    secondarytitle2={'Number of Vendors'}
                    secondaryinfo2={`${vendors} vendors`}
                />
                <DisplayBoxLg
                    title={'Revenue'}
                    info={totalRevenues}
                    icon1={'/img/dashboard-vector2.png'}
                    icon2={'/img/purple-ellipse.png'}
                    secondarytitle1={'Amount Sold'}
                    secondaryinfo1={'N50,000.00'}
                    secondarytitle2={'Unapproved'}
                    secondaryinfo2={'N900,000,000.00 '}
                />
                <DisplayBoxLg
                    title={'Orders'}
                    info={totalOrder}
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
