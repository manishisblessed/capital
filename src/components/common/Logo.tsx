import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "mark" | "lockup";
};

/**
 * Landmark Capital lockup — serif "Landmark" wordmark above a
 * crimson band carrying letterspaced "CAPITAL", mirroring the
 * official brand logo.
 */
export function Logo({ className, variant = "lockup" }: Props) {
  if (variant === "mark") {
    return (
      <span
        className={cn(
          "inline-grid place-items-center w-8 h-8 rounded-md bg-red-500 text-white font-display text-xl leading-none",
          className
        )}
        aria-hidden
      >
        L
      </span>
    );
  }

  return (
    <span className={cn("inline-flex flex-col leading-none select-none", className)}>
      <span className="font-display font-semibold text-[1.5rem] tracking-tight text-red-500 leading-none px-0.5">
        Landmark
      </span>
      <span className="mt-[3px] bg-red-500 text-white text-[0.55rem] font-medium uppercase tracking-[0.42em] text-center py-[3px] pl-[0.42em] rounded-[2px]">
        Capital
      </span>
    </span>
  );
}
