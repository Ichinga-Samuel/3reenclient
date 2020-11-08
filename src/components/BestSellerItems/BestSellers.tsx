import React from 'react';
import BestSellerItem from './BestSellerItem';
import { BestSellersStyled } from './BestSellers.styled';

const BestSellerItems = () => {
    return (
        <BestSellersStyled>
            <div className="BestSellerItems" style={{ marginTop: '61px' }}>
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />

                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
            </div>
        </BestSellersStyled>
    );
};

export default BestSellerItems;
