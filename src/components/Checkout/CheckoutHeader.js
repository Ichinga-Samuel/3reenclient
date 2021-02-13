import React from 'react';
import { CheckoutHeaderStyled } from './CheckoutHeader.styled';

export default function CheckoutHeader() {
    return (
        <CheckoutHeaderStyled>
            <div className="checkoutHeader">
                <div className="logo">
                    <img src="img/hamburger.png" className="mobileNav" alt="treen" />
                    <img src="img/logo.svg" className="mobileLogo" alt="treen" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" />
                    <input type="submit" className="btn btn-primary" value="search" placeholder="Search Products" />
                </div>

                <div className="actionUser">
                    <div className="cartBasket">
                        <img src="img/cartCheckout.png" className="cartBasketIcon" alt="treen" />
                        <h2>Cart</h2>
                    </div>

                    <div className="profileDetail">
                        <img src="img/User.png" className="UserIcon" alt="treen" />
                        <h2>Hi, Jack</h2>
                        <img src="img/ArrowDown.png" className="ArrowIcon" alt="treen" />
                    </div>
                </div>

                <div className="mobileCheckout">
                    <img src="img/searchIcon.png" className="mobileIcon" alt="treen" />
                    <img src="img/elipse.png" className="mobileIcon" alt="treen" />
                    <img src="img/cartCheckout.png" className="mobileIcon checkout-m" alt="treen" />
                </div>
            </div>
        </CheckoutHeaderStyled>
    );
}
