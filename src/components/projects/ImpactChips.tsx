import { cn } from "@/lib/utils";

interface ImpactChipsProps {
  chips: string[];
  className?: string;
}

export function ImpactChips({ chips, className }: ImpactChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {chips.map((chip) => (
        <span
          key={chip}
          className="rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent sm:text-[11px]"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
