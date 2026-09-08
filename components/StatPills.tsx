export type StatItem = {
  value: string;
  label: string;
};

type StatPillsProps = {
  stats: StatItem[];
  variant?: 'light' | 'dark';
  className?: string;
};

const display = { fontFamily: 'var(--font-display)' };

export default function StatPills({ stats, variant = 'light', className = '' }: StatPillsProps) {
  const isLight = variant === 'light';

  return (
    <div className={`flex flex-wrap gap-3 sm:gap-4 ${className}`.trim()}>
      {stats.map((stat) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className={
            isLight
              ? 'min-w-[9.5rem] flex-1 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:min-w-[10.5rem] sm:px-5 sm:py-5'
              : 'min-w-[9.5rem] flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-4 sm:min-w-[10.5rem] sm:px-5 sm:py-5'
          }
        >
          <p
            className={`text-xl font-black leading-none sm:text-2xl md:text-3xl ${isLight ? 'text-black' : 'text-brand'}`}
            style={display}
          >
            {stat.value}
          </p>
          <p className={`mt-2 text-sm leading-snug ${isLight ? 'text-gray-600' : 'text-white/75'}`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export type { StatItem as StatPillItem };
