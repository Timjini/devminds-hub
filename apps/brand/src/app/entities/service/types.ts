export interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceTitle: string) => void;
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string;
}
