import { Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Delete, Edit } from '@material-ui/icons';

export const LogisticMenu = ({ record, ...props }) => {
    const menu = (
        <Menu>
        <Menu.Item key="0" onClick={() => props.updateCompany(record)}>
            <Edit /> Update Company
        </Menu.Item>
        <Menu.Item key="1" onClick={() => props.deleteCompany(record)}>
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
