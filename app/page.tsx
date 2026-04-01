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
  { label: "Experience", value: `${experiences.length} Roles`, note: "Academic and industry" },
  { label: "Projects", value: `${projects.length}`, note: "Portfolio entries" },
  { label: "Certifications", value: `${topCertifications.length}`, note: "Core credentials" },
];

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <div className="space-y-16 py-12 md:py-16">
      <section className="grid gap-6 md:grid-cols-[1.35fr_1fr]">
        <div className="section-panel p-8 md:p-10">
          <div className="space-y-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Profile</p>
            <h1 className="font-heading text-[40px] leading-tight tracking-tight text-ink dark:text-slate-100 md:text-[48px]">
              {profile.name}
            </h1>
            <p className="text-[22px] leading-[1.35] text-slate dark:text-slate-300">{profile.headline}</p>
            <p className="max-w-3xl text-[16px] leading-[1.7] text-slate dark:text-slate-300">{profile.shortIntro}</p>
            <div className="flex flex-wrap gap-3">
              <CtaButton href={siteConfig.resumePath}>View Resume</CtaButton>
              <CtaButton href="/projects" variant="secondary">
                View Projects
              </CtaButton>
              <CtaButton href="/contact" variant="secondary">
                Contact
              </CtaButton>
            </div>
          </div>
        </div>

        <Card className="space-y-4">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Core Strengths</p>
          <ul className="space-y-3 text-[16px] leading-[1.65] text-slate dark:text-slate-300">
            <li>- Valuation and financial modeling discipline</li>
            <li>- Market-aware analytical communication</li>
            <li>- Cross-functional reporting and data integrity</li>
            <li>- Professional writing and research orientation</li>
          </ul>
        </Card>
      </section>

      <section className="metric-strip grid gap-4 p-4 md:grid-cols-4">
        {dashboardItems.map((item) => (
          <div key={item.label} className="rounded-[10px] border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-carbon">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.label}</p>
            <p className="mt-1 font-heading text-[24px] leading-tight text-ink dark:text-slate-100">{item.value}</p>
            <p className="text-[13px] text-slate-500 dark:text-slate-400">{item.note}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Writing</p>
            <h2 className="font-heading text-[30px] tracking-tight text-ink dark:text-slate-100 md:text-[32px]">Featured Articles</h2>
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
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">LinkedIn</p>
          <h2 className="font-heading text-[24px] tracking-tight text-ink dark:text-slate-100">Professional Highlights</h2>
          <ul className="space-y-2 text-[16px] leading-[1.65] text-slate dark:text-slate-300">
            {linkedInHighlights.verifiedFromResumeAndVisibleProfile.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <Link href={siteConfig.linkedIn} target="_blank" rel="noreferrer" className="text-[16px] font-medium text-navy hover:text-[#162c68] dark:text-steel dark:hover:text-slate-100">
            Open LinkedIn Profile
          </Link>
        </Card>

        <Card className="space-y-3">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Achievements</p>
          <h2 className="font-heading text-[24px] tracking-tight text-ink dark:text-slate-100">Selected Distinctions</h2>
          <ul className="space-y-2 text-[16px] leading-[1.65] text-slate dark:text-slate-300">
            {additionalHighlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Experience</p>
          <p className="mt-2 font-heading text-[24px] text-ink dark:text-slate-100">{experiences.length} Roles</p>
          <p className="mt-2 text-[16px] leading-[1.65] text-slate dark:text-slate-300">Academic and internship experience in finance analysis and reporting.</p>
        </Card>
        <Card>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Projects</p>
          <p className="mt-2 font-heading text-[24px] text-ink dark:text-slate-100">{projects.length} Project Cases</p>
          <p className="mt-2 text-[16px] leading-[1.65] text-slate dark:text-slate-300">Structured project evidence across valuation, analytics, and research.</p>
        </Card>
        <Card>
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Skills</p>
          <p className="mt-2 font-heading text-[24px] text-ink dark:text-slate-100">{skills.technical.length + skills.finance.length}+</p>
          <p className="mt-2 text-[16px] leading-[1.65] text-slate dark:text-slate-300">Tools and technical readiness for finance and consulting workflows.</p>
        </Card>
      </section>
    </div>
  );
}
