import { ArrowUpRight } from "lucide-react";
import { ServiceCardProps } from "./types";


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
      className="group border-b-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-150 cursor-pointer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
        {/* Oversized Index Number */}
        <div className="lg:col-span-2 flex items-center justify-between">
          <span className="text-5xl sm:text-6xl font-black tracking-tighter leading-none">
            {service.number}
          </span>
          <ArrowUpRight className="w-7 h-7 stroke-[2.5] lg:hidden" />
        </div>

        {/* Service Title & Deliverables */}
        <div className="lg:col-span-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
            {service.title}
          </h3>
          <p className="mt-3 text-xs font-black tracking-[0.15em] uppercase">
            {service.deliverables}
          </p>
        </div>

        {/* Description & Action Indicator */}
        <div className="lg:col-span-5 flex items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-bold leading-snug">
            {service.description}
          </p>
          <div className="hidden lg:flex shrink-0 w-12 h-12 border-2 border-current items-center justify-center">
            <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
