import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '@/components/UserLayout/Header/Header';
// import Home from '@/components/Home-bl/index';

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
            <Header />
        </>
    );
};

export default HomePage;
