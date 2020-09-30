import React from 'react';
import type { AppProps } from 'next/app';
import '../assets/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
    return <Component {...pageProps} />;
}

export default MyApp;
