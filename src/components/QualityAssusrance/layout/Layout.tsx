import React from 'react';
import { useRouter } from 'next/router';
import Header from '../navigation/Header';

const Layout = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <>
            {pathname === '/qualityassurance/login' || pathname === '/qualityassurance/register' ? <Header /> : null}
            <main>{children}</main>
        </>
    );
};

export default Layout;
