import React from 'react';
import { CURRENCY, formatAmount } from '@/utils/helpers';
import { CartItems } from '@/components/Checkout/Checkout.styled';

const CheckoutCarts = ({ price, qty, productName }) => {
    return (
        <CartItems>
            <div className="image" />
            <div className="c-name">
                <p style={{ marginBottom: '0' }}>{productName}</p>
                <p>Qty: {qty}</p>
            </div>
            <div className="p-item">
                {CURRENCY}
                {formatAmount(price)}
            </div>
        </CartItems>
    );
};

export default CheckoutCarts;
