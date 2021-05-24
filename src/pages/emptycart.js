import { CartEmptyStyled } from '@/components/Cart/CartEmpty.styled';
import EmptyCart from '@/components/Cart/EmptyCart';
import React from 'react';

export default function emptycart() {
    return (
        <CartEmptyStyled>
            <div className="cartEmpty">
                <EmptyCart />
            </div>
        </CartEmptyStyled>
    );
}
