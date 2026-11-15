import { ServiceCard } from "../service/service-card";
import { CapabilitiesSectionProps } from "./types";

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  services,
  onSelectService
}) => {
  return (
    <section id="capabilities" className="w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase">
          CORE CAPABILITIES / 01—04
        </h2>
        <span className="text-xs font-black tracking-widest uppercase">
          CLICK ANY CAPABILITY TO SCOPE
        </span>
      </div>

      {/* Stacked Service Rows */}
      <div className="border-t-2 border-black">
        {services.map((service) => (
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
