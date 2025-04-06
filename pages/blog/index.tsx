import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/SEO';
import { 
  BookOpenIcon,
  CalendarIcon,
  TagIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import FadeIn from '../../components/animations/FadeIn';

// Типы для статей блога
interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  image: string;
}

// Моковые данные для статей
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как правильно гадать на картах Таро',
    description: 'Подробное руководство по гаданию на картах Таро для начинающих. Узнайте основные принципы и техники работы с картами.',
    date: '2025-04-06',
    author: 'NeuroOracle',
    tags: ['Таро', 'Гадания', 'Обучение'],
    slug: 'kak-pravilno-gadat-na-kartah-taro',
    image: '/images/blog/tarot-guide.webp'
  },
  {
    id: '2',
    title: 'Значение карт Таро в любви и отношениях',
    description: 'Разбираем значение карт Таро в контексте любви и отношений. Как интерпретировать карты для получения точных предсказаний.',
    date: '2025-04-05',
    author: 'NeuroOracle',
    tags: ['Таро', 'Любовь', 'Отношения'],
    slug: 'znachenie-kart-taro-v-lyubvi',
    image: '/images/blog/tarot-love.webp'
  },
  {
    id: '3',
    title: 'Как искусственный интеллект помогает в гаданиях',
    description: 'Исследуем, как современные технологии и искусственный интеллект улучшают точность предсказаний и помогают в интерпретации карт.',
    date: '2025-04-04',
    author: 'NeuroOracle',
    tags: ['ИИ', 'Технологии', 'Предсказания'],
    slug: 'ai-v-gadaniyah',
    image: '/images/blog/ai-divination.webp'
  },
  {
    id: '4',
    title: 'Натальная карта: ключ к пониманию вашей судьбы',
    description: 'Подробный разбор натальной карты и её влияния на вашу жизнь. Узнайте, как астрология помогает раскрыть ваш потенциал и преодолеть жизненные трудности.',
    date: '2025-04-03',
    author: 'NeuroOracle',
    tags: ['Астрология', 'Натальная карта', 'Судьба'],
    slug: 'natalnaya-karta-kluch-k-ponimaniyu-sudby',
    image: '/images/blog/natal-chart.webp'
  }
];

const BlogPage: NextPage = () => {
  return (
    <>
      <SEO 
        title="Блог о Таро и гаданиях | NeuroOracle"
        description="Статьи о картах Таро, гаданиях и предсказаниях. Советы, руководства и интересные факты о мире Таро."
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero секция */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white pt-16">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-12 relative">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-5xl font-bold mb-6">
                  Блог о Таро и гаданиях
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl mb-8 text-purple-100">
                  Полезные статьи, руководства и интересные факты о мире Таро и предсказаний
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Секция со статьями */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.1}>
                  <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                          >
                            <TagIcon className="h-4 w-4 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <UserIcon className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage; 