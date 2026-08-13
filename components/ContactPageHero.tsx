import Breadcrumbs, { type Crumb } from '@/components/Breadcrumbs';
import { SITE_INNER, SITE_PX } from '@/lib/siteLayout';

type ContactPageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumbs: Crumb[];
};

const display = { fontFamily: 'var(--font-display)' };

export default function ContactPageHero({ title, subtitle, breadcrumbs }: ContactPageHeroProps) {
  return (
    <section className={`border-b border-gray-100 bg-white pt-24 md:pt-28 ${SITE_PX}`}>
      <div className={`${SITE_INNER} pb-8 md:pb-10`}>
        <Breadcrumbs items={breadcrumbs} variant="inline" />
        <h1
          className="mt-2 max-w-2xl text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl md:text-[2.75rem]"
          style={display}
        >
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-600 md:mt-4 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
