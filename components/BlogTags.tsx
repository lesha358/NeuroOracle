import React from 'react';
import Link from 'next/link';

interface BlogTagsProps {
  tags: string[];
  className?: string;
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition-colors"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default BlogTags; 