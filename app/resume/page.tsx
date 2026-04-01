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
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Resume"
        title="Experience and Leadership"
        description="Experience spanning teaching support, financial research, analytics, and operations-focused business reporting."
      />

      <div className="space-y-6">
        {experiences.map((item) => (
          <Card key={`${item.role}-${item.organization}`}>
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="font-heading text-2xl text-ink">{item.role}</h2>
                <p className="font-semibold text-slate">{item.organization}</p>
              </div>
              <p className="text-sm font-semibold text-steel">
                {item.start} - {item.end} | {item.location}
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-slate">
              {item.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <section className="space-y-6">
        <h2 className="font-heading text-3xl text-ink">Leadership</h2>
        {leadership.map((item) => (
          <Card key={item.title}>
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-2xl text-ink">{item.title}</h3>
                <p className="font-semibold text-slate">{item.org}</p>
              </div>
              <p className="text-sm font-semibold text-steel">{item.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-slate">
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
