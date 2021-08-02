import { Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Edit, Delete } from '@material-ui/icons';
// import Link from 'next/link';

export const UserMenu = ({ record, ...props }) => {
    const menu = (
        <Menu>
            <Menu.Item key="0" onClick={() => props.confirmNewPassword(record)}>
                <Edit /> Reset Password
            </Menu.Item>
            <Menu.Item key="1">
                <Delete /> Delete
            </Menu.Item>
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

