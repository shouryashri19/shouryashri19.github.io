import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Card } from "@/components/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full">
      <div className="space-y-3">
        <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400">
          {new Date(post.date).toLocaleDateString()} | {post.readingMinutes} min read
        </p>
        <h3 className="font-heading text-[22px] leading-snug tracking-tight text-ink dark:text-slate-100">
          <Link href={`/blog/${post.slug}`} className="hover:text-navy dark:hover:text-steel">
            {post.title}
          </Link>
        </h3>
        <p className="text-[16px] leading-[1.65] text-slate dark:text-slate-300">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
              className="rounded-[8px] border border-slate-200 bg-white px-2.5 py-1 text-[13px] text-slate-600 hover:border-navy hover:text-navy dark:border-slate-700 dark:bg-carbon dark:text-slate-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}
