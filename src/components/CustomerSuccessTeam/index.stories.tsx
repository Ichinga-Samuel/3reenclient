/* eslint-disable prettier/prettier */
import React from 'react';
import './Utils.css';
import './CustomerSuccessTeam.css';
import { Homepage } from './HomePage.stories';
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    LogOutButton,
    CurrentButton,
} from './Button/CustomerButtonStyled';
import { Sidebar, SidebarContent } from './CustomerSidebar/CustomerSidebarStyled';
// import clipBoard from '../Icons/clipboard.svg';
import logOut from './Icons/Log out.svg';
import cstLogo from './Icons/CST-logo.svg';
import chatIcon from './Icons/chat-icon.svg';
// import notifyIcon from '../Icons/notify.png';
import notifyIcon1 from './Icons/notification 1-1.png';
import clipBoard from './Icons/clipboard.svg';
import { Deliverydetails } from './CustomerOrderNotification.stories';
import { Customermessage } from './CustomerMessage.stories';

export default {
    title: 'CustomerSuccessTeam',
};

export const Home = () => {
    return (
        <>
            <Homepage />
            <Homesidebar />
        </>
    );
};

export const Customerdeliverypage = () => {
    return (
        <>
            <Deliverydetails />
            <Customerdeliverysidebar />
        </>
    );
};

export const Customermessagepage = () => {
    return (
        <>
            <Customermessage />
            <Customermessagesidebar />
        </>
    );
};

// Sidebars
export const Homesidebar = () => {
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <img src={cstLogo} alt="" />

                    <CurrentButton>
                        <img src={clipBoard} alt="" />
                        <span>Production Information</span>
                    </CurrentButton>

                    <SecondaryButton>
                        <img src={notifyIcon1} alt="" />
                        <span>Order Notification</span>
                    </SecondaryButton>

                    <SecondaryButton>
                        <img src={chatIcon} alt="" />
                        <span>Messages</span>
                    </SecondaryButton>

                    <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                    <LogOutButton>
                        <img src={logOut} alt="" />
                    </LogOutButton>
                </SidebarContent>
            </Sidebar>
        </>
    );
};
export const Customerdeliverysidebar = () => {
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <img src={cstLogo} alt="" />

                    <PrimaryButton>
                        <img src={clipBoard} alt="" />
                        <span>Production Information</span>
                    </PrimaryButton>

                    <CurrentButton>
                        <img src={notifyIcon1} alt="" />
                        <span>Order Notification</span>
                    </CurrentButton>

                    <SecondaryButton>
                        <img src={chatIcon} alt="" />
                        <span>Messages</span>
                    </SecondaryButton>

                    <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                    <LogOutButton>
                        <img src={logOut} alt="" />
                    </LogOutButton>
                </SidebarContent>
            </Sidebar>
        </>
    );
};
export const Customermessagesidebar = () => {
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <img src={cstLogo} alt="" />

                    <PrimaryButton>
                        <img src={clipBoard} alt="" />
                        <span>Production Information</span>
                    </PrimaryButton>

                    <SecondaryButton>
                        <img src={notifyIcon1} alt="" />
                        <span>Order Notification</span>
                    </SecondaryButton>

                    <CurrentButton>
                        <img src={chatIcon} alt="" />
                        <span>Messages</span>
                    </CurrentButton>

                    <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                    <LogOutButton>
                        <img src={logOut} alt="" />
                    </LogOutButton>
                </SidebarContent>
            </Sidebar>
        </>
    );
};
