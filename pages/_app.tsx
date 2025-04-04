import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JoinButton from '../components/JoinButton';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import SEO from '../components/SEO';
import YandexMetrika from '../components/YandexMetrika';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/icons8-звезда-64.png" />
        <link rel="apple-touch-icon" href="/icons8-звезда-64.png" />
        <meta name="theme-color" content="#4F46E5" />
      </Head>
      <SEO />
      <YandexMetrika />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="flex-1 pt-16">
          <Component {...pageProps} />
        </div>
        <Footer />
        <JoinButton />
      </div>
    </ThemeProvider>
  );
}

export default MyApp; 