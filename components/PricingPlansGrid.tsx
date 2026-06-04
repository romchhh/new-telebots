'use client';

export type PricingPlanCard = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const headingStyle = { fontFamily: 'var(--font-montserrat)' };

interface PricingPlansGridProps {
  plans: PricingPlanCard[];
  popularLabel?: string;
  className?: string;
}

/** Три колонки тарифів — як у блозі /uk/blog/skilky-koshtuye-sayt */
export default function PricingPlansGrid({
  plans,
  popularLabel = 'Popular',
  className = '',
}: PricingPlansGridProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-1 md:grid-cols-3 ${className}`}>
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border p-6 md:p-7 ${
            plan.popular ? 'border-black bg-black text-white shadow-lg' : 'border-gray-200 bg-white'
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-black">
              {popularLabel}
            </span>
          )}
          <h3
            className={`text-sm font-bold uppercase tracking-[0.15em] ${
              plan.popular ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`mt-2 text-3xl font-black ${plan.popular ? 'text-white' : 'text-black'}`}
            style={headingStyle}
          >
            {plan.price}
          </p>
          <p
            className={`mt-3 text-sm leading-relaxed ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {plan.description}
          </p>
          <ul className={`mt-5 space-y-2 text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
            {plan.features.map((f, fi) => (
              <li key={fi} className="flex gap-2">
                <span aria-hidden>—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
