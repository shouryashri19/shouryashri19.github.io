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
        "section-panel rounded-[12px] p-5 transition-all duration-200 ease-smooth hover:-translate-y-[2px] hover:shadow-raised",
        className,
      )}
    >
      {children}
    </article>
  );
}
