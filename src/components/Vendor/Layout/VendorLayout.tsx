import React, { useEffect } from 'react';
import VendorSiderbar from '@/components/Vendor/VendorSidebar/VendorSiderbar';
import Head from 'next/head';
import { VendorLayoutStyled } from '@/components/Vendor/Layout/VendorLayout.styled';
import VendorHeader from '@/components/Vendor/VendorHeader/VendorHeader';
import { Breadcrumb } from 'antd';
import { VendorAuthProvider } from '../VendorAuthProvider';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VendorLayout = ({ pageTitle, dashboardTitle, crumbName, children }) => {
    // const value = useAuth();
    // const user = useContext(AuthContext);
    // console.log('all', user);
    const router = useRouter();

    const token = getFromLocalStorage('token');
    const userData = getFromLocalStorage('user') || null;

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    useEffect(() => {
        if (!token && token === null && userData === null) {
            router.push('/vendor/login');
            return;
        }
    }, [userData, router, token]);

    return (
        <>
            {!token ? (
                <p>Redirecting...</p>
            ) : (
                <>
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
                </>
            )}
        </>
    );
};
export default VendorLayout;
