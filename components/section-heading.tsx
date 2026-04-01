type Props = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="max-w-3xl space-y-4 pb-2">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">{label}</p>
      <h1 className="font-heading text-3xl leading-tight text-ink md:text-5xl dark:text-slate-100">{title}</h1>
      {description ? <p className="text-base leading-7 text-slate md:text-lg dark:text-slate-300">{description}</p> : null}
      <div className="h-px w-24 bg-gradient-to-r from-navy to-transparent dark:from-steel" />
    </div>
  );
}
