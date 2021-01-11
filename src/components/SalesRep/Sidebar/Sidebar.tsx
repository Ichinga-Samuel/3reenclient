/* eslint-disable prettier/prettier */
import React from 'react';
import { Sidebar, SidebarContent } from './Sidebar.styled';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton, TertiaryButton, LogOutButton } from './ButtonStyled';

export const SalesRepSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent>
                <div className="logo mx-3 my-3">
                    <img src="/Icons/logo.png" alt="3reenshop logo" />
                </div>

                <PrimaryButton className="btn-primary img">
                    <img src="/Icons/usermonitor.svg" alt="" />
                    <span>User Monitor</span>
                </PrimaryButton>

                <SecondaryButton>
                    <img src="/Icons/messages.svg" alt="" />
                    <Link href="/salesrepresentative/messages">
                        <span>Messages</span>
                    </Link>
                </SecondaryButton>

                <TertiaryButton>REGISTER CUSTOMERS</TertiaryButton>

                <LogOutButton>
                    <img src="/Icons/Logout.svg" alt="" />
                </LogOutButton>
            </SidebarContent>
        </Sidebar>
    );
};

export default SalesRepSidebar;
