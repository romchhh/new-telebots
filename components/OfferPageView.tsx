'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SuccessMessage from '@/components/SuccessMessage';
import FaqAccordion from '@/components/FaqAccordion';
import OfferUfoBeam from '@/components/OfferUfoBeam';
import OfferPng from '@/components/OfferPng';
import SiteCtaBand from '@/components/SiteCtaBand';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';
import KeyboardKeyBadge, { KEYBOARD_BENEFIT_SYMBOLS } from '@/components/KeyboardKeyBadge';
import { translations, Language } from '@/components/translations';
import { offerPageCopy, OFFER_TELEGRAM_URL } from '@/lib/offerPageCopy';
import { sendToTelegram } from '@/lib/telegram';
import { WEBMCP_OFFER } from '@/lib/webmcp';
import { SITE_PX, SITE_INNER } from '@/lib/siteLayout';
import { getPortfolioCards } from '@/lib/portfolioCards';

const display = { fontFamily: 'var(--font-display)' } as const;

interface OfferPageClientProps {
  initialLang: Language;
}

export default function OfferPageClient({ initialLang }: OfferPageClientProps) {
  const router = useRouter();
  const lang = initialLang;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [formSending, setFormSending] = useState(false);

  const t = translations[lang];
  const p = offerPageCopy[lang];

  const portfolioById = new Map(getPortfolioCards(lang).map((card) => [card.id, card]));
  const showcaseCards = getPortfolioCards(lang).filter((card) => card.category === 'websites');

  const stats = [
    { value: '$200', label: lang === 'uk' ? 'фіксована ціна' : lang === 'pl' ? 'stała cena' : lang === 'ru' ? 'фикс. цена' : 'fixed price' },
    { value: '2', label: lang === 'uk' ? 'дні на прототип' : lang === 'pl' ? 'dni na prototyp' : lang === 'ru' ? 'дня на прототип' : 'days to prototype' },
    { value: '5', label: lang === 'uk' ? 'робочих днів' : lang === 'pl' ? 'dni roboczych' : lang === 'ru' ? 'рабочих дней' : 'business days' },
    { value: '0$', label: lang === 'uk' ? 'до оплати' : lang === 'pl' ? 'przed płatnością' : lang === 'ru' ? 'до оплаты' : 'before payment' },
  ];

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 50);
    window.scrollTo(0, 0);
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleLangChange = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(uk|en|pl|ru)/, `/${newLang}`);
    router.push(newPath);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      service: p.metaTitle,
    });
    if (success) {
      closeModal();
      setSuccessMessage(t.modal.success);
      setIsSuccessOpen(true);
    } else {
      alert(
        lang === 'uk'
          ? 'Помилка відправки. Спробуйте ще раз.'
          : lang === 'pl'
            ? 'Błąd wysyłki. Spróbuj ponownie.'
            : lang === 'ru'
              ? 'Ошибка отправки. Попробуйте ещё раз.'
              : 'Error sending. Please try again.'
      );
    }
  };

  const scrollToCta = () => {
    document.getElementById('offer-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formSending) return;
    setFormSending(true);
    const success = await sendToTelegram({
      name: formData.name,
      phone: formData.phone,
      service: `Offer $200 · ${p.breadcrumb}`,
    });
    setFormSending(false);
    if (success) {
      setFormData({ name: '', phone: '' });
      setSuccessMessage(p.formSuccess);
      setIsSuccessOpen(true);
    } else {
      alert(
        lang === 'uk'
          ? 'Помилка відправки. Спробуйте ще раз.'
          : lang === 'pl'
            ? 'Błąd wysyłki. Spróbuj ponownie.'
            : lang === 'ru'
              ? 'Ошибка отправки. Попробуйте ещё раз.'
              : 'Error sending. Please try again.'
      );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navigation
          isScrolled={isScrolled}
          transparentOnLight
          lang={lang}
          setLang={handleLangChange}
          t={t}
          currentLang={lang}
          onConsultClick={openModal}
        />

        <main id="main-content">
          {/* 1 · Hero — як solutions */}
          <section className={`relative overflow-hidden border-b border-gray-100 bg-white pt-24 md:pt-28 lg:pt-16 ${SITE_PX}`}>
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px),
                  linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px)
                `,
                backgroundSize: '52px 52px',
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-24 top-1/4 z-0 h-[min(60vw,420px)] w-[min(60vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.12)_0%,transparent_70%)] blur-3xl"
              aria-hidden
            />
            <div className={`relative z-10 ${SITE_INNER} pb-14 md:pb-20 lg:pb-12`}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <Link href={`/${lang}/pricing`} className="transition-colors hover:text-brand">
                  {t.footer.pricing}
                </Link>
                <span className="mx-2 text-gray-300">/</span>
                <span>{p.breadcrumb}</span>
              </p>

              <div className="grid items-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
                <div>
                  <h1
                    className="mb-5 text-4xl font-black leading-tight tracking-tight text-black lg:text-5xl"
                    style={display}
                  >
                    {p.heroTitle}
                  </h1>
                  <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">{p.heroLead}</p>
                  <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
                    <OrderCtaPill
                      size="sm"
                      variant="brand"
                      label={p.heroCta}
                      onClick={scrollToCta}
                      className="w-full sm:w-auto sm:min-w-[14rem]"
                    />
                    <Link
                      href={OFFER_TELEGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white"
                    >
                      {p.formTelegram}
                    </Link>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">{p.heroNote}</p>
                </div>

                <div className="flex min-h-[300px] items-center justify-center p-2 sm:min-h-[360px] lg:min-h-0 lg:items-start lg:justify-center lg:-mt-6">
                  <OfferPng
                    src="/offer/carcloud.png"
                    alt="Спеціальна пропозиція: сайт за $200 від TeleBots"
                    width={683}
                    height={870}
                    priority
                    className="h-auto max-h-[min(58vh,500px)] w-auto max-w-full offer-float lg:max-h-[min(54vh,480px)]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className={`border-b border-gray-100 bg-zinc-50 ${SITE_PX}`}>
            <div className={`${SITE_INNER} py-10 md:py-12`}>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-2xl font-black text-black md:text-3xl" style={display}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.12em] text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2 · Risk + UFO */}
          <section className={`bg-black py-14 text-white md:py-20 ${SITE_PX}`}>
            <div className={SITE_INNER}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h2 className="mb-4 text-2xl font-black tracking-tight md:text-3xl" style={display}>
                    {p.riskTitle}
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-white/70">{p.riskLead}</p>
                  <ul className="space-y-4">
                    {p.riskPoints.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 text-base text-white/90 md:text-lg">
                        <KeyboardKeyBadge n={i + 1} size="sm" className="mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex min-h-[150px] items-center justify-center lg:min-h-[175px] lg:justify-end">
                  <OfferUfoBeam />
                </div>
              </div>
            </div>
          </section>

          {/* 3 · Pain */}
          <section className={`border-t border-white/10 bg-black py-14 text-white md:py-20 ${SITE_PX}`}>
            <div className={SITE_INNER}>
              <h2 className="mb-10 text-2xl font-black tracking-tight md:text-3xl" style={display}>
                {p.painTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {p.painItems.map((item, i) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <span className="mb-3 block text-sm font-light italic text-white/40" style={display}>
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                    <p className="leading-relaxed text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4 · Free steps + cloud */}
          <section className={`relative overflow-hidden py-14 md:py-20 ${SITE_PX}`}>
            <div className="absolute inset-0 bg-brand-soft" aria-hidden />
            <div
              className="pointer-events-none absolute -left-16 top-1/3 h-[min(55vw,380px)] w-[min(55vw,380px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.22)_0%,transparent_70%)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 bottom-0 h-[min(45vw,320px)] w-[min(45vw,320px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.14)_0%,transparent_70%)] blur-3xl"
              aria-hidden
            />
            <div className={`relative ${SITE_INNER}`}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="relative order-2 flex min-h-[220px] items-center justify-start p-2 sm:min-h-[260px] lg:order-1 lg:min-h-[300px]">
                  <OfferPng
                    src="/offer/cloud11.png"
                    alt="Декоративна ілюстрація хмари TeleBots"
                    width={1047}
                    height={436}
                    className="h-auto w-full max-w-[440px] offer-float-slow"
                  />
                </div>
                <div className="order-1 space-y-8 lg:order-2">
                  <div>
                    <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                      {p.freeTitle}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">{p.freeLead}</p>
                  </div>
                  {p.freeSteps.map((step) => (
                    <div key={step.title}>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                        {step.badge}
                      </p>
                      <h3 className="mb-2 text-xl font-bold text-black">{step.title}</h3>
                      <p className="leading-relaxed text-gray-600">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5 · $200 package */}
          <section className={`border-y border-gray-100 bg-zinc-50 py-14 md:py-20 ${SITE_PX}`}>
            <div className={SITE_INNER}>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                    {p.priceTitle}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600">{p.priceLead}</p>
                </div>
                <p className="text-4xl font-black tracking-tight text-black md:text-5xl" style={display}>
                  {p.priceAmount}
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {p.priceItems.map((item, i) => (
                  <li
                    key={item}
                    className="flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-3.5 sm:rounded-3xl sm:p-6"
                  >
                    <KeyboardKeyBadge
                      symbol={KEYBOARD_BENEFIT_SYMBOLS[i % KEYBOARD_BENEFIT_SYMBOLS.length]}
                      className="mb-2.5 sm:mb-5"
                    />
                    <p className="mt-0.5 text-sm leading-snug font-normal text-gray-700 sm:text-base">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-gray-500">{p.priceNote}</p>
            </div>
          </section>

          {/* 7 · Who + astronaut */}
          <section className={`py-14 md:py-20 ${SITE_PX}`}>
            <div className={SITE_INNER}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="hidden min-h-[400px] items-end justify-start p-2 lg:flex">
                  <OfferPng
                    src="/offer/astronaut11.png"
                    alt="Ілюстрація астронавта TeleBots — хто робить сайт за $200"
                    width={328}
                    height={450}
                    className="h-auto w-[340px] offer-float"
                  />
                </div>
                <div>
                  <div className="flex items-start gap-4 sm:gap-5 lg:block">
                    <div className="min-w-0 flex-1">
                      <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                        {p.whoTitle}
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-700 lg:mb-8">{p.whoText}</p>
                    </div>
                    <div className="relative h-10 w-8 shrink-0 sm:h-11 sm:w-9 lg:hidden">
                      <OfferPng
                        src="/offer/astronaut11.png"
                        alt="Ілюстрація астронавта TeleBots — хто робить сайт за $200"
                        width={328}
                        height={450}
                        className="h-full w-full object-contain object-bottom offer-float"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
                    <OrderCtaPill
                      size="sm"
                      variant="brand"
                      label={p.heroCta}
                      onClick={scrollToCta}
                      className="w-full sm:w-auto sm:min-w-[14rem]"
                    />
                    <Link
                      href={`/${lang}/portfolio`}
                      className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white"
                    >
                      {p.whoLink}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 · Cases — horizontal like solutions showcase */}
          <section className={`bg-white py-14 md:py-20 ${SITE_PX}`}>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                  {p.casesTitle}
                </h2>
              </div>
              <Link
                href={`/${lang}/portfolio`}
                className="text-sm font-semibold text-gray-700 underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                {p.whoLink} →
              </Link>
            </div>
            <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="flex w-max gap-5">
                {showcaseCards.map((card) => (
                  <PortfolioCaseCard
                    key={card.id}
                    card={card}
                    lang={lang}
                    className="w-[min(82vw,20rem)] shrink-0 sm:w-[22rem]"
                    sizes="352px"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {p.cases.map((item) => (
                <div key={item.id} className="rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">{item.niche}</p>
                  <h3 className="mb-3 text-lg font-bold text-black">{portfolioById.get(item.id)?.title || item.id}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-gray-600">{item.task}</p>
                  <p className="mb-2 text-sm leading-relaxed text-gray-600">{item.solution}</p>
                  <p className="text-sm font-medium text-gray-900">{item.result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8 · FAQ */}
          <FaqAccordion title={p.faqTitle} items={p.faqItems} sectionClassName={SITE_PX} />

          {/* 9 · CTA form */}
          <section id="offer-cta" className={`relative overflow-hidden border-t border-gray-100 bg-zinc-50 py-14 md:py-20 ${SITE_PX}`}>
            <div
              className="pointer-events-none absolute -bottom-8 right-0 hidden w-[min(40vw,220px)] opacity-30 sm:block lg:-right-4 lg:w-[260px] lg:opacity-40"
              aria-hidden
            >
              <OfferPng
                src="/offer/cloud11.png"
                alt="Декоративна ілюстрація хмари TeleBots"
                width={1047}
                height={436}
                className="w-full offer-float-slow"
              />
            </div>
            <div className={`relative z-10 ${SITE_INNER} grid items-start gap-10 lg:grid-cols-2 lg:gap-14`}>
              <div>
                <h2 className="mb-4 text-2xl font-black tracking-tight text-black md:text-3xl" style={display}>
                  {p.ctaTitle}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">{p.ctaLead}</p>
                <p className="text-sm leading-relaxed text-gray-500">{p.ctaNote}</p>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
                toolname={WEBMCP_OFFER.toolname}
                tooldescription={WEBMCP_OFFER.tooldescription}
              >
                <div className="mb-8">
                  <label htmlFor="offer-name" className="mb-2 block text-sm font-normal text-brand">{p.formName} *</label>
                  <input
                    id="offer-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder={p.formNamePlaceholder}
                    toolparamdescription={WEBMCP_OFFER.params.name}
                    className="w-full border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-black focus:outline-none"
                  />
                </div>
                <div className="mb-10">
                  <label htmlFor="offer-phone" className="mb-2 block text-sm font-normal text-brand">{p.formPhone} *</label>
                  <input
                    id="offer-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder={p.formPhonePlaceholder}
                    toolparamdescription={WEBMCP_OFFER.params.phone}
                    className="w-full border-0 border-b-2 border-black bg-transparent py-2 text-base font-normal text-black focus:border-black focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <OrderCtaPill
                    size="sm"
                    variant="brand"
                    type="submit"
                    label={formSending ? '…' : p.formSubmit}
                    className="w-full sm:w-auto sm:min-w-[12rem]"
                  />
                  <a
                    href={OFFER_TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white"
                  >
                    {p.formTelegram}
                  </a>
                </div>
              </form>
            </div>
          </section>

          <SiteCtaBand
            title={p.ctaTitle}
            text={p.ctaNote}
            contactLabel={p.heroCta}
            pricingLabel={t.footer.pricing}
            portfolioLabel={p.whoLink}
            pricingHref={`/${lang}/pricing`}
            portfolioHref={`/${lang}/portfolio`}
            onContactClick={scrollToCta}
            className="pt-16 md:pt-24"
          />
        </main>

        <Footer
          t={t}
          lang={lang}
          setLang={handleLangChange}
          currentLang={lang}
          onConsultClick={openModal}
        />
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
        t={t}
        serviceName={p.metaTitle}
      />
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={successMessage || t.modal.success}
      />
    </>
  );
}
