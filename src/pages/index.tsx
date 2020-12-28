import React from 'react';
import Head from 'next/head';
import Heading from '@/components/Heading';
import Box from '@/components/Box';

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>3reenshop | Home</title>
            </Head>
            <Box>
                <Heading style={{ fontSize: '30px' }}>
                    Welcome to 3reenshop <span>app</span>
                </Heading>
            </Box>
        </>
    );
};

export default HomePage;
