import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { 
  CalendarIcon,
  TagIcon,
  UserIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import FadeIn from '../../components/animations/FadeIn';

// Типы для статьи блога
interface BlogPost {
  id: string;
  title: string;
  content: string;
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
    content: `
      <h2>Введение в мир Таро</h2>
      <p>Карты Таро - это древняя система предсказаний, которая помогает получить ответы на важные вопросы и лучше понять ситуацию. В этой статье мы рассмотрим основные принципы работы с картами Таро и научимся правильно интерпретировать их значения.</p>

      <h2>Подготовка к гаданию</h2>
      <p>Перед началом гадания важно создать правильную атмосферу и настроиться на работу с картами. Выберите тихое место, где вас никто не потревожит, и подготовьте стол для расклада.</p>

      <h2>Основные принципы работы с картами</h2>
      <p>При работе с картами Таро важно помнить о нескольких ключевых принципах:</p>
      <ul>
        <li>Доверяйте своей интуиции</li>
        <li>Задавайте четкие вопросы</li>
        <li>Используйте правильные расклады</li>
        <li>Учитывайте контекст ситуации</li>
      </ul>

      <h2>Популярные расклады</h2>
      <p>Существует множество различных раскладов Таро, каждый из которых подходит для определенных ситуаций. Рассмотрим самые популярные:</p>
      <ul>
        <li>Расклад на одну карту</li>
        <li>Расклад "Кельтский крест"</li>
        <li>Расклад на отношения</li>
        <li>Расклад на карьеру</li>
      </ul>

      <h2>Заключение</h2>
      <p>Гадание на картах Таро - это искусство, которое требует практики и постоянного развития. Не бойтесь делать ошибки и учиться на своем опыте. Помните, что главное - это доверять своей интуиции и быть честным с собой.</p>
    `,
    date: '2025-04-06',
    author: 'NeuroOracle',
    tags: ['Таро', 'Гадания', 'Обучение'],
    slug: 'kak-pravilno-gadat-na-kartah-taro',
    image: '/images/blog/tarot-guide.jpg'
  },
  // Добавьте остальные статьи здесь
];

const BlogPostPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Статья не найдена
          </h1>
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Вернуться к списку статей
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Блог NeuroOracle`}
        description={post.content.substring(0, 160)}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero секция */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white pt-16">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-12 relative">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-white/80 hover:text-white mb-8"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Вернуться к списку статей
                </Link>
                <h1 className="text-4xl font-bold mb-6">
                  {post.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-wrap items-center gap-4 text-purple-100">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Контент статьи */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
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
                <article 
                  className="prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPostPage; 