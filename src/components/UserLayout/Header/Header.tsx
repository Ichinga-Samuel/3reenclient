import React, { useState, useRef, useEffect } from 'react';
import { HeaderContainer, MobileSearch, SideBarCategory } from '@/components/UserLayout/Header/Header.styled';
import { CartIcon, LogoIcon } from '@/utils/Icons';
import { ShoppingCartOutlined} from '@ant-design/icons';
import { Button, Row, Col } from 'antd';
import { ArrowDropDown, Menu, PersonOutline, SearchOutlined } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    emptyLocalStorage,
    emptySessionStorage,
    removeFromLocalStorage,
    removeFromSessionStorage,
} from '@/utils/browserStorage';
import axios from 'axios';
import { APP_BASE, PRODUCT } from '@/utils/ApiList';
import { LOGGER } from '@/utils/helpers';

const Header = (props) => {
    const { token, userDetail, cartCount } = props;
    const details = JSON.parse(userDetail);
    const [searching, setsearching] = useState(false);
    const [menuopen, setmenuopen] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);
    const [catSider, setcatSider] = useState(false);
    const [allcategory, setallCategory] = useState([]);
    const [data, setData] = useState({
        search: '',
    });
    const userRef = useRef(null);
    const sideRef = useRef(null);

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

    const showSearch = () => {
        setMobileSearch(!mobileSearch);
    };

    const showSider = () => {
        setcatSider(!catSider);
    };

    const logoutUser = () => {
        removeFromLocalStorage('usertoken');
        removeFromSessionStorage('usertoken');
        emptySessionStorage();
        emptyLocalStorage();
        router?.push('/');
    };

    const openUserMenu = () => setmenuopen(!menuopen);
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const { search } = data;
    const onSubmit = (e) => {
        e.preventDefault();
        setsearching(true);
        setTimeout(() => {
            router.push({
                pathname: '/products/catalogue',
                query: { search: data?.search },
            });
            setsearching(false);
        }, 100);
    };

    const getProductByCat = (catname) => {
        router.push({ pathname: '/products', query: { category: catname } });
    };

    useEffect(() => {
        //Hide The Search Bar
        console.log(catSider);
        const catEffectClick = (e) => {
            if (sideRef.current !== null && !sideRef.current.contains(e.target)) {
                setcatSider(!catSider);
            }
        };
        const hideSearch = (e) => {
            if (sideRef.current !== null && !sideRef.current.contains(e.target)) {
                setcatSider(!menuopen);
            }
        }
        if (menuopen) {
            window.addEventListener('click', hideSearch);
        }
        if (catSider) {
            window.addEventListener('click', catEffectClick);
        }
        return () => {
            window.removeEventListener('click', catEffectClick);
            window.removeEventListener('click', hideSearch);
        };
    }, [catSider, menuopen]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${APP_BASE}${PRODUCT.allCategory}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const { doc } = response?.data;
                setallCategory(doc);
            } catch (err) {
                LOGGER('err', err);
            }
        };
        fetchCategory();
    }, []);

    return (
        <>
            <HeaderContainer className='red'>
                <div
                    onClick={showSider}
                    onKeyDown={showSider}
                    role="button"
                    tabIndex={0}
                    className="mobileSideMenu hideOnweb"
                >
                    <Menu />
                </div>
                <div className="userlogo" onClick={returnHome} onKeyDown={returnHome} role="button" tabIndex={0}>
                    <LogoIcon />
                </div>
                    <form className="productsearch" onSubmit={onSubmit}>
                    <input
                        onChange={onChange}
                        name="search"
                        value={search}
                        className="ant-input ant-input-lg"
                        placeholder="Enter Products"
                    />
                    <Button
                        loading={searching}
                        className="searchbtn"
                        type="primary"
                        htmlType='submit'
                        size="large"
                    >
                        Search
                    </Button>
                </form>
                <div className="nav hidden">
                    <div className="cart" onClick={cartPage} onKeyDown={cartPage} role="button" tabIndex={0}>
                        {token === null ? (
                            ''
                        ) : (
                            <>
                                <div className="cart__count">
                                    <span>{cartCount}</span>
                                </div>
                                <CartIcon />
                                Cart
                            </>
                        )}
                    </div>
                    {token !== null ? (
                        <>
                            <div
                                className="hidden userprofile"
                                onClick={openUserMenu}
                                onKeyDown={openUserMenu}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="user-prof">
                                    <div className="userprofile__avatar">{details?.fullName?.split(' ')[0][0]}</div>
                                    <div className="userprofile__name">
                                        <span>Hi, {details?.fullName?.split(' ')[0]}</span>
                                        <ArrowDropDown />
                                    </div>
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
                <div className="mobilenav hideOnweb">
                    <div onClick={showSearch} onKeyDown={showSearch} role="button" tabIndex={0}>
                        <SearchOutlined />
                    </div>
                   {
                       token === null ? '' : (
                        <div className="cartmobile" onClick={cartPage} onKeyDown={cartPage} role="button" tabIndex={0}>
                        <div className="cartmobile__count">
                            <span>{cartCount || 0}</span>
                        </div>
                        <ShoppingCartOutlined />
                    </div>
                       )
                   }
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
                                <ArrowDropDown />
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
                        <div onClick={gotoLogin} onKeyDown={gotoLogin} role="button" tabIndex={0}>
                            <PersonOutline />
                        </div>
                    )}
                </div>
            </HeaderContainer>
            <MobileSearch className={mobileSearch ? 'open' : ''}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
              <form onSubmit={onSubmit}>
              <Row>
                    <Col xs={24} xl={24} lg={24}>
                        <input
                            onChange={onChange}
                            value={search}
                            name="search"
                            className="ant-input ant-input-lg"
                            placeholder="Enter Products"
                        />
                        <Button
                            loading={searching}
                           
                            className="searchbtn"
                            type="primary"
                            htmlType='submit'
                            size="large"
                            block
                            icon={<SearchOutlined />}
                        />
                    </Col>
                </Row>
              </form>
            </MobileSearch>
            <SideBarCategory className={catSider ? 'open' : ''} ref={sideRef}>
                <div className="catside">
                    <h3>Categories</h3>
                    {allcategory?.map((cat) => {
                        return (
                            <>
                                <div
                                    onClick={() => getProductByCat(cat.name)}
                                    onKeyDown={() => getProductByCat(cat.name)}
                                    role="button"
                                    tabIndex={0}
                                    className="catItem"
                                >
                                    {cat?.name}
                                </div>
                            </>
                        );
                    })}
                </div>
            </SideBarCategory>
        </>
    );
};

export default Header;
