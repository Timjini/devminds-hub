"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import React, { MouseEventHandler, useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { DarkGradientOverlay } from "../pattern/dark-gradient-overlay";

export interface StoryItem {
  id: string;
    videoUrl: string;
    title?: string;
    subtitle?: string;
    actionUrl?: string;
    ctaText?: string;
}
export interface StoriesPlayerProps {
  stories: StoryItem[];
  containerClass?: string;
}

export const StoriesPlayer: React.FC<StoriesPlayerProps> = ({
  stories,
  containerClass = "relative h-screen w-full overflow-hidden rounded-xl",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentStory = stories[currentIndex];

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      setCurrentIndex(0);
      setProgress(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width * 0.3) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  return (
    <div className={containerClass}>
      {/* 1. Bottom Instagram-Style Progress Bar Segment Grid */}
      <div className="absolute bottom-4 inset-x-4 z-30 flex gap-1.5 pointer-events-none">
        {stories.map((story, index) => {
          let segmentWidth = "0%";
          if (index < currentIndex) segmentWidth = "100%";
          if (index === currentIndex) segmentWidth = `${progress}%`;

          return (
            <div
              key={story.id}
              className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm"
            >
              <div
                className="h-full bg-brand-primary transition-all duration-100 ease-linear rounded-full"
                style={{ width: segmentWidth }}
              />
            </div>
          );
        })}
      </div>

      {/* Sound Toggle Button */}
      <SoundToggleButton isMuted={isMuted} toggleMute={toggleMute} />

      {/* 2. Interactive Tap Layer */}
      <InteractiveTapLayer handleTap={handleTap} />

      {/* 3. Swipeable Video Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStory.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <video
            ref={videoRef}
            src={currentStory.videoUrl}
            autoPlay
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleNext}
            className="h-full w-full object-cover object-top"
          />

          <DarkGradientOverlay />

          {/* Caption & Action CTA Overlay */}
          <div className="absolute bottom-12 left-6 right-20 z-30 flex flex-col items-start gap-3 pointer-events-auto">
            {(currentStory.title || currentStory.subtitle) && (
              <div className="space-y-1">
                {currentStory.title && (
                  <h3 className="font-aldrich text-xl font-bold uppercase text-white tracking-wider">
                    {currentStory.title}
                  </h3>
                )}
                {currentStory.subtitle && (
                  <p className="text-xs font-mono text-stone-300">
                    {currentStory.subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Action CTA Button */}
            {currentStory.actionUrl && (
              <Link
                href={currentStory.actionUrl}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white font-aldrich text-xs font-bold uppercase tracking-wider backdrop-blur-md  hover:scale-105 active:scale-95 transition-all"
              >
                <span>{currentStory.ctaText || "Learn More"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          {/* Red Glow Accent Border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-none z-20" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StoriesPlayer;

interface SoundToggleButtonProps {
  isMuted: boolean;
  toggleMute: MouseEventHandler<HTMLButtonElement>;
}

const SoundToggleButton: React.FC<SoundToggleButtonProps> = ({
  isMuted,
  toggleMute,
}) => {
  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute video" : "Mute video"}
      className="absolute bottom-12 right-6 z-30 p-2.5 rounded-full bg-black/50 text-white/90 backdrop-blur-md hover:bg-black/75 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-red-600/50"
    >
      {isMuted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="22" y1="9" x2="16" y2="15" />
          <line x1="16" y1="9" x2="22" y2="15" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
};

const InteractiveTapLayer = ({
  handleTap,
}: {
  handleTap: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      onClick={handleTap}
      className="absolute inset-0 z-20 cursor-pointer select-none"
    />
  );
};
