import React from 'react';
import Styled from 'styled-components';
import { AvatarIcon } from '../icons/Icons';

const DetailStyle = Styled.div`
display:inline-flex;
width: 288px;
height: 79px; 
justify-content:space-around;
P#name{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin:0;
}
P#username{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin:0;
}

.thumbnail{
    width: 25%;
   
    margin:auto;
}
.detail{
    width: 80%;
    margin:auto;
    text-align:left;
}
`;

function ContactDetails(props) {
    return (
        <DetailStyle>
            <div className="thumbnail">
                <AvatarIcon isSelected={props.isSelected} />
            </div>
            <div className="detail">
                <p id="name"> {props.name}</p>
                <p id="username">{props.username}</p>
            </div>
        </DetailStyle>
    );
}

export default ContactDetails;
