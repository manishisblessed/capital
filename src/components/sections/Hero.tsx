import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { RevealText } from "@/components/common/Reveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ScrollVelocityText } from "@/components/common/ScrollVelocityText";

const principlesText =
  "AIF · LVF · Deal-by-Deal · Patient Capital · Pan-India · SEBI-Registered · Operational Investor · Selected Deals · ";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const buildingY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const buildingOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.7], [0.5, 0]);

  const cta1 = useMagnetic<HTMLAnchorElement>(0.3);
  const cta2 = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden bg-paper noise-overlay flex items-center"
    >
      {/* Background grid */}
      <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0 grid-backdrop" />

      {/* Animated building wireframe */}
      <motion.div
        style={{ y: buildingY, opacity: buildingOpacity }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] lg:w-[50%] pointer-events-none"
      >
        <BuildingWireframe />
      </motion.div>

      {/* Diagonal lines */}
      <svg className="absolute right-[10%] top-[20%] opacity-20 pointer-events-none" width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={i * 30}
            y1={220}
            x2={220}
            y2={i * 30}
            stroke="#bb1c1c"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      {/* Content */}
      <motion.div style={{ y: titleY }} className="container-tb relative z-10 pt-32 lg:pt-24">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-red-500" />
            TridentBay Asset Managers
          </motion.p>

          <h1 className="display-1 text-balance text-navy-500">
            <RevealText text="Not More Real Estate." />
            <br />
            <span className="italic font-light text-navy-500/90">
              <RevealText text="Better Real Estate." delay={0.4} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-ink-soft max-w-xl leading-relaxed"
          >
            Patient capital. Selected deals. Built for India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              ref={cta1}
              to="/our-business"
              className="group relative inline-flex items-center gap-3 px-8 h-14 bg-navy-500 text-paper rounded-full text-sm uppercase tracking-[0.18em] transition-colors duration-500 hover:bg-red-500 will-change-transform"
            >
              <span>Explore Our Business</span>
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              ref={cta2}
              to="/funds/multiplier"
              className="group inline-flex items-center gap-3 h-14 px-2 text-sm uppercase tracking-[0.18em] text-navy-500 will-change-transform link-underline"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="text-navy-500"
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Marquee strip at very bottom — reacts to scroll velocity */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-rule bg-navy-500 text-paper py-3">
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
 * Animated SVG building wireframe — abstract architectural sketch.
 * Lines draw in on mount via strokeDashoffset animation.
 */
function BuildingWireframe() {
  return (
    <svg
      viewBox="0 0 600 800"
      className="w-full h-full"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ink" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#04036b" stopOpacity="0.7" />
          <stop offset="1" stopColor="#04036b" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#bb1c1c" stopOpacity="0.9" />
          <stop offset="1" stopColor="#bb1c1c" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <g>
        {/* Main tall tower */}
        <motion.path
          d="M 340 130 L 340 760 L 470 760 L 470 200 Z"
          stroke="url(#ink)"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Tower windows grid */}
        {Array.from({ length: 22 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <motion.rect
              key={`tower-${row}-${col}`}
              x={350 + col * 24}
              y={160 + row * 26}
              width="14"
              height="14"
              stroke="url(#ink)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() > 0.7 ? 0.9 : 0.35 }}
              transition={{ duration: 0.6, delay: 1.5 + row * 0.04 + col * 0.02 }}
            />
          ))
        )}

        {/* Shorter mid building */}
        <motion.path
          d="M 200 320 L 200 760 L 330 760 L 330 360 Z"
          stroke="url(#ink)"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
        {Array.from({ length: 14 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <motion.rect
              key={`mid-${row}-${col}`}
              x={210 + col * 28}
              y={340 + row * 30}
              width="18"
              height="18"
              stroke="url(#ink)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() > 0.65 ? 0.85 : 0.25 }}
              transition={{ duration: 0.6, delay: 1.8 + row * 0.05 + col * 0.02 }}
            />
          ))
        )}

        {/* Far short building */}
        <motion.path
          d="M 80 450 L 80 760 L 190 760 L 190 480 Z"
          stroke="url(#ink)"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 3 }).map((_, col) => (
            <motion.rect
              key={`far-${row}-${col}`}
              x={92 + col * 32}
              y={460 + row * 32}
              width="22"
              height="20"
              stroke="url(#ink)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() > 0.6 ? 0.7 : 0.2 }}
              transition={{ duration: 0.6, delay: 2.2 + row * 0.05 + col * 0.02 }}
            />
          ))
        )}

        {/* Red accent — central tall spine */}
        <motion.line
          x1="405"
          y1="130"
          x2="405"
          y2="760"
          stroke="url(#accent)"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Red marker dots */}
        {[180, 280, 420, 560].map((y, i) => (
          <motion.circle
            key={i}
            cx="405"
            cy={y}
            r="4"
            fill="#bb1c1c"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 + i * 0.15, ease: "backOut" }}
          />
        ))}

        {/* Ground line */}
        <motion.line
          x1="40"
          y1="760"
          x2="540"
          y2="760"
          stroke="#04036b"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </g>
    </svg>
  );
}
