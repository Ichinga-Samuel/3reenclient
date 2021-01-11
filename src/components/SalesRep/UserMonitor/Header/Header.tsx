/* eslint-disable prettier/prettier */
import React from 'react';
import { Header } from './Header.styled';

export const SalesRepHeader = () => {
    return (
        <Header>
            <div className="icons">
                <img src="/Icons/Notification.svg" alt="" />
            </div>

            <div className="icons user__details">
                <img src="/Icons/Avatar.svg" alt="" />

                <div className="user__name">
                    <h5>Jack Hanniel</h5>
                    <p>Sales Rep</p>
                </div>
            </div>
        </Header>
    );
};

export default SalesRepHeader;
