import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>О нас - Бот Предсказаний</title>
        <meta name="description" content="Узнайте больше о нашем боте предсказаний" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            О нашем боте
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Мы создали уникального бота, который помогает людям найти ответы на важные вопросы и принять правильные решения.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Наша миссия</h3>
                <p className="mt-2 text-base text-gray-500">
                  Помогать людям принимать осознанные решения, предоставляя им точные и полезные предсказания.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Наши ценности</h3>
                <p className="mt-2 text-base text-gray-500">
                  Честность, точность и уважение к каждому пользователю - это основные принципы нашей работы.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Наша команда</h3>
                <p className="mt-2 text-base text-gray-500">
                  Мы - команда профессионалов, объединенных страстью к созданию полезных технологических решений.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Как это работает?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">1. Задайте вопрос</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Сформулируйте свой вопрос как можно точнее. Это поможет получить более точное предсказание.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">2. Получите предсказание</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Наш бот проанализирует ваш вопрос и предоставит подробное предсказание с указанием вероятности.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">3. Примите решение</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Используйте полученное предсказание как дополнительную информацию для принятия решения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 