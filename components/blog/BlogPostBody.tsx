import type { BlogSection } from '@/lib/blog/types';
import Link from 'next/link';
import PricingPlansGrid from '@/components/PricingPlansGrid';
import FaqAccordion from '@/components/FaqAccordion';
import { parseBlogInline } from '@/components/blog/parseBlogInline';

const headingStyle = { fontFamily: 'var(--font-display)' };

export default function BlogPostBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose-blog mx-auto max-w-3xl">
      {sections.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p
                key={i}
                className="mb-6 text-lg font-light leading-relaxed text-gray-800 md:text-xl"
                style={headingStyle}
              >
                {parseBlogInline(block.text)}
              </p>
            );
          case 'h2':
            return (
              <h2
                key={i}
                className="mb-5 mt-12 text-2xl font-black tracking-tight text-black sm:text-3xl md:mt-16"
                style={headingStyle}
              >
                {parseBlogInline(block.text)}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                className="mb-4 mt-8 text-xl font-bold text-black sm:text-2xl"
                style={headingStyle}
              >
                {parseBlogInline(block.text)}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i} className="mb-8 space-y-3 pl-0 list-none">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-lg font-light leading-relaxed text-gray-800"
                    style={headingStyle}
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" aria-hidden />
                    <span>{parseBlogInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="mb-8 list-decimal space-y-3 pl-6 text-lg font-light text-gray-800">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed" style={headingStyle}>
                    {parseBlogInline(item)}
                  </li>
                ))}
              </ol>
            );
          case 'pricing':
            return (
              <PricingPlansGrid key={i} plans={block.plans} className="mb-10" popularLabel="Popular" />
            );
          case 'callout':
            return (
              <div
                key={i}
                className="mb-10 rounded-2xl border-l-4 border-brand bg-brand-soft px-6 py-5 md:px-8"
              >
                <p className="text-lg font-medium leading-relaxed text-gray-900" style={headingStyle}>
                  {parseBlogInline(block.text)}
                </p>
              </div>
            );
          case 'faq':
            return (
              <div key={i} className="my-12">
                <FaqAccordion
                  variant="embedded"
                  title="FAQ"
                  items={block.items.map((item) => ({
                    question: item.question,
                    answer: item.answer,
                  }))}
                />
              </div>
            );
          default:
            return null;
        }
      })}
      <p className="mt-8 text-center">
        <Link
          href="/uk/pricing"
          className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
        >
          Усі тарифи
        </Link>
      </p>
    </div>
  );
}
