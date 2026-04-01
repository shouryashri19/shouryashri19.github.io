import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CtaButton({ href, children, variant = "primary" }: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition",
    variant === "primary" && "bg-navy text-white hover:bg-ink",
    variant === "secondary" && "border border-slate-300 bg-white text-ink hover:border-navy hover:text-navy",
    variant === "ghost" && "text-navy hover:text-ink",
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
