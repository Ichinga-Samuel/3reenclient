import React, { useState } from 'react';
import { HeaderContainer } from '@/components/UserLayout/Header/Header.styled';
import { CartIcon, LogoIcon } from '@/utils/Icons';
import { Button } from 'antd';
import { ArrowDropDown } from '@material-ui/icons';
import { useRouter } from 'next/router';

const Header = () => {
    const [searching, setsearching] = useState(false);
    const [menuopen, setmenuopen] = useState(false);

    const router = useRouter();
    const cartPage = () => {
        router.push('/cart');
    };

    const returnHome = () => {
        router.push('/');
    };

    const openUserMenu = () => setmenuopen(!menuopen);

    const SearchAllProduct = () => {
        setsearching(true);
        setTimeout(() => {
            setsearching(false);
        }, 2000);
    };
    return (
        <HeaderContainer>
            <div className="userlogo" onClick={returnHome} onKeyDown={returnHome} role="button" tabIndex={0}>
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
            <div className="nav">
                <div className="cart" onClick={cartPage} onKeyDown={cartPage} role="button" tabIndex={0}>
                    <div className="cart__count">
                        <span>0</span>
                    </div>
                    <CartIcon />
                    Cart
                </div>
                {/*<div>*/}
                {/*    <Button>Login</Button>*/}
                {/*</div>*/}
                <div className="userprofile" onClick={openUserMenu} onKeyDown={openUserMenu} role="button" tabIndex={0}>
                    <div className="userprofile__avatar">J</div>
                    <div className="userprofile__name">
                        <span>Hi, Jack</span> <ArrowDropDown />
                    </div>
                    <div className={`usermenu ${menuopen ? 'isOpen' : ''}`}>
                        <ul>
                            <li>My Profile</li>
                            <li>My Orders</li>
                            <li className="logout">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
