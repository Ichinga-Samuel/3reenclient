import React from 'react';
import { CartEmptyStyled } from './CartEmpty.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';

export default function EmptyCart() {
    return (
        <>
            <UserWebLayout webtitle="Cart">
                <CartEmptyStyled>
                    <div className="emptycartWrapper">
                        <h3>Your Shopping Cart</h3>

                        <div className="circle">
                            <img src="img/shopper.png" className="shopper" alt="shopper" />
                        </div>

                        <h5>Your cart is empty</h5>
                        <p>Goto your Market place and add an item to your cart</p>

                        <button>Continue Shopping</button>
                    </div>
                </CartEmptyStyled>
            </UserWebLayout>
        </>
    );
}
