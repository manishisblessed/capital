import { Building2, Globe2, Network } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";

const segments = [
  {
    title: "Indian Investors",
    body: "HNIs, family offices and institutions seeking transparent real estate exposure with deal-level visibility and disciplined underwriting.",
    icon: Building2,
  },
  {
    title: "Global Investors",
    body: "Offshore capital looking for researched access to Indian real estate through SEBI-registered vehicles and aligned local execution.",
    icon: Globe2,
  },
  {
    title: "Strategic Partners",
    body: "Developers and operators who value long-term capital partners with operational involvement from diligence through exit.",
    icon: Network,
  },
];

export function WhoWeServe() {
  return (
    <section className="section-pad surface-stone">
      <div className="container-tb">
        <SectionHeader
          eyebrow="Who we serve"
          title="Capital from everywhere. Invested in India."
          accent="trust"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-border">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="pt-10">
              <Icon as={s.icon} size={24} className="text-slate-blue mb-5" />
              <h3 className="font-display text-2xl text-charcoal mb-4">{s.title}</h3>
              <p className="text-slate leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
