import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {  AuditOutlined } from '@ant-design/icons';
import { CustomerService, Dashboard, Inventory, LogoIcon } from '@/utils/Icons';
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
import { LogisticCompanyIcon, OrderDisplayIcon, SRMonitorIcon, UserMonitorIcon } from '@/components/AdminPages/icons/Icons';
const { Sider } = Layout;

const AdminSideMenu = (props: any) => {
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
            router?.push('/admin/login');
        }, 2000);
    };

    const cancelLogout = () => {
        setVisible(false);
    };
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.pathname]}>
                <Link href="/admin/dashboard">
                    <a >
                        <LogoIcon  />
                    </a>
                </Link>
                <Menu.Item key="1" icon={<Dashboard/>}>
                    <Link href="/admin/dashboard"> Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<Inventory />}>
                    <Link href="/admin/inventory"> Inventory</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserMonitorIcon />}>
                    <Link href="/admin/user_monitoring"> User Monitoring</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<LogisticCompanyIcon />}>
                    <Link href="/admin/logistics"> Logistic Companies</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<AuditOutlined />}>
                    <Link href="/admin/audit"> Audit</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<OrderDisplayIcon/>}>
                    <Link href="/admin/orders">Orders Display</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<SRMonitorIcon />}>
                    <Link href="/admin/sr_monitor">SR Monitor</Link>
                </Menu.Item>
                <Menu.Item key="8" icon={<CustomerService />}>
                    <Link href="/admin/customer_service">Customer Service</Link>
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

export default AdminSideMenu;
