import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <article
      className={clsx(
        "section-panel p-6 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-elevated",
        className,
      )}
    >
      {children}
    </article>
  );
}
