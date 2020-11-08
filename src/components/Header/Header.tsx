import React from 'react';
import Link from 'next/link';
import { HeaderStyled } from './Header.styled';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="Cart">
                <Link href="/">
                    <img src="/img/cart.png" alt="cart icon" />
                </Link>
            </div>
            <div className="Brand">
                <Link href="/">
                    <img src="/img/logo.svg" alt="3reenshop logo" />
                </Link>
            </div>
            <ul className="NavItems">
                <li>
                    <Link href="/">
                        <a className="active">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Store</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Login</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Sign Up</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
            <div className="Hamburger">
                <Link href="/">
                    <img src="/img/hamburger.png" alt="menu icon" />
                </Link>
            </div>
        </HeaderStyled>
    );
};

export default Header;
