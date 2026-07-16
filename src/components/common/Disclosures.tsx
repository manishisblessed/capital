import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Short "past performance" caption for use beneath any historical figures
 * (IRRs, multiples, exit metrics). Per Brand Design System v1.0 §12.
 */
export function PastPerformanceNote({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-[10px] uppercase tracking-[0.18em] text-bronze",
        className,
      )}
    >
      Past performance is not indicative of future results.
    </p>
  );
}

/**
 * Full risk-disclosure strip. Used above CTAs on Strategies, Opportunities
 * and fund detail pages. Content is boilerplate for SEBI-registered AIFs.
 */
export function RiskDisclosure({
  variant = "band",
  children,
  className,
}: {
  variant?: "band" | "inline";
  children?: ReactNode;
  className?: string;
}) {
  const body =
    children ??
    "This information does not constitute an offer, solicitation or recommendation to invest. Investment in Alternative Investment Funds involves market, liquidity, structural and regulatory risks. Units are subject to eligibility criteria, long lock-in periods and limited transferability. Investors should read the Private Placement Memorandum and Contribution Agreement carefully and consult their own legal, tax and financial advisors before making any investment decision.";

  if (variant === "inline") {
    return (
      <p
        className={cn(
          "text-xs leading-relaxed text-slate max-w-3xl",
          className,
        )}
      >
        {body}
      </p>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Risk disclosure"
      className={cn(
        "border-t border-b border-border bg-stone/70 py-6",
        className,
      )}
    >
      <div className="container-tb flex flex-col gap-2">
        <p className="eyebrow-accent">Important disclosure</p>
        <p className="text-xs lg:text-sm leading-relaxed text-slate max-w-4xl">
          {body}
        </p>
      </div>
    </aside>
  );
}
