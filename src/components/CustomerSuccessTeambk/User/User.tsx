/* eslint-disable prettier/prettier */
import React from 'react';
import { NotifyUserIcon, UserInfo, UserName, UserRep } from './UserStyled';
import notificationIcon from '../Icons/notify-icon.svg';
import avatar from '../Icons/Avatar.svg';

export const NotifyUser = () => {
    return (
        <NotifyUserIcon>
            <img src={notificationIcon} alt="" />
        </NotifyUserIcon>
    );
};

export const UserId = () => {
    return (
        <>
            <UserInfo>
                <img src={avatar} alt="userPhoto" />
                <div>
                    <UserName>Jack Hanniel</UserName>
                    <UserRep>Customer Success Team</UserRep>
                </div>
            </UserInfo>
        </>
    );
};
