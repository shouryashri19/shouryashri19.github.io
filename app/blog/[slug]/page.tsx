import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { TagChip } from "@/components/tag-chip";

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
    <article className="py-12 md:py-16">
      <header className="space-y-4 border-b border-slate-200 pb-8 dark:border-slate-700">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="font-heading max-w-4xl text-4xl leading-tight text-ink">{post.title}</h1>
        <p className="max-w-3xl text-lg text-slate">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <section className="article mt-8" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
