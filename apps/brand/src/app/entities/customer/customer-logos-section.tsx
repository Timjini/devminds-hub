import { CustomerItem } from '@/app/types';
import React from 'react';

export interface CustomerLogosSectionProps {
  customers: CustomerItem[];
}

export const CustomerLogosSection: React.FC<CustomerLogosSectionProps> = ({ customers }) => {
  return (
    <section aria-label="Trusted Teams" className="border-b-2 border-black">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-b-2 border-black flex items-center justify-between">
        <span className="text-xs font-black tracking-[0.25em] uppercase">
          TRUSTED BY EARLY-STAGE TEAMS
        </span>
        <span className="text-xs font-black tracking-[0.25em] uppercase">
          {String(customers.length).padStart(2, '0')} DEPLOYMENTS
        </span>
      </div>

      {/* Architectural 2px Monochrome Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y-2 sm:divide-y-0 divide-black">
        {customers.map((customer, index) => {
          const cellClasses = `group p-8 md:p-10 flex flex-col justify-between gap-10 transition-colors duration-150 hover:bg-black hover:text-white border-black ${
            index % 2 === 0 ? 'sm:border-r-2' : ''
          } ${index % 3 !== 2 ? 'lg:border-r-2' : 'lg:border-r-0'} ${
            index < customers.length - 2 ? 'sm:border-b-2' : ''
          } ${index < customers.length - 3 ? 'lg:border-b-2' : 'lg:border-b-0'}`;

          const content = (
            <>
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 flex items-center">
                  <img
                    src={customer.logoSrc}
                    alt={customer.logoAlt ?? `${customer.name} logo`}
                    loading="lazy"
                    className="max-h-10 max-w-[170px] w-auto object-contain grayscale contrast-200 transition-all duration-150 group-hover:invert"
                  />
                </div>
                <span className="text-xs font-black tracking-[0.2em] uppercase shrink-0">
                  {customer.id}
                </span>
              </div>

              <div className="pt-4 border-t-2 border-black group-hover:border-white flex items-center justify-between gap-4">
                <span className="text-sm font-black tracking-tight uppercase">
                  {customer.name}
                </span>
                <span className="text-xs font-black tracking-[0.18em] uppercase">
                  {customer.sector}
                </span>
              </div>
            </>
          );

          return customer.url ? (
            <a
              key={customer.id}
              href={customer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cellClasses}
            >
              {content}
            </a>
          ) : (
            <div key={customer.id} className={cellClasses}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};
