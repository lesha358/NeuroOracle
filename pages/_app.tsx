import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp; 