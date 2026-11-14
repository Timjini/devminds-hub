export interface CapabilitiesSectionProps {
  services: CapabilityItem[];
  onSelectService: (serviceTitle: string) => void;
}

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string;
}
