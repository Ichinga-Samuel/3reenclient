import React, { useEffect } from 'react';
import Header from '@/components/UserLayout/Header/Header';
import Head from 'next/head';
import Footer from '@/components/UserLayout/Footer/Footer';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import { findAllTotal } from '@/utils/helpers';
import AOS from 'aos';

const UserWebLayout = ({ webtitle, children }) => {
    const router = useRouter();
    const { pathname } = router;
    const getPath =
        pathname === '/account/login' ||
        pathname === '/account/register' ||
        pathname === '/account/forgot-password' ||
        pathname === '/account/change-password';
    const token = getFromLocalStorage('usertoken');
    const cartItems = JSON.parse(getFromLocalStorage('cartItems'));
    const getQty = cartItems?.map((item) => item.quantity);
    const cartCount = getQty?.length > 0 ? findAllTotal(getQty) : '0';
    const userDetails = getFromLocalStorage('userdetails');
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);
    return (
        <>
            <Head>
                <title>{webtitle} | Treen Shop</title>
            </Head>
            <Header cartCount={cartCount} token={token} userDetail={userDetails} />
            <main>{children}</main>
            {!getPath ? <Footer /> : ''}
        </>
    );
};

export default UserWebLayout;
