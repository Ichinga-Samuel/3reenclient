import React from 'react';
import { CheckoutStyled } from './Checkout.styled.js';
import CheckoutContainer from './CheckoutContainer.js';
import CheckoutHeader from './CheckoutHeader.js';

export default function Checkout() {
    return (
        <div className="checkoutWrapper">
            <CheckoutStyled>
                <CheckoutHeader />
                <CheckoutContainer />
            </CheckoutStyled>
        </div>
    );
}
