/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    LogOutButton,
    CurrentButton,
} from '../Button/CustomerButtonStyled';
import clipBoard from '../Icons/clipboard.svg';
import logOut from '../Icons/Log out.svg';
import cstLogo from '../Icons/CST-logo.svg';
import chatIcon from '../Icons/chat-icon.svg';
import notifyIcon from '../Icons/notify.png';
import notifyIcon1 from '../Icons/notification 1-1.png';
import clipBoard1 from '../Icons/clipboard-1.png';
import '../CustomerSuccessTeam.css';
import { Sidebar, SidebarContent } from './CustomerSidebarStyled';
// import { MainWrapper } from '../CustomerProdInfo/CustomerProdInfo';
import { DeliveryDetails } from '../CustomerDeliveryDetails/DeliveryDetails';
import { CustomerMessage } from '../CustomerMessage/CustomerMessage';
// import { ProdInfo } from '../CustomerProdInfo/CustomerProdInfoStyled';

// import { action } from '@storybook/addon-actions';
// import {withKnobs} from "@storybook/addon-knobs"

// export default { title: 'Button', component: ViewProduct, decorators: [withKnobs]}

export const CustomerSidebar = () => {
    const [notifyCustomer, setNotifyCustomer] = useState(' ');
    const [message, setMessage] = useState(' ');
    const [primarybtn, setPrimartBtn] = useState(
        <>
            <img src={clipBoard1} alt="" />
            <span>Production Information</span>
        </>,
    );
    const [secondaryBtn, setSecondaryBtn] = useState(
        <>
            <img src={notifyIcon} alt="" />
            <span>Order Notification</span>
        </>,
    );
    const [mesaggeBtn, setMessageBtn] = useState(
        <>
            <img src={chatIcon} alt="" />
            <span>Messages</span>
        </>,
    );

    const displayNotifyInfo = () => {
        setNotifyCustomer(<DeliveryDetails />);
        setSecondaryBtn(
            <>
                <CurrentButton>
                    <img src={notifyIcon1} alt="" />
                    <span>Order Notification</span>
                </CurrentButton>
            </>,
        );
        setPrimartBtn(
            <>
                <img src={clipBoard1} alt="" />
                <span>Production Information</span>
            </>,
        );
        setMessageBtn(
            <>
                <img src={chatIcon} alt="" />
                <span>Messages</span>
            </>,
        );
    };

    const displayCustomerMessage = () => {
        setMessage(<CustomerMessage />);
        setNotifyCustomer(' ');
        setMessageBtn(
            <>
                <CurrentButton>
                    <img src={chatIcon} alt="" />
                    <span>Messages</span>
                </CurrentButton>
            </>,
        );
        setPrimartBtn(
            <>
                <img src={clipBoard1} alt="" /> <span>Production Information</span>
            </>,
        );
        setSecondaryBtn(
            <>
                <img src={notifyIcon} alt="" />
                <span>Order Notification</span>
            </>,
        );
    };

    const displayMainWrapper = () => {
        setNotifyCustomer(' ');
        setMessage(' ');
        setPrimartBtn(
            <>
                <CurrentButton>
                    <img src={clipBoard} alt="" />
                    <span>Production Information</span>
                </CurrentButton>
            </>,
        );
        setSecondaryBtn(
            <>
                <img src={notifyIcon} alt="" />
                <span>Order Notification</span>
            </>,
        );
        setMessageBtn(
            <>
                <img src={chatIcon} alt="" />
                <span>Messages</span>
            </>,
        );
    };

    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <img src={cstLogo} alt="" />

                    <PrimaryButton onClick={displayMainWrapper}>{primarybtn}</PrimaryButton>

                    <SecondaryButton onClick={displayNotifyInfo}>{secondaryBtn}</SecondaryButton>

                    <SecondaryButton onClick={displayCustomerMessage}>{mesaggeBtn}</SecondaryButton>

                    <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                    <LogOutButton>
                        <img src={logOut} alt="" />
                    </LogOutButton>
                </SidebarContent>
            </Sidebar>
            {notifyCustomer}
            {message}
        </>
    );
};
