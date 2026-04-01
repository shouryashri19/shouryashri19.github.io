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
      <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 md:grid-cols-[1fr_auto] md:items-center">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
          placeholder="Search by title, topic, or keyword"
          aria-label="Search blog posts"
        />
        <p className="text-sm font-semibold text-slate">{filtered.length} post(s)</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedTag("all")}
          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
            selectedTag === "all" ? "border-navy bg-navy text-white" : "border-slate-300 bg-white text-slate"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag.toLowerCase())}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
              selectedTag === tag.toLowerCase()
                ? "border-navy bg-navy text-white"
                : "border-slate-300 bg-white text-slate"
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
        <div className="rounded-md border border-slate-200 bg-white p-6 text-sm text-slate">
          No posts match the current filters. Try a broader keyword.
        </div>
      ) : null}
    </div>
  );
}
