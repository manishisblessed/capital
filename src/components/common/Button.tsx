import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson-500 text-white hover:bg-crimson-600 rounded-[10px] shadow-[0_1px_0_rgba(36,41,47,0.06)]",
  secondary:
    "bg-paper text-charcoal border border-charcoal hover:bg-stone rounded-[10px]",
  ghost: "bg-transparent text-charcoal hover:bg-stone rounded-[10px]",
  link: "bg-transparent text-crimson-500 hover:text-crimson-600 px-0 rounded-none",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs tracking-[0.08em] uppercase",
  md: "h-11 px-6 text-sm tracking-[0.08em] uppercase",
  lg: "h-12 px-8 text-sm tracking-[0.08em] uppercase",
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
      {children}
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
  if (external || to.startsWith("http") || to.startsWith("mailto:")) {
    return (
      <a
        href={to}
        target={to.startsWith("http") ? "_blank" : undefined}
        rel={to.startsWith("http") ? "noreferrer noopener" : undefined}
        className={combined}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={combined}>
      {children}
    </Link>
  );
}
