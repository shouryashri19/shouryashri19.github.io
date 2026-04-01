import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-ink">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
