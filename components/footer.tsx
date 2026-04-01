import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-[#122038]/90">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-4 px-6 py-8 text-[13px] text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>{year} {siteConfig.name}. Finance-focused professional portfolio.</p>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-navy dark:hover:text-steel" href="/projects">Projects</Link>
          <Link className="hover:text-navy dark:hover:text-steel" href="/certifications">Certifications</Link>
          <Link className="hover:text-navy dark:hover:text-steel" href="/blog">Blog</Link>
          <Link className="hover:text-navy dark:hover:text-steel" href={siteConfig.linkedIn} target="_blank" rel="noreferrer">LinkedIn</Link>
          <Link className="hover:text-navy dark:hover:text-steel" href={siteConfig.medium} target="_blank" rel="noreferrer">Medium</Link>
          <Link className="hover:text-navy dark:hover:text-steel" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
