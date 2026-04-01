import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { CertificationCard } from "@/components/certification-card";
import { certifications, conferences, education, publications, topCertifications } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic profile, publications, conferences, and certifications.",
};

export default function EducationPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Education"
        title="Academic Foundation"
        description="Graduate and undergraduate training aligned with finance, valuation, and analytical decision-making."
      />

      <section className="space-y-6">
        {education.map((item) => (
          <Card key={item.school}>
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="font-heading text-2xl text-ink">{item.school}</h2>
                <p className="font-semibold text-slate">{item.degree}</p>
              </div>
              <p className="text-sm font-semibold text-steel">
                {item.period} | {item.location}
              </p>
            </div>
            <p className="mt-3 text-sm font-semibold text-ink">{item.score}</p>
            <ul className="mt-3 space-y-2 text-slate">
              {item.highlights.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="font-heading text-2xl text-ink">Publication</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {publications.map((paper) => (
              <li key={paper.title}>
                <p className="font-semibold text-ink">{paper.title}</p>
                <p className="text-sm">{paper.citation}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-heading text-2xl text-ink">Conferences</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {conferences.map((event) => (
              <li key={event}>- {event}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Top Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {topCertifications.map((cert) => (
            <CertificationCard key={`${cert.name}-${cert.issuer}`} certification={cert} />
          ))}
        </div>
      </section>

      <Card>
        <h2 className="font-heading text-2xl text-ink">Complete Certification Count</h2>
        <p className="mt-2 text-slate">{certifications.length} certifications are listed in the dedicated Certifications page.</p>
      </Card>
    </div>
  );
}
