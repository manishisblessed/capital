import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { ArrowUpRight } from "lucide-react";

const differences = [
  {
    title: "Alignment Without Conflicts",
    subtitle: "We ensure our interests and yours sit on the same side of the table.",
    points: [
      "Independent platform, no competing mandates",
      "Our returns come from performance, not asset accumulation",
      "No conflicts that quietly cost you trust",
    ],
  },
  {
    title: "Real Estate Only, End to End",
    subtitle: "We focus exclusively on real estate, across the full lifecycle of a deal.",
    points: [
      "Acquisition through to exit, under one roof",
      "Deep involvement in approvals, execution, and structuring",
      "Experienced operating partners on every asset",
    ],
  },
  {
    title: "Risk Before Velocity",
    subtitle: "We would rather move carefully than move first.",
    points: [
      "Capital preservation guides every decision",
      "Structures designed to protect downside first",
      "No deal is too good to skip proper diligence",
    ],
  },
  {
    title: "Visible Risk, Honest Reporting",
    subtitle: "You see what you own, in plain terms, at every stage.",
    points: [
      "Deal-level reporting, not pooled summaries",
      "Transparent, timely investor communication",
      "Institutional process, without institutional distance",
    ],
  },
  {
    title: "Fewer, Better Decisions",
    subtitle: "Our edge isn't doing more deals. It's choosing the right ones.",
    points: [
      "High bar for underwriting and selection",
      "Focus over volume, every time",
      "A small, experienced team close to every deal",
    ],
  },
  {
    title: "Relationships Built to Last",
    subtitle: "We treat every investor and developer as a long-term partner, not a transaction.",
    points: [
      "Trust earned over years, not one closing",
      "Access built on reputation, not marketing",
      "Shared success, measured honestly",
    ],
  },
];

export function Difference() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 40%"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-canvas-2 overflow-hidden">
      <div className="container-tb">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">The Difference</p>
              <h2 className="display-2 text-balance">
                The <span className="italic font-light">Landmark</span>
                <br />
                way of working.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-6 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-lg text-paper/75 leading-relaxed max-w-2xl">
                Six principles that shape every decision — from how we source deals to how we
                report on them.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Interactive list view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          {/* Vertical scroll-progress rail (left) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/10 pointer-events-none">
            <motion.div
              style={{ height: railHeight }}
              className="w-px bg-red-500 origin-top"
            />
          </div>

          {/* Numbered tabs */}
          <ul className="lg:col-span-5 flex flex-col lg:pl-6">
            {differences.map((d, i) => (
              <li key={d.title}>
                <button
                  onClick={() => setActive(i)}
                  className={`group w-full flex items-start gap-6 py-7 border-b border-white/10 text-left transition-colors duration-500 ${
                    active === i ? "text-paper" : "text-paper/50 hover:text-paper"
                  }`}
                >
                  <span
                    className={`text-xs font-mono tabular-nums pt-2 transition-colors ${
                      active === i ? "text-red-500" : ""
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl lg:text-3xl">{d.title}</span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className={`mt-3 transition-all duration-500 ${
                      active === i ? "rotate-0 text-red-500" : "-rotate-45 text-paper/50"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Detail panel */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16, rotateX: 6 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -8, rotateX: -4 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformPerspective: 1200 }}
                  className="bg-canvas rounded-3xl p-10 lg:p-12 border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
                >
                  <p className="text-2xl lg:text-3xl font-display italic text-paper leading-tight text-balance">
                    "{differences[active].subtitle}"
                  </p>
                  <div className="rule my-10" />
                  <ul className="space-y-5">
                    {differences[active].points.map((point) => (
                      <li key={point} className="flex items-start gap-4">
                        <span className="text-red-500 mt-2 shrink-0">—</span>
                        <span className="text-base lg:text-lg text-paper/75 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
