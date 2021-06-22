import React, { useState, useEffect } from 'react';
import QAHeader from '@/components/CustomerSuccessTeam/CSTLayout/CSTHeader';
import QASideMenu from '@/components/CustomerSuccessTeam/CSTLayout/CSTSideMenu';
import { Layout } from 'antd';
const { Content } = Layout;
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AOS from 'aos';

const CSTMainLayout = ({ pageTitle, children }) => {
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
                <p style={{ padding: '20px', fontSize: '1.5rem' }}>Redirecting...</p>
            ) : (
                // <Login />
                <Layout>
                    <Head>
                        <title>{pageTitle} | Quality Assurance</title>
                    </Head>
                    <QAHeader userData={userData} collapsed={collapsed} toggleCollapse={toggleCollapse} />
                    <Layout className="site-layout">
                        <QASideMenu collapsed={collapsed} />
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px 24px 22rem',
                                padding: 24,
                                minHeight: 280,
                                overflowX: 'auto',
                                transition: 'ease all 0.5s',
                            }}
                        >
                            <div className="page-title">{pageTitle}</div>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            )}
        </>
    );
};

export default CSTMainLayout;
