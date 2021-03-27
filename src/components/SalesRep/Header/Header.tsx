import React from 'react';
import Link from 'next/link';
import { HeaderStyled } from './Header.styled';

const Header = () => {
    return (
        <HeaderStyled>
            {/* <div className="Cart">
                <Link href="/">
                    <img src="/img/cart.png" alt="cart icon" />
                </Link>
            </div> */}
            <div className="Brand">
                <Link href="/">
                    <img src="/img/logo.svg" alt="3reenshop logo" />
                </Link>
            </div>
            <ul className="NavItems">
                <li>
                    <Link href="/salesrepresentative/login">
                        <a className="active">Login</a>
                    </Link>
                </li>
                <li>
                    <Link href="/salesrepresentative/register">
                        <a>Register</a>
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
