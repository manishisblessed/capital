import { useRef } from "react";
import { Reveal } from "@/components/common/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

const pillars = [
  {
    title: "Privileged Access",
    body: "Many of our opportunities emerge through long-standing relationships, rather than public channels.",
  },
  {
    title: "Select first, structure next.",
    body: "We begin with a compelling opportunity, then build the capital flow around it.",
  },
  {
    title: "Designed Around the Deal",
    body: "We design each deal from first principles, shaped entirely around what the opportunity requires, never from a template.",
  },
  {
    title: "Hands-On from Start to Finish",
    body: "We stay involved in every stage of the opportunity and work closely with each investment, from selection to execution.",
  },
  {
    title: "Structured for Exit",
    body: "Each opportunity enters with a clear hold strategy and a mapped exit plan.",
  },
  {
    title: "Ring-Fenced, Deal by Deal",
    body: "Your capital sits in the deal you chose, not in a shared pool. One transaction's risk never becomes another's problem.",
  },
];

export function WhatWeDo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["-10%", "60%"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 bg-navy-500 text-paper overflow-hidden"
    >
      <div className="absolute inset-0 grid-backdrop opacity-[0.04]" />

      {/* Floating ambient red orb */}
      <motion.div
        aria-hidden
        style={{ y: orbY, scale: orbScale }}
        className="absolute -right-40 top-1/3 w-[40vw] h-[40vw] rounded-full bg-red-500/[0.12] blur-[100px] pointer-events-none"
      />

      <div className="container-tb relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6 text-red-300">What We Do</p>
              <h2 className="display-2 text-paper text-balance">
                Select. <span className="italic font-light text-red-300">Structure.</span> Deliver.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-paper/80 max-w-2xl">
                Landmark Capital originates and structures select real estate opportunities with a
                singular focus on investor alignment and long-term value creation rather than
                predefined fund constraints. Each investment is independently underwritten and
                presented on its own merits, with an emphasis on institutional discipline, robust
                structuring, and consistent long-term value creation.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 mt-12 rounded-3xl overflow-hidden">
          {pillars.map((p, i) => (
            <Pillar key={p.title} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, scale: 1.01, glare: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={tiltRef}
        className="group relative p-10 bg-navy-500 hover:bg-navy-600 transition-colors duration-500 overflow-hidden h-full"
      >
        {/* Number */}
        <span className="absolute top-6 right-6 font-display text-3xl text-paper/15 group-hover:text-red-400/40 transition-colors duration-500">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Hover line */}
        <span className="absolute top-0 left-0 h-px w-0 bg-red-500 group-hover:w-full transition-all duration-700" />

        <h3 className="font-display text-2xl text-paper mb-4 mt-6">{pillar.title}</h3>
        <p className="text-sm leading-relaxed text-paper/65 max-w-xs">{pillar.body}</p>
      </div>
    </motion.div>
  );
}
