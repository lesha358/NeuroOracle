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

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Узнайте своё будущее</span>
                  <span className="block text-primary-600">с NeuroOracle</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Получите точные предсказания на основе искусственного интеллекта. Узнайте, что вас ждет в любви, карьере и жизни.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="https://t.me/NeuroOracle_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      Начать
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

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