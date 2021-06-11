import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';
// import { LogoWhiteIcon } from '@/utils/Icons';
const { Sider } = Layout;
const QASideMenu = (props) => {
    const { collapsed } = props;
    console.log(collapsed);
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">{/* <LogoWhiteIcon /> */}</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link href="/qa/orders">Orders</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <Link href="/qa/messages">Messages</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default QASideMenu;
