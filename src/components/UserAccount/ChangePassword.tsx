import { Button, Input } from 'antd';
import React from 'react';
import UserWebLayout from '../UserLayout/UserWebLayout';
import { PasswordForm } from './UserCustomerProfile.styled';
import UserSideNav from './UserSideNav';

const ChangePassword = () => {
    return (
        <UserWebLayout webtitle="Change Password">
            <div style={{ display: 'flex' }}>
                <UserSideNav />
                <PasswordForm>
                    <h2>Change Your Password</h2>
                <form className="login__form" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="password">Current Password</label>
                        <Input size="large" style={{ height: '46px' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <Input.Password size="large" style={{ height: 'auto' }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <Input.Password size="large" style={{ height: 'auto' }} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <Button type="primary" size="large" block>
                            Reset Password
                        </Button>
                    </div>
                </form>
                </PasswordForm>
            </div>
        </UserWebLayout>
    );
};

export default ChangePassword;
