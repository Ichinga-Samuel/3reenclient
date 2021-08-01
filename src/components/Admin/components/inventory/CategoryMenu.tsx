import { Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Delete } from '@material-ui/icons';

export const CategoryMenu = ({ ...props}) => {
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => props.deleteCategory()}>
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