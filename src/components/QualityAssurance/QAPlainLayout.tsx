import React, { useEffect } from 'react';
import PlainHeader from './Header/PlainHeader';
import { PlainQAFooter } from './Header/QAHeader.styled';
import AOS from 'aos';
import Head from 'next/head';

const QAPlainLayout = ({ pageTitle, children }) => {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <>
            <Head>
                <title>{pageTitle} | Quality Assurance</title>
            </Head>
            <PlainHeader />
            <main>{children}</main>
            <PlainQAFooter>
                <span>
                    3Treen &copy; {new Date().getFullYear()} <br /> All Rights Reserved
                </span>
            </PlainQAFooter>
        </>
    );
};

export default QAPlainLayout;
