import React from 'react';
import { NextSeo } from 'next-seo';
import Home from '@/components/Home/index';

const HomePage: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Home"
                description="The world best e-commence store"
                openGraph={{
                    title: 'Open Graph Title',
                    description: 'Description of open graph video',
                    url: 'https://www.3reenshop.com',
                }}
            />
            <Home />
        </>
    );
};

export default HomePage;
