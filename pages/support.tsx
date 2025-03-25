import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const SupportPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>Поддержка NeuroOracle | Помощь и консультации по гаданиям и Таро</title>
        <meta name="description" content="Получите профессиональную поддержку по использованию NeuroOracle. Помощь с гаданиями, раскладами Таро и техническими вопросами. Свяжитесь с нами через Telegram." />
        <meta name="keywords" content="поддержка таро, помощь с гаданиями, консультации по таро, вопросы по гаданиям, помощь с раскладами, поддержка гаданий, консультации по раскладам, помощь с предсказаниями, вопросы по таро, поддержка по гаданиям" />
        <meta name="author" content="NeuroOracle" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Поддержка NeuroOracle | Помощь и консультации по гаданиям и Таро" />
        <meta property="og:description" content="Получите профессиональную поддержку по использованию NeuroOracle. Помощь с гаданиями, раскладами Таро и техническими вопросами." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neurooracle.com/support" />
        <meta property="og:image" content="https://neurooracle.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Поддержка NeuroOracle | Помощь и консультации по гаданиям и Таро" />
        <meta name="twitter:description" content="Получите профессиональную поддержку по использованию NeuroOracle. Помощь с гаданиями, раскладами Таро и техническими вопросами." />
        <meta name="twitter:image" content="https://neurooracle.com/og-image.jpg" />
        <link rel="canonical" href="https://neurooracle.com/support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Служба поддержки
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Наша команда поддержки всегда готова помочь вам. Вы можете связаться с нами через Telegram.
            </p>
            <Link
              href="https://t.me/miya_b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Написать в поддержку
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Посетите наш раздел FAQ, чтобы найти ответы на наиболее распространенные вопросы.
              </p>
              <Link
                href="/faq"
                className="inline-block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
              >
                Перейти к FAQ →
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Сообщество
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Присоединяйтесь к нашему сообществу в Telegram, чтобы общаться с другими пользователями и делиться опытом.
              </p>
              <Link
                href="https://t.me/NeuroOracle_community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
              >
                Присоединиться к сообществу →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportPage; 