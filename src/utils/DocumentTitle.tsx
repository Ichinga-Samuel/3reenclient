import React from 'react';
import Head from 'next/head';

const DocumentTitle = ({ pageTitle, applicationTitle }) => {
    return (
        <Head>
            <title>
                {pageTitle} | {applicationTitle}
            </title>
        </Head>
    );
};

export default DocumentTitle;
