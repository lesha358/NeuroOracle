import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const faqItems = [
  {
    question: 'Как работает NeuroOracle?',
    answer: 'NeuroOracle использует передовые алгоритмы машинного обучения и анализ данных для генерации предсказаний. Бот учитывает множество факторов и предоставляет персонализированные ответы на ваши вопросы.'
  },
  {
    question: 'Насколько точны предсказания?',
    answer: 'Средняя точность предсказаний NeuroOracle составляет 83%. Точность варьируется в зависимости от категории вопроса: любовь (85%), финансы (84%), карьера (82%), здоровье (81%).'
  },
  {
    question: 'Какие типы предсказаний доступны?',
    answer: 'NeuroOracle предоставляет предсказания в различных категориях: любовь, карьера, здоровье, финансы и другие. Также доступны специальные ритуалы и расклады на картах Таро.'
  },
  {
    question: 'Как получить предсказание?',
    answer: 'Просто начните диалог с ботом в Telegram (@NeuroOracle_bot), задайте свой вопрос, и бот предоставит вам предсказание. Вы можете задавать вопросы в любое время дня и ночи.'
  },
  {
    question: 'Безопасно ли использовать NeuroOracle?',
    answer: 'Да, использование NeuroOracle полностью безопасно. Мы не собираем личные данные пользователей, а все ваши вопросы и предсказания остаются конфиденциальными.'
  },
  {
    question: 'Можно ли получить несколько предсказаний?',
    answer: 'Да, вы можете получать столько предсказаний, сколько вам нужно. Однако рекомендуется делать паузу между вопросами для более точных результатов.'
  },
  {
    question: 'Как связаться с поддержкой?',
    answer: 'Наша служба поддержки доступна в Telegram (@miya_b). Мы отвечаем на все вопросы в течение 24 часов.'
  },
  {
    question: 'Есть ли ограничения на использование?',
    answer: 'NeuroOracle доступен 24/7 и не имеет ограничений на количество предсказаний. Вы можете использовать бота в любое удобное для вас время.'
  }
];

const FAQPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>FAQ NeuroOracle | Частые вопросы о гаданиях и раскладах Таро</title>
        <meta name="description" content="Найдите ответы на часто задаваемые вопросы о NeuroOracle. Как работают гадания, точность предсказаний, виды раскладов Таро, как получить предсказание и многое другое." />
        <meta name="keywords" content="вопросы по таро, как гадать на таро, как делать расклад таро, вопросы по гаданиям, как получить предсказание, точность гаданий, виды раскладов, как гадать онлайн, таро вопросы, гадания вопросы" />
        <meta name="author" content="NeuroOracle" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FAQ NeuroOracle | Частые вопросы о гаданиях и раскладах Таро" />
        <meta property="og:description" content="Найдите ответы на часто задаваемые вопросы о NeuroOracle. Как работают гадания, точность предсказаний, виды раскладов Таро и многое другое." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neurooracle.com/faq" />
        <meta property="og:image" content="https://neurooracle.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ NeuroOracle | Частые вопросы о гаданиях и раскладах Таро" />
        <meta name="twitter:description" content="Найдите ответы на часто задаваемые вопросы о NeuroOracle. Как работают гадания, точность предсказаний, виды раскладов Таро и многое другое." />
        <meta name="twitter:image" content="https://neurooracle.com/og-image.jpg" />
        <link rel="canonical" href="https://neurooracle.com/faq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Часто задаваемые вопросы
          </h1>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  {item.question}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Не нашли ответ на свой вопрос? Свяжитесь с нашей поддержкой
            </p>
            <Link
              href="https://t.me/miya_b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Написать в поддержку
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage; 