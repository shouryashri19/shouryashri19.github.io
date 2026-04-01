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

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <div className="space-y-16 py-12 md:py-16">
      <section className="hero-sheen grid gap-10 rounded-xl border border-slate-200/80 p-8 md:grid-cols-[1.35fr_1fr] md:items-end dark:border-slate-700">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Professional Portfolio</p>
          <h1 className="font-heading text-4xl leading-tight text-ink md:text-6xl">{profile.name}</h1>
          <p className="max-w-3xl text-xl text-slate md:text-2xl">{profile.headline}</p>
          <p className="max-w-3xl text-base leading-7 text-slate md:text-lg">{profile.shortIntro}</p>
          <p className="max-w-3xl text-base leading-7 text-slate md:text-lg">{profile.longTermGoal}</p>
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
            <CtaButton href="/contact" variant="ghost">
              Contact Me
            </CtaButton>
          </div>
        </div>

        <Card>
          <h2 className="font-heading text-xl text-ink">Core Focus Areas</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Investment Banking and Corporate Finance Recruiting</li>
            <li>Valuation, Financial Modeling, and Market Analysis</li>
            <li>Data-Driven Decision Support and Business Operations</li>
            <li>Professional Writing, Research, and Stakeholder Communication</li>
          </ul>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-4">
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Experience</p>
          <p className="mt-2 font-heading text-3xl text-ink">{experiences.length} Roles</p>
          <p className="mt-2 text-sm text-slate">Academic and industry experience across research and analytics.</p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Projects</p>
          <p className="mt-2 font-heading text-3xl text-ink">{projects.length} Projects</p>
          <p className="mt-2 text-sm text-slate">Portfolio-ready finance, valuation, and analytics work.</p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Certifications</p>
          <p className="mt-2 font-heading text-3xl text-ink">{topCertifications.length} Core</p>
          <p className="mt-2 text-sm text-slate">Role-relevant proof points for markets and analytics readiness.</p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Skills</p>
          <p className="mt-2 font-heading text-3xl text-ink">{skills.technical.length + skills.finance.length}+</p>
          <p className="mt-2 text-sm text-slate">Tools and capabilities aligned to finance-intensive roles.</p>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Thought Leadership</p>
            <h2 className="font-heading text-3xl text-ink">Featured Writing</h2>
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
          <h2 className="font-heading text-2xl text-ink">LinkedIn Highlights</h2>
          <p className="text-sm text-slate">{linkedInHighlights.note}</p>
          <ul className="space-y-2 text-slate">
            {linkedInHighlights.verifiedFromResumeAndVisibleProfile.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <Link href={linkedInHighlights.profileUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-navy hover:text-ink">
            Open LinkedIn Profile
          </Link>
        </Card>

        <section className="section-panel space-y-4 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Distinctions</p>
          <h2 className="font-heading text-3xl text-ink">Selected Highlights</h2>
          <ul className="space-y-2 text-slate">
            {additionalHighlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
