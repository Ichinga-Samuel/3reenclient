import React, { useState } from 'react';
import QAHeader from '@/components/QualityAssurance/Header/QAHeader';
import QASideMenu from '@/components/QualityAssurance/QASideMenu/QASideMenu';
import { Layout } from 'antd';
const { Content } = Layout;

const QALayout = ({ pageTitle, children }) => {
    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapse = () => setcollapsed(!collapsed);
    return (
        <>
            <Layout>
                <QAHeader collapsed={collapsed} toggleCollapse={toggleCollapse} />
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
        </>
    );
};

export default QALayout;
