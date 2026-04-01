import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { experiences, leadership } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Resume and Experience",
  description: "Professional and leadership experience of Shourya Shrivastava.",
};

export default function ResumePage() {
  return (
    <div className="space-y-12 py-12 md:py-16">
      <SectionHeading
        label="Resume"
        title="Experience and Leadership"
        description="Experience spanning teaching support, financial research, analytics, and operations-focused reporting in structured finance environments."
      />

      <div className="space-y-6">
        {experiences.map((item) => (
          <Card key={`${item.role}-${item.organization}`}>
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="font-heading text-2xl text-ink dark:text-slate-100">{item.role}</h2>
                <p className="font-semibold text-slate dark:text-slate-300">{item.organization}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                {item.start} - {item.end} | {item.location}
              </p>
            </div>

            <details className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/40">
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-300">
                View Scope and Impact
              </summary>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate dark:text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </details>
          </Card>
        ))}
      </div>

      <section className="space-y-6">
        <h2 className="font-heading text-3xl text-ink dark:text-slate-100">Leadership</h2>
        {leadership.map((item) => (
          <Card key={item.title}>
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-2xl text-ink dark:text-slate-100">{item.title}</h3>
                <p className="font-semibold text-slate dark:text-slate-300">{item.org}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">{item.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate dark:text-slate-300">
              {item.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>
    </div>
  );
}
