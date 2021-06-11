import React, { useState } from 'react';
import QAHeader from '@/components/QualityAssurance/Header/QAHeader';
import QASideMenu from '@/components/QualityAssurance/QASideMenu/QASideMenu';
import { Layout } from 'antd';
const { Content } = Layout;

const QALayout = () => {
    const [collapsed, setcollapsed] = useState(false);

    const toggleCollapse = () => setcollapsed(!collapsed);
    return (
        <>
            <Layout>
                <QASideMenu collapsed={collapsed} />
                <Layout className="site-layout">
                    <QAHeader collapsed={collapsed} toggleCollapse={toggleCollapse} />
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default QALayout;
