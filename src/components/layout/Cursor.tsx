import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    setEnabled(true);

    const el = cursorRef.current;
    if (!el) return;

    let mx = -100,
      my = -100;
    let cx = -100,
      cy = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const interactiveSelector = "a, button, [data-cursor='link'], input, textarea, select, label";

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest?.(interactiveSelector)) {
        el.classList.add("is-link");
      } else {
        el.classList.remove("is-link");
      }
    };

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return <div ref={cursorRef} className="custom-cursor" aria-hidden />;
}
