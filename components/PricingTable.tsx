'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
  forWhom: string;
};

type PricingData = {
  categoryLabel: string;
  title: string;
  subtitle: string;
  popularBadge: string;
  featuresLabel: string;
  forWhomLabel: string;
  contactNote: string;
  contactLink: string;
  contactSuffix: string;
  plans: Plan[];
};

interface PricingTableProps {
  pricing: PricingData;
  lang: string;
  onContactClick?: () => void;
}

function showCurrency(price: string): boolean {
  return !price.includes('+') && !/індивідуально|individual|indywidualnie|индивидуально/i.test(price);
}

export default function PricingTable({ pricing, lang, onContactClick }: PricingTableProps) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-black text-black tracking-[0.3em] uppercase">
              {pricing.categoryLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight mb-4">
            {pricing.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {pricing.subtitle}
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  {pricing.plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="p-6 sm:p-8 text-left border-r border-gray-200 last:border-r-0 relative align-top"
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-black text-white text-xs font-medium py-2 px-4 text-center tracking-wider rounded-tl-2xl rounded-tr-2xl">
                          {pricing.popularBadge}
                        </div>
                      )}
                      <div className={plan.popular ? 'mt-10' : ''}>
                        <h3 className="text-xl sm:text-2xl font-black text-black mb-3 tracking-tight">
                          {plan.name}
                        </h3>
                        <div className="mb-2">
                          <span className="text-3xl sm:text-4xl font-black text-black">
                            {plan.price}
                          </span>
                          {showCurrency(plan.price) && (
                            <span className="text-gray-400 ml-1 text-xl sm:text-2xl">$</span>
                          )}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  {pricing.plans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-6 sm:p-8 align-top border-r border-gray-200 last:border-r-0 bg-white"
                    >
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {plan.description}
                      </p>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  {pricing.plans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-6 sm:p-8 align-top border-r border-gray-200 last:border-r-0"
                    >
                      <h4 className="font-black text-black mb-4 text-xs uppercase tracking-widest">
                        {pricing.featuresLabel}
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check
                              className="w-4 h-4 text-black flex-shrink-0 mt-0.5"
                              strokeWidth={1.5}
                            />
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  {pricing.plans.map((plan) => (
                    <td
                      key={plan.name}
                      className="p-6 sm:p-8 align-top border-r border-gray-200 last:border-r-0 bg-white"
                    >
                      <h4 className="font-black text-black mb-3 text-xs uppercase tracking-widest">
                        {pricing.forWhomLabel}
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {plan.forWhom}
                      </p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-600 text-base">
            {pricing.contactNote}{' '}
            {onContactClick ? (
              <button
                onClick={onContactClick}
                className="text-black font-semibold underline hover:no-underline cursor-pointer"
              >
                {pricing.contactLink}
              </button>
            ) : (
              <Link
                href={`/${lang}/contact`}
                className="text-black font-semibold underline hover:no-underline"
              >
                {pricing.contactLink}
              </Link>
            )}{' '}
            {pricing.contactSuffix}
          </p>
        </div>
      </div>
    </section>
  );
}
