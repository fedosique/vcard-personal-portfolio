import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/shared/ui';
import { BlogPost } from '@/shared/api/types';

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <div className="space-y-8">
      <Typography variant="h2" className="relative pb-2">
        Blog
        <div className="absolute bottom-0 left-0 h-1 w-8 bg-gradient-to-r from-orange-yellow-crayola to-orange-yellow-crayola/80 rounded" />
      </Typography>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group rounded-xl border border-jet bg-gradient-to-br from-eerie-black-2 to-eerie-black-1 overflow-hidden shadow-shadow-4 transition-all duration-300 hover:shadow-shadow-5">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center space-x-2 text-fs-6 text-light-gray-70">
                  <span>{post.category}</span>
                  <span>•</span>
                  <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
                </div>
                <Typography variant="h3" className="mb-2 group-hover:text-orange-yellow-crayola transition-colors">
                  {post.title}
                </Typography>
                <Typography variant="body">
                  {post.excerpt}
                </Typography>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
