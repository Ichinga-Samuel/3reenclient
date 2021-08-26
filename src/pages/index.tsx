import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import WelcomePage from '@/components/WelcomePage';
import AOS from 'aos';

const HomePage: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);
    return (
        <>
            <NextSeo
                title="Welcome"
                description="The world best e-commence store"
            openGraph={{
                    title: 'Open Graph Title',
                    description: 'Description of open graph video',
                    url: 'https://www.3reenshop.com',
                }}
            />
            <WelcomePage />
        </>
    );
};

export default HomePage;
