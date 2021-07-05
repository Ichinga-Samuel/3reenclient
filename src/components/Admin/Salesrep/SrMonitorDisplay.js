import React from 'react';
import Profile from '../../AdminPages/PageBuilder/Profile';
import BodyHead from '../../AdminPages/PageBuilder/BodyHead';
import { MainContainer } from '../../AdminPages/PageBuilder/Styled';
import SalesRep from './SalesRep';

function SrMonitorDisplay() {
    return (
        <MainContainer>
            <Profile />
            <BodyHead title={'Sales Representative'} searchplaceholder={'search Sales Rep Monitor'} hide={'true'} />
            <div>
                <SalesRep />
                <SalesRep />
                <SalesRep />
                <SalesRep />
            </div>
        </MainContainer>
    );
}

export default SrMonitorDisplay;
