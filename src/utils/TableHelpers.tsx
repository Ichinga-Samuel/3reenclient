import { Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
// import Link from 'next/link';

export const TableMenu = ({ record, onTableMenuClicked }) => {
    const onClick = (i) => {
        console.log(`Click on item ${i.key}`, i, record);
        onTableMenuClicked && onTableMenuClicked({ mode: i.key, record, ev: i });
    };
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="0">Quick View Items</Menu.Item>
            <Menu.Item key="1">Edit Item</Menu.Item>
            <Menu.Item key="2">Duplicate Item</Menu.Item>
            <Menu.Item key="3">Make Inactive</Menu.Item>
            <Menu.Item key="4">Boost Visibility</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a
                href="#"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
            >
                <MoreOutlined />
            </a>
        </Dropdown>
    );
};
