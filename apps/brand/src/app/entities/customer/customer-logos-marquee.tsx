import { CustomerItem } from '@/app/types';
import React from 'react';

export interface CustomerLogosMarqueeProps {
  customers: CustomerItem[];
  speedSeconds?: number;
}

export const CustomerLogosMarquee: React.FC<CustomerLogosMarqueeProps> = ({
  customers,
  speedSeconds = 50,
}) => {

  const trackItems = [...customers, ...customers];

  return (
    <section aria-label="Trusted Teams" className="border-b-2 border-black overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <span className="text-xs font-black tracking-[0.25em] uppercase">
          TRUSTED BY EARLY-STAGE TEAMS
        </span>
        <span className="text-xs font-black tracking-[0.25em] uppercase">
          {String(customers.length).padStart(2, '0')} DEPLOYMENTS
        </span>
      </div>

      {/* Full-bleed 2px Bordered Marquee Strip */}
      <div className="group/marquee border-t-2 border-black bg-white overflow-hidden">
        <div
          className="animate-devminds-marquee"
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {trackItems.map((customer, index) => {
            const isDuplicate = index >= customers.length;

            const cardContent = (
              <div className="group/tile w-64 sm:w-72 md:w-80 h-32 px-8 border-r-2 border-black flex flex-col justify-between py-5 bg-white text-black hover:bg-black hover:text-white transition-colors duration-150 shrink-0">
                <div className="flex items-center justify-between text-[11px] font-black tracking-[0.2em] uppercase">
                  <span>{customer.id}</span>
                  <span>{customer.sector}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <img
                    src={customer.logoSrc}
                    alt={isDuplicate ? '' : (customer.logoAlt ?? `${customer.name} logo`)}
                    loading="lazy"
                    className="max-h-9 max-w-[160px] w-auto object-contain grayscale contrast-200 transition-all duration-150 group-hover/tile:invert"
                  />
                  <span className="text-xs font-black tracking-tight uppercase">
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
