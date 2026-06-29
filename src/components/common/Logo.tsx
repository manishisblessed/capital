import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "mark" | "lockup";
};

/**
 * TridentBay wordmark + trident icon.
 * Pure SVG until official brand asset arrives.
 */
export function Logo({ className, variant = "lockup" }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="tb-trident" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#bb1c1c" />
            <stop offset="1" stopColor="#04036b" />
          </linearGradient>
        </defs>
        {/* trident shape */}
        <path
          d="M16 3.2 L16 28.8"
          stroke="url(#tb-trident)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M8 6 L8 13 C8 15.21 9.79 17 12 17 L16 17"
          stroke="url(#tb-trident)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M24 6 L24 13 C24 15.21 22.21 17 20 17 L16 17"
          stroke="url(#tb-trident)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="3.2" r="1.6" fill="#bb1c1c" />
        <circle cx="8" cy="6" r="1.4" fill="#04036b" />
        <circle cx="24" cy="6" r="1.4" fill="#04036b" />
      </svg>
      {variant === "lockup" && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.25rem] text-navy-500 tracking-tight">
            Trident<span className="text-red-500">Bay</span>
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.22em] text-muted mt-0.5">
            Asset Managers
          </span>
        </span>
      )}
    </span>
  );
}
