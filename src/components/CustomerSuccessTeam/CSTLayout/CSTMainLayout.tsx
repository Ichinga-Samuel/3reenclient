import React, { useState, useEffect } from 'react';
import QAHeader from '@/components/CustomerSuccessTeam/CSTLayout/CSTHeader';
import QASideMenu from '@/components/CustomerSuccessTeam/CSTLayout/CSTSideMenu';
import { Layout } from 'antd';
const { Content } = Layout;
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AOS from 'aos';

const CSTMainLayout = ({ pageTitle, layoutTitle, children }) => {
    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapse = () => setcollapsed(!collapsed);

    const router = useRouter();

    const token = getFromLocalStorage('csttoken');
    const userData = getFromLocalStorage('cstuser') || null;

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    useEffect(() => {
        if (!token && token === null && userData === null) {
            router.push('/cst/login');
            return;
        }
    }, [userData, router, token]);

    return (
        <>
            {!token ? (
                <>
                    <Head>
                        <title>Redirecting...</title>
                    </Head>
                    <p style={{ padding: '20px', fontSize: '1.5rem' }}>Redirecting...</p>
                </>
            ) : (
                // <Login />
                <Layout>
                    <Head>
                        <title>{pageTitle} | Customer Success Team</title>
                    </Head>
                    <QAHeader userData={userData} collapsed={collapsed} toggleCollapse={toggleCollapse} />
                    <Layout className="site-layout">
                        <QASideMenu collapsed={collapsed} />
                        <Content className="main site-layout-background">
                            <div className="page-title">{layoutTitle}</div>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            )}
        </>
    );
};

export default CSTMainLayout;
