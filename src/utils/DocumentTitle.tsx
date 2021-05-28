import React from 'react';
import Head from 'next/head';

const DocumentTitle = ({ pageTitle }) => {
    return (
        <Head>
            <title>{pageTitle} | Vendor</title>
        </Head>
    );
};

export default DocumentTitle;
