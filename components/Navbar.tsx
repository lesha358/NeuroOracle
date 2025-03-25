import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Возможности', href: '/features' },
  { name: 'Статистика', href: '/stats' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Поддержка', href: '/support' },
  { name: 'О нас', href: '/about' },
];

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Логотип */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <SparklesIcon className="h-8 w-8 text-primary-600 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-primary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  NeuroOracle
                </span>
                <span className="text-xs text-gray-500">Ваш персональный предсказатель</span>
              </div>
            </Link>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  router.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
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

          {/* Мобильная кнопка меню */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Открыть меню</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Затемнение фона */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Меню */}
        <div className={`absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Заголовок */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Меню</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Навигация */}
            <nav className="flex-1 px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Нижняя часть */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
              {/* Переключатель темы */}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Тема</span>
                <ThemeToggle />
              </div>

              {/* Кнопка Начать */}
              <Link
                href="https://t.me/NeuroOracle_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Начать
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 