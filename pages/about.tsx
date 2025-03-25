import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>О нас - NeuroOracle</title>
        <meta name="description" content="Узнайте больше о NeuroOracle" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            О NeuroOracle
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Наша миссия
            </h2>
            <p className="text-gray-600 mb-6">
              NeuroOracle стремится сделать предсказания доступными для каждого, используя передовые технологии искусственного интеллекта.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Наша команда
              </h2>
              <p className="text-gray-600 mb-4">
                Мы - команда энтузиастов, объединенных идеей создания доступного и точного инструмента для предсказаний.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Наши технологии
              </h2>
              <p className="text-gray-600 mb-4">
                Мы используем передовые алгоритмы машинного обучения и обработки естественного языка для создания точных предсказаний.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
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

export default AboutPage; 