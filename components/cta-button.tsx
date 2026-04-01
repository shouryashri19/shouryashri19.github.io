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
    "inline-flex items-center justify-center rounded-[9px] px-[18px] py-[10px] text-[13px] font-semibold tracking-tight transition-all duration-200 ease-smooth",
    variant === "primary" &&
      "bg-gradient-to-r from-navy to-steel text-white hover:brightness-110",
    variant === "secondary" &&
      "border border-slate-300/25 bg-slate-300/10 text-ink hover:border-steel/60 hover:bg-slate-300/15",
    variant === "ghost" && "text-steel hover:text-ink",
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
