import Cart from '@/components/Cart/Cart';
import { CartStyled } from '@/components/Cart/Cart.styled';
import React from 'react';

export default function cart() {
    return (
        <div>
            <CartStyled> 
                <Cart />
            </CartStyled>
        </div>
    );
}
