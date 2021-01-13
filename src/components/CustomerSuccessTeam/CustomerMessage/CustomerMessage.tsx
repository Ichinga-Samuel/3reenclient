/* eslint-disable prettier/prettier */
import React from 'react';
import { UserId, NotifyUser } from '../User/User';
import { MessageContent } from './CustomerMessageStyled';
import foo from '../Icons/Avatar.svg';

export const CustomerMessage = () => {
    return (
        <>
            <NotifyUser />
            <UserId />
            <MessageContent>
                <div className="message-title">Messages</div>
                <div className="col">
                    <div className="message-navbar_link">
                        Inbox
                        <ul>
                            <li className="col">
                                <img src={foo} alt="" />
                                <div>
                                    <p>Jack Hanniel</p>
                                    <p>Admin 002</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="message-box_col">
                        <div className="message-box">
                            <div className="message-box_content">
                                <p className="message-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sagittis elementum
                                    turpis eleifend pharetra, arcu, tempor in.
                                </p>
                                <p className="message-date">02/01/21 08:35pm</p>
                            </div>
                            <div className="message-box_content">
                                <p className="message-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sagittis elementum
                                    turpis eleifend pharetra, arcu, tempor in.
                                </p>
                                <p className="message-date">02/01/21 08:35pm</p>
                            </div>
                            <div className="message-box_content">
                                <p className="message-date">02/01/21 08:35pm</p>
                                <p className="message-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel sagittis elementum
                                    turpis eleifend pharetra, arcu, tempor in.
                                </p>
                            </div>
                        </div>
                        {/* alert */}
                    </div>
                </div>
            </MessageContent>
        </>
    );
};
