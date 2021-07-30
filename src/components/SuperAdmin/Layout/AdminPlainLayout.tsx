import React, { useEffect } from 'react';

import AOS from 'aos';
import Head from 'next/head';
import { MainContainer, PlainAdminFooter } from '@/components/Admin/Layout/AdminLayout.styled';
import AdminPlainHeader from '@/components/Admin/Layout/AdminPlainHeader';

const AdminPlainLayout = ({ pageTitle, children }) => {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);
    return (
        <>
            <Head>
                <title>{pageTitle} | Admin</title>
            </Head>
            <AdminPlainHeader />
            <MainContainer>
                <div className="authContainer">
                    {/*<h2>QUALITY AND ASSURANCE PERSONNEL</h2>*/}
                    {children}
                </div>
            </MainContainer>
            <PlainAdminFooter>
                <span>
                    3Treen &copy; {new Date().getFullYear()} <br /> All Rights Reserved
                </span>
            </PlainAdminFooter>
        </>
    );
};

export default AdminPlainLayout;
