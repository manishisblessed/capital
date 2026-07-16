import { Reveal } from "@/components/common/Reveal";

export function PinnedManifesto() {
  return (
    <section className="section-pad surface-ivory border-b border-border">
      <div className="container-tb max-w-4xl">
        <Reveal>
          <div className="accent-bar-bronze mb-8" />
          <p className="eyebrow-accent mb-6">Discipline</p>
          <p className="display-2 text-charcoal text-balance">
            We do not chase size. We earn{" "}
            <span className="italic text-slate-blue">outcomes</span> — one carefully structured
            deal at a time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
