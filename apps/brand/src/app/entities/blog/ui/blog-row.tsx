import { ArrowRight } from "lucide-react";
import { BlogRowProps } from "../types";

export const BlogRow: React.FC<BlogRowProps> = ({ post, onSelectPost }) => {
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
      className="group border-b-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-150 cursor-pointer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
        {/* Index, Tag & Read Time Column */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start justify-between gap-3">
          <span className="inline-block text-xs font-black tracking-[0.2em] uppercase border-2 border-current px-3 py-1">
            {post.tag}
          </span>
          <span className="text-xs font-black tracking-[0.2em] uppercase">
            {post.readTime}
          </span>
        </div>

        {/* Post Title & Excerpt */}
        <div className="lg:col-span-7">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[0.98] uppercase">
            {post.title}
          </h3>
          <p className="mt-4 text-base sm:text-lg font-bold leading-snug max-w-2xl">
            {post.excerpt}
          </p>
        </div>

        {/* READ -> Indicator */}
        <div className="lg:col-span-2 flex lg:justify-end">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase border-2 border-current px-4 py-3">
            READ
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </span>
        </div>
      </div>
    </article>
  );
};
