import React from 'react';
import Link from 'next/link';
import {
    CustomerServiceIcon,
    ReviewIcon,
    OrderDisplayIcon,
    InventoryIcon,
    DashboardIcon,
} from '@/components/AdminPages/icons/Icons';

import { CancelIcon } from '@/components/AdminPages/icons/Icons';
// import ProfileIcon from './ProfileIcon.svg';

// const [movedIn, setMovedIn] = useState(false);
const SideBar = ({ setMovedIn }) => {
    return (
        <>
            <div>
                <div className="sideNavbarControl">
                    <div>
                        <img alt="3reen profile logo" className="sidebarNavControlLeftItem" src="" />
                    </div>

                    <div
                        className="sidebarNavControlRightItem"
                        role="button"
                        tabIndex={0}
                        onMouseDown={() => setMovedIn((prevState) => !prevState)}
                    >
                        <CancelIcon />
                    </div>
                </div>
            </div>

            {/**/}

            <div className="sidebarTopText">
                <h4>Monitor your</h4>
                <h1>Vendor portal</h1>
                <button> Create Product </button>
            </div>

            <Link href="/" passHref>
                <a className="" style={{ color: 'white' }}>
                    <span className="sideBarIcon">
                        <DashboardIcon />
                    </span>
                    Dashboard
                </a>
            </Link>
            <Link href="/" passHref>
                <a>
                    <span className="sideBarIcon">
                        <InventoryIcon />
                    </span>
                    Inventory
                </a>
            </Link>
            <Link href="/" passHref>
                <a style={{ display: 'none' }}>
                    <span className="sideBarIcon">
                        <InventoryIcon />
                    </span>
                    Inventory
                </a>
            </Link>
            <Link href="/" passHref>
                <a className="" style={{ color: 'white', paddingLeft: '42px' }}>
                    <span className="sideBarIcon"></span>
                    All Products
                </a>
            </Link>
            <Link href="/" passHref>
                <a className="inventoryDropDown" style={{ color: 'black', paddingLeft: '42px' }}>
                    <span className="sideBarIcon"></span>
                    Create Products
                </a>
            </Link>
            <Link href="/" passHref>
                <a>
                    <span className="sideBarIcon">
                        <OrderDisplayIcon />
                    </span>
                    Orders Display
                </a>
            </Link>
            <Link href="/" passHref>
                <a>
                    <span className="sideBarIcon">
                        <ReviewIcon />
                    </span>
                    Review
                </a>
            </Link>
            <Link href="/" passHref>
                <a>
                    <span className="sideBarIcon">
                        <CustomerServiceIcon />
                    </span>
                    Customer Service
                </a>
            </Link>
        </>
    );
};

export default SideBar;
