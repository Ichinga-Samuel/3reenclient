import React from 'react';
import { NextSeo } from 'next-seo';
import Messages from '@/components/SalesRep/UserMonitor/Messages/Messages';

const messages: React.FC = () => {
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
            <Messages />
        </>
    );
};

export default messages;
