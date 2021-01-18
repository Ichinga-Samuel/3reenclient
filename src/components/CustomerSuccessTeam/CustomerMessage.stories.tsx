/* eslint-disable prettier/prettier */
import React from 'react';
import { UserId, NotifyUser } from './User/User';
import { MessageContent } from './styles//CustomerMessageStyled';
import messager from './Icons/Avatar.svg';
import messagerAvatar from './Icons/messager-avatar.svg';
import shareIcon from './Icons/share-icon.svg';
import { SubmitButton } from './Button/CustomerButtonStyled';

export default {
    title: 'CustomerSuccessTeam',
};

export const Customermessage = () => {
    return (
        <>
            <NotifyUser />
            <UserId />
            <MessageContent>
                <div className="message-title">Messages</div>
                <div className="col">
                    <div className="message-navbar_link">
                        <h4 className="message-inbox">Inbox</h4>
                    </div>
                    <div className="message-navbar_link">
                        <h4 className="message-inbox">Inbox</h4>
                        <ul>
                            <li className="col current">
                                <img src={messager} alt="" className="mglf20" />
                                <div className="messager-name">
                                    <p>Jack Hanniel</p>
                                    <p>Admin 002</p>
                                </div>
                            </li>
                            <li className="col">
                                <img src={messagerAvatar} alt="" className="mglf20" />
                                <div className="messager-name">
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
                        <div className="col send-message_col">
                            <div className="share-col">
                                <img src={shareIcon} alt="" />
                            </div>
                            <div className="message-input">
                                <input type="text" name="text" id="text" placeholder="type messages" />
                            </div>
                            <div>
                                <SubmitButton>Send Message</SubmitButton>
                            </div>
                        </div>
                    </div>
                </div>
            </MessageContent>
        </>
    );
};
