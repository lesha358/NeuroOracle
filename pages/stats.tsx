import { NextPage } from 'next';
import { StatsChart } from '../components/StatsChart';
import { StatsPieChart } from '../components/StatsPieChart';
import { FadeIn } from '../components/FadeIn';

const stats = [
  {
    title: 'Всего пользователей',
    value: '853',
    description: 'Активных пользователей',
    icon: '👥'
  },
  {
    title: 'Всего предсказаний',
    value: '12,847',
    description: 'Успешных предсказаний',
    icon: '✨'
  },
  {
    title: 'Средняя точность',
    value: '87%',
    description: 'По всем категориям',
    icon: '🎯'
  },
  {
    title: 'Активность',
    value: '92%',
    description: 'Пользователей за 30 дней',
    icon: '📈'
  }
];

const categoryData = [
  { name: 'Любовь', count: 3847, accuracy: 89 },
  { name: 'Карьера', count: 3124, accuracy: 85 },
  { name: 'Здоровье', count: 2845, accuracy: 86 },
  { name: 'Финансы', count: 2831, accuracy: 88 }
];

const StatsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Статистика NeuroOracle
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <FadeIn key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.title}
                </h2>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Точность по категориям
              </h2>
              <div className="h-[300px]">
                <StatsChart data={categoryData} />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Распределение по категориям
              </h2>
              <div className="h-[300px]">
                <StatsPieChart data={categoryData} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default StatsPage; 