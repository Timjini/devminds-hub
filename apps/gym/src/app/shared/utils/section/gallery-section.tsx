"use client";

import * as Icons from "lucide-react";
import { ExternalLink } from "lucide-react";
import { IconComponent } from "../../utils/icon-helper";
import OverlayImageCard from "../card/overlay-image-card";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  likes?: string;
  link: string;
  tagSentence: string;
  icon: keyof typeof Icons;
}

interface GallerySectionProps {
  tag: string;
  title: string;
  url: string;
  urlTitle: string;
  galleryTitle: string;
  galleryIcon: keyof typeof Icons;
  GalleryData: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  tag,
  title,
  url,
  urlTitle,
  galleryTitle,
  galleryIcon,
  GalleryData,
}) => {
  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto border-t border-brand-text/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-xs font-mono text-red-500 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
            {galleryIcon && (
              <IconComponent
                iconName={galleryIcon}
                customClass="w-4 h-4 animate-pulse text-red-500"
              />
            )}
            {tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-aldrich uppercase italic ">
            {title}
          </h2>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-text brand-border hover:border-brand-primary/60 text-stone-300 hover:text-stone-100 font-mono text-xs uppercase tracking-wider transition-all shadow-md group"
        >
          <ExternalLink className="w-4 h-4 text-border-brand-primary group-hover:scale-110 transition-transform" />
          <span>{galleryTitle}</span>
          <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
        </a>
      </div>

      {/* Dynamic Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GalleryData.map((item, idx) => (
          <OverlayImageCard
            idx={idx}
            id={item.id}
            link={item.link}
            image={item.image}
            imageTitle={item.title}
            category={item.category}
            title={item.title}
            tagSentence={item.tagSentence}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};
