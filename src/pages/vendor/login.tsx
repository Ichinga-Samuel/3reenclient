import Head from 'next/head';
import React from 'react';
import Signin from '@/components/Vendor/Signin/Signin';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login | Vendor</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;800&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Signin />
        </div>
    );
};

export default Login;
