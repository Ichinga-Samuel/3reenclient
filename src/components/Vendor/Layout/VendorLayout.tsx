import React from 'react';
import VendorSiderbar from '@/components/Vendor/VendorSidebar/VendorSiderbar';
// import Header from '@/components/Header/Header';
import Head from 'next/head';
import { VendorLayoutStyled } from '@/components/Vendor/Layout/VendorLayout.styled';
import VendorHeader from '@/components/Vendor/VendorHeader/VendorHeader';
import { Breadcrumb } from 'antd';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
// import axios from 'axios';

const VendorLayout = ({ pageTitle, dashboardTitle, crumbName, userData, children }) => {
    const router = useRouter();
    const token = getFromLocalStorage('token');
    console.log('token', token);
    if (!token) {
        router.push('/vendor/login');
    }
    // const getLoggedInUser = async () => {
    //     try {
    //         const resp = await axios.get()
    //     } catch(e) {
    //         console.log(e);
    //     }
    // }
    return (
        <VendorLayoutStyled>
            <Head>
                <title>{pageTitle} | Vendors</title>
            </Head>
            <VendorHeader userData={userData} />
            <VendorSiderbar />
            <main>
                <div className="main_container">
                    <div className="breadCrumb">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="">
                                {/* <HomeOutlined /> */}
                                {'Vendor'}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{crumbName}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="pageTitle">{dashboardTitle}</div>
                    {children}
                </div>
            </main>
        </VendorLayoutStyled>
    );
};

VendorLayout.getInitialProps = async ({ ctx }) => {
    if (ctx.res) {
        ctx.res.writeHead(302, { Location: '/vendor/login' });
        ctx.res.end();
    }
    const APP_BASE = process.env.APP_BASE_URL;
    const res = await fetch(`${APP_BASE}/v1/users/me`);
    const json = await res.json();
    return { userData: json.user };
};

export default VendorLayout;
