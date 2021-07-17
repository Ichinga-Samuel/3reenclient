import React from 'react';
import Header from '@/components/UserLayout/Header/Header';
import Head from 'next/head';
import Footer from '@/components/UserLayout/Footer/Footer';

const UserWebLayout = ({ webtitle, children }) => {
    return (
        <>
            <Head>
                <title>{webtitle} | Treen Shop</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default UserWebLayout;
