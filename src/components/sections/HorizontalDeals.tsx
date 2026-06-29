import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/hooks/useGsap";
import { useTilt } from "@/hooks/useTilt";
import { Reveal } from "@/components/common/Reveal";
import { completedDeals } from "@/data/deals";

/**
 * Pinned horizontal-scroll section — the user scrolls vertically,
 * the deal cards slide horizontally beneath. Premium signature effect.
 */
export function HorizontalDeals() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !isDesktop) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth + 96;
      gsap.to(track, {
        x: () => -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + 200}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance + 200}`,
            scrub: 0.6,
          },
        });
      }
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper overflow-hidden lg:h-[100svh]"
      aria-label="Selective deals completed"
    >
      {/* Header (visible on first frame of pin) */}
      <div className="container-tb pt-24 lg:pt-32 lg:absolute lg:top-0 lg:left-0 lg:right-0 z-10 pointer-events-none">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <p className="eyebrow mb-4">Track Record</p>
            <h3 className="display-3 max-w-xl">
              Selective deals,
              <br />
              <span className="italic font-light">decisively closed.</span>
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.22em] text-muted max-w-sm hidden lg:block">
              Scroll to traverse. {completedDeals.length} representative exits across asset classes & cities.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Horizontal track */}
      <div className="relative lg:h-full flex lg:items-center">
        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-10 px-6 lg:pl-24 lg:pr-24 pt-12 pb-24 lg:pt-24 lg:pb-0 will-change-transform overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none"
        >
          {completedDeals.map((deal, i) => (
            <DealCard key={deal.id} deal={deal} index={i} />
          ))}
          {/* End card */}
          <EndCard total={completedDeals.length} />
        </div>
      </div>

      {/* Progress rail */}
      <div className="hidden lg:flex absolute bottom-10 left-24 right-24 items-center gap-6 z-10">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted">Scroll</span>
        <div className="flex-1 h-px bg-rule relative overflow-hidden">
          <div
            ref={progressRef}
            className="absolute inset-0 bg-red-500 origin-left scale-x-0"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted">End</span>
      </div>
    </section>
  );
}

function DealCard({
  deal,
  index,
}: {
  deal: (typeof completedDeals)[number];
  index: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, scale: 1.01, glare: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[420px] xl:w-[460px]"
    >
      <div
        ref={tiltRef}
        className="relative h-[440px] lg:h-[500px] p-10 lg:p-12 rounded-3xl border border-rule bg-cream overflow-hidden flex flex-col justify-between"
      >
        {/* Background numeral */}
        <span
          className="absolute -bottom-12 -right-6 font-display font-light text-[14rem] leading-none text-navy-500/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Decorative diagonal lines */}
        <svg
          className="absolute top-6 right-6 opacity-30 pointer-events-none"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          aria-hidden
        >
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={i * 15}
              y1={60}
              x2={60}
              y2={i * 15}
              stroke="#bb1c1c"
              strokeWidth="0.6"
              opacity={0.5}
            />
          ))}
        </svg>

        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] uppercase tracking-[0.28em] text-red-500">
              {deal.category}
            </span>
            <span className="h-px w-8 bg-rule" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
              {deal.city}
            </span>
          </div>
          <h4 className="font-display text-4xl lg:text-5xl text-navy-500 leading-[1.05] mb-2">
            {deal.name}
          </h4>
        </div>

        <div className="relative grid grid-cols-2 gap-6 pt-8 border-t border-rule">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted mb-2">
              Investment
            </p>
            <p className="font-display text-2xl text-navy-500">{deal.investment}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted mb-2">
              Exit IRR
            </p>
            <p className="font-display text-2xl text-red-500">{deal.exitIRR}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EndCard({ total }: { total: number }) {
  return (
    <div className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[420px] xl:w-[460px]">
      <div className="relative h-[440px] lg:h-[500px] p-10 lg:p-12 rounded-3xl bg-navy-500 text-paper overflow-hidden flex flex-col justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-red-300 mb-6">
            And many more
          </p>
          <h4 className="font-display text-4xl lg:text-5xl leading-[1.05]">
            {total}+ representative exits.
            <span className="block italic font-light text-red-300 mt-2">
              Many never publicised.
            </span>
          </h4>
        </div>
        <p className="text-sm text-paper/70 leading-relaxed">
          A career-long record of disciplined deal-making across India's twelve key real estate markets.
        </p>
      </div>
    </div>
  );
}
