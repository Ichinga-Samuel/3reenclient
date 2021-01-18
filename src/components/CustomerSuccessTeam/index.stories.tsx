/* eslint-disable prettier/prettier */
import React from 'react';
import { Homepage } from './HomePage.stories';
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    LogOutButton,
    CurrentButton,
} from './Button/CustomerButtonStyled';
import LinkTo from '@storybook/addon-links/react';
import { Sidebar, SidebarContent } from './CustomerSidebar/CustomerSidebarStyled';
import { Deliverydetails } from './CustomerOrderNotification.stories';
import { Customermessage } from './CustomerMessage.stories';
// import clipBoard from '../Icons/clipboard.svg';
import logOut from './Icons/Log out.svg';
import cstLogo from './Icons/CST-logo.svg';
import chatIcon from './Icons/chat-icon.svg';
// import notifyIcon from '../Icons/notify.png';
import notifyIcon1 from './Icons/notification 1-1.png';
import clipBoard from './Icons/clipboard.svg';
import './Utils.css';
import './CustomerSuccessTeam.css';

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

export const Customeroderypage = () => {
    return (
        <>
            <Deliverydetails />
            <Customerordersidebar />
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

                    <LinkTo story="Customeroderypage">
                        <SecondaryButton>
                            <img src={notifyIcon1} alt="" />
                            <span>Order Notification</span>
                        </SecondaryButton>
                    </LinkTo>

                    <LinkTo story="Customermessagepage">
                        <SecondaryButton>
                            <img src={chatIcon} alt="" />
                            <span>Messages</span>
                        </SecondaryButton>
                    </LinkTo>

                    <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                    <LogOutButton>
                        <img src={logOut} alt="" />
                    </LogOutButton>
                </SidebarContent>
            </Sidebar>
        </>
    );
};
export const Customerordersidebar = () => {
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <img src={cstLogo} alt="" />

                    <LinkTo story="Home">
                        <PrimaryButton>
                            <img src={clipBoard} alt="" />
                            <span>Production Information</span>
                        </PrimaryButton>
                    </LinkTo>

                    <CurrentButton>
                        <img src={notifyIcon1} alt="" />
                        <span>Order Notification</span>
                    </CurrentButton>

                    <LinkTo story="Customermessagepage">
                        <SecondaryButton>
                            <img src={chatIcon} alt="" />
                            <span>Messages</span>
                        </SecondaryButton>
                    </LinkTo>

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

                    <LinkTo story="Home">
                        <PrimaryButton>
                            <img src={clipBoard} alt="" />
                            <span>Production Information</span>
                        </PrimaryButton>
                    </LinkTo>

                    <LinkTo story="Customeroderypage">
                        <SecondaryButton>
                            <img src={notifyIcon1} alt="" />
                            <span>Order Notification</span>
                        </SecondaryButton>
                    </LinkTo>

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
