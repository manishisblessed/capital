import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "link";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-500 text-white hover:bg-red-500 hover:shadow-[0_10px_30px_-15px_rgba(187,28,28,0.6)]",
  ghost:
    "bg-transparent text-paper hover:bg-navy-500/5",
  outline:
    "bg-transparent border border-navy-500/20 text-paper hover:border-navy-500 hover:bg-navy-500 hover:text-white",
  link:
    "bg-transparent text-paper hover:text-red-500 px-0 rounded-none",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs tracking-wider uppercase",
  md: "h-11 px-6 text-sm tracking-wider uppercase",
  lg: "h-14 px-9 text-sm tracking-wider uppercase",
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & { to: string; external?: boolean } & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cn(base, variants[variant], variant !== "link" && sizes[size], className)}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
);
Button.displayName = "Button";

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  to,
  external,
  ...props
}: LinkProps) {
  const combined = cn(base, variants[variant], variant !== "link" && sizes[size], className);
  if (external || to.startsWith("http")) {
    return (
      <a href={to} target="_blank" rel="noreferrer noopener" className={combined} {...props}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }
  return (
    <Link to={to} className={combined}>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
