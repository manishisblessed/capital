import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: ReactNode;
  note?: ReactNode;
  /** Small caption e.g. "As of Q2 2026" */
  asOf?: string;
  accent?: "crimson" | "bronze" | "trust";
  className?: string;
};

/**
 * Institutional stat card. Uses the section-9 palette; numbers render with
 * tabular figures automatically.
 */
export function StatCard({
  label,
  value,
  note,
  asOf,
  accent = "crimson",
  className,
}: Props) {
  const eyebrowClass =
    accent === "bronze"
      ? "text-bronze"
      : accent === "trust"
        ? "text-slate-blue"
        : "text-crimson-500";

  return (
    <div className={cn("group", className)}>
      <p
        className={cn(
          "text-xs uppercase tracking-[0.14em] mb-3",
          eyebrowClass,
        )}
      >
        {label}
      </p>
      <p className="stat-figure font-display text-3xl lg:text-4xl text-charcoal mb-3 tabular-nums">
        {value}
      </p>
      {note && <p className="text-sm text-slate leading-relaxed">{note}</p>}
      {asOf && (
        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-blue tabular-nums">
          {asOf}
        </p>
      )}
    </div>
  );
}
