

export interface BlogStepItem {
  step: string;
  title: string;
  detail: string;
}

export interface BlogSectionBlock {
  heading: string;
  type: 'paragraph' | 'steps' | 'checklist';
  content?: string;
  steps?: BlogStepItem[];
  items?: string[];
}

export interface BlogPost {
  id: string;
  number: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  relatedService: string;
  ctaHeading: string;
  ctaSubheading: string;
  sections: BlogSectionBlock[];
}

export interface CustomerItem {
  id: string;
  name: string;
  sector: string;
  logoSrc: string;
  logoAlt?: string;
  url?: string;
}
