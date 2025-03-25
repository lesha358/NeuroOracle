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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>NeuroOracle - Ваш персональный предсказатель</title>
        <meta name="description" content="Получайте точные предсказания с помощью искусственного интеллекта" />
      </Head>

      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Узнайте свое будущее с NeuroOracle
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Используйте силу искусственного интеллекта для получения точных предсказаний в различных сферах жизни
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://t.me/NeuroOracle_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                Начать использовать
              </Link>
              <Link
                href="/features"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секция возможностей */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Возможности NeuroOracle
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Откройте для себя все преимущества использования нашего сервиса предсказаний
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция почему выбирают нас */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем уникальный опыт получения предсказаний
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция CTA */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Готовы начать получать предсказания?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 