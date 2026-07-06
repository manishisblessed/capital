import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollVelocityText } from "@/components/common/ScrollVelocityText";

/**
 * Editorial scroll-velocity moment between sections.
 * Two lines of giant editorial text drift in opposite directions,
 * accelerating with scroll velocity. A pinned breath between heavy sections.
 */
export function ScrollMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-44 bg-canvas overflow-hidden noise-overlay"
      aria-hidden="true"
    >
      {/* Top hairline */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute top-0 left-0 right-0 h-px bg-white/10 origin-left"
      />

      {/* Two opposing scroll-velocity lines */}
      <motion.div style={{ rotate }} className="will-change-transform">
        <ScrollVelocityText
          text="Patient capital · Selected deals · Built for India · "
          baseVelocity={-2}
          className="font-display font-light text-[clamp(4rem,12vw,12rem)] leading-[1] text-paper tracking-tighter"
        />
        <div className="h-4 lg:h-8" />
        <ScrollVelocityText
          text="Underwrite · Structure · Execute · Exit · "
          baseVelocity={3}
          className="font-display italic font-light text-[clamp(3rem,10vw,10rem)] leading-[1] text-red-400/90 tracking-tighter"
        />
      </motion.div>

      {/* Bottom hairline */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-right"
      />
    </section>
  );
}
