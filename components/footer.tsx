import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200/90 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-[#122038]/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate md:flex-row md:items-center md:justify-between">
        <p>
          {year} {siteConfig.name}. Built for a professional finance and strategy profile.
        </p>
        <div className="flex flex-wrap gap-5">
          <Link className="hover:text-navy dark:hover:text-steel" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-navy dark:hover:text-steel" href={siteConfig.medium} target="_blank" rel="noreferrer">
            Medium
          </Link>
          <Link className="hover:text-navy dark:hover:text-steel" href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link className="hover:text-navy dark:hover:text-steel" href="/contact">
            Contact
          </Link>
          <Link className="hover:text-navy dark:hover:text-steel" href={siteConfig.resumePath} target="_blank" rel="noreferrer">
            Resume PDF
          </Link>
        </div>
      </div>
    </footer>
  );
}
