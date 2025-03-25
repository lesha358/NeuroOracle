import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <link rel="icon" href="/icons8-звезда-64.png" />
        <link rel="apple-touch-icon" href="/icons8-звезда-64.png" />
        <meta name="theme-color" content="#4F46E5" />
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