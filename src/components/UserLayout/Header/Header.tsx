import React, { useState } from 'react';
import { HeaderContainer } from '@/components/UserLayout/Header/Header.styled';
import { CartIcon, LogoIcon } from '@/utils/Icons';
import { Button } from 'antd';
import { ArrowDropDown } from '@material-ui/icons';
import { useRouter } from 'next/router';

const Header = () => {
    const [searching, setsearching] = useState(false);

    const router = useRouter();
    const cartPage = () => {
        router.push('/cart');
    };

    const SearchAllProduct = () => {
        setsearching(true);
        setTimeout(() => {
            setsearching(false);
        }, 2000);
    };
    return (
        <HeaderContainer>
            <div className="userlogo">
                <LogoIcon />
            </div>
            <div className="productsearch">
                <input className="ant-input ant-input-lg" placeholder="Enter Products" />
                <Button
                    loading={searching}
                    onClick={SearchAllProduct}
                    className="searchbtn"
                    type="primary"
                    size="large"
                >
                    Search
                </Button>
            </div>
            <div className="nav" onClick={cartPage}>
                <div className="cart">
                    <div className="cart__count">
                        <span>0</span>
                    </div>
                    <CartIcon />
                    Cart
                </div>
                {/*<div>*/}
                {/*    <Button>Login</Button>*/}
                {/*</div>*/}
                <div className="userprofile">
                    <div className="userprofile__avatar">J</div>
                    <div className="userprofile__name">
                        <span>Hi, Jack</span> <ArrowDropDown />
                    </div>
                    <div className="usermenu">
                        <ul>
                            <li>Profile</li>
                            <li>Orders</li>
                            <li className="logout">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
