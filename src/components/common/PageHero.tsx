import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { RevealText } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  variant?: "light" | "navy";
};

export function PageHero({ eyebrow, title, subtitle, children, variant = "light" }: Props) {
  const isDark = variant === "navy";
  return (
    <section
      className={`relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden ${
        isDark ? "bg-navy-500 text-paper" : "bg-paper"
      }`}
    >
      <div
        className={`absolute inset-0 grid-backdrop ${
          isDark ? "opacity-[0.05]" : "opacity-40"
        }`}
      />
      {/* Decorative line ribbon */}
      <svg
        className="absolute -right-20 top-32 w-[420px] opacity-20 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.line
            key={i}
            x1={0}
            y1={i * 42}
            x2={400}
            y2={i * 42 + 80}
            stroke={isDark ? "#bb1c1c" : "#04036b"}
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 + i * 0.04 }}
          />
        ))}
      </svg>

      <div className="container-tb relative">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`eyebrow mb-8 inline-flex items-center gap-3 ${
              isDark ? "text-red-300" : ""
            }`}
          >
            <span className={`h-px w-10 ${isDark ? "bg-red-300" : "bg-red-500"}`} />
            {eyebrow}
          </motion.p>
        )}

        <h1 className={`display-1 text-balance ${isDark ? "text-paper" : ""}`}>
          {typeof title === "string" ? <RevealText text={title} /> : title}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-8 text-lg lg:text-xl max-w-2xl leading-relaxed ${
              isDark ? "text-paper/75" : "text-ink-soft"
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
