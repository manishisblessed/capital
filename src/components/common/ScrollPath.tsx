import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Props = {
  /** SVG viewBox e.g. "0 0 200 600" */
  viewBox?: string;
  /** SVG path "d" string */
  d: string;
  /** Stroke color */
  stroke?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Optional className for the wrapping svg */
  className?: string;
  /** Scroll offset for the trigger */
  offset?: ["start end" | "start start", "end start" | "end end"];
  /** Optional small dot at the head of the path */
  showDot?: boolean;
  dotColor?: string;
};

/**
 * An SVG path that draws itself based on the viewport scroll progress
 * of its container. Optionally renders a moving dot at the path head.
 */
export function ScrollPath({
  viewBox = "0 0 200 600",
  d,
  stroke = "#bb1c1c",
  strokeWidth = 1,
  className = "",
  offset = ["start end", "end start"],
  showDot = false,
  dotColor = "#bb1c1c",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const pathLength = useTransform(smooth, [0, 1], [0, 1]);
  const dotOffset = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className={className}>
      <svg viewBox={viewBox} fill="none" className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={d}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{ pathLength }}
        />
        {showDot && (
          <motion.circle
            r={4}
            fill={dotColor}
            style={{ offsetPath: `path("${d}")`, offsetDistance: dotOffset }}
          />
        )}
      </svg>
    </div>
  );
}
