import React from 'react';
import { NextSeo } from 'next-seo';
import Terms from '@/components/Terms/index';

const termsandconditions: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Terms and Condition"
                description="The world best e-commence store"
                openGraph={{
                    title: 'Open Graph Title',
                    description: 'Description of open graph video',
                    url: 'https://www.3reenshop.com',
                }}
            />
            <Terms />
        </>
    );
};

export default termsandconditions;
