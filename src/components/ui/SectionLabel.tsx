interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs tracking-widest text-accent">
        {number}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
