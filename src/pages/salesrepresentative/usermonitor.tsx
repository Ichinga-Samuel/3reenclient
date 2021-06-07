import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import UserMonitor from '@/components/SalesRep/UserMonitor/UserMonitor';
import LoginToAccess from '@/components/SalesRep/UserMonitor/LoginToAccess';


const usermonitor = () => {
    const [userId, setUserId] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem("userid") || null;
        if(userId === null) {
            setUserId(false)
        }
        else {
            setUserId(true)
        }
    }, [])
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
            {
                userId ?
                <UserMonitor />
                :
                <LoginToAccess />
            }

            {/* <UserMonitor /> */}
        
        </>
    )
};

export default usermonitor;
