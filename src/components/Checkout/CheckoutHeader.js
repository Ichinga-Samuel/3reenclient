import React from 'react';
import { CheckoutHeaderStyled } from './CheckoutHeader.styled';

export default function CheckoutHeader() {
    return (
        <CheckoutHeaderStyled>
            <div className="checkoutHeader">
                <div className="logo">
                    <img src="img/hamburger.png" className="mobileNav" />
                    <img src="img/logo.svg" className="mobileLogo" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" />
                    <input type="submit" className="btn btn-primary" value="search" placeholder="Search Products" />
                </div>

                <div className="actionUser">
                    <div className="cartBasket">
                        <img src="img/cartCheckout.png" className="cartBasketIcon" />
                        <h2>Cart</h2>
                    </div>

                    <div className="profileDetail">
                        <img src="img/User.png" className="UserIcon" />
                        <h2>Hi, Jack</h2>
                        <img src="img/ArrowDown.png" className="ArrowIcon" />
                    </div>
                </div>

                <div className="mobileCheckout">
                    <img src="img/searchIcon.png" className="mobileIcon" />
                    <img src="img/elipse.png" className="mobileIcon" />
                    <img src="img/cartCheckout.png" className="mobileIcon checkout-m" />
                </div>
            </div>
        </CheckoutHeaderStyled>
    );
}
