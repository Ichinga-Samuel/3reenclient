import React from 'react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../assets/styles/main.scss';
import ThemeContainer from '@/contexts/ThemeContainer.context';
import GlobalStyle from '@/assets/styles/global';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <>
            <GlobalStyle />
            <ThemeContainer>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </ThemeContainer>
        </>
    );
}

export default MyApp;
