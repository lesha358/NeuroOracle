import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              NeuroOracle
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                Возможности
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                О нас
              </Link>
              <Link href="/stats" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                Статистика
              </Link>
              <Link href="/faq" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="https://t.me/NeuroOracle_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Начать
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 