import React, { useState, useEffect } from 'react';
import QAHeader from '@/components/QualityAssurance/Header/QAHeader';
import QASideMenu from '@/components/QualityAssurance/QASideMenu/QASideMenu';
import { Layout } from 'antd';
const { Content } = Layout;
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import Login from '@/pages/qualityassurance/login';

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
                <Login />
            ) : (
                <Layout>
                    <QAHeader userData={userData} collapsed={collapsed} toggleCollapse={toggleCollapse} />
                    <Layout className="site-layout">
                        <QASideMenu collapsed={collapsed} />
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
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
