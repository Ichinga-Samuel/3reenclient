import React, { useEffect, useState, useRef } from 'react';
import SuperAdminHeader from './SuperAdminHeader';
import { AgentMainContainer, FooterContainer, LayoutHolder } from './AdminLayout.styled';
import Head from 'next/head';
import AOS from 'aos';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import SuperAdminSidebar from './SuperAdminSidebar';

const SuperDefaultLayout = ({ browserTitle, breadTitle, children }) => {
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const adminDrawerRef = useRef(null);
    const router = useRouter();
    const token = getFromLocalStorage('supertoken');
    const adminDetails = getFromLocalStorage('superdetails');

    const openDrawerOnMobile = () => {
        setIsAdminOpen(!isAdminOpen);
    };

    useEffect(() => {
        const drawerEffectClick = (e) => {
            if (adminDrawerRef.current !== null && !adminDrawerRef.current.contains(e.target)) {
                setIsAdminOpen(!isAdminOpen);
            }
        };
        if (isAdminOpen) {
            window.addEventListener('click', drawerEffectClick);
        }
        return () => {
            window.removeEventListener('click', drawerEffectClick);
        };
    }, [isAdminOpen]);

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    useEffect(() => {
        if (!token && token === null && adminDetails === null) {
            router.push('/admin/super-login');
            return;
        }
    }, [adminDetails, router, token]);

    return (
        <>
            {!token ? (
                <p style={{ padding: '20px', fontSize: '1.5rem' }}>Redirecting...</p>
            ) : (
                <LayoutHolder>
                    <Head>
                        <title>{browserTitle} | Super Admin</title>
                    </Head>
                    <SuperAdminHeader
                        adminDetails={adminDetails}
                        isAdminOpen={isAdminOpen}
                        openDrawer={openDrawerOnMobile}
                    />
                    <SuperAdminSidebar
                        adminDrawerRef={adminDrawerRef}
                        isAdminOpen={isAdminOpen}
                        closeDrawer={openDrawerOnMobile}
                    />
                    <AgentMainContainer>
                        <div className="breadtitle">{breadTitle}</div>
                        <div data-aos="fade-up" data-aos-duration="700">
                            {children}
                        </div>
                    </AgentMainContainer>
                    <FooterContainer>
                        <span>&copy; 2021 Copyrights</span>
                    </FooterContainer>
                </LayoutHolder>
            )}
        </>
    );
};

export default SuperDefaultLayout;
