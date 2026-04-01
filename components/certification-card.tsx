import Link from "next/link";
import type { CertificationItem } from "@/content/data/profile";
import { Card } from "@/components/card";

export function CertificationCard({ certification }: { certification: CertificationItem }) {
  return (
    <Card className="h-full space-y-3">
      <div>
        <h3 className="font-heading text-xl text-ink">{certification.name}</h3>
        <p className="text-sm font-semibold text-slate">{certification.issuer}</p>
      </div>

      <p className="text-sm text-slate">
        {certification.date ? `Issued: ${certification.date}` : "Issue date not publicly listed"}
      </p>

      <div className="flex items-center justify-between text-xs">
        <span className="rounded bg-slate-100 px-2 py-1 font-semibold uppercase tracking-wider text-slate-700 dark:bg-slate-700/60 dark:text-slate-100">
          {certification.relevance}
        </span>
        <span className="text-slate-500">Source: {certification.source}</span>
      </div>

      {certification.credentialUrl ? (
        <Link
          href={certification.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-navy hover:text-ink"
        >
          View Credential
        </Link>
      ) : (
        <p className="text-xs text-slate-500">Credential URL can be added later.</p>
      )}
    </Card>
  );
}
