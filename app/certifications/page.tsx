import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CertificationCard } from "@/components/certification-card";
import { certifications, editablePlaceholders, topCertifications } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications relevant to finance, analytics, and business readiness.",
};

export default function CertificationsPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Certifications"
        title="Credentials"
        description="Structured credential view across finance, markets, and analytical training tracks."
      />

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Most Relevant Credentials</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {topCertifications.map((certification) => (
            <CertificationCard key={certification.name} certification={certification} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Complete Certification List</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <CertificationCard key={`${certification.name}-${certification.issuer}`} certification={certification} />
          ))}
        </div>
      </section>

      <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
        Editable placeholder: {editablePlaceholders.certificationCredentials}
      </div>
    </div>
  );
}
