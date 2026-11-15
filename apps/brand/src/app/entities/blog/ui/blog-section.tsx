import { BlogSectionProps } from "../types";
import { BlogRow } from "./blog-row";

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onSelectPost }) => {
  return (
    <section id="notes" className="w-full">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xs sm:text-sm font-black tracking-label uppercase text-ink">
          NOTES / BLOG
        </h2>
        <span className="text-xs font-black tracking-cta uppercase text-ink">
          SIMPLE TECHNICAL PLAYBOOKS FOR FOUNDERS
        </span>
      </div>

      {/* Stacked Blog Rows */}
      <div className="border-t-brutal border-line">
        {posts.map((post) => (
          <BlogRow key={post.id} post={post} onSelectPost={onSelectPost} />
        ))}
      </div>
    </section>
  );
};
