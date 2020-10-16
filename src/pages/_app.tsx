import React from 'react';
import type { AppProps } from 'next/app';
import '../assets/styles/main.scss';
import ThemeContainer from '@/contexts/ThemeContainer.context';
import GlobalStyle from '@/assets/styles/global';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <>
            <GlobalStyle />
            <ThemeContainer>
                <Component {...pageProps} />
            </ThemeContainer>
        </>
    );
}

export default MyApp;
