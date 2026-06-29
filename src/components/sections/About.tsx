import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "@/components/common/Reveal";
import { useTilt } from "@/hooks/useTilt";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yearY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yearScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 1.02]);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-paper overflow-hidden">
      <div className="container-tb relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — big year/figure */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: yearY, scale: yearScale }}
              className="sticky top-32"
            >
              <p className="eyebrow mb-8">About Us</p>
              <div className="relative">
                <span className="block font-display font-light text-navy-500 leading-none text-[clamp(8rem,18vw,18rem)] tracking-tighter">
                  30
                </span>
                <span className="absolute -bottom-2 left-2 text-sm uppercase tracking-[0.3em] text-red-500">
                  + Years
                </span>
                {/* Decorative animated ring around the 30 */}
                <motion.svg
                  className="absolute -top-4 -right-4 w-32 h-32 pointer-events-none"
                  viewBox="0 0 100 100"
                  fill="none"
                  aria-hidden
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#bb1c1c"
                    strokeWidth="0.5"
                    strokeDasharray="2 4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                  />
                </motion.svg>
              </div>
              <p className="mt-12 text-sm uppercase tracking-[0.22em] text-muted max-w-xs">
                One discipline. Refined through every cycle.
              </p>
            </motion.div>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display-2 text-balance">
                <RevealText text="One discipline," />
                <br />
                <span className="italic font-light">
                  <RevealText text="for more than 30 years." delay={0.2} />
                </span>
              </h2>
            </Reveal>

            <div className="mt-12 space-y-7 text-lg leading-relaxed text-ink-soft max-w-2xl">
              <Reveal delay={0.1}>
                <p>
                  Real estate is what we have done for more than three decades. Through every
                  cycle of growth and recession, we have refined the same craft — becoming more
                  precise, more disciplined, and more effective with time.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Over the years, that discipline has taken different forms — portfolio
                  management services, our two SEBI-registered Category II AIFs, and a number of
                  exclusive, deal-level transactions structured directly with family offices.
                  <span className="text-navy-500 font-medium"> The vehicle has changed. The discipline has not.</span>
                </p>
              </Reveal>
            </div>

            {/* Fund cards */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Reveal delay={0.2}>
                <FundChip
                  title="Multiplier Fund"
                  status="Open"
                  reg="IN/AIF2/21-22/0928"
                  category="Category II AIF"
                  highlight
                />
              </Reveal>
              <Reveal delay={0.3}>
                <FundChip
                  title="Opportunity Fund"
                  status="Closed"
                  reg="IN/AIF2/13-14/0068"
                  category="Category II AIF"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FundChip({
  title,
  status,
  reg,
  category,
  highlight,
}: {
  title: string;
  status: string;
  reg: string;
  category: string;
  highlight?: boolean;
}) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, scale: 1.015, glare: false });
  return (
    <div
      ref={tiltRef}
      className={`group relative p-6 rounded-3xl border transition-[border-color,background-color] duration-500 ${
        highlight
          ? "border-red-500/20 bg-red-50/40 hover:border-red-500/40"
          : "border-rule bg-mist/60 hover:border-navy-500/30"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted">{category}</p>
          <h3 className="display-3 mt-2 text-navy-500">{title}</h3>
        </div>
        <span
          className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
            highlight ? "bg-red-500 text-white" : "bg-navy-500/10 text-navy-500"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="mt-4 text-xs font-mono text-muted">{reg}</p>
    </div>
  );
}
