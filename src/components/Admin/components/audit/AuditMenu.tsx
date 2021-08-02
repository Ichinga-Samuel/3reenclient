import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DashOutlined } from '@ant-design/icons';

export const AuditMenu = ({ record, ...props }) => {
    const menu = (
        <Menu className="tableaction team">
            <Menu.Item key="0" onClick={() => props.getOneUser(record)}>
                View Product
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="ant-dropdown-link">
                <DashOutlined />
            </a>
        </Dropdown>
    );
};
