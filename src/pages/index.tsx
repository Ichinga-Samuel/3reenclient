import React from 'react';
import { NextSeo } from 'next-seo';
import WelcomePage from '@/components/WelcomePage';

const HomePage: React.FC = () => {
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
