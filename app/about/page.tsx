import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import {
  featuredWork,
  linkedInHighlights,
  mediumArticles,
  mediumProfile,
  profile,
} from "@/content/data/profile";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Professional biography and career direction of Shourya Shrivastava.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="About"
        title="Professional Profile"
        description="A focused finance candidate combining quantitative skill with business communication, analytical writing, and execution discipline."
      />

      <Card className="space-y-4">
        <p className="leading-7 text-slate">{profile.summary}</p>
        <p className="leading-7 text-slate">{profile.shortIntro}</p>
        <p className="leading-7 text-slate">{profile.longTermGoal}</p>
      </Card>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="font-heading text-2xl text-ink">Professional Values</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {profile.values.map((value) => (
              <li key={value}>- {value}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-heading text-2xl text-ink">Currently Exploring</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {profile.currentlyExploring.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">LinkedIn as Profile Hub</h2>
          <p className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-200">
            {linkedInHighlights.headline}
          </p>
          <p className="text-sm text-slate">{linkedInHighlights.note}</p>
          <ul className="space-y-2 text-slate">
            {linkedInHighlights.verifiedFromResumeAndVisibleProfile.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Featured Work & Project Documentation</p>
            <p className="text-sm text-slate">(Add links as available)</p>
            <ul className="space-y-2 text-slate">
              {featuredWork.map((item) => (
                <li key={item.title}>
                  {item.url ? (
                    <Link href={item.url} target="_blank" rel="noreferrer" className="font-medium text-navy hover:text-ink">
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={siteConfig.linkedIn} target="_blank" rel="noreferrer" className="text-sm font-semibold text-navy hover:text-ink">
              Open LinkedIn
            </Link>
          </div>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Writing & Thought Leadership</h2>
          <p className="text-sm text-slate">{mediumProfile.writingIdentity}</p>
          <p className="text-sm text-slate">{mediumProfile.writingIdentityDetail}</p>
          <p className="text-sm text-slate">{mediumProfile.writingIdentityPublishing}</p>
          <ul className="space-y-2 text-slate">
            {mediumArticles.map((article) => (
              <li key={article.url}>
                - {article.title}
              </li>
            ))}
          </ul>
          <Link href={siteConfig.medium} target="_blank" rel="noreferrer" className="text-sm font-semibold text-navy hover:text-ink">
            Read on Medium
          </Link>
        </Card>
      </section>
    </div>
  );
}
