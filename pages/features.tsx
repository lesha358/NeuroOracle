import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const FeaturesPage: NextPage = () => {
  const currentFeatures = [
    {
      title: 'Предсказания',
      description: 'Получайте предсказания на любые темы: любовь, карьера, здоровье, финансы',
      icon: '🔮'
    },
    {
      title: 'Ритуалы',
      description: 'Специальные ритуалы для привлечения удачи, любви и благополучия',
      icon: '✨'
    },
    {
      title: 'Карты Таро',
      description: 'Расклады на картах Таро для получения глубоких ответов',
      icon: '🎴'
    },
    {
      title: 'Нумерология',
      description: 'Расчеты и предсказания на основе нумерологических данных',
      icon: '🔢'
    }
  ];

  const upcomingFeatures = [
    {
      title: 'Расширенный анализ',
      description: 'Более глубокий анализ данных для более точных предсказаний',
      status: 'В разработке',
      priority: 'Высокий'
    },
    {
      title: 'Интеграция с другими платформами',
      description: 'Поддержка различных социальных сетей и мессенджеров',
      status: 'В разработке',
      priority: 'Средний'
    },
    {
      title: 'Персонализированные рекомендации',
      description: 'Адаптация предсказаний под интересы пользователя',
      status: 'В разработке',
      priority: 'Высокий'
    },
    {
      title: 'Улучшенный интерфейс',
      description: 'Более удобный и интуитивно понятный дизайн',
      status: 'В разработке',
      priority: 'Средний'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Функции в разработке - NeuroOracle</title>
        <meta name="description" content="Функции, которые мы разрабатываем для NeuroOracle" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Функции NeuroOracle
        </h1>

        {/* Текущие функции */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Реализованные функции
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Функции в разработке */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Функции в разработке
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-primary-600 mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {feature.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    Приоритет: {feature.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="https://t.me/NeuroOracle_bot" className="inline-block">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300">
              Попробовать NeuroOracle
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage; 