import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  SparklesIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowPathIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import FadeIn from '../components/animations/FadeIn';

interface Feature {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const features: Feature[] = [
  {
    title: 'Точные предсказания',
    description: 'Используйте силу искусственного интеллекта для получения точных предсказаний в различных сферах жизни.',
    icon: SparklesIcon,
    color: 'text-purple-600'
  },
  {
    title: 'Различные категории',
    description: 'Получайте предсказания по любви, карьере, здоровью, финансам и многим другим темам.',
    icon: ChartBarIcon,
    color: 'text-blue-600'
  },
  {
    title: 'Карты Таро',
    description: 'Специальные расклады на картах Таро для более глубокого понимания ситуации.',
    icon: ShieldCheckIcon,
    color: 'text-green-600'
  },
  {
    title: '24/7 Доступность',
    description: 'Получайте предсказания в любое время дня и ночи.',
    icon: ClockIcon,
    color: 'text-orange-600'
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

          {/* Секция возможностей */}
          <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <FadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Возможности NeuroOracle
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Откройте для себя все преимущества использования нашего сервиса предсказаний
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`${feature.color} mb-4`}>
                        <feature.icon className="h-12 w-12" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Секция функций в разработке */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <FadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Функции в разработке
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Мы постоянно работаем над улучшением сервиса и добавлением новых возможностей
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FadeIn>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-primary-200 dark:border-primary-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2 mr-3">
                        <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Голосовые предсказания
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Получайте предсказания в аудио формате с помощью голосового ассистента
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                        Скоро
                      </span>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-primary-200 dark:border-primary-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2 mr-3">
                        <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Персональные рекомендации
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Индивидуальные рекомендации на основе вашей истории предсказаний
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                        В разработке
                      </span>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-primary-200 dark:border-primary-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2 mr-3">
                        <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Групповые расклады
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Специальные расклады для групп и коллективов с общими предсказаниями
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                        Планируется
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

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