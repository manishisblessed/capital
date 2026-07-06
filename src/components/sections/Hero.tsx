import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ScrollVelocityText } from "@/components/common/ScrollVelocityText";

const SceneCanvas = lazy(() =>
  import("@/components/common/SceneCanvas").then((m) => ({ default: m.SceneCanvas }))
);

const principlesText =
  "AIF · LVF · Deal-by-Deal · Patient Capital · Pan-India · SEBI-Registered · Operational Investor · Selected Deals · ";

/**
 * Rotating accent phrases — the three tagline beats from the reference
 * ("Patient capital. Selected deals. Built for India.") cycled via a
 * "clip" wipe, matching the client-referenced `wpr-anim-text-clip`.
 */
const rotatingPhrases = [
  "Patient capital.",
  "Selected deals.",
  "Built for India.",
];

/**
 * Full-bleed cinematic photo hero. Swap `heroImage` for a licensed
 * client-approved asset when supplied — the URL below is a temporary
 * Unsplash architectural photo that fits Landmark's positioning.
 */
const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const cta1 = useMagnetic<HTMLAnchorElement>(0.3);
  const cta2 = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden flex items-center bg-navy-900"
    >
      {/* Background photograph — slow ken-burns + parallax */}
      <motion.div
        aria-hidden
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Brand-tinted overlay stack — keeps navy identity, protects legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-canvas/90 via-navy-800/80 to-navy-500/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-canvas/95 via-transparent to-canvas/50"
      />
      <div aria-hidden className="absolute inset-0 grid-backdrop opacity-[0.08]" />

      {/* WebGL 3D layer — floating architectural wireframes with mouse parallax */}
      <Suspense fallback={null}>
        <SceneCanvas className="mix-blend-screen opacity-90" parallaxStrength={0.4} />
      </Suspense>

      {/* Corner rule marks */}
      <CornerMark className="top-8 left-6 lg:top-10 lg:left-10" />
      <CornerMark className="top-8 right-6 lg:top-10 lg:right-10" flip />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="container-tb relative z-10 pt-32 lg:pt-24 pb-32"
      >
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-8 inline-flex items-center gap-3 text-red-300"
          >
            <span className="h-px w-10 bg-red-400/80" />
            Landmark Capital
          </motion.p>

          {/* Flagship headline — from reference line 4 */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="display-1 text-balance !text-paper"
          >
            Not More Real Estate.
            <br />
            <span className="font-light italic text-paper/95">
              Better Real Estate.
            </span>
          </motion.h1>

          {/* Rotating clip accent — cycles the three tagline beats from reference line 5 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 lg:mt-12 flex items-baseline gap-4"
          >
            <span
              aria-hidden
              className="hidden sm:block h-[2px] w-14 bg-red-400 shrink-0 translate-y-[-0.35em]"
            />
            <ClipRotator phrases={rotatingPhrases} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              ref={cta1}
              to="/our-business"
              className="group relative inline-flex items-center gap-3 px-8 h-14 bg-red-500 text-paper rounded-full text-sm uppercase tracking-[0.18em] transition-colors duration-500 hover:bg-red-600 will-change-transform"
            >
              <span>Explore Our Business</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <Link
              ref={cta2}
              to="/funds/multiplier"
              className="group inline-flex items-center gap-3 h-14 px-2 text-sm uppercase tracking-[0.18em] text-paper will-change-transform link-underline"
            >
              <span>Multiplier Fund — Open</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-paper/60">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="text-paper/80"
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Marquee strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-900/85 backdrop-blur-sm text-paper py-3 z-20">
        <ScrollVelocityText
          text={principlesText}
          baseVelocity={1.2}
          className="text-[11px] tracking-[0.32em] uppercase"
        />
      </div>
    </section>
  );
}

/**
 * Clip-wipe rotating text. Cycles `phrases` on an interval, wiping
 * the outgoing word out to the right and revealing the incoming one
 * from the left — the same visual language as the referenced
 * `wpr-anim-text-clip` widget, but framer-motion driven.
 */
function ClipRotator({
  phrases,
  interval = 2600,
}: {
  phrases: string[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const longest = phrases.reduce((a, b) => (a.length >= b.length ? a : b));

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % phrases.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [phrases.length, interval]);

  return (
    <span
      aria-live="polite"
      className="relative inline-block font-display italic font-light leading-[1] text-[clamp(1.5rem,3.2vw,2.75rem)] tracking-tight text-red-300"
    >
      {/* Invisible sizer — reserves width for the longest phrase so the layout doesn't jump */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longest}
      </span>

      <span className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={phrases[active]}
            initial={{ clipPath: "inset(0 100% 0 0)", y: "0.05em" }}
            animate={{ clipPath: "inset(0 0% 0 0)", y: "0em" }}
            exit={{ clipPath: "inset(0 0 0 100%)", y: "-0.05em" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block whitespace-nowrap"
          >
            {phrases[active]}
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Blinking cursor — anchors the animation visually */}
      <span
        aria-hidden
        className="absolute -right-3 top-[0.1em] bottom-[0.15em] w-[3px] bg-red-400/80 animate-blink"
      />
    </span>
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
