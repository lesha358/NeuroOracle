import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import BlogTags from '../../../components/BlogTags';
import SEO from '../../../components/SEO';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
}

// Моковые данные для демонстрации
const blogPosts: BlogPost[] = [
  {
    slug: 'kak-pravilno-gadat-na-kartah-taro',
    title: 'Как правильно гадать на картах Таро',
    description: 'Подробное руководство по гаданию на картах Таро для начинающих',
    date: '2025-04-06',
    author: 'NeuroOracle',
    tags: ['Таро', 'Гадание', 'Обучение'],
    image: '/images/blog/tarot-guide.jpg'
  },
  {
    slug: 'znachenie-kart-taro-v-lyubvi',
    title: 'Значение карт Таро в любви и отношениях',
    description: 'Разбираем значение карт Таро в контексте любовных отношений',
    date: '2025-04-05',
    author: 'NeuroOracle',
    tags: ['Таро', 'Любовь', 'Отношения'],
    image: '/images/blog/tarot-love.jpg'
  },
  {
    slug: 'ai-v-gadaniyah',
    title: 'Как искусственный интеллект помогает в гаданиях',
    description: 'Исследуем возможности ИИ в современном гадании',
    date: '2025-04-04',
    author: 'NeuroOracle',
    tags: ['ИИ', 'Гадание', 'Технологии'],
    image: '/images/blog/ai-divination.jpg'
  }
];

const TagPage: NextPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  
  const decodedTag = decodeURIComponent(tag as string);
  const posts = blogPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === decodedTag.toLowerCase())
  );

  return (
    <>
      <SEO
        title={`Статьи с тегом "${decodedTag}" | NeuroOracle Blog`}
        description={`Читайте статьи о ${decodedTag.toLowerCase()} на NeuroOracle Blog`}
        keywords={`${decodedTag}, гадание, таро, предсказания, нейрооракул`}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/blog"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Назад к блогу
        </Link>

        <h1 className="text-3xl font-bold mb-8">
          Статьи с тегом "{decodedTag}"
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 hover:text-purple-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <BlogTags tags={post.tags} className="mt-4" />
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Статей с тегом "{decodedTag}" пока нет
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TagPage; 