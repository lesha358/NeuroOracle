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

const features = [
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

const benefits = [
  {
    title: 'Удобный интерфейс',
    description: 'Простой и понятный интерфейс для получения предсказаний',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Большое сообщество',
    description: 'Присоединяйтесь к тысячам пользователей, которые уже используют NeuroOracle',
    icon: UserGroupIcon
  },
  {
    title: 'Регулярные обновления',
    description: 'Постоянно улучшаем качество предсказаний и добавляем новые функции',
    icon: ArrowPathIcon
  },
  {
    title: 'Быстрый старт',
    description: 'Начните получать предсказания уже через несколько минут',
    icon: RocketLaunchIcon
  }
];

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>NeuroOracle - Точные предсказания на основе ИИ и Таро | Онлайн гадания</title>
        <meta name="description" content="Получите точные предсказания с помощью искусственного интеллекта и карт Таро. Гадания на любовь, карьеру, здоровье и финансы. Бесплатные онлайн расклады с высокой точностью." />
        <meta name="keywords" content="гадания онлайн, таро расклады, предсказания, гадания на любовь, гадания на карьеру, гадания на здоровье, гадания на финансы, искусственный интеллект, нейросеть, онлайн гадалка, бесплатные гадания, точные предсказания" />
        <meta name="author" content="NeuroOracle" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NeuroOracle - Точные предсказания на основе ИИ и Таро" />
        <meta property="og:description" content="Получите точные предсказания с помощью искусственного интеллекта и карт Таро. Гадания на любовь, карьеру, здоровье и финансы." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neurooracle.com" />
        <meta property="og:image" content="https://neurooracle.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NeuroOracle - Точные предсказания на основе ИИ и Таро" />
        <meta name="twitter:description" content="Получите точные предсказания с помощью искусственного интеллекта и карт Таро. Гадания на любовь, карьеру, здоровье и финансы." />
        <meta name="twitter:image" content="https://neurooracle.com/og-image.jpg" />
        <link rel="canonical" href="https://neurooracle.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold mb-6">
                Узнайте свое будущее с NeuroOracle
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl mb-8 text-primary-100">
                Используйте силу искусственного интеллекта для получения точных предсказаний в различных сферах жизни
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/features"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
                >
                  Узнать больше
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

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

      {/* Секция почему выбирают нас */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Мы предлагаем уникальный опыт получения предсказаний
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-primary-50 dark:bg-primary-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Секция CTA */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Готовы начать получать предсказания?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Присоединяйтесь к тысячам пользователей, которые уже используют NeuroOracle для получения точных предсказаний
              </p>
              <Link
                href="https://t.me/NeuroOracle_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Начать использовать
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 