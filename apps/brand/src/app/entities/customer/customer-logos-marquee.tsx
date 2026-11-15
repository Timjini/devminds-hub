'use client';

import React from 'react';
import { CustomerItem } from '@/app/types';
import { useDictionary } from '@/contexts';
import Image from 'next/image';

export interface CustomerMarqueeSectionProps {
  customers: CustomerItem[];
  speedSeconds?: number;
}

export const CustomerLogosMarquee: React.FC<CustomerMarqueeSectionProps> = ({
  customers,
  speedSeconds = 28,
}) => {
  const { customers: t } = useDictionary();
  const trackItems = [...customers, ...customers];

  return (
    <section
      aria-label={t.ariaLabel}
      className="border-b-brutal border-line bg-surface text-ink overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <span className="text-xs font-black tracking-hud uppercase text-ink">
          {t.heading}
        </span>
        <span className="text-xs font-black tracking-hud uppercase text-ink">
          {String(customers.length).padStart(2, '0')} {t.deploymentsLabel}
        </span>
      </div>

      {/* Full-bleed Brutalist Bordered Marquee Strip */}
      <div className="group/marquee border-t-brutal border-line bg-surface overflow-hidden">
        <div
          className="animate-devminds-marquee"
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {trackItems.map((customer, index) => {
            const isDuplicate = index >= customers.length;
            const localizedSector =
              t.sectors?.[customer.sector as keyof typeof t.sectors] ?? customer.sector;

            const cardContent = (
              <div className="group/tile w-64 sm:w-72 md:w-80 h-32 px-8 border-r-brutal border-line flex flex-col justify-between py-5 bg-surface text-ink hover:bg-surface-inverse hover:text-ink-inverse transition-colors duration-150 shrink-0">
                <div className="flex items-center justify-between text-[11px] font-black tracking-label uppercase">
                  <span>{customer.id}</span>
                  <span>{localizedSector}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <Image
                    height={100}
                    width={100}
                    src={customer.logoSrc}
                    alt={
                      isDuplicate
                        ? ''
                        : (customer.logoAlt ?? `${customer.name} ${t.logoAltSuffix}`)
                    }
                    loading="lazy"
                    className="max-h-9 max-w-40 w-auto object-contain grayscale contrast-200 transition-all duration-150 group-hover/tile:invert"
                  />
                  <span className="font-display text-xs font-black tracking-tight uppercase">
                    {customer.name}
                  </span>
                </div>
              </div>
            );

            return customer.url ? (
              <a
                key={`${customer.id}-${index}`}
                href={customer.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={isDuplicate}
                tabIndex={isDuplicate ? -1 : 0}
                className="block focus:outline-none"
              >
                {cardContent}
              </a>
            ) : (
              <div key={`${customer.id}-${index}`} aria-hidden={isDuplicate}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
