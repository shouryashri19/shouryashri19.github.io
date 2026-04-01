import { CtaButton } from "@/components/cta-button";
import { Card } from "@/components/card";
import { BlogCard } from "@/components/blog-card";
import {
  additionalHighlights,
  experiences,
  profile,
  projects,
  skills,
} from "@/content/data/profile";
import { getFeaturedPosts } from "@/lib/blog";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <div className="space-y-16 py-12 md:py-16">
      <section className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Professional Portfolio</p>
          <h1 className="font-heading text-4xl leading-tight text-ink md:text-6xl">{profile.name}</h1>
          <p className="max-w-3xl text-xl text-slate md:text-2xl">{profile.headline}</p>
          <p className="max-w-3xl text-base leading-7 text-slate md:text-lg">{profile.shortIntro}</p>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/resume">Explore Experience</CtaButton>
            <CtaButton href="/blog" variant="secondary">
              Read Blog
            </CtaButton>
            <CtaButton href="/Shourya_Shrivastava_Resume.pdf" variant="secondary">
              View Resume PDF
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

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Experience Snapshot</p>
          <p className="mt-2 font-heading text-3xl text-ink">{experiences.length} Roles</p>
          <p className="mt-2 text-sm text-slate">Academic and industry experience across research, analytics, and finance workflows.</p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Projects</p>
          <p className="mt-2 font-heading text-3xl text-ink">{projects.length} Featured</p>
          <p className="mt-2 text-sm text-slate">Hands-on modeling, valuation, and scenario analysis with business-facing outputs.</p>
        </Card>
        <Card>
          <p className="text-xs font-bold uppercase tracking-wider text-steel">Skills</p>
          <p className="mt-2 font-heading text-3xl text-ink">{skills.technical.length + skills.finance.length}+ Tools and Capabilities</p>
          <p className="mt-2 text-sm text-slate">Built for demanding analytical and client-facing environments.</p>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Thought Leadership</p>
            <h2 className="font-heading text-3xl text-ink">Recent Writing</h2>
          </div>
          <CtaButton href="/blog" variant="ghost">
            View All Posts
          </CtaButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-7 shadow-card">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Distinctions</p>
        <h2 className="font-heading text-3xl text-ink">Selected Highlights</h2>
        <ul className="space-y-2 text-slate">
          {additionalHighlights.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
