import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import { 
  SparklesIcon,
  HeartIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import FadeIn from '../components/animations/FadeIn';

const spreads = [
  {
    title: 'Расклад на любовь',
    description: 'Узнайте о своих отношениях, перспективах и возможностях в любви с помощью карт Таро.',
    icon: HeartIcon,
    color: 'text-red-600'
  },
  {
    title: 'Расклад на карьеру',
    description: 'Получите предсказание о развитии вашей карьеры, новых возможностях и профессиональном росте.',
    icon: BriefcaseIcon,
    color: 'text-blue-600'
  },
  {
    title: 'Расклад на финансы',
    description: 'Узнайте о своих финансовых перспективах, возможностях и рисках с помощью карт Таро.',
    icon: CurrencyDollarIcon,
    color: 'text-green-600'
  },
  {
    title: 'Расклад на отношения',
    description: 'Получите глубокое понимание ваших отношений с близкими людьми и партнером.',
    icon: UserGroupIcon,
    color: 'text-purple-600'
  },
  {
    title: 'Расклад на развитие',
    description: 'Узнайте о возможностях личностного роста и развития с помощью карт Таро.',
    icon: AcademicCapIcon,
    color: 'text-yellow-600'
  },
  {
    title: 'Общий расклад',
    description: 'Получите общее предсказание о различных аспектах вашей жизни с помощью карт Таро.',
    icon: SparklesIcon,
    color: 'text-indigo-600'
  }
];

const TarotPage: NextPage = () => {
  return (
    <>
      <SEO 
        title="Расклады Таро онлайн | NeuroOracle - Бесплатные гадания на картах Таро"
        description="Получите точные предсказания с помощью профессиональных раскладов Таро онлайн. Гадания на любовь, карьеру, финансы и отношения. Бесплатные онлайн расклады Таро с высокой точностью."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Head>
          <meta name="keywords" content="расклады таро онлайн, гадание таро, карты таро, таро предсказания, гадание на таро, расклад таро, таро онлайн, гадания на картах таро, бесплатные расклады таро, таро любовь, таро карьера, таро финансы" />
          <meta name="author" content="NeuroOracle" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Расклады Таро онлайн | NeuroOracle - Бесплатные гадания на картах Таро" />
          <meta property="og:description" content="Получите точные предсказания с помощью профессиональных раскладов Таро онлайн. Гадания на любовь, карьеру, финансы и отношения." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://neurooracle.com/tarot" />
          <meta property="og:image" content="https://neurooracle.com/images/tarot-bg.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Расклады Таро онлайн | NeuroOracle - Бесплатные гадания на картах Таро" />
          <meta name="twitter:description" content="Получите точные предсказания с помощью профессиональных раскладов Таро онлайн. Гадания на любовь, карьеру, финансы и отношения." />
          <meta name="twitter:image" content="https://neurooracle.com/images/tarot-bg.jpg" />
          <link rel="canonical" href="https://neurooracle.com/tarot" />
        </Head>

        {/* Hero секция */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white pt-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(/images/tarot-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-12 relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-5xl font-bold mb-6">
                  Расклады Таро онлайн бесплатно
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl mb-8 text-purple-100">
                  Получите точные предсказания с помощью профессиональных раскладов Таро и искусственного интеллекта
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://t.me/NeuroOracle_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
                  >
                    Сделать расклад Таро
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Секция раскладов */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Профессиональные расклады Таро
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Выберите подходящий расклад Таро для получения точного предсказания
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spreads.map((spread, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                      <spread.icon className={`h-8 w-8 ${spread.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {spread.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">
                      {spread.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Секция преимуществ */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Почему наши расклады Таро так точны?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Мы сочетаем древнюю мудрость карт Таро с современными технологиями искусственного интеллекта для получения максимально точных предсказаний
                </p>
                <Link
                  href="https://t.me/NeuroOracle_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  Попробовать расклад Таро
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TarotPage; 