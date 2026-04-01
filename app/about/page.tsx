import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { editablePlaceholders, profile } from "@/content/data/profile";

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
        description="A focused finance candidate combining quantitative skill with business communication and execution discipline."
      />

      <Card className="space-y-4">
        <p className="leading-7 text-slate">{profile.summary}</p>
        <p className="leading-7 text-slate">
          Across academic and internship roles, I have worked on pricing analysis, variance reporting, data workflows, and cross-functional collaboration. I aim to apply this foundation in investment banking, private equity, and strategic finance environments where rigorous analysis and structured decision-making are critical.
        </p>
        <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          Editable placeholder: {editablePlaceholders.bioPersonal}
        </p>
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
    </div>
  );
}
