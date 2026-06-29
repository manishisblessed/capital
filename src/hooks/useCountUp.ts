import { useEffect, useRef, useState } from "react";

export function useCountUp({
  target,
  duration = 1800,
  decimals = 0,
  start = false,
}: {
  target: number;
  duration?: number;
  decimals?: number;
  start?: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }

    const begin = performance.now();

    const tick = (now: number) => {
      const elapsed = now - begin;
      const t = Math.min(1, elapsed / duration);
      // ease-out-expo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(target * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  const formatted = value.toLocaleString("en-IN", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return formatted;
}
