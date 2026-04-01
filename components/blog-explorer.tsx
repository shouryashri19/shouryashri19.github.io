"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

type Props = {
  posts: BlogPost[];
  tags: string[];
};

export function BlogExplorer({ posts, tags }: Props) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const tagPass =
        selectedTag === "all" ||
        post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase());

      const queryPass =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return tagPass && queryPass;
    });
  }, [posts, query, selectedTag]);

  return (
    <div className="space-y-6">
      <div className="section-panel grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-steel dark:border-slate-600 dark:bg-carbon dark:text-slate-200"
          placeholder="Search by title, topic, or keyword"
          aria-label="Search blog posts"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate dark:text-slate-300">
          {filtered.length} post(s)
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedTag("all")}
          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ease-premium ${
            selectedTag === "all"
              ? "border-navy bg-navy text-white dark:border-steel dark:bg-steel"
              : "border-slate-300 bg-white text-slate hover:border-steel hover:text-navy dark:border-slate-700 dark:bg-carbon dark:text-slate-300"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag.toLowerCase())}
            className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ease-premium ${
              selectedTag === tag.toLowerCase()
                ? "border-navy bg-navy text-white dark:border-steel dark:bg-steel"
                : "border-slate-300 bg-white text-slate hover:border-steel hover:text-navy dark:border-slate-700 dark:bg-carbon dark:text-slate-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>

      {filtered.length === 0 ? (
        <div className="section-panel p-6 text-sm text-slate dark:text-slate-300">
          No posts match the current filters. Try a broader keyword.
        </div>
      ) : null}
    </div>
  );
}
