import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'NeuroOracle - Бесплатные предсказания будущего',
  description = 'Получите точные предсказания будущего с помощью искусственного интеллекта. Бесплатные предсказания по любви, карьере, здоровью и финансам.',
  keywords = 'предсказания, будущее, таро, гадание, любовь, карьера, здоровье, финансы, бесплатно',
  ogImage = 'https://neurooracle.com/og-image.jpg'
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://neurooracle.com" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Yandex Verification */}
      <meta name="yandex-verification" content="ваш-код-верификации" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://neurooracle.com" />
    </Head>
  );
} 