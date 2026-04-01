type Props = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">{label}</p>
      <h1 className="font-heading text-3xl leading-tight text-ink md:text-4xl">{title}</h1>
      {description ? <p className="text-base text-slate md:text-lg">{description}</p> : null}
    </div>
  );
}
