import React from 'react';
import Profile from '../../AdminPages/PageBuilder/Profile';
import BodyHead from '../../AdminPages/PageBuilder/BodyHead';
import Companies from './Companies';
import { MainContainer } from '../../AdminPages/PageBuilder/Styled';

function LogisticComponents() {
    return (
        <MainContainer>
            <Profile />
            <BodyHead title={'Logistic Companies'} searchplaceholder={'search logistic company'} />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
            <Companies />
        </MainContainer>
    );
}

export default LogisticComponents;
