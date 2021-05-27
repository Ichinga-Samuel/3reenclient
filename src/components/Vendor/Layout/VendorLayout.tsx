import React from 'react';
import VendorSiderbar from '@/components/Vendor/VendorSidebar/VendorSiderbar';
import Head from 'next/head';
import { VendorLayoutStyled } from '@/components/Vendor/Layout/VendorLayout.styled';
import VendorHeader from '@/components/Vendor/VendorHeader/VendorHeader';
import { Breadcrumb } from 'antd';
import { VendorAuthProvider } from '../VendorAuthProvider';
import { getFromLocalStorage } from '@/utils/browserStorage';
// import { useRouter } from 'next/router';

const VendorLayout = ({ pageTitle, dashboardTitle, crumbName, children }) => {
    // const value = useAuth();
    // const user = useContext(AuthContext);
    // console.log('all', user);
    // const router = useRouter();

    // const token = getFromLocalStorage('token');
    const userData = getFromLocalStorage('user') || null;

    // if (!token && token === null) {
    //     router.push('/vendor/login');
    //     return;
    // }

    return (
        <VendorAuthProvider>
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
                                <Breadcrumb.Item href="">{'Vendor'}</Breadcrumb.Item>
                                <Breadcrumb.Item>{crumbName}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="pageTitle">{dashboardTitle}</div>
                        {children}
                    </div>
                </main>
            </VendorLayoutStyled>
        </VendorAuthProvider>
    );
};
export default VendorLayout;
