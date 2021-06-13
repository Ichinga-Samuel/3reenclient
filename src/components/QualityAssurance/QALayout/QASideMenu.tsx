import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Button, Popconfirm } from 'antd';
import {
    removeFromLocalStorage,
    removeFromSessionStorage,
    emptySessionStorage,
    emptyLocalStorage,
} from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import { LogoutIcon } from '@/utils/Icons';
const { Sider } = Layout;

const QASideMenu = (props: any) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { collapsed } = props;

    const showPopconfirm = () => {
        setVisible(true);
    };

    const router = useRouter();

    const logoutUser = () => {
        setConfirmLoading(true);
        removeFromLocalStorage('token');
        removeFromSessionStorage('token');
        emptySessionStorage();
        emptyLocalStorage();
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            router?.push('/qualityassurance/login');
        }, 2000);
    };

    const cancelLogout = () => {
        setVisible(false);
    };
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link href="/qualityassurance/orders">Orders</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<MessageOutlined />}>
                    <Link href="/qualityassurance/messages">Messages</Link>
                </Menu.Item>
            </Menu>
            <div className="__footer">
                <ul>
                    <li>
                        <Popconfirm
                            title="Are you sure you want to logout?"
                            visible={visible}
                            onConfirm={logoutUser}
                            onCancel={cancelLogout}
                            okText="Yes"
                            okButtonProps={{ loading: confirmLoading, danger: true }}
                            cancelText="No"
                        >
                            <Button block onClick={showPopconfirm}>
                                <LogoutIcon /> Log out
                            </Button>
                        </Popconfirm>
                    </li>
                </ul>
            </div>
        </Sider>
    );
};

export default QASideMenu;
