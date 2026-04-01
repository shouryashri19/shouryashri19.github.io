import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { Card } from "@/components/card";
import { BlogCard } from "@/components/blog-card";
import { ArticleCard } from "@/components/article-card";
import {
  additionalHighlights,
  experiences,
  linkedInHighlights,
  mediumArticles,
  profile,
  projects,
  skills,
  topCertifications,
} from "@/content/data/profile";
import { getFeaturedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home",
};

const metrics = [
  { label: "Experience", value: `${experiences.length} Roles`, sub: "Academic and internship track" },
  { label: "Projects", value: `${projects.length} Cases`, sub: "Modeling, valuation, analytics" },
  { label: "Certifications", value: `${topCertifications.length}`, sub: "Role-relevant credentials" },
  { label: "Writing", value: "Long-form", sub: "Finance and markets" },
];

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <div className="space-y-20 py-12 md:py-16">
      <section className="section-panel hero-grid relative overflow-hidden p-8 md:p-11">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-steel/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-navy/30 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-end">
          <div className="space-y-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">Wall Street Candidate Profile</p>
            <h1 className="font-heading text-[42px] leading-tight tracking-tight text-ink md:text-[52px]">
              {profile.name}
            </h1>
            <p className="max-w-3xl text-[24px] leading-[1.35] text-slate">{profile.headline}</p>
            <p className="max-w-3xl text-[16px] leading-[1.72] text-slate">{profile.shortIntro}</p>

            <div className="flex flex-wrap gap-3">
              <CtaButton href={siteConfig.resumePath}>View Resume</CtaButton>
              <CtaButton href="/projects" variant="secondary">
                View Projects
              </CtaButton>
              <CtaButton href="/contact" variant="secondary">
                Contact
              </CtaButton>
              <CtaButton href={siteConfig.linkedIn} variant="ghost">
                LinkedIn
              </CtaButton>
            </div>
          </div>

          <Card className="space-y-4 border-slate-300/20 bg-slate-300/10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">Areas of Focus</p>
            <ul className="space-y-3 text-[16px] leading-[1.65] text-slate">
              <li>- Investment banking and strategic finance recruiting</li>
              <li>- Valuation and financial modeling under market context</li>
              <li>- Data-backed reporting and communication discipline</li>
              <li>- Professional writing with finance depth</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="metric-strip grid gap-4 p-4 md:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-[12px] border border-slate-300/20 bg-slate-300/10 p-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-700">{item.label}</p>
            <p className="mt-1 font-heading text-[24px] leading-tight text-ink">{item.value}</p>
            <p className="text-[13px] text-slate">{item.sub}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">Writing and Commentary</p>
            <h2 className="font-heading text-[32px] tracking-tight text-ink">Featured Insights</h2>
          </div>
          <div className="flex gap-3">
            <CtaButton href="/blog" variant="secondary">
              Website Blog
            </CtaButton>
            <CtaButton href={siteConfig.medium} variant="secondary">
              Medium
            </CtaButton>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mediumArticles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">LinkedIn Highlights</p>
          <h2 className="font-heading text-[24px] tracking-tight text-ink">Professional Snapshot</h2>
          <ul className="space-y-2 text-[16px] leading-[1.65] text-slate">
            {linkedInHighlights.verifiedFromResumeAndVisibleProfile.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <Link href={siteConfig.linkedIn} target="_blank" rel="noreferrer" className="text-[15px] font-medium text-steel hover:text-ink">
            Open LinkedIn Profile
          </Link>
        </Card>

        <Card className="space-y-4">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">Distinctions</p>
          <h2 className="font-heading text-[24px] tracking-tight text-ink">Selected Achievements</h2>
          <ul className="space-y-2 text-[16px] leading-[1.65] text-slate">
            {additionalHighlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className="text-[13px] text-slate">Technical skills covered: {skills.technical.length + skills.finance.length}+</p>
        </Card>
      </section>
    </div>
  );
}
