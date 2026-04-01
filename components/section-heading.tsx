type Props = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="max-w-3xl space-y-4 pb-1">
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</p>
      <h1 className="font-heading text-[30px] leading-tight tracking-tight text-ink dark:text-slate-100 md:text-[32px]">
        {title}
      </h1>
      {description ? <p className="text-[16px] leading-[1.6] text-slate dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
