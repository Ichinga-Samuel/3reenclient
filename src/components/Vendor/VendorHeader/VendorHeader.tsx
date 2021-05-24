import React from 'react';
import Link from 'next/link';
import { VendorHeaderStyled } from './vendorHeader.styled';
import { LogoIcon, ProfileIcon } from '@/utils/Icons';
import { CaretDownFilled, BellFilled } from '@ant-design/icons';
// import Search from '@/components/Products/Search';
// import fakedata from '@/components/Products/fakeData';

const VendorHeader = () => {
    return (
        <VendorHeaderStyled>
            <div className="Header">
                <div className="Brand">
                    <Link href="/">
                        <a>
                            <LogoIcon />
                            {/* <img src="/img/logo.svg" alt="3reenshop logo" /> */}
                        </a>
                    </Link>
                </div>
                {/* <div className="Input">
                    <input type="text" className="Search" placeholder="Search products..." />
                    <button className="SearchBtn">Search</button>
                </div> */}
                <div className="Cart">
                    <BellFilled />
                </div>
                <div className="Profile">
                    <ProfileIcon />
                    <p>Hi, Jack </p>
                    <span>
                        <CaretDownFilled />
                    </span>
                </div>
            </div>
        </VendorHeaderStyled>
    );
};

export default VendorHeader;
