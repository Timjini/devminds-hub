// this is the parent component for Video Components,
// to display multiple videos in style of stories.

"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import React, { useRef, useState } from "react";
import { DarkGradientOverlay } from "../pattern/dark-gradient-overlay";

export interface StoryItem {
  id: string;
  videoUrl: string;
  title?: string;
  subtitle?: string;
}

interface StoriesPlayerProps {
  stories: StoryItem[];
  containerClass?: string;
}

export const StoriesPlayer: React.FC<StoriesPlayerProps> = ({
  stories,
  containerClass = "relative h-screen w-full overflow-hidden rounded-xl border border-brand-primary",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentStory = stories[currentIndex];

  // Advance to next story
  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      // Loop back to start (or handle closing)
      setCurrentIndex(0);
      setProgress(0);
    }
  };

  // Go back to previous story
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  };

  // Track video progress bar in real-time
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  // Handle Swipe Gestures
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext(); // Swipe left -> Next
    } else if (info.offset.x > swipeThreshold) {
      handlePrev(); // Swipe right -> Previous
    }
  };

  // Handle Tap navigation (Left 30% = Prev, Right 70% = Next)
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
      {/* 1. Top Instagram-Style Progress Bar Segment Grid */}
      <div className="absolute top-4 inset-x-4 z-30 flex gap-1.5 pointer-events-none">
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
                className="h-full bg-red-600 transition-all duration-100 ease-linear rounded-full"
                style={{ width: segmentWidth }}
              />
            </div>
          );
        })}
      </div>

      {/* 2. Interactive Tap Layer */}
      <div
        onClick={handleTap}
        className="absolute inset-0 z-20 cursor-pointer select-none"
      />

      {/* 3. Swipeable Video Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStory.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <video
            ref={videoRef}
            src={currentStory.videoUrl}
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleNext}
            className="h-full w-full object-cover"
          />

          <DarkGradientOverlay />

          {/* Optional Caption/Info */}
          {(currentStory.title || currentStory.subtitle) && (
            <div className="absolute bottom-8 left-6 right-6 z-20 pointer-events-none space-y-1">
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

          {/* Red Glow Accent Border */}
          <div className="pointer-events-none absolute inset-0 border border-red-600/30 rounded-3xl md:rounded-none z-20" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StoriesPlayer;
