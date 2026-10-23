import { gallery } from '@/data/temp';
import { ImageItem } from '@/entities/types';
import Image from 'next/image';
import React from 'react';


interface VerticalShowcaseProps {
  speed?: number;
  height?: string;
  columns?: ImageItem[][];
}

export const VerticalGallery: React.FC<VerticalShowcaseProps> = ({
  speed = 25,
  height = '600px',
  columns = gallery,
}) => {
  return (
    <>
      {/* Main Container */}
      <div
        className="relative overflow-hidden w-full p-4"
        style={{ height }}
      >
        {/* Optional Top & Bottom Fade Overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20  z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20  z-10" />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
          {columns.map((columnImages, colIndex) => {
            // Alternate direction: even indices scroll UP, odd indices scroll DOWN
            const isUp = colIndex % 2 === 0;
            // Repeat array twice to create a seamless infinite loop
            const duplicatedImages = [...columnImages, ...columnImages];

            return (
              <div
                key={colIndex}
                className="group relative overflow-hidden flex flex-col"
              >
                <div
                  className={`flex flex-col gap-4 ${
                    isUp ? 'animate-marquee-up' : 'animate-marquee-down'
                  }`}
                  style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
                >
                  {duplicatedImages.map((img, imgIndex) => (
                    <div key={`${img.id}-${imgIndex}`} className="w-full shrink-0">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        height={600}
                        width={600}
                        className="h-auto w-full max-w-full rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VerticalGallery;
