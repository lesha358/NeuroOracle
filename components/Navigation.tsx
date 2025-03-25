import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              NeuroOracle
            </Link>
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