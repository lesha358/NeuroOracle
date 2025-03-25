import Link from 'next/link';

const JoinButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 md:z-50">
      <Link
        href="https://t.me/NeuroOracle_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Присоединиться
      </Link>
    </div>
  );
};

export default JoinButton; 