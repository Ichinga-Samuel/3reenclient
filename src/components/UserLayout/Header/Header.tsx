import React from 'react';
import { HeaderContainer } from '@/components/UserLayout/Header/Header.styled';
import { LogoIcon } from '@/utils/Icons';
import { Button, Input } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <HeaderContainer>
            <div className="userlogo">
                <LogoIcon />
            </div>
            <div className="productsearch">
                <Input />
                <Button>Search</Button>
            </div>
            <div className="nav">
                <div>Cart</div>
                <div>
                    <Button>Login</Button>
                </div>
                <div className="userprofile">
                    <div className="userprofile__avatar">A</div>
                    <div className="userprofile__name">
                        <span>Hi, Jack</span> <ArrowDownOutlined />
                    </div>
                    <div className="usermenu">
                        <ul>
                            <li>Profile</li>
                            <li>Orders</li>
                            <li className="logout">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
