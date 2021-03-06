import React from 'react';
import Link from 'next/link';
import { HeaderStyled } from './styled/HeaderStyled';
import { LogoIcon, CartIcon, ProfileIcon } from '@/utils/Icons';
import { DownOutlined } from '@ant-design/icons';
// import Search from '@/components/Products/Search';
// import fakedata from '@/components/Products/fakeData';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="Header">
                <div className="Brand">
                    <Link href="/">
                        <a>
                            <LogoIcon />
                            {/* <img src="/img/logo.svg" alt="3reenshop logo" /> */}
                        </a>
                    </Link>
                </div>
                <div className="Input">
                    <input type="text" className="Search" placeholder="Search products..." />
                    <button className="SearchBtn">Search</button>
                </div>
                <div className="Cart">
                    <div>
                        <CartIcon />
                        {/* <img src="/img/cart.png" alt="cart icon" /> */}
                        <div className="Cart__count">0</div>
                    </div>
                    <div className="Cart__label">Cart</div>
                </div>
                <div className="Profile">
                    {/* <img src="/img/pic.png" alt="profile icon" /> */}
                    <ProfileIcon />
                    <p>Hi, Jack </p>
                    <span>
                        <DownOutlined />
                        {/* <img src="/img/down-arrow.png" alt="arrow" /> */}
                    </span>
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;
