'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogRowProps } from '../types';
import { useDictionary } from '@/contexts';

export const BlogRow: React.FC<BlogRowProps> = ({ post, onSelectPost }) => {
  const { notes } = useDictionary();

  return (
    <article
      onClick={() => onSelectPost(post)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectPost(post);
        }
      }}
      className="group border-b-brutal border-line bg-surface text-ink hover:bg-surface-inverse hover:text-ink-inverse transition-all duration-200 ease-out cursor-pointer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
        {/* Index, Tag & Read Time Column */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start justify-between gap-3">
          <span className="inline-block rounded-pill text-xs font-black tracking-label uppercase border-brutal border-current px-3.5 py-1 group-hover:border-highlight-secondary group-hover:text-highlight-secondary transition-colors duration-200">
            {post.tag}
          </span>
          <span className="text-xs font-black tracking-label uppercase text-ink-muted group-hover:text-ink-inverse/80 transition-colors duration-200">
            {post.readTime}
          </span>
        </div>

        {/* Post Title & Excerpt */}
        <div className="lg:col-span-7">
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[0.98] uppercase">
            {post.title}
          </h3>
          <p className="mt-4 text-base sm:text-lg font-medium leading-snug max-w-2xl text-ink-muted group-hover:text-ink-inverse/90 transition-colors duration-200">
            {post.excerpt}
          </p>
        </div>

        {/* READ -> Indicator */}
        <div className="lg:col-span-2 flex lg:justify-end">
          <span className="inline-flex items-center gap-2 rounded-control font-display text-xs sm:text-sm font-bold tracking-cta uppercase border-brutal border-current px-5 py-3 shadow-soft group-hover:bg-highlight group-hover:border-highlight group-hover:text-ink-inverse group-hover:shadow-soft-hover transition-all duration-200">
            {/*{notes?.readLabel}*/}
            <ArrowRight className="w-4 h-4 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
};
