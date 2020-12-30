/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React from 'react';
import './CustomerSuccessTeam.css';
// import { action } from '@storybook/addon-actions';
import './Utils.css';
import cstLogo from './Icons/CST-logo.svg';
import clipBoard from './Icons/clipboard.svg';
import notifyIcon from './Icons/notify-icon.png';
import logOut from './Icons/Log out.svg';
import avatar from './Icons/Avatar.svg';
import boxImg from './Images/Box-img.svg';

export const CustomerSuccessTeamSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-logo">
                    <img src={cstLogo} alt="" />
                </div>
                <button className="btn-primary">
                    <img src={clipBoard} alt="" />
                    <span>Production Information</span>
                </button>
                <button className="btn-secondary">
                    <img src={notifyIcon} alt="" />
                    <span>Order Notification</span>
                </button>
                <button className="btn-tertiary">REGISTER CUSTOMERS</button>
                <button className="log-out">
                    <img src={logOut} alt="" />
                </button>
            </div>
        </div>
    );
};

export const CustomerSuccessTeam = () => {
    return (
        <>
            <div className="column">
                <CustomerSuccessTeamSidebar />
                <div className="cst-details">
                    <div className="prod-info-content">Product Information</div>
                    <div className="user-id">
                        <img src={avatar} alt="userPhoto" />
                        <div className="user-details">
                            <div className="user-name">Jack Hanniel</div>
                            <div className="sales-rep">Sales Rep.</div>
                        </div>
                    </div>

                    <div className="prod-info-box">
                        <div className="column">
                            <div className="col">
                                <img src={boxImg} alt="" />
                                <div className="items">
                                    <p>Fashion Bags</p>
                                    <p>#289484</p>
                                </div>
                            </div>
                            <div className="b">B</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
