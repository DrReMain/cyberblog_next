import type {AppProps, AppContext} from 'next/app'
import App from 'next/app';
import {wrapper} from '@/store';

import '@/styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

// MyApp.getInitialProps = wrapper.getInitialAppProps((_) => async (appContext: AppContext) => {
//     const appProps = await App.getInitialProps(appContext);
//     return {...appProps};
// });

export default wrapper.withRedux(MyApp)
