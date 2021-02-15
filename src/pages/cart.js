import Cart from '@/components/Cart/Cart'
import Checkout from '@/components/Checkout/Checkout'
import { CheckoutStyled } from '@/components/Checkout/Checkout.styled'
import React from 'react'

export default function checkout() {
    return (

        <div>
            <CheckoutStyled>
            <Cart />

            </CheckoutStyled>
        </div>
    )
}
