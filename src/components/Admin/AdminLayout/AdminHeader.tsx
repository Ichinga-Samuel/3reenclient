import React, { useState } from 'react';
import { BellFilled } from '@ant-design/icons';
import { QAHeaderContainer } from '@/components/QualityAssurance/QALayout/QAGeneral.styled';
import { ProfileIcon } from '@/utils/Icons';
import QANotification from '@/components/QualityAssurance/QANotification';

const AdminHeader = (props: any) => {
    const [visible, setVisible] = useState(false);

    //const loggedUser = JSON.parse(userData);

    const closeNotification = () => {
        setVisible(false);
    };

    const openNotification = () => setVisible(!visible);

    return (
        <>
            <QAHeaderContainer className="trigger">
                
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
                            <p>{/*loggedUser?.fullName*/} </p>
                            <span>{'Jack Daniel'}</span>
                        </div>
                    </div>
                </div>
            </QAHeaderContainer>
            <QANotification visible={visible} close={closeNotification} />
        </>
    );
};

export default AdminHeader;
