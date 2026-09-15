import { StoriesPlayer, StoryItem } from "./story-player";

const COMBAT_STORIES: StoryItem[] = [
  {
    id: "boxing-1",
    videoUrl:
      "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing1.mp4",
    title: "Pro Boxing Heavy Hitters",
    subtitle: "Coach Youssef - 18:00 Session",
  },
  {
    id: "kickboxing-2",
    videoUrl:
      "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing1.mp4",
    title: "Dutch Style Sparring",
    subtitle: "Coach Amine - 19:30 Session",
  },
];

export const StoriesSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
      <StoriesPlayer stories={COMBAT_STORIES} />
    </div>
  );
};
