import React from 'react';
import { ItemStyled } from './BestSeller.styled';

const BestSellerItem = () => {
    return (
        <ItemStyled>
            <div className="BestSellerItem">
                <img src="img/mackbook3x.png" alt="" />
                <h4>Apple MacBook Pro</h4>
                <img src="/img/rating.png" width="150px" height="30px" alt="Rating for Beats solo" />
                <p>
                    <span>$499</span> $599
                </p>
            </div>
        </ItemStyled>
    );
};

export default BestSellerItem;
