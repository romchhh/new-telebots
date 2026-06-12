'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import ContactSection from '@/components/ContactSection';
import BlogPostBody from '@/components/blog/BlogPostBody';
import BlogRelatedSection from '@/components/blog/BlogRelatedSection';
import LegacyBlogContent from '@/components/blog/legacy/LegacyBlogContent';
import SuccessMessage from '@/components/SuccessMessage';
import { translations, Language } from '@/components/translations';
import { getRelatedPosts } from '@/lib/blog/posts';
import type { BlogPost } from '@/lib/blog/types';

interface BlogPostPageClientProps {
  post: BlogPost;
}

export default function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  const params = useParams();
  const router = useRouter();
  const lang: Language = 'uk';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const t = translations.uk;

  const faqSection = post.sections?.find((s) => s.type === 'faq');
  const faqs = faqSection && faqSection.type === 'faq' ? faqSection.items : [];
  const isLegacy = Boolean(post.legacyId);
  const relatedPosts = getRelatedPosts(post.slug);

  useEffect(() => {
    const langParam = params?.lang as string;
    if (langParam && langParam !== 'uk') {
      router.replace(`/uk/blog/${post.slug}`);
    }
  }, [post.slug, params?.lang, router]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    if (newLang === 'uk') return;
    const currentPath = window.location.pathname.replace(/^\/uk/, `/${newLang}`);
    if (!currentPath.includes('/blog')) {
      router.push(`/${newLang}`);
      return;
    }
    router.push(`/${newLang}`);
  };

  const dateStr = new Date(post.updatedAt).toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: t.nav.brand, url: '/uk' },
          { name: t.blog.articlesTitle, url: '/uk/blog' },
          { name: post.title, url: `/uk/blog/${post.slug}` },
        ]}
      />
      <StructuredData
        type="blogPosting"
        blogTitle={post.title}
        blogDescription={post.description}
        blogPublishedTime={post.publishedAt}
        blogModifiedTime={post.updatedAt}
        blogImage={post.image}
        blogSlug={post.slug}
      />
      {faqs.length > 0 && <StructuredData type="faq" faqs={faqs} />}

      <div className="min-h-screen bg-white">
        <Navigation
          isScrolled={isScrolled}
          solidHeader
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={() => {
            document.getElementById('blog-contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <article className="bg-white pt-16 md:pt-28 lg:pt-32">
          {!isLegacy && (
            <>
              <header className="mx-auto max-w-4xl px-6 pb-8 md:px-10">
                <Link
                  href="/uk/blog"
                  className="mb-6 inline-block text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-black"
                >
                  ← {t.blog.backToBlog}
                </Link>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {dateStr} · {post.readingTimeMinutes} min
                </p>
                <h1
                  className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl md:text-5xl"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {post.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-gray-600 md:text-xl">{post.excerpt}</p>
              </header>

              <div className="relative mx-auto mb-12 max-w-5xl px-6 md:mb-16 md:px-10">
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
          )}

          {isLegacy && post.legacyId ? (
            <div className="pt-4">
              <div className="mx-auto max-w-4xl px-6 pb-4 md:px-10">
                <Link
                  href="/uk/blog"
                  className="inline-block text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-black"
                >
                  ← {t.blog.backToBlog}
                </Link>
              </div>
              <LegacyBlogContent legacyId={post.legacyId} />
            </div>
          ) : (
            post.sections && (
              <div className="px-6 pb-16 md:px-10 md:pb-24">
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
            onSuccess={() => setIsSuccessOpen(true)}
          />
        </article>

        <Footer t={t} lang={lang} setLang={handleLangChange} currentLang={lang} />
      </div>

      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.contact.success}
      />
    </>
  );
}
