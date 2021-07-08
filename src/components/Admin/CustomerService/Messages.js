import React from 'react';
import Profile from '../PageBuilder/Profile';
import MainTab from './MainTab';
import { MainContainer, HeaderContainer } from '../PageBuilder/Styled';

function Messages() {
    return (
        <MainContainer>
            <Profile active={true} />
            <HeaderContainer>
                <div className="rec">
                    <div className="pageheader">
                        <h1>Messages</h1>
                    </div>
                </div>
            </HeaderContainer>
            <MainTab />
        </MainContainer>
    );
}

export default Messages;
