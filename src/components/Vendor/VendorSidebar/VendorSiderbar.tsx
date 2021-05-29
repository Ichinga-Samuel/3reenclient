/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Dashboard, Order, Inventory, Ratings, CustomerService, LogoutIcon } from '@/utils/Icons';
import { VendorSidebarStyled } from './VendorSidebarStyled';
import { useRouter } from 'next/router';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import {
    removeFromLocalStorage,
    removeFromSessionStorage,
    emptySessionStorage,
    emptyLocalStorage,
} from '@/utils/browserStorage';

const VendorSiderbar = () => {
    const router = useRouter();
    // console.log('toure', router);

    const dropDown = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const openSubMenu = () => setIsOpen(!isOpen);

    const showPopconfirm = () => {
        setVisible(true);
    };

    const logoutUser = () => {
        setConfirmLoading(true);
        removeFromLocalStorage('token');
        removeFromSessionStorage('token');
        emptySessionStorage();
        emptyLocalStorage();
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            router.push('/vendor/login');
        }, 2000);
    };

    const cancelLogout = () => {
        setVisible(false);
    };

    const createProduct = () => {
        router.push('/vendor/inventory/create-product');
    };

    useEffect(() => {
        const pageEffectClick = (e) => {
            console.log(e);
            if (dropDown.current !== null && !dropDown.current.contains(e.target)) {
                setIsOpen(!isOpen);
            }
        };
        if (isOpen) {
            window.addEventListener('click', pageEffectClick);
        }
        return () => {
            window.removeEventListener('click', pageEffectClick);
        };
    }, [isOpen]);

    // className={router.pathname == '/vendor/dashboard' ? 'active' : ''}
    return (
        <VendorSidebarStyled>
            <div className="vHeader">
                <h3>Monitor your</h3>
                <h1>Vendor Portal</h1>
            </div>
            <div className="vendorProduct" onClick={createProduct} onKeyDown={createProduct} tabIndex={0} role="button">
                <span>Create Product</span>
            </div>
            <div className="vendorMenu">
                <ul>
                    <li className="active">
                        <Link href="/vendor/dashboard">
                            <a>
                                <Dashboard />
                                <span>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li className={`has-dropdown`} onClick={openSubMenu} onKeyPress={openSubMenu}>
                        <div>
                            <Inventory />
                            <span>Inventory</span>
                            {!isOpen ? (
                                <CaretDownOutlined style={{ paddingLeft: '10rem' }} />
                            ) : (
                                <CaretUpOutlined style={{ paddingLeft: '10rem' }} />
                            )}
                        </div>
                        <div className={`drop-cont ${isOpen ? 'active' : 'inactive'}`} ref={dropDown}>
                            <ul>
                                <li>
                                    <Link href="/vendor/inventory/allproducts">
                                        <a>All Products</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vendor/inventory/create-product">
                                        <a>Create Product</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/vendor/orders">
                            <a>
                                <Order />
                                <span>Orders Display</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vendor/reviews">
                            <a>
                                <Ratings />
                                <span>Reviews</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vendor/customerservices">
                            <a>
                                <CustomerService />
                                <span>Customer Service</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="__footer">
                <ul>
                    <li>
                        <Popconfirm
                            title="Are you sure you want to logout?"
                            visible={visible}
                            onConfirm={logoutUser}
                            onCancel={cancelLogout}
                            okText="Yes"
                            okButtonProps={{ loading: confirmLoading, danger: true }}
                            cancelText="No"
                        >
                            <Button block onClick={showPopconfirm}>
                                <LogoutIcon /> Log out
                            </Button>
                        </Popconfirm>
                    </li>
                </ul>
            </div>
        </VendorSidebarStyled>
    );
};

export default VendorSiderbar;
