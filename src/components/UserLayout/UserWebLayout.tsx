import React from 'react';
import Header from '@/components/UserLayout/Header/Header';
import Head from 'next/head';
import Footer from '@/components/UserLayout/Footer/Footer';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';

const UserWebLayout = ({ webtitle, children }) => {
    const router = useRouter();
    console.log('all', router);
    const { pathname } = router;
    const getPath =
        pathname === '/login' ||
        pathname === '/register' ||
        pathname === '/forgot-password' ||
        pathname === '/change-password';
    const token = getFromLocalStorage('usertoken');
    const cartItems = JSON.parse(getFromLocalStorage('cartItems'));
    const userDetails = getFromLocalStorage('userdetails');
    return (
        <>
            <Head>
                <title>{webtitle} | Treen Shop</title>
            </Head>
            <Header cartItems={cartItems} token={token} userDetail={userDetails} />
            <main>{children}</main>
            {!getPath ? <Footer /> : ''}
        </>
    );
};

export default UserWebLayout;
