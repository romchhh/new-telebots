import KeyboardKeyBadge from '@/components/KeyboardKeyBadge';
import { SITE_PX } from '@/lib/siteLayout';
import {
  SERVICE_CARD,
  SERVICE_CARD_GRID,
  SERVICE_CARD_SIZE,
  SERVICE_CARD_TITLE,
  SERVICE_SECTION_Y,
  TYPE_DISPLAY_H2,
} from '@/lib/siteUi';

export type ServiceAudienceCopy = {
  title: string;
  titleAccent: string;
  items: string[];
};

interface ServiceAudienceSectionProps {
  copy: ServiceAudienceCopy;
}

const display = { fontFamily: 'var(--font-display)' } as const;

export default function ServiceAudienceSection({ copy }: ServiceAudienceSectionProps) {
  const { title, titleAccent, items } = copy;

  return (
    <div className={`relative overflow-hidden bg-white ${SERVICE_SECTION_Y} ${SITE_PX}`}>
      <div className="relative mx-auto w-full max-w-[90rem]">
        <h2 className={`mb-6 text-center text-neutral-900 sm:mb-8 ${TYPE_DISPLAY_H2}`} style={display}>
          {title}{' '}
          <span className="text-brand">{titleAccent}</span>
        </h2>

        <div className={SERVICE_CARD_GRID}>
          {items.map((text, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                key={num}
                className={`${SERVICE_CARD_SIZE} ${SERVICE_CARD} transition-colors hover:border-neutral-300 hover:bg-neutral-100/70`}
              >
                <KeyboardKeyBadge n={i + 1} size="md" className="mb-3 sm:mb-4" />
                <p className={SERVICE_CARD_TITLE}>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
