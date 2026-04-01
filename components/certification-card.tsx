import Link from "next/link";
import type { CertificationItem } from "@/content/data/profile";
import { Card } from "@/components/card";

export function CertificationCard({ certification }: { certification: CertificationItem }) {
  return (
    <Card className="h-full space-y-3">
      <div>
        <h3 className="font-heading text-[22px] leading-tight tracking-tight text-ink dark:text-slate-100">{certification.name}</h3>
        <p className="text-[15px] font-medium text-slate dark:text-slate-300">{certification.issuer}</p>
      </div>

      <p className="text-[15px] text-slate dark:text-slate-300">
        {certification.date ? `Issued: ${certification.date}` : "Issue date not publicly listed"}
      </p>

      <div className="flex items-center justify-between text-[13px]">
        <span className="rounded-[8px] border border-slate-200 bg-white px-2.5 py-1 text-slate-600 dark:border-slate-700 dark:bg-carbon dark:text-slate-300">
          {certification.relevance}
        </span>
        <span className="text-slate-500 dark:text-slate-400">Source: {certification.source}</span>
      </div>

      {certification.credentialUrl ? (
        <Link href={certification.credentialUrl} target="_blank" rel="noreferrer" className="text-[15px] font-medium text-navy hover:text-[#162c68] dark:text-steel dark:hover:text-slate-100">
          View credential
        </Link>
      ) : (
        <p className="text-[13px] text-slate-500 dark:text-slate-400">Credential URL can be added later.</p>
      )}
    </Card>
  );
}
