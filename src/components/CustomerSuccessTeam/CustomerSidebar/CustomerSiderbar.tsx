/* eslint-disable prettier/prettier */
import React from 'react';
// import { Sidebar } from "./CustomerSidebarStyled"
import { PrimaryButton, SecondaryButton, TertiaryButton, LogOutButton } from '../Button/CustomerButtonStyled';
import clipBoard from '../Icons/clipboard.svg';
import logOut from '../Icons/Log out.svg';
import cstLogo from '../Icons/CST-logo.svg';
import notifyIcon from '../Icons/notify.png';
import '../CustomerSuccessTeam.css';
import { Sidebar, SidebarContent } from './CustomerSidebarStyled';

export const CustomerSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent>
                <img src={cstLogo} alt="" />

                <PrimaryButton className="btn-primary img">
                    <img src={clipBoard} alt="" />
                    <span>Production Information</span>
                </PrimaryButton>

                <SecondaryButton>
                    <img src={notifyIcon} alt="" />
                    <span>Order Notification</span>
                </SecondaryButton>

                <SecondaryButton>
                    <img src={notifyIcon} alt="" />
                    <span>Messages</span>
                </SecondaryButton>

                <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                <LogOutButton>
                    <img src={logOut} alt="" />
                </LogOutButton>
            </SidebarContent>
        </Sidebar>
    );
};
