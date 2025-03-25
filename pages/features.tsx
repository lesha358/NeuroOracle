import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const features = [
  {
    title: 'Точные предсказания',
    description: 'Используйте силу искусственного интеллекта для получения точных предсказаний в различных сферах жизни.',
    icon: '🎯'
  },
  {
    title: 'Различные категории',
    description: 'Получайте предсказания по любви, карьере, здоровью, финансам и многим другим темам.',
    icon: '✨'
  },
  {
    title: 'Карты Таро',
    description: 'Специальные расклады на картах Таро для более глубокого понимания ситуации.',
    icon: '🎴'
  },
  {
    title: '24/7 Доступность',
    description: 'Получайте предсказания в любое время дня и ночи.',
    icon: '⏰'
  }
];

const FeaturesPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>Возможности - NeuroOracle</title>
        <meta name="description" content="Узнайте о возможностях NeuroOracle" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Возможности NeuroOracle
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://t.me/NeuroOracle_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Начать использовать
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage; 