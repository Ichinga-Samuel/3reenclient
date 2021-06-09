import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Messages from '@/components/SalesRep/UserMonitor/Messages/Messages';
import LoginToAccess from '@/components/SalesRep/UserMonitor/LoginToAccess';

const SaleMessages: React.FC = () => {
    const [userId, setUserId] = useState(true);
    useEffect(() => {
        const userId = localStorage.getItem('userid') || null;
        if (userId === null) {
            setUserId(false);
        } else {
            setUserId(true);
        }
    }, []);
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
            {userId ? <Messages /> : <LoginToAccess />}
            {/* <Messages /> */}
        </>
    );
};

export default SaleMessages;
