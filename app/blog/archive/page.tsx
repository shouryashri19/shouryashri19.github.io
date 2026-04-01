import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Archive",
  description: "Chronological archive of blog posts.",
};

export default function BlogArchivePage() {
  const posts = getAllPosts();

  const groups = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const date = new Date(post.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    acc[key] = acc[key] ? [...acc[key], post] : [post];
    return acc;
  }, {});

  return (
    <div className="space-y-8 py-12 md:py-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Blog</p>
        <h1 className="font-heading text-4xl text-ink">Archive</h1>
        <p className="text-slate">Chronological index of published writing.</p>
      </header>

      <div className="space-y-8">
        {Object.entries(groups).map(([month, monthPosts]) => (
          <section key={month} className="section-panel p-6">
            <h2 className="font-heading text-2xl text-ink">{month}</h2>
            <ul className="mt-3 space-y-2">
              {monthPosts.map((post) => (
                <li key={post.slug} className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-navy hover:text-ink">
                    {post.title}
                  </Link>
                  <span className="text-sm text-slate">{new Date(post.date).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
