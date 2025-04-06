import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
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
    description: 'Используйте силу искусственного интеллекта и карт Таро для получения точных предсказаний в различных сферах жизни.',
    icon: SparklesIcon,
    color: 'text-purple-600'
  },
  {
    title: 'Различные категории',
    description: 'Получайте предсказания по любви, карьере, здоровью, финансам и многим другим темам с помощью карт Таро и ИИ.',
    icon: ChartBarIcon,
    color: 'text-blue-600'
  },
  {
    title: 'Карты Таро',
    description: 'Профессиональные расклады на картах Таро для более глубокого понимания ситуации и получения точных предсказаний.',
    icon: ShieldCheckIcon,
    color: 'text-green-600'
  },
  {
    title: '24/7 Доступность',
    description: 'Получайте предсказания и гадания онлайн в любое время дня и ночи.',
    icon: ClockIcon,
    color: 'text-orange-600'
  }
];

const benefits = [
  {
    title: 'Удобный интерфейс',
    description: 'Простой и понятный интерфейс для получения онлайн гаданий и предсказаний',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Большое сообщество',
    description: 'Присоединяйтесь к тысячам пользователей, которые уже используют NeuroOracle для гаданий онлайн',
    icon: UserGroupIcon
  },
  {
    title: 'Регулярные обновления',
    description: 'Постоянно улучшаем качество предсказаний и добавляем новые расклады Таро',
    icon: ArrowPathIcon
  },
  {
    title: 'Быстрый старт',
    description: 'Начните получать предсказания и гадания онлайн уже через несколько минут',
    icon: RocketLaunchIcon
  }
];

const HomePage: NextPage = () => {
  return (
    <>
      <SEO 
        title="Гадания онлайн и расклады Таро | NeuroOracle - Бесплатные предсказания"
        description="Получите точные предсказания с помощью карт Таро и искусственного интеллекта. Бесплатные онлайн гадания на любовь, карьеру, здоровье и финансы. Профессиональные расклады Таро онлайн."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Head>
          <meta name="keywords" content="гадания онлайн, таро расклады, предсказания, гадания на любовь, гадания на карьеру, гадания на здоровье, гадания на финансы, искусственный интеллект, нейросеть, онлайн гадалка, бесплатные гадания, точные предсказания, карты таро онлайн, расклады таро, гадание таро, таро предсказания" />
          <meta name="author" content="NeuroOracle" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Гадания онлайн и расклады Таро | NeuroOracle - Бесплатные предсказания" />
          <meta property="og:description" content="Получите точные предсказания с помощью карт Таро и искусственного интеллекта. Бесплатные онлайн гадания на любовь, карьеру, здоровье и финансы." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://neurooracle.com" />
          <meta property="og:image" content="https://neurooracle.com/images/bg.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Гадания онлайн и расклады Таро | NeuroOracle - Бесплатные предсказания" />
          <meta name="twitter:description" content="Получите точные предсказания с помощью карт Таро и искусственного интеллекта. Бесплатные онлайн гадания на любовь, карьеру, здоровье и финансы." />
          <meta name="twitter:image" content="https://neurooracle.com/images/bg.jpg" />
          <link rel="canonical" href="https://neurooracle.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero секция */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(/images/bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-12 relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-5xl font-bold mb-6">
                  Гадания онлайн и расклады Таро бесплатно
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl mb-8 text-primary-100">
                  Используйте силу карт Таро и искусственного интеллекта для получения точных предсказаний в различных сферах жизни
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://t.me/NeuroOracle_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
                  >
                    Получить предсказание
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
                  Возможности онлайн гаданий
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Откройте для себя все преимущества использования нашего сервиса предсказаний и гаданий онлайн
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">
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
                  Почему выбирают наши онлайн гадания
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Мы предлагаем уникальный опыт получения предсказаний с помощью карт Таро и искусственного интеллекта
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
                  Готовы получить предсказание?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Присоединяйтесь к тысячам пользователей, которые уже используют NeuroOracle для онлайн гаданий и предсказаний
                </p>
                <Link
                  href="https://t.me/NeuroOracle_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  Начать гадание онлайн
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage; 