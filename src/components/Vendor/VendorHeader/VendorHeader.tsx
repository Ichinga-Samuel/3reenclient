import React, { useState } from 'react';
import Link from 'next/link';
import { VendorHeaderStyled } from './vendorHeader.styled';
import { LogoIcon, ProfileIcon } from '@/utils/Icons';
import { CaretDownFilled, BellFilled } from '@ant-design/icons';
import VendorNotification from '../Notification/VendorNotification';
// import Search from '@/components/Products/Search';
// import fakedata from '@/components/Products/fakeData';

const VendorHeader = ({ userData }) => {
    const [visible, setVisible] = useState(false);
    // const openNotification = () => {
    //     setVisible(true);
    // };

    const loggedUser = JSON.parse(userData);

    const closeNotification = () => {
        setVisible(false);
    };

    const openNotification = () => setVisible(!visible);

    return (
        <>
            <VendorHeaderStyled>
                <div className="Header">
                    <div className="Brand">
                        <Link href="/">
                            <a>
                                <LogoIcon />
                            </a>
                        </Link>
                    </div>
                    <div
                        className="Cart"
                        onClick={openNotification}
                        onKeyPress={openNotification}
                        tabIndex={0}
                        role="button"
                    >
                        <BellFilled />
                    </div>
                    <div className="Profile">
                        <ProfileIcon />
                        {/* <img src={loggedUser.photo} alt="p" /> */}
                        <p>Hi, {loggedUser?.fullName} </p>
                        <span>
                            <CaretDownFilled />
                        </span>
                    </div>
                </div>
            </VendorHeaderStyled>
            <VendorNotification visible={visible} close={closeNotification} />
        </>
    );
};

export default VendorHeader;
