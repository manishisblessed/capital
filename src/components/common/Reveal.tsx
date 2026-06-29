import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: keyof typeof motion;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  once = true,
  ...rest
}: Props) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Splits a string into words and reveals each one with a stagger.
 * Good for hero headlines.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren },
    },
  };
  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
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
