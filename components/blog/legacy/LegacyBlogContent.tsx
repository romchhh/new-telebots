'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { SITE_PX } from '@/lib/siteLayout';

/** dynamic() лише на рівні модуля — інакше при кожному скролі (re-render) стаття зникає і знову «Завантаження…» */
const LegacyArticles: Record<number, ComponentType> = {
  1: dynamic(() => import('./BlogPost1')),
  2: dynamic(() => import('./BlogPost2')),
  3: dynamic(() => import('./BlogPost3')),
  4: dynamic(() => import('./BlogPost4')),
  5: dynamic(() => import('./BlogPost5')),
  6: dynamic(() => import('./BlogPost6')),
  7: dynamic(() => import('./BlogPost7')),
  8: dynamic(() => import('./BlogPost8')),
  9: dynamic(() => import('./BlogPost9')),
  10: dynamic(() => import('./BlogPost10')),
  11: dynamic(() => import('./BlogPost11')),
  12: dynamic(() => import('./BlogPost12')),
  13: dynamic(() => import('./BlogPost13')),
  14: dynamic(() => import('./BlogPost14')),
  15: dynamic(() => import('./BlogPost15')),
};

export default function LegacyBlogContent({ legacyId }: { legacyId: number }) {
  const Article = LegacyArticles[legacyId];
  if (!Article) return null;

  return (
    <div
      className={[
        'blog-legacy-article mx-auto max-w-4xl pb-8',
        SITE_PX,
        '[&_h1]:text-3xl [&_h1]:font-black [&_h1]:leading-tight [&_h1]:text-black',
        '[&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-black',
        '[&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black',
        '[&_h4]:font-bold [&_h4]:text-gray-900',
        '[&_img]:rounded-lg [&_img]:shadow-md',
        '[&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-gray-800',
        '[&_li]:text-gray-800 [&_li]:leading-relaxed',
        '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6',
        '[&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6',
        '[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:!bg-gray-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:!text-gray-100 [&_pre]:shadow-md',
        '[&_pre_code]:!bg-transparent [&_pre_code]:p-0 [&_pre_code]:font-mono [&_pre_code]:text-sm [&_pre_code]:!text-gray-100',
        '[&_p_code]:rounded [&_p_code]:bg-gray-100 [&_p_code]:px-1.5 [&_p_code]:py-0.5 [&_p_code]:text-base [&_p_code]:text-gray-900',
        '[&_li_code]:rounded [&_li_code]:bg-gray-100 [&_li_code]:px-1.5 [&_li_code]:text-gray-900',
        "[&_div[class*='bg-']]:my-6 [&_div[class*='bg-']]:rounded-xl [&_div[class*='bg-']]:border [&_div[class*='bg-']]:border-gray-200",
        "[&_div[class*='bg-']_h4]:text-gray-900 [&_div[class*='bg-']_li]:text-gray-800 [&_div[class*='bg-']_p]:text-gray-800",
      ].join(' ')}
    >
      <Article />
    </div>
  );
}
