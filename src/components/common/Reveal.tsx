import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.5,
  className,
  once = true,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.04,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    visible: {
      transition: reduce
        ? { duration: 0 }
        : { delayChildren: delay, staggerChildren },
    },
  };
  const word: Variants = {
    hidden: reduce ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="reveal-mask">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
