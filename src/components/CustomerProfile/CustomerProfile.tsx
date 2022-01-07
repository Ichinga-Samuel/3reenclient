import React, { useEffect, useState } from 'react';
//import axios from "axios"
import { AuthHeader, UserLoginContainer } from '@/components/UserAccount/UserAccount.styled';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';
import { Row, Col, Input, Button, notification, Spin } from 'antd';
import Link from 'next/link';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { APP_BASE } from '@/utils/ApiList';
import axios from 'axios';
const Profile = () => {
    const [dataInfo, setUserData] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const token = getFromLocalStorage('usertoken');

        const getUserProfile =  async () => : string[] {
            setLoading(true);
            try {
                const { data } = await axios.get(`${APP_BASE}/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(data.user.fullName);
                setUserData(data.user);
                setLoading(false);
            } catch (err) {
                notification.error({
                    message: 'Error',
                    description: err?.response?.data?.message,
                });
            }
        };
        getUserProfile();
    }, []);
    return (
        <>
            <UserWebLayout webtitle="My Account">
                {loading ? (
                    <div className="fetchingloading">
                      <Spin />
                    <small>Fetching Data</small>
                    </div>
                ) : (
                    <UserLoginContainer data-aos="zoom-in">
                        <AuthHeader>CUSTOMER PROFILE</AuthHeader>
                        <div className="login register">
                            <>
                                <form className="login__form" autoComplete="off">
                                    <Row gutter={24}>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name</label>
                                                <Input
                                                    size="large"
                                                    value={dataInfo.fullName}
                                                    style={{ height: '46px' }}
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Input size="large" value={dataInfo.email} style={{ height: '46px' }} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Input.Password size="large" style={{ height: 'auto' }} />
                                            </div>
                                        </Col>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="password">Confirm Password</label>
                                                <Input.Password size="large" style={{ height: 'auto' }} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="fullname">Phone Number</label>
                                                <Input size="large" style={{ height: '46px' }} />
                                            </div>
                                        </Col>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="email">STATE</label>
                                                <Input size="large" style={{ height: '46px' }} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={30}>
                                        <Col xs={24} xl={12} lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="password">Address</label>
                                                <Input.TextArea size="large" style={{ height: 'auto' }} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="form-group">
                                        <Row>
                                            <Col
                                                xs={{ span: 24, offset: 0 }}
                                                xl={{ span: 8, offset: 7 }}
                                                lg={{ span: 8, offset: 7 }}
                                            >
                                                <Link href="/profile/update-user-profile">
                                                    <Button type="primary" size="large" block>
                                                        EDIT PROFILE
                                                    </Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </form>
                            </>
                        </div>
                    </UserLoginContainer>
                )}
            </UserWebLayout>
        </>
    );
};

export default Profile;
