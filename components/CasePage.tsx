'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { cases } from './cases';
import { translations, Language } from './translations';
import OrderModal from './OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SiteCtaBand from '@/components/SiteCtaBand';
import SuccessMessage from './SuccessMessage';
import PortfolioCaseCard from '@/components/PortfolioCaseCard';
import { sendToTelegram } from '@/lib/telegram';
import { SITE_PX } from '@/lib/siteLayout';
import { getCaseStudy, getCaseStudyCopy } from '@/lib/caseStudies';
import { getPortfolioCards } from '@/lib/portfolioCards';

interface CasePageProps {
  caseId: string;
}

const display = { fontFamily: 'var(--font-display)' };
const sans = { fontFamily: 'var(--font-sans)' };

function copy(lang: Language, uk: string, en: string, pl: string, ru: string) {
  if (lang === 'en') return en;
  if (lang === 'pl') return pl;
  if (lang === 'ru') return ru;
  return uk;
}

export default function CasePage({ caseId }: CasePageProps) {
  const params = useParams();
  const langParam = params?.lang as string;
  const validLang = (['uk', 'en', 'pl', 'ru'].includes(langParam) ? langParam : 'uk') as Language;
  const t = translations[validLang];
  const casesData = cases[validLang] || cases.uk;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const caseData = (casesData as Record<string, any>)[caseId];
  const study = getCaseStudy(caseId);
  const studyCopy = getCaseStudyCopy(caseId, validLang);

  if (!caseData && !study) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            {copy(validLang, 'Кейс не знайдено', 'Case not found', 'Przypadek nie znaleziony', 'Кейс не найден')}
          </h1>
          <Link href={`/${validLang}/portfolio`} className="text-brand hover:underline">
            {copy(validLang, 'Повернутися до кейсів', 'Back to cases', 'Powrót do realizacji', 'Вернуться к кейсам')}
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (data: { name: string; phone: string; request: string }) => {
    const success = await sendToTelegram({
      name: data.name,
      phone: data.phone,
      request: data.request,
      caseId,
    });
    if (success) {
      setIsModalOpen(false);
      setIsSuccessOpen(true);
    } else {
      alert(
        copy(
          validLang,
          "Помилка відправки. Спробуйте ще раз або зв'яжіться з нами безпосередньо.",
          'Sending failed. Please try again or contact us directly.',
          'Błąd wysyłki. Spróbuj ponownie lub skontaktuj się z nami.',
          'Ошибка отправки. Попробуйте ещё раз или свяжитесь с нами напрямую.'
        )
      );
    }
  };

  const liveUrl = study?.liveUrl || caseData?.liveUrl;
  const mainImage = study?.mainImage || caseData?.mainImage || '/other/about-hero.png';
  const related = getPortfolioCards(validLang)
    .filter((c) => c.id !== caseId)
    .sort((a, b) => {
      if (a.category === b.category) return 0;
      return a.category === 'websites' ? -1 : 1;
    });

  const title = studyCopy?.heroTitle || caseData?.title || caseId;
  const lead = studyCopy?.heroLead || caseData?.subtitle || caseData?.description || '';
  const crumb = studyCopy?.breadcrumbLabel || caseData?.title || caseId;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '52px 52px',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.22)_0%,transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className={`relative z-10 pt-24 md:pt-28 ${SITE_PX}`}>
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50" style={sans}>
            <Link href={`/${validLang}`} className="transition-colors hover:text-white">
              {copy(validLang, 'Головна', 'Home', 'Strona główna', 'Главная')}
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/${validLang}/portfolio`} className="transition-colors hover:text-white">
              {t.nav.portfolio}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{crumb}</span>
          </nav>

          <div className="grid items-center gap-10 pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pb-16">
            <div>
              <h1
                className="mb-6 text-[clamp(1.75rem,4.5vw,3.25rem)] font-black uppercase leading-[1.05] tracking-tight text-white"
                style={display}
              >
                {title}
              </h1>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg" style={sans}>
                {lead}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-opacity hover:opacity-90"
                    style={sans}
                  >
                    {studyCopy?.visitSite ||
                      copy(validLang, 'Переглянути проєкт', 'Visit site', 'Zobacz projekt', 'Смотреть проект')}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                  </a>
                ) : null}
                <OrderCtaPill
                  size="sm"
                  variant="outline"
                  label={copy(validLang, 'Обговорити проєкт', 'Discuss a project', 'Omówić projekt', 'Обсудить проект')}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto sm:min-w-[14rem]"
                />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-2xl sm:max-w-md lg:max-w-lg">
              <Image
                src={mainImage}
                alt={title}
                width={800}
                height={600}
                className="h-auto w-full"
                sizes="(max-width: 640px) 22rem, (max-width: 1024px) 28rem, 32rem"
                priority
                quality={85}
              />
            </div>
          </div>

          {studyCopy?.stats?.length ? (
            <div className="pb-10 md:pb-14">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
                {studyCopy.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0a0a0a]/90 px-4 py-6 sm:px-6 sm:py-8">
                    <div className="mb-2 text-3xl font-black text-brand sm:text-4xl" style={display}>
                      {stat.value}
                    </div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand/80 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* CHALLENGE */}
      {studyCopy?.challenge ? (
        <section className={`border-b border-gray-100 bg-white py-16 md:py-24 ${SITE_PX}`}>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 md:text-sm" style={sans}>
                {studyCopy.challenge.eyebrow}
              </p>
              <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl lg:text-5xl" style={display}>
                {studyCopy.challenge.title}
              </h2>
            </div>
            <div>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl lg:leading-relaxed" style={sans}>
                {studyCopy.challenge.lead}
              </p>
              <ul className="space-y-4 md:space-y-5">
                {studyCopy.challenge.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-gray-800 md:text-lg lg:text-xl lg:leading-relaxed"
                    style={sans}
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand md:mt-3" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {/* SOLUTION */}
      {studyCopy?.solution ? (
        <section className={`border-b border-gray-100 bg-white py-16 md:py-24 ${SITE_PX}`}>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 md:text-sm" style={sans}>
                {studyCopy.solution.eyebrow}
              </p>
              <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl lg:text-5xl" style={display}>
                {studyCopy.solution.title}
              </h2>
            </div>
            <div>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl lg:leading-relaxed" style={sans}>
                {studyCopy.solution.lead}
              </p>
              <ul className="space-y-4 md:space-y-5">
                {studyCopy.solution.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-gray-800 md:text-lg lg:text-xl lg:leading-relaxed"
                    style={sans}
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black md:mt-3" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-2xl md:mt-16 md:max-w-2xl">
            <Image
              src={mainImage}
              alt={title}
              width={900}
              height={675}
              className="h-auto w-full"
              sizes="(max-width: 768px) 36rem, 42rem"
              quality={85}
            />
          </div>
        </section>
      ) : null}

      {/* OUTCOME */}
      {studyCopy?.outcome ? (
        <section className={`bg-white py-16 md:py-24 ${SITE_PX}`}>
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 md:text-sm" style={sans}>
              {studyCopy.outcome.eyebrow}
            </p>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-black md:text-4xl lg:text-5xl" style={display}>
              {studyCopy.outcome.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl lg:leading-relaxed" style={sans}>
              {studyCopy.outcome.text}
            </p>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-black hover:text-white md:text-base"
                style={sans}
              >
                {studyCopy.visitSite}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* RELATED */}
      {related.length > 0 ? (
        <section className={`border-t border-gray-100 bg-[#0a0a0a] py-16 text-white md:py-24 ${SITE_PX}`}>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">RELATED</p>
              <h2 className="text-2xl font-black md:text-3xl" style={display}>
                {studyCopy?.relatedTitle ||
                  copy(validLang, 'Інші кейси', 'Other cases', 'Inne case’y', 'Другие кейсы')}
              </h2>
            </div>
            <Link
              href={`/${validLang}/portfolio`}
              className="text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              {studyCopy?.relatedCta ||
                copy(validLang, 'Усі кейси', 'All cases', 'Wszystkie case’y', 'Все кейсы')}{' '}
              →
            </Link>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex w-max gap-5">
              {related.map((card) => (
                <PortfolioCaseCard
                  key={card.id}
                  card={card}
                  lang={validLang}
                  className="w-[min(82vw,20rem)] shrink-0 sm:w-[22rem]"
                  sizes="352px"
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SiteCtaBand
        title={t.about.homeCta.title}
        text={t.about.homeCta.text}
        contactLabel={t.about.homeCta.contactLabel}
        pricingLabel={t.about.homeCta.pricingLabel}
        portfolioLabel={t.about.homeCta.portfolioLabel}
        pricingHref={`/${validLang}/pricing`}
        portfolioHref={`/${validLang}/portfolio`}
        onContactClick={() => setIsModalOpen(true)}
        className="pt-16 md:pt-20"
      />

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={title}
        t={t}
        onSubmit={handleSubmit}
      />
      <SuccessMessage
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        message={t.modal.success}
      />
    </div>
  );
}
