import React from 'react';
import SalesRepSidebar from '../../Sidebar/Sidebar';

import SalesRepHeader from '../../UserMonitor/Header/Header';
import SalesInbox from './Inbox/Inbox';

import { MessagesStyled } from './Messages.styled';

const Messages = () => {
    return (
        <MessagesStyled>
            <SalesRepSidebar />
            <div className="contain container">
                <SalesRepHeader />

                <h2>Messages</h2>

                <h3>Inbox</h3>
                <div>
                    <SalesInbox name={'Jack Hanniel'} />
                    <SalesInbox name={'Jack Hanniel'} />

                    <SalesInbox name={'Jack Hanniel'} />
                </div>
                <div className="chat">
                    <div className="card message__box col-lg-6">
                        <div className="card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptatum. Quod
                                ratione possimus nisi corrupti, sit quia, culpa deleniti voluptatibus recusandae at
                                dolor esse ipsum laborum minus vero! Minima, alias.
                            </p>
                        </div>
                    </div>
                    <div className="card message__box col-lg-6">
                        <div className="card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, voluptatum. Quod
                                ratione possimus nisi corrupti, sit quia, culpa deleniti voluptatibus recusandae at
                                dolor esse ipsum laborum minus vero! Minima, alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MessagesStyled>
    );
};

export default Messages;
