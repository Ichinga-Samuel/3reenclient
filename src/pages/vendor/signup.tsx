import React from 'react';
import Head from 'next/head';
import Signup from '../../components/Vendor/Signup/Signup';

const signup = () => {
    return (
        <div>
            <Head>
                <title>Register | Vendor</title>
            </Head>
            <Signup />
        </div>
    );
};

export default signup;
