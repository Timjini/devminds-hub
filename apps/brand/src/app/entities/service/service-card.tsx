import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceCardProps } from './types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  return (
    <div
      onClick={() => onSelectService(service.title)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectService(service.title);
        }
      }}
      className="group border-b-brutal border-line bg-surface text-ink hover:bg-surface-inverse hover:text-ink-inverse transition-all duration-200 ease-out cursor-pointer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
        {/* Oversized Index Number */}
        <div className="lg:col-span-2 flex items-center justify-between">
          <span className="font-display text-5xl sm:text-6xl font-black tracking-tighter leading-none group-hover:text-highlight-secondary transition-colors duration-200">
            {service.number}
          </span>
          <span className="inline-flex lg:hidden w-10 h-10 rounded-control border-brutal border-current items-center justify-center shadow-soft group-hover:bg-highlight group-hover:border-highlight group-hover:text-ink-inverse transition-all duration-200">
            <ArrowUpRight className="w-5 h-5 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        {/* Service Title & Deliverables */}
        <div className="lg:col-span-5">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
            {service.title}
          </h3>
          <p className="mt-3 text-xs font-black tracking-cta uppercase text-ink-muted group-hover:text-highlight-secondary transition-colors duration-200">
            {service.deliverables}
          </p>
        </div>

        {/* Description & Action Indicator */}
        <div className="lg:col-span-5 flex items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-medium leading-snug text-ink-muted group-hover:text-ink-inverse/90 transition-colors duration-200">
            {service.description}
          </p>
          <div className="hidden lg:flex shrink-0 w-12 h-12 rounded-control border-brutal border-current items-center justify-center shadow-soft group-hover:bg-highlight group-hover:border-highlight group-hover:text-ink-inverse group-hover:shadow-soft-hover transition-all duration-200">
            <ArrowUpRight className="w-6 h-6 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
