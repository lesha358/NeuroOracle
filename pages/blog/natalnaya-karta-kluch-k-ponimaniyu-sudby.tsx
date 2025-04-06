import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import SEO from '../../components/SEO';
import BlogTags from '../../components/BlogTags';

const NatalChartPage: NextPage = () => {
  const article = {
    title: 'Натальная карта: ключ к пониманию вашей судьбы',
    description: 'Подробный разбор натальной карты и её влияния на вашу жизнь. Узнайте, как астрология помогает раскрыть ваш потенциал и преодолеть жизненные трудности.',
    date: '2025-04-03',
    author: 'NeuroOracle',
    tags: ['Астрология', 'Натальная карта', 'Судьба'],
    image: '/images/blog/natal-chart.webp',
    content: `
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Что такое натальная карта?</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">Натальная карта – это астрологическая карта, составленная на момент рождения человека. Она представляет собой "космический паспорт", который содержит информацию о вашем характере, талантах, жизненном пути и потенциале. Каждая планета, знак и дом в натальной карте рассказывают свою часть вашей истории.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Основные элементы натальной карты</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">В натальной карте выделяют несколько ключевых элементов:</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>Планеты</strong> – символизируют различные аспекты личности и жизненные сферы</li>
        <li><strong>Знаки Зодиака</strong> – определяют качества и характеристики планет</li>
        <li><strong>Дома</strong> – показывают области жизни, где проявляются энергии планет</li>
        <li><strong>Аспекты</strong> – отражают взаимодействие между планетами</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Значение планет в натальной карте</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">Каждая планета в натальной карте имеет своё значение:</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>Солнце</strong> – ваша личность, жизненная сила, творческий потенциал</li>
        <li><strong>Луна</strong> – эмоции, интуиция, подсознание</li>
        <li><strong>Меркурий</strong> – мышление, коммуникация, обучение</li>
        <li><strong>Венера</strong> – любовь, красота, ценности</li>
        <li><strong>Марс</strong> – энергия, действия, страсть</li>
        <li><strong>Юпитер</strong> – удача, расширение, мудрость</li>
        <li><strong>Сатурн</strong> – ограничения, ответственность, время</li>
        <li><strong>Уран</strong> – инновации, свобода, неожиданности</li>
        <li><strong>Нептун</strong> – духовность, иллюзии, вдохновение</li>
        <li><strong>Плутон</strong> – трансформация, власть, тайны</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Дома в натальной карте</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">12 домов натальной карты представляют различные сферы жизни:</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>1-й дом</strong> – личность, внешность, характер</li>
        <li><strong>2-й дом</strong> – финансы, ценности, самооценка</li>
        <li><strong>3-й дом</strong> – коммуникация, обучение, близкое окружение</li>
        <li><strong>4-й дом</strong> – семья, дом, корни</li>
        <li><strong>5-й дом</strong> – творчество, любовь, дети</li>
        <li><strong>6-й дом</strong> – работа, здоровье, служение</li>
        <li><strong>7-й дом</strong> – партнерство, отношения</li>
        <li><strong>8-й дом</strong> – трансформация, кризисы, чужие ресурсы</li>
        <li><strong>9-й дом</strong> – высшее образование, путешествия, философия</li>
        <li><strong>10-й дом</strong> – карьера, статус, достижения</li>
        <li><strong>11-й дом</strong> – друзья, цели, коллективы</li>
        <li><strong>12-й дом</strong> – тайны, изоляция, духовность</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Как использовать натальную карту</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">Натальная карта может помочь вам в различных аспектах жизни:</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Понять свои сильные и слабые стороны</li>
        <li>Определить жизненное предназначение</li>
        <li>Найти подходящую профессию</li>
        <li>Улучшить отношения с другими людьми</li>
        <li>Предвидеть и подготовиться к важным событиям</li>
        <li>Раскрыть свой творческий потенциал</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Аспекты в натальной карте</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">Аспекты показывают, как планеты взаимодействуют друг с другом:</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>Соединение (0°)</strong> – планеты работают вместе</li>
        <li><strong>Секстиль (60°)</strong> – гармоничное взаимодействие</li>
        <li><strong>Квадрат (90°)</strong> – напряжение и конфликты</li>
        <li><strong>Трин (120°)</strong> – поддержка и удача</li>
        <li><strong>Оппозиция (180°)</strong> – противостояние и выбор</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Как NeuroOracle помогает с натальной картой</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">Наш сервис предлагает:</p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Точный расчет натальной карты по дате, времени и месту рождения</li>
        <li>Подробный анализ всех элементов карты</li>
        <li>Прогнозы на основе натальной карты</li>
        <li>Рекомендации по использованию вашего потенциала</li>
        <li>Советы по гармонизации различных сфер жизни</li>
      </ul>
      <p class="text-gray-700 dark:text-gray-300 mb-4">Попробуйте наш сервис прямо сейчас и получите глубокое понимание своей натальной карты!</p>
    `
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <SEO
        title={`${article.title} | NeuroOracle Blog`}
        description={article.description}
        keywords="натальная карта, астрология, гороскоп рождения, астрологическая карта, судьба, планеты в натальной карте, дома в натальной карте, аспекты в натальной карте"
        image={article.image}
        type="article"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
          >
            <FaArrowLeft className="mr-2" />
            Назад к блогу
          </Link>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <FaUser className="mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  {new Date(article.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center mb-2">
                  <FaTags className="mr-2" />
                  <BlogTags tags={article.tags} />
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Хотите узнать свою натальную карту?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Получите подробный анализ вашей натальной карты и узнайте больше о своей судьбе.
                </p>
                <Link
                  href="https://t.me/NeuroOracle_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  Получить анализ
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default NatalChartPage; 