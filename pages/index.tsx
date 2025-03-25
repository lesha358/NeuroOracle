import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>NeuroOracle - Ваш персональный предсказатель</title>
        <meta name="description" content="Получите точные предсказания с помощью искусственного интеллекта" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Узнайте свое будущее с NeuroOracle
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Используйте силу искусственного интеллекта для получения точных предсказаний
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://t.me/NeuroOracle_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Начать предсказания
            </Link>
            <Link
              href="/features"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              Узнать больше
            </Link>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl font-bold mb-4">83%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Точность предсказаний</h3>
              <p className="text-gray-600">
                Наш ИИ обеспечивает высокую точность предсказаний благодаря передовым алгоритмам
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl font-bold mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Доступность</h3>
              <p className="text-gray-600">
                Получайте предсказания в любое время дня и ночи
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl font-bold mb-4">15K+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Успешных предсказаний</h3>
              <p className="text-gray-600">
                Довольные пользователи по всему миру
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 