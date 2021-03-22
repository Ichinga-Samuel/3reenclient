import React from 'react'
import CheckoutFooter from '../Checkout/CheckoutFooter'
import CheckoutHeader from '../Checkout/CheckoutHeader'
import { CartStyled } from './Cart.styled'
import CartContainer from './CartContainer'
export default function Cart() {
    return (
        <>

        <CartStyled>
            <div className="cart">
     <CheckoutHeader />

<CartContainer />

     <CheckoutFooter />

     </div>
     </CartStyled>
     </>
    )
}
