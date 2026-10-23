import AboutSection from '@/components/AboutSection';
import ContactFormSection from '@/components/ContactFormSection';
import FaqAccordion from '@/components/FaqAccordion';
import HomePrinciplesSection from '@/components/HomePrinciplesSection';
import HomeResourceLinks from '@/components/HomeResourceLinks';
import HomeServicesCarousel from '@/components/HomeServicesCarousel';
import PortfolioSection from '@/components/PortfolioSection';
import SiteCtaBand from '@/components/SiteCtaBand';
import type { Language, SiteCopy } from '@/components/translations';
import { SITE_PX } from '@/lib/siteLayout';

/** Нижче героя: текст у HTML для ботів, але браузер не малює це до скролу — інакше LCP героя зникає. */
const DEFER_PAINT =
  '[content-visibility:auto] [contain-intrinsic-size:auto_640px]';

export default function HomeBelowFold({ lang, t }: { lang: Language; t: SiteCopy }) {
  return (
    <>
      <div className={DEFER_PAINT}>
        <HomeServicesCarousel copy={t.about.homeServices} lang={lang} />
      </div>
      <div className={DEFER_PAINT}>
        <PortfolioSection t={t} />
      </div>
      <div className={DEFER_PAINT}>
        <HomePrinciplesSection
          principles={t.about.principles}
          lang={lang}
          allServicesLabel={t.about.services}
          pricingLabel={t.nav.pricing}
        />
      </div>
      <div className={DEFER_PAINT}>
        <AboutSection t={t} />
      </div>
      <div className={DEFER_PAINT}>
        <SiteCtaBand
          title={t.about.homeCta.title}
          text={t.about.homeCta.text}
          contactLabel={t.about.homeCta.contactLabel}
          pricingLabel={t.about.homeCta.pricingLabel}
          portfolioLabel={t.about.homeCta.portfolioLabel}
          pricingHref={`/${lang}/pricing`}
          portfolioHref={`/${lang}/portfolio`}
        />
      </div>
      <div className={DEFER_PAINT}>
        <HomeResourceLinks lang={lang} copy={t.about.homeResources} />
      </div>
      {t.about.faq?.items?.length ? (
        <div className={DEFER_PAINT}>
          <FaqAccordion
            title={t.about.faq.title}
            items={t.about.faq.items}
            sectionClassName={SITE_PX}
          />
        </div>
      ) : null}
      <div className={DEFER_PAINT}>
        <ContactFormSection t={t} lang={lang} id="home-contact" className="bg-white" />
      </div>
    </>
  );
}
