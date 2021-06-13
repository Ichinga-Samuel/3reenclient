import React, { useState, useEffect } from 'react';
import QAHeader from '@/components/QualityAssurance/QALayout/QAHeader';
import QASideMenu from '@/components/QualityAssurance/QALayout/QASideMenu';
import { Layout } from 'antd';
const { Content } = Layout;
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import Head from 'next/head';
// import Login from '@/pages/qualityassurance/login';

const QAMainLayout = ({ pageTitle, children }) => {
    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapse = () => setcollapsed(!collapsed);

    const router = useRouter();

    const token = getFromLocalStorage('qatoken');
    const userData = getFromLocalStorage('qauser') || null;

    useEffect(() => {
        if (!token && token === null && userData === null) {
            router.push('/qualityassurance/login');
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
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                overflowX: 'auto',
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

export default QAMainLayout;
