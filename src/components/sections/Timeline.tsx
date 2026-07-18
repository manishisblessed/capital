import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { timeline } from "@/data/timeline";

/**
 * Editorial vertical timeline — "From Foundation to Future".
 *
 * Layout: a single continuous rule runs the height of the section.
 * Each milestone is a two-column row — year on the left, insight card
 * on the right — anchored to the rule with a filled dot marker.
 */
export function Timeline() {
  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <SectionHeader
          eyebrow="Our journey"
          title={
            <>
              From Foundation <em className="font-display italic text-crimson-500">to</em> Future.
            </>
          }
          description="A record of disciplined thinking through every market cycle — the milestones that shaped Landmark Capital's platform, published research and portfolio."
          accent="bronze"
        />

        <div
          className="relative mt-4 md:mt-8 pl-8 md:pl-16 border-l border-border/80"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 4%, color-mix(in oklab, var(--color-bronze) 45%, transparent) 8%, color-mix(in oklab, var(--color-bronze) 45%, transparent) 92%, transparent 96%) left / 1px 100% no-repeat",
          }}
        >
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.04}>
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14">
                <span
                  className="absolute -left-[calc(2rem+7px)] md:-left-[calc(4rem+7px)] top-[3.25rem] md:top-[3.75rem] w-3.5 h-3.5 rounded-full bg-charcoal ring-4 ring-stone"
                  aria-hidden
                />

                <div className="md:col-span-3 flex md:justify-start">
                  <span className="font-display italic text-4xl md:text-5xl lg:text-6xl text-charcoal leading-none tabular-nums tracking-tight">
                    {item.year}
                  </span>
                </div>

                <div className="md:col-span-9">
                  <div className="bg-paper border border-border rounded-[12px] p-6 md:p-8 lg:p-10 transition-shadow duration-300 hover:shadow-[0_18px_50px_-30px_rgba(36,41,47,0.35)]">
                    <h3 className="font-display text-xl md:text-2xl lg:text-[1.75rem] text-charcoal leading-snug text-balance">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-slate leading-relaxed max-w-2xl">{item.body}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-bronze" aria-hidden />
                      <span className="text-[0.7rem] uppercase tracking-[0.18em] text-bronze font-medium">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
