import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Card } from "@/components/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-steel">{new Date(post.date).toLocaleDateString()}</p>
        <h3 className="font-heading text-xl text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-navy">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-slate">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200">
              {tag}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">{post.readingMinutes} min read</p>
      </div>
    </Card>
  );
}
