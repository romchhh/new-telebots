import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog/types';

const categoryLabel: Record<string, string> = {
  pricing: 'Ціни',
  telegram: 'Telegram',
  websites: 'Сайти',
  ai: 'ШІ',
  security: 'Безпека',
  business: 'Бізнес',
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const label = categoryLabel[post.category] ?? post.category;

  return (
    <Link
      href={`/uk/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {post.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            TOP
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          <span>{label}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} хв</span>
        </div>
        <h3
          className="mb-2 text-lg font-black leading-snug text-black group-hover:underline md:text-xl"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {post.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
        <span className="mt-4 text-sm font-semibold uppercase tracking-wider text-black">Читати →</span>
      </div>
    </Link>
  );
}
