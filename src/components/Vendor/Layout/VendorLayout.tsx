import React from 'react';
import VendorSiderbar from '@/components/Vendor/VendorSidebar/VendorSiderbar';
// import Header from '@/components/Header/Header';
import Head from 'next/head';
import { VendorLayoutStyled } from '@/components/Vendor/Layout/VendorLayout.styled';
import VendorHeader from '@/components/Vendor/VendorHeader/VendorHeader';
import { Breadcrumb } from 'antd';
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const VendorLayout = ({ pageTitle, dashboardTitle, crumbName, children }) => {
    return (
        <VendorLayoutStyled>
            <Head>
                <title>{pageTitle} | Vendors</title>
            </Head>
            {/* <Header /> */}
            <VendorHeader />
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

export default VendorLayout;
