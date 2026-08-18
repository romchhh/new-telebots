import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/components/ContactSection';
import BlogPostBody from '@/components/blog/BlogPostBody';
import BlogRelatedSection from '@/components/blog/BlogRelatedSection';
import LegacyBlogContent from '@/components/blog/legacy/LegacyBlogContent';
import { translations } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';
import { getRelatedPosts } from '@/lib/blog/posts';
import type { BlogPost } from '@/lib/blog/types';
import { BREADCRUMB_HOME } from '@/lib/breadcrumbLabels';

export default function BlogPostPageClient({ post }: { post: BlogPost }) {
  const lang = 'uk' as const;
  const t = translations.uk;

  const faqSection = post.sections?.find((s) => s.type === 'faq');
  const faqs = faqSection && faqSection.type === 'faq' ? faqSection.items : [];
  const isLegacy = Boolean(post.legacyId);
  const relatedPosts = getRelatedPosts(post.slug);

  const dateStr = new Date(post.updatedAt).toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const breadcrumbs = [
    { name: BREADCRUMB_HOME.uk, url: '/uk' },
    { name: t.blog.articlesTitle, url: '/uk/blog' },
    { name: post.title, url: `/uk/blog/${post.slug}` },
  ];
  const visibleBreadcrumbs = breadcrumbs.map((crumb, index) => ({
    name: crumb.name,
    href: index < breadcrumbs.length - 1 ? crumb.url : undefined,
  }));

  return (
    <>
      <StructuredData type="organization" lang="uk" />
      <StructuredData type="breadcrumb" lang="uk" breadcrumbs={breadcrumbs} />
      <StructuredData
        type="blogPosting"
        lang="uk"
        blogTitle={post.title}
        blogDescription={post.description}
        blogPublishedTime={post.publishedAt}
        blogModifiedTime={post.updatedAt}
        blogImage={post.image}
        blogSlug={post.slug}
      />
      {faqs.length > 0 ? <StructuredData type="faq" lang="uk" faqs={faqs} /> : null}

      <article id="main-content" className="bg-white pt-16 md:pt-28 lg:pt-32">
        {!isLegacy ? (
          <>
            <header className={`mx-auto max-w-4xl pb-8 ${SITE_PX}`}>
              <Breadcrumbs variant="inline" items={visibleBreadcrumbs} />
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {dateStr} · {post.readingTimeMinutes} min
              </p>
              <h1
                className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-600 md:text-xl">{post.excerpt}</p>
            </header>

            <div className={`relative mx-auto mb-12 max-w-5xl md:mb-16 ${SITE_PX}`}>
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </>
        ) : null}

        {isLegacy && post.legacyId ? (
          <div className="pt-4">
            <div className={`mx-auto max-w-4xl ${SITE_PX}`}>
              <Breadcrumbs variant="inline" items={visibleBreadcrumbs} />
            </div>
            <LegacyBlogContent legacyId={post.legacyId} />
          </div>
        ) : (
          post.sections && (
            <div className={`pb-16 md:pb-24 ${SITE_PX}`}>
              <BlogPostBody sections={post.sections} />
            </div>
          )
        )}

        <BlogRelatedSection related={relatedPosts} />

        <ContactSection
          id="blog-contact"
          t={t}
          lang={lang}
          serviceName={post.title}
          headingLevel="h2"
          className="border-t border-gray-100"
        />
      </article>
    </>
  );
}
