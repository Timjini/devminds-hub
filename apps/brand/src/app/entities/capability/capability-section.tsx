'use client';

import React from 'react';
import { ServiceCard } from '../service/service-card';
import { CapabilitiesSectionProps } from './types';
import { useDictionary } from '@/contexts';

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  services,
  onSelectService,
}) => {
  const { capabilities } = useDictionary();
  const items = services ?? capabilities.services;

  return (
    <section id="capabilities" className="w-full bg-surface text-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xs sm:text-sm font-black tracking-label uppercase text-ink">
          {capabilities.heading}
        </h2>
        <span className="text-xs font-black tracking-cta uppercase text-ink">
          {capabilities.helper}
        </span>
      </div>

      {/* Stacked Service Rows */}
      <div className="border-t-brutal border-line">
        {items.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelectService={onSelectService}
          />
        ))}
      </div>
    </section>
  );
};
