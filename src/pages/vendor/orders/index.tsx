import React, { useState, useEffect } from 'react';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import { APP_BASE, VENDOR_ORDER } from '@/utils/ApiList';
import Link from 'next/link';
import axios from 'axios';
import { notification } from 'antd';
import { getFromLocalStorage } from '@/utils/browserStorage';

const VendorOrders = () => {
    const title = 'Orders';
    const token = getFromLocalStorage('token');

    const [loading, setloading] = useState(false);
    // const [fetching, setFetching] = useState(false);
    const [productData, setProductData] = useState();
    console.log(loading);

    useEffect(() => {
        const fetchAllProducts = async () => {
            setloading(true);
            try {
                const response = await axios.get(`${APP_BASE}${VENDOR_ORDER.getAllOrders}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { doc } = response.data;
                setProductData(doc);
                // setTotal(results);
                // notification.success({
                //     message: 'Success',
                //     description: `${results} Products Fetched Successfully`,
                //     duration: 5,
                // });
                console.log('res', response);
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            } catch (err) {
                console.log('error', err);
                notification.error({
                    message: 'Orders Error',
                    description: err,
                    duration: 15,
                });
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            }
        };
        // return () => {};
        fetchAllProducts();
    }, [token]);

    return (
        <div>
            <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
                <div>
                    <h3>Order Page Should be here</h3>
                    <div>Orders: {productData !== undefined ? productData.length : []}</div>

                    <Link href="/vendor/orders/57685787868">
                        <a>Order 1</a>
                    </Link>
                </div>
            </VendorLayout>
        </div>
    );
};

export default VendorOrders;
