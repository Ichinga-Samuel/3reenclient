import React from 'react';
import { PaymentStyled } from './Payment.styled';

export default function PaymentSuccessful() {
    return (
        <PaymentStyled>
            <div className="paymentSuccess">
                <div className="paymentVerified">
                    <img src="img/check.png" alt="check" />

                    <h4>Payment Successful </h4>

                    <p className="mobileOrder">Your Order has been placed</p>

                    <button className="desktop">Continue Shopping</button>

                    <div className="mobileConfirmation">
                        <button className="track">track your order</button>
                        <button className="orderagain">order again</button>
                    </div>
                </div>
            </div>
        </PaymentStyled>
    );
}
