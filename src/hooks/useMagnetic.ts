import { useEffect, useRef } from "react";

export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let dx = 0;
    let dy = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      tx = (e.clientX - cx) * strength;
      ty = (e.clientY - cy) * strength;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    const tick = () => {
      dx += (tx - dx) * 0.18;
      dy += (ty - dy) * 0.18;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
