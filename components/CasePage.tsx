'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cases } from './cases';
import { translations, Language } from './translations';
import OrderModal from './OrderModal';
import OrderCtaPill from '@/components/OrderCtaPill';
import SuccessMessage from './SuccessMessage';
import { sendToTelegram } from '@/lib/telegram';
import { SITE_PX } from '@/lib/siteLayout';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

interface CasePageProps {
  caseId: string;
}

const montserrat = { fontFamily: 'var(--font-montserrat)' };

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

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {copy(validLang, 'Кейс не знайдено', 'Case not found', 'Przypadek nie znaleziony', 'Кейс не найден')}
          </h1>
          <Link
            href={`/${validLang}/portfolio`}
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition"
          >
            <FaArrowLeft />
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

  const orderLabel = copy(validLang, 'Замовити розробку', 'Order Development', 'Zamów rozwój', 'Заказать разработку');
  const viewProjectLabel = copy(validLang, 'Переглянути проєкт', 'View Project', 'Zobacz projekt', 'Посмотреть проект');
  const backLabel = copy(validLang, 'Усі кейси', 'All cases', 'Wszystkie realizacje', 'Все кейсы');

  const scrollToCaseMedia = () => {
    document.getElementById('case-media')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — стиль як на головній; фото кейсу не на фоні */}
      <section className="relative h-[100dvh] max-h-[100dvh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element -- atmospheric hero, not case photo */}
          <img
            src="/other/hero-background.webp"
            alt=""
            width={1344}
            height={768}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 block size-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black/40" aria-hidden />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/92 via-black/50 to-black/10"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent md:from-black/50"
          aria-hidden
        />

        {(caseData.duration || caseData.category) && (
          <div className="absolute z-20 right-0 top-16 sm:top-24 md:top-28 lg:top-32">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(220px,58vw)] w-[min(220px,58vw)] -translate-x-1/2 -translate-y-1/2 sm:h-[min(240px,52vw)] sm:w-[min(240px,52vw)] md:h-[clamp(280px,32vw,440px)] md:w-[clamp(280px,32vw,440px)]"
              style={{
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 38%, rgba(0,0,0,0.14) 62%, transparent 86%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              aria-hidden
            />
            <div className="relative p-3 sm:p-5 md:p-7 lg:p-9 xl:p-10">
              <div className="relative h-[8.5rem] w-[8.5rem] sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
                <div className="absolute inset-0" aria-hidden>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-white/35" />
                  <div className="absolute bottom-0 top-0 left-1/2 w-px bg-white/35" />
                </div>
                {caseData.category && (
                  <div className="absolute right-0 top-0 flex h-1/2 w-1/2 flex-col items-end justify-end p-2 text-right sm:p-3 md:p-4 lg:p-6">
                    <span
                      className="mb-1 text-[10px] uppercase tracking-[0.14em] text-gray-300 sm:text-xs md:text-sm"
                      style={montserrat}
                    >
                      {copy(validLang, 'тип', 'type', 'typ', 'тип')}
                    </span>
                    <span
                      className="line-clamp-3 text-xs font-semibold uppercase leading-tight text-white sm:text-sm md:text-base lg:text-lg"
                      style={montserrat}
                    >
                      {caseData.category}
                    </span>
                  </div>
                )}
                {caseData.duration && (
                  <div className="absolute bottom-0 left-0 flex h-1/2 w-1/2 flex-col items-start justify-start p-2 sm:p-3 md:p-4 lg:p-6">
                    <span
                      className="mb-1 text-[10px] uppercase tracking-[0.14em] text-gray-300 sm:text-xs md:text-sm"
                      style={montserrat}
                    >
                      {copy(validLang, 'строк', 'timeline', 'czas', 'срок')}
                    </span>
                    <span
                      className="text-sm font-semibold uppercase leading-tight text-white sm:text-base md:text-xl lg:text-2xl"
                      style={montserrat}
                    >
                      {caseData.duration}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div
          className={`relative z-20 grid h-full max-h-full w-full overflow-hidden pb-2 pt-16 sm:pb-5 sm:pt-24 lg:pt-28 ${SITE_PX}`}
          style={{ gridTemplateRows: '1fr auto' }}
        >
          <div className="flex min-h-0 flex-col justify-center max-md:items-stretch md:justify-center max-lg:pr-[6.5rem] sm:max-lg:pr-40 lg:pr-64 xl:pr-72">
            <div className="min-h-0 w-full max-w-[min(100%,52rem)]">
              <Link
                href={`/${validLang}/portfolio`}
                className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white sm:mb-5 sm:text-sm"
                style={montserrat}
              >
                <FaArrowLeft className="h-3 w-3" />
                {backLabel}
              </Link>
              <h1
                className="font-black uppercase leading-[0.92] tracking-[-0.02em] text-white text-[clamp(1.75rem,7vw,2.5rem)] sm:text-[clamp(2.25rem,5.5vw,3.25rem)] md:text-5xl md:leading-[0.92] lg:text-6xl xl:text-[4.5rem] xl:leading-[0.9]"
                style={montserrat}
              >
                {caseData.title}
              </h1>
              {caseData.subtitle && (
                <p
                  className="mt-3 line-clamp-3 text-lg leading-snug text-white/90 sm:mt-4 sm:text-xl md:text-2xl lg:text-3xl"
                  style={montserrat}
                >
                  {caseData.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex min-h-0 shrink-0 flex-col-reverse gap-3 max-sm:-mt-6 sm:mt-0 sm:flex-col sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-10">
            <div className="min-w-0 space-y-3 md:max-w-[48%] lg:max-w-[44%]">
              {caseData.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {caseData.technologies.slice(0, 6).map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={scrollToCaseMedia}
                className="hidden items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/65 transition-colors hover:text-white lg:inline-flex md:text-sm"
                style={montserrat}
              >
                {copy(validLang, 'Переглянути фото', 'View photo', 'Zobacz zdjęcie', 'Смотреть фото')}
                <span className="text-base md:text-lg" aria-hidden>
                  ↓
                </span>
              </button>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-stretch md:w-auto md:flex-col lg:flex-row">
              {caseData.liveUrl && (
                <a
                  href={caseData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10 sm:min-w-[12rem]"
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  {viewProjectLabel}
                </a>
              )}
              <OrderCtaPill
                size="hero"
                eyebrow={copy(
                  validLang,
                  'Хочете схожий проєкт?',
                  'Want a similar project?',
                  'Chcesz podobny projekt?',
                  'Хотите похожий проект?'
                )}
                eyebrowMobile={copy(
                  validLang,
                  'Обговорити проєкт',
                  'Discuss project',
                  'Omówić projekt',
                  'Обсудить проект'
                )}
                label={orderLabel}
                onClick={() => setIsModalOpen(true)}
                className="w-full max-w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Фото кейсу — окремо */}
      <section id="case-media" className={`scroll-mt-20 bg-black ${SITE_PX}`}>
        <div className="mx-auto max-w-6xl py-10 sm:py-12 md:py-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-900 sm:aspect-[1500/970]">
            <Image
              src={caseData.mainImage}
              alt={`${caseData.title}${caseData.subtitle ? ` — ${caseData.subtitle}` : ''} | TeleBots`}
              fill
              className="object-contain"
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </div>
          {(caseData.client || caseData.category) && (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {caseData.client && (
                <p>
                  <span className="uppercase tracking-[0.14em] text-white/40">
                    {copy(validLang, 'клієнт', 'client', 'klient', 'клиент')}
                  </span>
                  <span className="ml-2 text-white/85">{caseData.client}</span>
                </p>
              )}
              {caseData.category && (
                <p>
                  <span className="uppercase tracking-[0.14em] text-white/40">
                    {copy(validLang, 'категорія', 'category', 'kategoria', 'категория')}
                  </span>
                  <span className="ml-2 text-white/85">{caseData.category}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Action bar */}
      <section className={`border-b border-zinc-100 bg-white py-10 lg:py-12 ${SITE_PX}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          {caseData.liveUrl && (
            <a
              href={caseData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-black text-white transition-colors hover:bg-gray-800 sm:min-w-[16rem]"
            >
              <FaExternalLinkAlt className="h-5 w-5" />
              {viewProjectLabel}
            </a>
          )}
          <OrderCtaPill
            size="md"
            label={orderLabel}
            onClick={() => setIsModalOpen(true)}
            elevated
            className="w-full sm:w-auto sm:min-w-[16rem]"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className={`bg-white py-12 lg:py-16 ${SITE_PX}`}>
        <div className="mx-auto max-w-6xl">
          {caseData.description && (
            <div className="mb-14">
              <h2 className="mb-5 text-3xl font-black text-black lg:text-4xl xl:text-5xl">
                {copy(validLang, 'Опис проєкту', 'Project Description', 'Opis projektu', 'Описание проекта')}
              </h2>
              <div className="prose prose-lg max-w-none">
                {caseData.description.split('\n').map((paragraph: string, index: number) =>
                  paragraph.trim() ? (
                    <p key={index} className="mb-4 text-xl leading-relaxed text-gray-700 lg:text-2xl">
                      {paragraph}
                    </p>
                  ) : null
                )}
              </div>
            </div>
          )}

          {caseData.gallery && caseData.gallery.length > 0 && (
            <div className="mb-14">
              <h2 className="mb-6 text-3xl font-black text-black lg:text-4xl xl:text-5xl">
                {copy(validLang, 'Галерея проєкту', 'Project gallery', 'Galeria projektu', 'Галерея проекта')}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {caseData.gallery.map((src: string, index: number) => (
                  <div
                    key={index}
                    className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
                  >
                    {/\.(webm|mp4|mov)$/i.test(src) ? (
                      <video
                        className="h-auto max-h-[78vh] w-full bg-black object-contain"
                        controls
                        autoPlay
                        loop
                        playsInline
                        muted
                        preload="metadata"
                      >
                        <source
                          src={src}
                          type={
                            src.toLowerCase().endsWith('.webm')
                              ? 'video/webm'
                              : src.toLowerCase().endsWith('.mp4')
                                ? 'video/mp4'
                                : 'video/quicktime'
                          }
                        />
                      </video>
                    ) : (
                      <Image
                        src={src}
                        alt={`${caseData.title} — ${index + 2}`}
                        width={1200}
                        height={800}
                        className="h-auto max-h-[78vh] w-full object-contain"
                        quality={90}
                        sizes="(max-width: 1024px) 100vw, 1152px"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {caseData.features && (
            <div className="mb-14">
              <h2 className="mb-6 text-3xl font-black text-black lg:text-4xl xl:text-5xl">
                {copy(validLang, 'Основні функції', 'Key Features', 'Kluczowe funkcje', 'Основные функции')}
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {caseData.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 border-b border-gray-200 p-4">
                    <div className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                    <p className="text-lg font-normal leading-relaxed text-gray-700 lg:text-xl">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {caseData.results && (
            <div className="mb-14">
              <h2 className="mb-6 text-center text-3xl font-black text-black lg:text-4xl xl:text-5xl">
                {copy(validLang, 'Результати', 'Results', 'Wyniki', 'Результаты')}
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {caseData.results.map((result: { value: string; label: string }, index: number) => (
                  <div key={index} className="text-center">
                    <div className="mb-2 text-4xl font-black text-black lg:text-5xl xl:text-6xl">
                      {result.value}
                    </div>
                    <p className="text-base font-normal uppercase tracking-[0.1em] text-gray-600">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {caseData.portfolioCategory && (
            <div className="mb-12 text-center">
              <p className="mb-4 text-base font-semibold text-gray-600">
                {copy(validLang, "Повʼязана послуга:", 'Related service:', 'Powiązana usługa:', 'Связанная услуга:')}
              </p>
              <Link
                href={
                  ['chatbots', 'websites', 'design'].includes(caseData.portfolioCategory)
                    ? `/${validLang}/services/${caseData.portfolioCategory}`
                    : `/${validLang}/services`
                }
                className="inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 font-black text-black transition-colors hover:bg-black hover:text-white"
              >
                {caseData.portfolioCategory === 'chatbots' && (t.services?.chatbotsPage?.title ?? 'Чат-боти')}
                {caseData.portfolioCategory === 'websites' && (t.services?.websitesPage?.title ?? 'Сайти')}
                {caseData.portfolioCategory === 'design' && (t.services?.designPage?.title ?? 'Дизайн')}
                {!['chatbots', 'websites', 'design'].includes(caseData.portfolioCategory) &&
                  (t.nav?.services ?? 'Що ми робимо?')}
                <FaExternalLinkAlt className="h-4 w-4" />
              </Link>
            </div>
          )}

          <div className="mx-auto flex max-w-md justify-center text-center">
            <OrderCtaPill
              size="md"
              label={orderLabel}
              onClick={() => setIsModalOpen(true)}
              elevated
              className="w-full"
            />
          </div>
        </div>
      </section>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={caseData.title}
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
