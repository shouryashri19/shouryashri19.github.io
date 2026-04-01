type Props = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="max-w-3xl space-y-4 pb-2">
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-700">{label}</p>
      <h1 className="font-heading text-[30px] leading-tight tracking-tight text-ink md:text-[34px]">{title}</h1>
      {description ? <p className="text-[16px] leading-[1.68] text-slate">{description}</p> : null}
      <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-steel to-transparent" />
    </div>
  );
}
