import React from 'react';
import { useRouter } from 'next/router';
import VendorLayout from '@/components/Vendor/Layout/VendorLayout';
import axios from 'axios';
import { VENDOR_ORDER } from '@/utils/ApiList';
import { getFromLocalStorage } from '@/utils/browserStorage';

const VendorOrders = ({ details }) => {
    const router = useRouter();
    const { id } = router.query;
    const title = 'Order Details';
    return (
        <VendorLayout pageTitle={title} crumbName={title} dashboardTitle={title}>
            <div>
                <h3>Order Page Details: {id}</h3>
                {details}
            </div>
        </VendorLayout>
    );
};

export default VendorOrders;

export async function getStaticProps({ params }) {
    const token = getFromLocalStorage('token');
    // const APP_BASE = process.env.APP_BASE_URL;
    const res = await axios.get(
        `https://treen-shop-api.herokuapp.com/api/v1${VENDOR_ORDER.getSingleOrder(params.id)}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    console.log('order res', res);
    return {
        props: { details: res },
    };
}

export async function getStaticPaths() {
    // const APP_BASE = process.env.APP_BASE_URL;
    const res = await fetch(`https://treen-shop-api.herokuapp.com/api/v1${VENDOR_ORDER.getAllOrders}`);
    console.log('order res', res);
    const response = await res.json();
    console.log('order res', response);
    // const path = response.map((order: any) => {
    //     return { params: { id: order } };
    // });

    // return {
    //     path,
    //     fallback: false,
    // };
}
