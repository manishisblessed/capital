import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const WORDS = [
  "We",
  "don't",
  "chase",
  "size.",
  "We",
  "earn",
  "outcomes —",
  "one",
  "carefully",
  "structured",
  "deal",
  "at",
  "a",
  "time.",
];

/**
 * Scroll-morphing manifesto.
 * Words light up navy → red as the section travels through the viewport.
 * No pin — section is exactly one viewport tall so there's zero dead space.
 */
export function PinnedManifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center py-24 bg-paper overflow-hidden noise-overlay"
    >
      {/* Soft red wash that breathes in / out with scroll */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-red-100/60 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-[50vw] h-[50vw] rounded-full bg-navy-500/[0.06] blur-[120px]" />
      </motion.div>

      <div className="container-tb relative z-10">
        <p className="eyebrow mb-8 lg:mb-12">
          <span className="h-px w-10 bg-red-500 inline-block align-middle mr-3" />
          Our Discipline
        </p>

        <h2 className="display-1 text-balance text-navy-500/15 leading-[1.05] tracking-tight max-w-[1100px]">
          {WORDS.map((word, i) => (
            <Word
              key={i}
              index={i}
              total={WORDS.length}
              scrollYProgress={scrollYProgress}
              word={word}
            />
          ))}
        </h2>
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Animate each word inside the middle band of the section's scroll progress.
  // Section is one viewport tall, so total scroll-through = 2 viewports.
  // Use 0.30 → 0.75 (i.e., while the section is mostly in view).
  const windowStart = 0.3;
  const windowEnd = 0.75;
  const span = windowEnd - windowStart;
  const start = windowStart + (index / total) * span * 0.8;
  const end = start + span * 0.2;
  const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(4, 3, 107, 0.4)", "rgba(4, 3, 107, 1)"]
  );
  const isAccent = word.endsWith("outcomes —") || word.endsWith("time.");
  const accentColor = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(4, 3, 107, 0.4)", "rgba(187, 28, 28, 1)"]
  );

  return (
    <motion.span
      style={{
        opacity,
        color: isAccent ? accentColor : color,
      }}
      className={`inline-block mr-3 lg:mr-4 ${isAccent ? "italic font-light" : ""}`}
    >
      {word}
    </motion.span>
  );
}
