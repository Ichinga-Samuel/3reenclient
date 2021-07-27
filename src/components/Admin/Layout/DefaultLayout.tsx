import React, { useEffect, useState, useRef } from 'react';
import AdminHeader from './AdminHeader';
import { AgentMainContainer, FooterContainer, LayoutHolder } from './AdminLayout.styled';
import Head from 'next/head';
import AOS from 'aos';
import AdminSidebar from './AdminSidebar';
import { getFromLocalStorage } from '@/utils/browserStorage';

const DefaultLayout = ({ browserTitle, breadTitle, children }) => {
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const adminDrawerRef = useRef(null);
    const adminDetails = getFromLocalStorage('admindetails');

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
    return (
        <LayoutHolder>
            <Head>
                <title>{browserTitle} | Admin</title>
            </Head>
            <AdminHeader adminDetails={adminDetails} isAdminOpen={isAdminOpen} openDrawer={openDrawerOnMobile} />
            <AdminSidebar adminDrawerRef={adminDrawerRef} isAdminOpen={isAdminOpen} closeDrawer={openDrawerOnMobile} />
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
    );
};

export default DefaultLayout;
