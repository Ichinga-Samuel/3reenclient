import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
// import App, { AppInitialProps } from "next/app";

function MyApp ({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext: AppContext) => {
//     let appProps: AppInitialProps;
//     const userAgent = appContext.ctx.req
//         ? appContext.ctx.req.headers['user-agent']
//         : navigator.userAgent
//
//     let ie = false
//     if (userAgent.match(/Edge/i) || userAgent.match(/Trident.*rv[ :]*11\./i)) {
//         ie = true
//     }
//
//     if (App.getInitialProps) {
//         appProps = await App.getInitialProps(appContext)
//     }
//
//     appProps.pageProps.query = appContext.ctx.query
//     appProps.pageProps.ieBrowser = ie
//
//     return { ...appProps }
// }

export default MyApp
