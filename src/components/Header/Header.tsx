import React from 'react';
import Link from 'next/link';
import { HeaderStyled } from './Header.styled';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="Header">
                <div className="Brand">
                    <Link href="/">
                        <img src="/img/logo.svg" alt="3reenshop logo" />
                    </Link>
                </div>
                <div className="Input">
                    <input type="text" className="Search" placeholder="Search products..." />
                    <button className="SearchBtn">Search</button>
                </div>
                <div className="Cart">
                    <img src="/img/cart.png" alt="cart icon" />
                    <span>Cart</span>
                </div>
                <div className="Profile">
                    <img src="/img/pic.png" alt="profile icon" />
                    <p>Hi, Jack </p>
                </div>
                {/* <div className="Hamburger">
                    <Link href="/">
                        <img src="/img/hamburger.png" alt="menu icon" />
                    </Link>
                </div> */}
            </div>
        </HeaderStyled>
    );
};

export default Header;
