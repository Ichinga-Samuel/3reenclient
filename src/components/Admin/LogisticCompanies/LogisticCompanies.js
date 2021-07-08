import React from 'react';
import Profile from '../PageBuilder/Profile';
import BodyHead from '../PageBuilder/BodyHead';
import Companies from './Companies';
import { MainContainer } from '../PageBuilder/Styled';

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
