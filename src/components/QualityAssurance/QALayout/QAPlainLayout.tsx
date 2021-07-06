import React, { useEffect } from 'react';
import PlainHeader from './PlainHeader';
import { PlainQAFooter } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
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
            <main>
                <div className="authContainer">
                    <h2>QUALITY AND ASSURANCE PERSONNEL</h2>
                    {children}
                </div>
            </main>
            <PlainQAFooter>
                <span>
                    3Treen &copy; {new Date().getFullYear()} <br /> All Rights Reserved
                </span>
            </PlainQAFooter>
        </>
    );
};

export default QAPlainLayout;
