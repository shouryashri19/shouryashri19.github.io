import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { BlogExplorer } from "@/components/blog-explorer";
import { CtaButton } from "@/components/cta-button";
import { ArticleCard } from "@/components/article-card";
import { editablePlaceholders, mediumArticles, mediumProfile } from "@/content/data/profile";
import { getAllPosts, getTags } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Finance, markets, career preparation, and professional development writing.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getTags();

  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Blog"
        title="Insights and Reflections"
        description="A professional writing hub combining on-site long-form articles with real Medium publishing activity."
      />

      <section className="section-panel p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl text-ink">Featured Writing and Publications</h2>
            <p className="max-w-3xl text-sm text-slate">{mediumProfile.bio}</p>
            <p className="text-xs text-slate-500">{mediumProfile.followersText}</p>
          </div>
          <div className="flex gap-3">
            <CtaButton href={siteConfig.medium} variant="secondary">
              Read on Medium
            </CtaButton>
            <CtaButton href="/blog/archive" variant="secondary">
              Open Archive
            </CtaButton>
          </div>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {mediumArticles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>

        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          Editable placeholder: {editablePlaceholders.mediumAdditionalArticles}
        </p>
        <p className="mt-3 text-sm text-slate">
          Full Medium profile: <Link href={siteConfig.medium} className="font-semibold text-navy hover:text-ink" target="_blank" rel="noreferrer">{siteConfig.medium}</Link>
        </p>
      </section>

      <BlogExplorer posts={posts} tags={tags} />
    </div>
  );
}
