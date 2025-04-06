import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'NeuroOracle - Точные предсказания на основе ИИ и Таро',
  description = 'Получите точные предсказания с помощью искусственного интеллекта и карт Таро. Гадания на любовь, карьеру, здоровье и финансы.',
  image = 'https://neurooracle.com/images/bg.jpg',
  type = 'website',
  keywords = 'гадание, таро, предсказания, ии, искусственный интеллект, нейрооракул'
}) => {
  const router = useRouter();
  const canonicalUrl = `https://neurooracle.com${router.asPath}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'NeuroOracle',
    description: description,
    url: 'https://neurooracle.com',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    datePublished: '2025-01-01',
    dateModified: '2025-04-06',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RUB'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000'
    },
    inLanguage: 'ru-RU',
    keywords: keywords
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="msapplication-TileImage" content="/favicon.png" />
      <meta name="msapplication-TileColor" content="#4F46E5" />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="ru" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`https://neurooracle.com/en${router.asPath}`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO; 