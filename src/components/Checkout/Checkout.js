import React from 'react';
import { CheckoutStyled } from './Checkout.styled.js';
import CheckoutContainer from './CheckoutContainer.js';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';

export default function Checkout() {
    return (
        <>
            <UserWebLayout webtitle="Checkout">
                <div className="checkoutWrapper">
                    <CheckoutStyled>
                        <CheckoutContainer />
                    </CheckoutStyled>
                </div>
            </UserWebLayout>
        </>
    );
}
