import React from 'react';
import { NextSeo } from 'next-seo';
import UserMonitor from '@/components/SalesRep/UserMonitor/UserMonitor';

const termsandconditions: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Sales Rep"
                description="The world best e-commence store"
                openGraph={{
                    title: 'Open Graph Title',
                    description: 'Description of open graph video',
                    url: 'https://www.3reenshop.com',
                }}
            />
            <UserMonitor />
        </>
    );
};

export default termsandconditions;
