import { combatStories } from "@/data/temp";
import { StoriesPlayer } from "./story-player";


export const StoriesSection = () => {
  return (
    <div className="flex items-center justify-center max-h-screen p-0">
      <StoriesPlayer stories={combatStories} />
    </div>
  );
};
