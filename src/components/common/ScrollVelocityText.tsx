import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
  wrap,
} from "framer-motion";

type Props = {
  text: string;
  baseVelocity?: number;
  className?: string;
};

/**
 * Marquee that drifts at a base velocity, then accelerates/reverses based
 * on scroll direction & velocity. A classic premium-site effect.
 */
export function ScrollVelocityText({
  text,
  baseVelocity = 2,
  className = "",
}: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const directionFactor = useRef(1);

  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <motion.div className="inline-flex" style={{ x }}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
