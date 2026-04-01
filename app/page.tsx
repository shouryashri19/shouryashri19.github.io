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

const dashboardItems = [
  { label: "Focus", value: "IB and Strategic Finance", note: "Career direction" },
  { label: "Projects", value: `${projects.length}`, note: "Portfolio entries" },
  { label: "Certifications", value: `${topCertifications.length}`, note: "Core credentials" },
  { label: "Writing", value: "Long-form", note: "Medium and website" },
];

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <div className="space-y-20 py-12 md:py-16">
      <section className="grid gap-8 md:grid-cols-[1.35fr_1fr]">
        <div className="section-panel relative overflow-hidden p-8 md:p-10">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-steel/20 to-transparent blur-2xl" />
          <div className="relative space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-steel">Finance Portfolio</p>
            <h1 className="font-heading text-4xl leading-tight text-ink dark:text-slate-100 md:text-6xl">{profile.name}</h1>
            <p className="max-w-3xl text-xl text-slate dark:text-slate-300 md:text-2xl">{profile.headline}</p>
            <p className="max-w-3xl text-base leading-8 text-slate dark:text-slate-300 md:text-lg">{profile.shortIntro}</p>
            <div className="flex flex-wrap gap-3">
              <CtaButton href="/resume">Explore Experience</CtaButton>
              <CtaButton href="/projects" variant="secondary">
                View Projects
              </CtaButton>
              <CtaButton href={siteConfig.linkedIn} variant="secondary">
                LinkedIn Profile
              </CtaButton>
              <CtaButton href={siteConfig.medium} variant="secondary">
                Read on Medium
              </CtaButton>
            </div>
          </div>
        </div>

        <Card className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Areas of Focus</p>
          <ul className="space-y-3 text-sm leading-7 text-slate dark:text-slate-300">
            <li>- Investment banking and corporate finance recruiting preparation</li>
            <li>- Valuation, financial modeling, and market interpretation discipline</li>
            <li>- Data-driven reporting and stakeholder communication quality</li>
            <li>- Professional writing grounded in finance and business analysis</li>
          </ul>
        </Card>
      </section>

      <section className="metric-strip grid gap-4 p-4 md:grid-cols-4 md:p-6">
        {dashboardItems.map((item) => (
          <div key={item.label} className="rounded-lg border border-slate-200/80 bg-white p-4 dark:border-slate-700 dark:bg-carbon">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-steel">{item.label}</p>
            <p className="mt-1 font-heading text-2xl text-ink dark:text-slate-100">{item.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{item.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Experience</p>
          <p className="mt-2 font-heading text-3xl text-ink dark:text-slate-100">{experiences.length} Roles</p>
          <p className="mt-2 text-sm leading-7 text-slate dark:text-slate-300">
            Academic and internship exposure across analytics, reporting, and finance execution.
          </p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Projects</p>
          <p className="mt-2 font-heading text-3xl text-ink dark:text-slate-100">{projects.length} Portfolio Items</p>
          <p className="mt-2 text-sm leading-7 text-slate dark:text-slate-300">
            Structured project cases covering modeling, valuation, research, and business analytics.
          </p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Capabilities</p>
          <p className="mt-2 font-heading text-3xl text-ink dark:text-slate-100">{skills.finance.length + skills.technical.length}+</p>
          <p className="mt-2 text-sm leading-7 text-slate dark:text-slate-300">
            Technical and professional skills calibrated for high-performance finance roles.
          </p>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Writing</p>
            <h2 className="font-heading text-3xl text-ink dark:text-slate-100">Featured Insights</h2>
          </div>
          <div className="flex gap-3">
            <CtaButton href="/blog" variant="ghost">
              Website Blog
            </CtaButton>
            <CtaButton href={siteConfig.medium} variant="secondary">
              Medium Profile
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
        <Card className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">LinkedIn Integration</p>
          <h2 className="font-heading text-2xl text-ink dark:text-slate-100">Profile Highlights</h2>
          <ul className="space-y-2 text-sm leading-7 text-slate dark:text-slate-300">
            {linkedInHighlights.verifiedFromResumeAndVisibleProfile.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <Link
            href={linkedInHighlights.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-navy hover:text-ink dark:text-steel dark:hover:text-slate-100"
          >
            Open LinkedIn Profile
          </Link>
        </Card>

        <Card className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Distinctions</p>
          <h2 className="font-heading text-2xl text-ink dark:text-slate-100">Selected Highlights</h2>
          <ul className="space-y-2 text-sm leading-7 text-slate dark:text-slate-300">
            {additionalHighlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
