import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Card } from "@/components/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
          {new Date(post.date).toLocaleDateString()} | {post.readingMinutes} min read
        </p>
        <h3 className="font-heading text-2xl leading-snug text-ink dark:text-slate-100">
          <Link href={`/blog/${post.slug}`} className="hover:text-navy dark:hover:text-steel">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-7 text-slate dark:text-slate-300">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
              className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 hover:border-steel hover:text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}
