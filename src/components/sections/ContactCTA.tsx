import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#f3eee5", "#f7e7d8", "#f9dccc", "#fbd0bf"]
  );
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.4]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);
  const ctaMagnet = useMagnetic<HTMLAnchorElement>(0.35);

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="relative py-32 lg:py-44 overflow-hidden"
    >
      {/* Expanding ring backdrop */}
      <motion.div
        aria-hidden
        style={{ scale: ringScale, opacity: ringOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full border border-red-500/40 pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ scale: ringScale, opacity: ringOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vmin] h-[55vmin] rounded-full border border-navy-500/30 pointer-events-none"
      />

      <div className="container-tb relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">Get in Touch</p>
              <h2 className="display-1 text-balance">
                Let's talk about the
                <br />
                <span className="italic font-light">right opportunity.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <Link
                ref={ctaMagnet}
                to="/contact"
                className="group inline-flex items-center gap-4 text-navy-500 will-change-transform"
              >
                <span className="grid place-items-center w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-navy-500 text-paper transition-all duration-700 group-hover:bg-red-500 group-hover:scale-110">
                  <ArrowUpRight size={28} className="transition-transform duration-700 group-hover:rotate-45" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted">Contact</span>
                  <span className="font-display text-2xl">TridentBay</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule rounded-3xl overflow-hidden">
          <InfoBlock
            label="Office"
            content={["63, 6th Floor, Maker Tower \"F\"", "Cuffe Parade, Mumbai 400 005"]}
          />
          <InfoBlock label="Phone" content={["—"]} />
          <InfoBlock label="Email" content={["contact@tridentbay.in"]} />
        </div>
      </div>
    </motion.section>
  );
}

function InfoBlock({ label, content }: { label: string; content: string[] }) {
  return (
    <div className="p-8 lg:p-10 bg-paper">
      <p className="text-[10px] uppercase tracking-[0.22em] text-red-500 mb-4">{label}</p>
      {content.map((line, i) => (
        <p key={i} className="text-sm text-navy-500 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  );
}
