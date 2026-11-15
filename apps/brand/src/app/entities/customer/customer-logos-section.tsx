import { CustomerItem } from '@/app/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
          const href = customer.url || '/pages/start-setup';
          const isExternal = Boolean(customer.url?.startsWith('http'));

          const cellClasses = `group p-8 md:p-10 flex flex-col justify-between gap-10 transition-colors duration-150 hover:bg-black hover:text-white border-black cursor-pointer ${
            index % 2 === 0 ? 'sm:border-r-2' : ''
          } ${index % 3 !== 2 ? 'lg:border-r-2' : 'lg:border-r-0'} ${
            index < customers.length - 2 ? 'sm:border-b-2' : ''
          } ${index < customers.length - 3 ? 'lg:border-b-2' : 'lg:border-b-0'}`;

          return (
            <Link
              key={customer.id}
              href={href}
              data-cursor="VISIT"
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={cellClasses}
            >
              <div className="flex items-start justify-between gap-4">
                {/* Enlarged logo container so the image scales up cleanly */}
                <div className="h-20 md:h-24 flex items-center">
                  <Image
                    src={customer.logoSrc}
                    alt={customer.logoAlt ?? `${customer.name} logo`}
                    loading="lazy"
                    height={160}
                    width={240}
                    className="max-h-16 md:max-h-20 max-w-[220px] w-auto object-contain grayscale contrast-200 transition-all duration-150 group-hover:invert"
                  />
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-black tracking-[0.2em] uppercase">
                    {customer.id}
                  </span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] opacity-60 transition-transform duration-150 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black group-hover:border-white flex items-center justify-between gap-4">
                <span className="text-sm font-black tracking-tight uppercase">
                  {customer.name}
                </span>
                <span className="text-xs font-black tracking-[0.18em] uppercase">
                  {customer.sector}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
