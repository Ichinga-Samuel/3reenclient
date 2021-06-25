import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, BellFilled } from '@ant-design/icons';
import { QAHeaderContainer } from './CSTGeneral.styled';
import { LogoIcon, ProfileIcon } from '@/utils/Icons';
import QANotification from '@/components/QualityAssurance/QANotification';
import Link from 'next/link';

const QAHeader = (props: any) => {
    const { collapsed, toggleCollapse, userData } = props;
    const [visible, setVisible] = useState(false);

    const loggedUser = JSON.parse(userData);

    const closeNotification = () => {
        setVisible(false);
    };

    const openNotification = () => setVisible(!visible);

    return (
        <>
            <QAHeaderContainer className="trigger">
                <div className="logoHolder">
                    <Link href="/cst">
                        <a>
                            <LogoIcon />
                        </a>
                    </Link>
                    <div
                        className="icon"
                        onClick={toggleCollapse}
                        onKeyDown={toggleCollapse}
                        role="button"
                        tabIndex={0}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </div>
                </div>
                <div className="profileDetails">
                    <div
                        className="notification"
                        onClick={openNotification}
                        onKeyPress={openNotification}
                        tabIndex={0}
                        role="button"
                    >
                        <BellFilled />
                    </div>
                    <div className="profile">
                        <ProfileIcon />
                        <div className="detail">
                            <p>Welcome, {loggedUser?.fullName} </p>
                            <span>{'Customer Success Team'}</span>
                        </div>
                    </div>
                </div>
            </QAHeaderContainer>
            <QANotification visible={visible} close={closeNotification} />
        </>
    );
};

export default QAHeader;
