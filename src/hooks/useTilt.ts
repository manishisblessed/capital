import { useEffect, useRef } from "react";

type Options = {
  /** Max tilt in degrees on each axis */
  max?: number;
  /** Inner scale on hover */
  scale?: number;
  /** Smoothing factor (0-1, higher = snappier) */
  ease?: number;
  /** Perspective in px */
  perspective?: number;
  /** Glare highlight on hover */
  glare?: boolean;
};

/**
 * 3D mouse-tracking card tilt with subtle smoothing and optional glare.
 * Respects prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({
  max = 8,
  scale = 1.015,
  ease = 0.12,
  perspective = 900,
  glare = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !finePointer) return;

    el.style.transformStyle = "preserve-3d";
    el.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

    // Glare layer
    let glareEl: HTMLDivElement | null = null;
    if (glare) {
      glareEl = document.createElement("div");
      glareEl.style.cssText = `
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
        background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.16), transparent 60%);
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1;
        mix-blend-mode: overlay;
      `;
      if (getComputedStyle(el).position === "static") {
        el.style.position = "relative";
      }
      el.appendChild(glareEl);
    }

    let targetRX = 0;
    let targetRY = 0;
    let targetScale = 1;
    let rx = 0;
    let ry = 0;
    let s = 1;
    let raf = 0;
    let inside = false;

    const apply = () => {
      rx += (targetRX - rx) * ease;
      ry += (targetRY - ry) * ease;
      s += (targetScale - s) * ease;
      el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`;
      if (Math.abs(targetRX - rx) > 0.01 || Math.abs(targetRY - ry) > 0.01 || Math.abs(targetScale - s) > 0.001) {
        raf = requestAnimationFrame(apply);
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      targetRY = (x - 0.5) * 2 * max;
      targetRX = (0.5 - y) * 2 * max;
      if (glareEl) {
        glareEl.style.setProperty("--gx", `${x * 100}%`);
        glareEl.style.setProperty("--gy", `${y * 100}%`);
      }
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onEnter = () => {
      inside = true;
      targetScale = scale;
      el.style.transition = "none";
      if (glareEl) glareEl.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      inside = false;
      targetRX = 0;
      targetRY = 0;
      targetScale = 1;
      el.style.transition = "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
      if (glareEl) glareEl.style.opacity = "0";
      if (!raf) raf = requestAnimationFrame(apply);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      if (glareEl && glareEl.parentNode) glareEl.parentNode.removeChild(glareEl);
      el.style.transform = "";
      el.style.transition = "";
      el.style.transformStyle = "";
      void inside; // keep variable referenced
    };
  }, [max, scale, ease, perspective, glare]);

  return ref;
}
