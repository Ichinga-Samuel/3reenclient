import React from 'react';
import Profile from '../PageBuilder/Profile';
import BodyHead from '../PageBuilder/BodyHead';
import { MainContainer } from '../PageBuilder/Styled';
import Products from './Products';

function InventoryDisplay() {
    return (
        <MainContainer>
            <Profile />
            <BodyHead title={'Inventory'} searchplaceholder={'search inventory'} />
            <Products />
        </MainContainer>
    );
}

export default InventoryDisplay;
