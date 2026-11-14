export interface BlogSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export interface BlogRowProps {
  post: BlogPost;
  onSelectPost: (post: BlogPost) => void;
}

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
