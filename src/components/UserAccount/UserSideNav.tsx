import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import { SideNav } from './UserCustomerProfile.styled';

const UserSideNav = () => {
    return (
            <SideNav>
                <div>
                    <Row>
                        <Col>
                        <ul>
                            <li>
                                <Link href='/profile/user-profile'>
                                    <a>My Account Overview</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/profile/orders'>
                                    <a>Order</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a>Address Book</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/profile/user-password-reset'>
                                    <a>Change Password</a>
                                </Link>
                            </li>
                        </ul>
                        </Col>
                    </Row>
                </div>
            </SideNav>
    );
};

export default UserSideNav;
