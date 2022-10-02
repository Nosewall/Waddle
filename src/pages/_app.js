import '../styles/globals.css';
import Head from "next/head"

import { AuthProvider } from '../components/context/AuthContext.tsx';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}

export default MyApp;

