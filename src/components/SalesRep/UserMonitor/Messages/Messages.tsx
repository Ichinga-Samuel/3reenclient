import React from 'react';
import SalesRepSidebar from '../../Sidebar/Sidebar';

import SalesRepHeader from '../../UserMonitor/Header/Header';

import { MessagesStyled } from './Messages.styled';

const Messages = () => {
    return (
        <MessagesStyled>
            <SalesRepSidebar />
            <div className="contain container">
                <SalesRepHeader />

                <h2>Messages</h2>
            </div>
        </MessagesStyled>
    );
};

export default Messages;
