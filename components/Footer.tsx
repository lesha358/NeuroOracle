import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2024-2025 NeuroOracle. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 