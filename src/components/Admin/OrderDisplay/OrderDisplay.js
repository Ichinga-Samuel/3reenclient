import React from 'react';
import OrderTable from './OrderTable';
import Profile from '../../AdminPages/PageBuilder/Profile';
import BodyHead from '../../AdminPages/PageBuilder/BodyHead';
import { MainContainer, TableContainer } from '../../AdminPages/PageBuilder/Styled';

function OrderDisplay() {
    return (
        <MainContainer>
            <Profile />
            <BodyHead title={'Orders'} searchplaceholder={'search orders'} />
            <TableContainer>
                <OrderTable />
            </TableContainer>
        </MainContainer>
    );
}

export default OrderDisplay;
