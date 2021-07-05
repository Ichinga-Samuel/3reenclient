import React from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
 width:90%;
 height:708px;
 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
 padding:10px;
 overflow:hidden;

 .sender{
    display:inline-flex;
    text-align:left;
    
 }

 .user{
    display:flex;
    flex-direction:row-reverse;
    text-align:right;
 }

 .messagetext{
    width: 471px;
    height:auto;
    margin:0 19px 26px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.67);
 }
 .messagemeta{
    width: 165px;
    height: 30px;
    background: #FAFAFA;
    margin:auto;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.38);
    text-align:center;
 }
`;
function Tab(props) {
    return props.senders.map((sender) => {
        if (props.selected === sender.name) {
            return (
                <StyledContainer>
                    <ul>
                        {sender.messages.map((message) => {
                            return (
                                <li key={message.username + Math.random()}>
                                    <div className={message.username !== 'self' ? 'sender' : 'user'}>
                                        <div className="messagetext">{message.text}</div>
                                        <div className="messagemeta">
                                            {message.date}
                                            {''} {message.time}
                                        </div>{' '}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </StyledContainer>
            );
        }
        return null;
    });
}

export default Tab;
