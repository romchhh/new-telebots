import KeyboardKeyBadge from '@/components/KeyboardKeyBadge';
import { SITE_PX } from '@/lib/siteLayout';
import {
  SERVICE_CARD,
  SERVICE_CARD_BODY,
  SERVICE_CARD_GRID,
  SERVICE_CARD_SIZE_WIDE,
  SERVICE_CARD_TITLE,
  SERVICE_SECTION_Y,
  TYPE_EYEBROW,
  TYPE_SECTION_TITLE,
} from '@/lib/siteUi';

export type ServiceOutcomeItem = {
  title: string;
  body: string;
  emphasis?: string;
};

export type ServiceOutcomesBlockCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  items: ServiceOutcomeItem[];
};

export type ServiceOutcomesCopy = {
  valueLead?: Array<{ text: string; pink?: boolean }>;
  problems: ServiceOutcomesBlockCopy;
  benefits: ServiceOutcomesBlockCopy;
};

const display = { fontFamily: 'var(--font-display)' } as const;
const sans = { fontFamily: 'var(--font-sans)' } as const;

function emphasizeBody(body: string, emphasis?: string) {
  if (!emphasis || !body.includes(emphasis)) {
    return <>{body}</>;
  }
  const [before, after] = body.split(emphasis);
  return (
    <>
      {before}
      <span className="font-semibold text-brand">{emphasis}</span>
      {after}
    </>
  );
}

function OutcomesBlock({
  copy,
  variant,
}: {
  copy: ServiceOutcomesBlockCopy;
  variant: 'problems' | 'benefits';
}) {
  const isBenefits = variant === 'benefits';
  const cardShell = isBenefits
    ? `${SERVICE_CARD} border-brand/20 bg-brand-soft/40`
    : SERVICE_CARD;

  return (
    <div className={isBenefits ? 'border-t border-neutral-100 pt-16 md:pt-24' : ''}>
      <p className={`mb-4 ${TYPE_EYEBROW} text-brand`} style={sans}>
        {copy.eyebrow}
      </p>
      <h2
        className={`max-w-3xl ${TYPE_SECTION_TITLE} text-neutral-900 sm:text-[clamp(1.85rem,4vw,2.65rem)]`}
        style={display}
      >
        {copy.title}{' '}
        <span className="text-brand">{copy.titleAccent}</span>
      </h2>
      <div className={`mt-10 sm:mt-12 ${SERVICE_CARD_GRID}`}>
        {copy.items.map((item, i) => (
          <article key={item.title} className={`${SERVICE_CARD_SIZE_WIDE} ${cardShell}`}>
            <KeyboardKeyBadge n={i + 1} size="md" className="mb-4 sm:mb-5" />
            <h3 className={`${SERVICE_CARD_TITLE} font-bold`} style={display}>
              {item.title}
            </h3>
            <p className={`mt-3 ${SERVICE_CARD_BODY}`} style={sans}>
              {emphasizeBody(item.body, item.emphasis)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ServiceOutcomesSection({ copy }: { copy: ServiceOutcomesCopy }) {
  return (
    <section className={`border-t border-neutral-100 bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
      <div className="mx-auto w-full max-w-[90rem]">
        {copy.valueLead?.length ? (
          <p
            className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-neutral-700 sm:mb-16 sm:text-xl md:text-2xl"
            style={sans}
          >
            {copy.valueLead.map((part, i) =>
              part.pink ? (
                <span key={i} className="font-semibold text-brand">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </p>
        ) : null}
        <OutcomesBlock copy={copy.problems} variant="problems" />
        <OutcomesBlock copy={copy.benefits} variant="benefits" />
      </div>
    </section>
  );
}
