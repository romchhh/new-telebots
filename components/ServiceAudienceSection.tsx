import KeyboardKeyBadge from '@/components/KeyboardKeyBadge';
import { SITE_PX } from '@/lib/siteLayout';
import {
  SERVICE_CARD,
  SERVICE_CARD_GRID,
  SERVICE_CARD_SIZE,
  SERVICE_CARD_TITLE,
  SERVICE_SECTION_Y,
} from '@/lib/siteUi';

export type ServiceAudienceCopy = {
  title: string;
  titleAccent: string;
  items: string[];
};

interface ServiceAudienceSectionProps {
  copy: ServiceAudienceCopy;
}

const sans = { fontFamily: 'var(--font-sans)' } as const;

export default function ServiceAudienceSection({ copy }: ServiceAudienceSectionProps) {
  const { title, titleAccent, items } = copy;

  return (
    <div className={`relative overflow-hidden bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
      <div className="relative mx-auto w-full max-w-[90rem]">
        <h2
          className="mb-10 text-center text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-black sm:mb-16 lg:mb-20"
          style={sans}
        >
          {title}{' '}
          <span className="font-semibold italic text-brand">{titleAccent}</span>
        </h2>

        <div className={SERVICE_CARD_GRID}>
          {items.map((text, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div key={num} className={`${SERVICE_CARD_SIZE} ${SERVICE_CARD}`}>
                <KeyboardKeyBadge n={i + 1} size="md" className="mb-4 sm:mb-5" />
                <p className={SERVICE_CARD_TITLE}>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
