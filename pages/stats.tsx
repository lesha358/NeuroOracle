import { NextPage } from 'next';
import Head from 'next/head';
import { StatsChart } from '../components/StatsChart';
import { StatsPieChart } from '../components/StatsPieChart';
import { FadeIn } from '../components/FadeIn';

const stats = [
  {
    title: 'Общая точность',
    value: '83%',
    description: 'Средняя точность предсказаний'
  },
  {
    title: 'Всего предсказаний',
    value: '15,234',
    description: 'Успешных предсказаний'
  },
  {
    title: 'Активных пользователей',
    value: '2,456',
    description: 'Ежемесячно'
  },
  {
    title: 'Среднее время ответа',
    value: '1.2с',
    description: 'На обработку запроса'
  }
];

const categoryData = [
  { name: 'Любовь', count: 5234, accuracy: 85 },
  { name: 'Карьера', count: 4123, accuracy: 82 },
  { name: 'Здоровье', count: 3456, accuracy: 81 },
  { name: 'Финансы', count: 3421, accuracy: 84 }
];

const mockData = [
  { name: 'Любовь', count: 150, accuracy: 85 },
  { name: 'Карьера', count: 120, accuracy: 82 },
  { name: 'Здоровье', count: 90, accuracy: 78 },
  { name: 'Финансы', count: 80, accuracy: 75 },
];

const StatsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>Статистика - NeuroOracle</title>
        <meta name="description" content="Статистика работы NeuroOracle" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeIn>
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Статистика предсказаний
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Точность предсказаний по категориям
                </h2>
                <div className="h-80">
                  <StatsChart data={mockData} />
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Распределение запросов
                </h2>
                <div className="h-80">
                  <StatsPieChart data={mockData} />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.map((category) => (
              <FadeIn key={category.name}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Количество запросов: {category.count}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Точность: {category.accuracy}%
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatsPage; 