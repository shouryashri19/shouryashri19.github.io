import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-300/20 bg-midnight/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-4 px-6 py-8 text-[13px] text-slate-700 md:flex-row md:items-center md:justify-between">
        <p>{year} {siteConfig.name}. Built for high-finance recruiting and executive credibility.</p>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-ink" href="/projects">Projects</Link>
          <Link className="hover:text-ink" href="/certifications">Certifications</Link>
          <Link className="hover:text-ink" href="/blog">Blog</Link>
          <Link className="hover:text-ink" href={siteConfig.linkedIn} target="_blank" rel="noreferrer">LinkedIn</Link>
          <Link className="hover:text-ink" href={siteConfig.medium} target="_blank" rel="noreferrer">Medium</Link>
          <Link className="hover:text-ink" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
