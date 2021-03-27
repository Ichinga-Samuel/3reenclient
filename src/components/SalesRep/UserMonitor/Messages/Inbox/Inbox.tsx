import React from 'react';

import { InboxStyled } from './Inbox.styled';

const Messages = ({ name }) => {
    return (
        <InboxStyled>
            <div className="container">
                <div className="icons user__details">
                    <div className="avatar">
                        <img src="/Icons/Avatar.svg" alt="" />
                    </div>

                    <div className="user__name">
                        <h5>{name}</h5>
                        <p>Admin 002</p>
                    </div>
                </div>
            </div>
        </InboxStyled>
    );
};

export default Messages;
