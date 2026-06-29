import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "./useLenis";

let registered = false;

function ensureRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Bridges Lenis ↔ GSAP ScrollTrigger so scroll-driven timelines
 * stay perfectly synced with smooth scroll. Idempotent.
 */
export function useGsapWithLenis() {
  useEffect(() => {
    ensureRegistered();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = getLenis();

    // Whenever Lenis emits a scroll, sync ScrollTrigger. This keeps
    // triggers in lock-step with the smooth-scroll position.
    const onScroll = () => ScrollTrigger.update();
    if (lenis) {
      lenis.on("scroll", onScroll);
    }

    // Refresh on resize/route changes
    ScrollTrigger.refresh();

    return () => {
      if (lenis) lenis.off("scroll", onScroll);
    };
  }, []);
}

export { gsap, ScrollTrigger };
