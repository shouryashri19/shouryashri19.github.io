import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <article className={clsx("rounded-lg border border-slate-200 bg-white p-6 shadow-card", className)}>
      {children}
    </article>
  );
}
