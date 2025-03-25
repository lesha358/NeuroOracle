import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const SupportPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Поддержка - NeuroOracle</title>
        <meta name="description" content="Служба поддержки NeuroOracle" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Служба поддержки
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600 mb-6">
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
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-gray-600 mb-4">
                Посетите наш раздел FAQ, чтобы найти ответы на наиболее распространенные вопросы.
              </p>
              <Link
                href="/faq"
                className="inline-block text-primary-600 hover:text-primary-700 transition-colors duration-300"
              >
                Перейти к FAQ →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Сообщество
              </h2>
              <p className="text-gray-600 mb-4">
                Присоединяйтесь к нашему сообществу в Telegram, чтобы общаться с другими пользователями и делиться опытом.
              </p>
              <Link
                href="https://t.me/NeuroOracle_community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-600 hover:text-primary-700 transition-colors duration-300"
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