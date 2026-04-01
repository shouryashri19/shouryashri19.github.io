import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { skills } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical, finance, and professional capabilities.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Skills"
        title="Capabilities"
        description="A recruiter-friendly view of technical tools, finance skills, and execution strengths."
      />

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <h2 className="font-heading text-2xl text-ink">Technical Tools</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {skills.technical.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-heading text-2xl text-ink">Finance Skills</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {skills.finance.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="font-heading text-2xl text-ink">Professional Strengths</h2>
          <ul className="mt-3 space-y-2 text-slate">
            {skills.professional.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
