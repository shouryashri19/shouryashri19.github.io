import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { BlogExplorer } from "@/components/blog-explorer";
import { CtaButton } from "@/components/cta-button";
import { getAllPosts, getTags } from "@/lib/blog";

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
        description="Writing on finance careers, valuation perspectives, market thinking, and disciplined professional development."
      />

      <div className="flex justify-end">
        <CtaButton href="/blog/archive" variant="secondary">
          Open Archive
        </CtaButton>
      </div>

      <BlogExplorer posts={posts} tags={tags} />
    </div>
  );
}
