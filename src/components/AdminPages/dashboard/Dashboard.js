import React from 'react';
import DisplayBox from '../PageBuilder/DisplayBox';
import Profile from '../PageBuilder/Profile';
import DisplayBoxLg from '../PageBuilder/DisplayBoxLg';
import DisplayBoxLg2 from '../PageBuilder/DisplayBoxLg2';
import DisplayBoxMd from '../PageBuilder/DisplayBoxMd';
import { MainContainer, HeaderContainer, BoxContainer } from '../PageBuilder/Styled';

function Dashboard() {
    return (
        <MainContainer>
            <Profile />

            <HeaderContainer>
                <div className="rec">
                    <div className="pageheader">
                        <h1>Admin Dashboard</h1>
                    </div>
                    <BoxContainer>
                        <DisplayBox title={'registered users'} info={'3,500'} icon={'/icon/edit.png'} color={true} />
                        <DisplayBox title={'verified users'} info={'2,356'} icon={'/icon/verify.png'} color={true} />
                        <DisplayBox
                            title={'total users'}
                            info={'5,856'}
                            icon={'/icon/vector-avatar.png'}
                            color={true}
                        />
                    </BoxContainer>
                </div>
            </HeaderContainer>
            <BoxContainer style={{ marginTop: '100px' }}>
                <DisplayBoxLg
                    title={'Number of users'}
                    info={'120 users'}
                    icon1={'/icon/dashboard-vector.png'}
                    icon2={'/icon/yellow-ellipse.png'}
                    secondarytitle1={'Number of CST'}
                    secondaryinfo1={"60 CST'S "}
                    secondarytitle2={'Number of Vendors'}
                    secondaryinfo2={'60 Vendors '}
                />
                <DisplayBoxLg
                    title={'Revenue'}
                    info={'300,000,000.00'}
                    icon1={'/icon/dashboard-vector2.png'}
                    icon2={'/icon/purple-ellipse.png'}
                    secondarytitle1={'Amount Sold'}
                    secondaryinfo1={'N50,000.00'}
                    secondarytitle2={'Unapproved'}
                    secondaryinfo2={'N900,000,000.00 '}
                />
                <DisplayBoxLg2
                    title={'Orders'}
                    info={'22 Orders Completed'}
                    icon1={'/icon/dashboard-vector3.png'}
                    icon2={'/icon/red-ellipse.png'}
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
                    ads={'total Amount Made from Ads'}
                    adsamount={'N3,000,000.00'}
                    products={'total Amount of Products sold'}
                    productamount={'N3,000,000.00'}
                />
            </BoxContainer>
        </MainContainer>
    );
}

export default Dashboard;
