import { cn } from "@/lib/utils";

type Props = {
  name: string;
  photo?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export function Avatar({ name, photo, className, size = "md" }: Props) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizes = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-base",
    lg: "w-24 h-28 text-xl",
    xl: "w-full aspect-[4/5] text-2xl",
  };

  if (photo) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-[10px] bg-stone border border-border shrink-0",
          sizes[size],
          className
        )}
      >
        <img
          src={photo}
          alt=""
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-[10px] bg-stone border border-border grid place-items-center font-display text-slate-blue shrink-0",
        sizes[size],
        className
      )}
      aria-hidden
    >
      {initials}
    </div>
  );
}
