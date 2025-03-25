import { NextPage } from 'next';
import Head from 'next/head';
import { StatsChart } from '../components/StatsChart';
import { StatsPieChart } from '../components/StatsPieChart';

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

const StatsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Статистика - NeuroOracle</title>
        <meta name="description" content="Статистика работы NeuroOracle" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Статистика NeuroOracle
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h2>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Точность по категориям
              </h2>
              <div className="h-[300px]">
                <StatsChart data={categoryData} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Распределение по категориям
              </h2>
              <div className="h-[300px]">
                <StatsPieChart data={categoryData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatsPage; 