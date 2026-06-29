import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { portfolioStats, trackRecord } from "@/data/stats";
import type { Stat } from "@/data/stats";

export function TrackRecord() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-paper overflow-hidden">
      <div className="container-tb">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Track Record</p>
              <h2 className="display-2 text-balance">
                Built for India.
                <br />
                <span className="italic font-light">By people who know it well.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal delay={0.2}>
              <p className="text-base lg:text-lg text-ink-soft leading-relaxed">
                Grounded in careful underwriting, aligned execution, and long-term value creation.
                Since 2013, we've worked across <em>twelve Indian cities</em> and three core asset
                classes — building a portfolio of over <em>six million square feet</em>.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Portfolio scale */}
        <div className="relative">
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute top-0 left-0 right-0 h-px bg-red-500 origin-left"
          />
          <h3 className="font-display text-xl text-muted mt-10 mb-12 uppercase tracking-[0.18em]">
            Current Portfolio Scale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {portfolioStats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>

        {/* Team track record */}
        <div className="mt-24">
          <h3 className="font-display text-xl text-muted mb-12 uppercase tracking-[0.18em]">
            Team's Track Record
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {trackRecord.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} variant="dark" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  variant = "light",
}: {
  stat: Stat;
  index: number;
  variant?: "light" | "dark";
}) {
  const { ref, inView } = useInView({ once: true, threshold: 0.4 });
  const formatted = useCountUp({
    target: stat.numericTarget,
    decimals: stat.decimals,
    duration: 2000,
    start: inView,
  });

  const isCurrency = stat.value.startsWith("₹");
  const display = isCurrency
    ? `₹${formatted}`
    : formatted;

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-10 lg:p-12 ${
        variant === "dark" ? "bg-navy-500 text-paper" : "bg-paper"
      }`}
    >
      <div className="flex items-baseline gap-1">
        <span
          className={`font-display font-light text-[clamp(3.5rem,8vw,6rem)] leading-none tabular-nums ${
            variant === "dark" ? "text-paper" : "text-navy-500"
          }`}
        >
          {display}
        </span>
        {stat.suffix && (
          <span
            className={`font-display text-3xl lg:text-4xl ${
              variant === "dark" ? "text-red-300" : "text-red-500"
            }`}
          >
            {stat.suffix}
          </span>
        )}
      </div>
      <p
        className={`mt-6 text-sm uppercase tracking-[0.18em] ${
          variant === "dark" ? "text-paper/70" : "text-navy-500"
        }`}
      >
        {stat.label}
      </p>
      <p
        className={`mt-2 text-xs leading-relaxed max-w-[260px] ${
          variant === "dark" ? "text-paper/50" : "text-muted"
        }`}
      >
        {stat.description}
      </p>
    </motion.div>
  );
}
