import React from 'react';
import CheckoutFooter from '../Checkout/CheckoutFooter';
import CheckoutHeader from '../Checkout/CheckoutHeader';
import { CartEmptyStyled } from './CartEmpty.styled';

export default function EmptyCart() {
    return (
        <div>
            <CheckoutHeader />
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
            <CheckoutFooter />
        </div>
    );
}
