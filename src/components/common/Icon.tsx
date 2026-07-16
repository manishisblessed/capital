import { type ComponentType, type SVGProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Institutional icon primitive.
 * Locks stroke weight to 1.25 (Brand Design System v1.0 §6 — "thin line icons").
 * Wrap any `lucide-react` icon before rendering so the site never ships
 * default-weight icons.
 *
 * Usage:
 *   import { Icon } from "@/components/common/Icon";
 *   import { ArrowUpRight } from "lucide-react";
 *
 *   <Icon as={ArrowUpRight} size={20} />
 */

type LucideLike = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }
>;

type Props = {
  as: LucideLike;
  size?: number;
  className?: string;
  strokeWidth?: number;
} & Omit<SVGProps<SVGSVGElement>, "ref">;

export const Icon = forwardRef<SVGSVGElement, Props>(function Icon(
  { as: Component, size = 20, className, strokeWidth = 1.25, ...rest },
  ref,
) {
  return (
    <Component
      ref={ref}
      size={size}
      strokeWidth={strokeWidth}
      className={cn("icon-line", className)}
      aria-hidden={rest["aria-label"] ? undefined : true}
      {...rest}
    />
  );
});
