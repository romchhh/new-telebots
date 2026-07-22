import Link from 'next/link';
import type { BlogPost } from '@/lib/blog/types';
import { SITE_PX } from '@/lib/siteLayout';

type BlogRelatedSectionProps = {
  related: BlogPost[];
};

export default function BlogRelatedSection({ related }: BlogRelatedSectionProps) {
  if (related.length === 0) return null;

  return (
    <aside className={`border-t border-gray-100 bg-gray-50/80 py-12 md:py-16 ${SITE_PX}`}>
      <div className="mx-auto max-w-4xl">
        <h2
          className="mb-6 text-xl font-bold text-black md:text-2xl"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Читайте також
        </h2>
        <ul className="space-y-4">
          {related.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/uk/blog/${post.slug}`}
                className="group block rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  {post.readingTimeMinutes} хв
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-black group-hover:text-[#F05A00]">
                  {post.title}
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/uk/pricing"
            className="inline-flex items-center rounded-full border border-black px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Тарифи TeleBots
          </Link>
          <Link
            href="/uk/services"
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-black hover:text-black"
          >
            Послуги
          </Link>
          <Link
            href="/uk/contact"
            className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-black hover:text-black"
          >
            Безкоштовна консультація
          </Link>
        </div>
      </div>
    </aside>
  );
}
