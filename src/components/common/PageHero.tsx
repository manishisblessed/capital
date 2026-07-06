import { lazy, Suspense, type ReactNode } from "react";
import { motion } from "framer-motion";
import { RevealText } from "./Reveal";

const SceneCanvas = lazy(() =>
  import("./SceneCanvas").then((m) => ({ default: m.SceneCanvas }))
);

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  scene?: boolean;
};

/**
 * PageHero — cinematic dark banner used at the top of every sub-page.
 * Combines a graded navy canvas, ambient red/navy glow, a hairline
 * grid, corner rule marks, and (opt-in) a WebGL 3D backdrop.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  scene = true,
}: Props) {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden bg-canvas ambient-glow">
      {/* Layered background — 3D layer is lazy-loaded so it never blocks first paint */}
      {scene && (
        <Suspense fallback={null}>
          <SceneCanvas density="sparse" parallaxStrength={0.25} />
        </Suspense>
      )}
      <div className="absolute inset-0 grid-backdrop opacity-30 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-canvas via-canvas/70 to-transparent pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent pointer-events-none"
      />

      {/* Corner rule marks */}
      <CornerMark className="top-8 left-6 lg:top-24 lg:left-10" />
      <CornerMark className="top-8 right-6 lg:top-24 lg:right-10" flip />

      {/* Decorative diagonal ribbon (kept, but now on top of the 3D scene) */}
      <svg
        className="absolute -right-20 top-32 w-[420px] opacity-30 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={i}
            x1={0}
            y1={i * 42}
            x2={400}
            y2={i * 42 + 80}
            stroke="#bb1c1c"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 + i * 0.04 }}
          />
        ))}
      </svg>

      <div className="container-tb relative z-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-8 inline-flex items-center gap-3 text-red-300"
          >
            <span className="h-px w-10 bg-red-400/80" />
            {eyebrow}
          </motion.p>
        )}

        <h1 className="display-1 text-balance text-paper">
          {typeof title === "string" ? <RevealText text={title} /> : title}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl max-w-2xl leading-relaxed text-paper/75"
          >
            {subtitle}
          </motion.p>
        )}

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

function CornerMark({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      className={`absolute w-8 h-8 lg:w-12 lg:h-12 pointer-events-none z-10 ${
        flip ? "scale-x-[-1]" : ""
      } ${className ?? ""}`}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 2 L14 2 M2 2 L2 14"
        stroke="#f5c5c5"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
    </motion.svg>
  );
}
