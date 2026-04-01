import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { TagChip } from "@/components/tag-chip";
import { ReadingProgress } from "@/components/reading-progress";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const html = markdownToHtml(post.content);

  return (
    <article id="blog-article" className="py-12 md:py-16">
      <ReadingProgress />
      <header className="section-panel mt-4 space-y-4 p-7 md:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">
          {new Date(post.date).toLocaleDateString()} | {post.readingMinutes} min read
        </p>
        <h1 className="font-heading max-w-4xl text-4xl leading-tight text-ink dark:text-slate-100 md:text-5xl">
          {post.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate dark:text-slate-300">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <section className="article mt-8 rounded-xl border border-slate-200 bg-white p-7 shadow-card dark:border-slate-700 dark:bg-carbon md:p-10" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
