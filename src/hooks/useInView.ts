import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element = HTMLDivElement>(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) observer.unobserve(entry.target);
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
