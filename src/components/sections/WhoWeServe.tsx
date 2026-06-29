import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { useTilt } from "@/hooks/useTilt";

const segments = [
  {
    title: "Indian Investors",
    body:
      "Family offices, ultra-high-net-worth individuals, corporates, institutions, and investment managers seeking curated access to India's real estate opportunities through SEBI-regulated AIFs, managed accounts, and bespoke investment structures.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path d="M32 8 L52 24 L48 56 L16 56 L12 24 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 8 L32 56" stroke="currentColor" strokeWidth="1" />
        <path d="M12 24 L52 24" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="36" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Global Investors",
    body:
      "Global family offices, principal investors, business owners, institutional allocators, and offshore capital — including the Indian diaspora, Middle Eastern, and Asian investors — looking for disciplined exposure to India's real estate markets. We provide end-to-end structuring, FEMA compliance, tax-efficient execution, and ongoing investment management.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="32" cy="32" rx="12" ry="24" stroke="currentColor" strokeWidth="1" />
        <path d="M8 32 L56 32" stroke="currentColor" strokeWidth="1" />
        <circle cx="44" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Strategic Partners",
    body:
      "Developers, asset owners, corporates, co-investors, and institutional partners collaborating with us on club deals, joint ventures, platform investments, and balance-sheet partnerships. We seek long-term relationships built on aligned capital, execution certainty, and shared value creation.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
        <path d="M20 32 L32 24 L44 32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 40 L32 28 L50 40" stroke="currentColor" strokeWidth="1" />
        <rect x="14" y="40" width="36" height="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 56 L26 46 M38 56 L38 46" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

export function WhoWeServe() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 bg-navy-500 text-paper overflow-hidden"
    >
      <div className="absolute inset-0 grid-backdrop opacity-[0.04]" />

      {/* Drifting ambient glow that follows the page scroll */}
      <motion.div
        aria-hidden
        style={{ left: glowX, top: glowY }}
        className="absolute w-[60vw] h-[60vw] rounded-full bg-red-500/[0.18] blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container-tb relative">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <p className="eyebrow mb-6 text-red-300">Who We Serve</p>
            <h2 className="display-2 text-paper text-balance">
              Capital from everywhere.
              <br />
              <span className="italic font-light text-red-300">Invested in India.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <SegmentCard key={s.title} segment={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentCard({
  segment,
  index,
}: {
  segment: (typeof segments)[number];
  index: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 7, scale: 1.012, glare: true });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={tiltRef}
        className="group relative p-10 lg:p-12 border border-white/15 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/40 transition-[background-color,border-color] duration-700 overflow-hidden h-full"
      >
        <div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-red-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          aria-hidden
        />
        <div className="relative">
          <div className="text-red-300 mb-8">{segment.icon}</div>
          <h3 className="font-display text-3xl text-paper mb-6">{segment.title}</h3>
          <p className="text-sm leading-relaxed text-paper/65">{segment.body}</p>
        </div>
      </div>
    </motion.article>
  );
}
