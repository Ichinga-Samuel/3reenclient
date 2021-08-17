import React, { useState, useRef } from 'react';
import { HeaderContainer } from '@/components/UserLayout/Header/Header.styled';
import { CartIcon, LogoIcon } from '@/utils/Icons';
import { Button } from 'antd';
import { ArrowDropDown, PersonOutline } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    emptyLocalStorage,
    emptySessionStorage,
    removeFromLocalStorage,
    removeFromSessionStorage,
} from '@/utils/browserStorage';
import { useForm } from 'react-hook-form';

const Header = (props) => {
    const { token, userDetail, cartCount } = props;
    const details = JSON.parse(userDetail);
    const [searching, setsearching] = useState(false);
    const [menuopen, setmenuopen] = useState(false);
    const userRef = useRef(null);

    const { register, handleSubmit } = useForm();

    const router = useRouter();
    const cartPage = () => {
        router.push('/cart');
    };

    const gotoLogin = () => {
        router.push('/account/login');
    };

    const returnHome = () => {
        router.push('/');
    };

    const logoutUser = () => {
        removeFromLocalStorage('usertoken');
        removeFromSessionStorage('usertoken');
        emptySessionStorage();
        emptyLocalStorage();
        router?.push('/');
    };

    const openUserMenu = () => setmenuopen(!menuopen);

    const SearchAllProduct = (data) => {
        console.log(data);
        setsearching(true);
        setTimeout(() => {
            router.push({
                pathname: '/products/catalogue',
                query: { search: data?.search },
            });
            setsearching(false);
        }, 100);
    };
    return (
        <HeaderContainer>
            <div className="userlogo" onClick={returnHome} onKeyDown={returnHome} role="button" tabIndex={0}>
                <LogoIcon />
            </div>
            <div className="productsearch">
                <input
                    {...register('search')}
                    name="search"
                    className="ant-input ant-input-lg"
                    placeholder="Enter Products"
                />
                <Button
                    loading={searching}
                    onClick={handleSubmit(SearchAllProduct)}
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
                        <span>{cartCount}</span>
                    </div>
                    <CartIcon />
                    Cart
                </div>
                {token !== null ? (
                    <>
                        <div
                            className="userprofile"
                            onClick={openUserMenu}
                            onKeyDown={openUserMenu}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="userprofile__avatar">{details?.fullName?.split(' ')[0][0]}</div>
                            <div className="userprofile__name">
                                <span>Hi, {details?.fullName?.split(' ')[0]}</span> <ArrowDropDown />
                            </div>
                            <div className={`usermenu ${menuopen ? 'isOpen' : ''}`} ref={userRef}>
                                <ul>
                                    <li>
                                        <Link href="/profile">
                                            <a>My Profile</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profile">
                                            <a>My Orders</a>
                                        </Link>
                                    </li>
                                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                    <li onClick={logoutUser} onKeyDown={logoutUser} className="logout">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div onClick={gotoLogin} onKeyDown={gotoLogin} role="button" tabIndex={0}>
                            <Button type="primary" className="loginbtn">
                                <PersonOutline /> Login
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </HeaderContainer>
    );
};

export default Header;
