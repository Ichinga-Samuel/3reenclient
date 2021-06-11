import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { Header } = Layout;

const QAHeader = (props) => {
    const { collapsed, toggleCollapse } = props;

    return (
        <Header className="site-layout-background">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggleCollapse,
            })}
        </Header>
    );
};

export default QAHeader;
