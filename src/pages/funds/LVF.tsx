import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo, financialProductJsonLd } from "@/components/common/Seo";

const advantages = [
  {
    title: "Accredited Investor Gateway",
    body: "Annual income ≥ ₹2 Cr or net worth ≥ ₹7.5 Cr (minimum 50% in financial assets).",
  },
  {
    title: "Reduced Entry Threshold",
    body: "Minimum investment lowered from ₹70 Cr to ₹25 Cr per investor (2025 reform).",
  },
  {
    title: "Enhanced Concentration Limits",
    body: "Deploy up to 50% in a single company versus the 25% standard AIF limit.",
  },
  {
    title: "Flexible Tenure Structure",
    body: "Extension capped at 5 years with two-thirds investor approval.",
  },
];

export default function LVF() {
  return (
    <>
      <Seo
        title="Large Value Fund"
        description="A SEBI framework for sophisticated investors seeking concentrated private-market exposures with defined eligibility and governance."
        jsonLd={financialProductJsonLd({
          name: "Landmark Large Value Fund",
          description:
            "SEBI-regulated Large Value Fund for accredited investors — concentrated allocations with regulatory clarity.",
          category: "Category II Alternative Investment Fund — Large Value Fund",
          path: "/strategies/lvf",
        })}
      />
      <PageHero
        eyebrow="Large Value Fund"
        title="Concentrated allocations with regulatory clarity."
        subtitle="Large Value Funds provide a SEBI framework for sophisticated investors seeking concentrated private-market exposures with defined eligibility and governance."
      />

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Regulatory framework</p>
            <h2 className="display-2 mb-14 text-balance">
              Flexibility with investor protection.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-border pt-12">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.04}>
                <span className="text-xs font-mono text-crimson-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-charcoal mt-3 mb-3">{a.title}</h3>
                <p className="text-slate leading-relaxed max-w-md">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-midnight text-white">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-crimson-300 mb-6">Positioning</p>
                <h2 className="display-2 text-white text-balance">
                  Structured for large-ticket allocations.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="text-lg leading-relaxed text-white/75 mb-8">
                  Recent SEBI reforms have positioned LVFs for large-ticket institutional
                  allocations across private equity, real assets, structured credit and complex
                  strategic opportunities.
                </p>
              </Reveal>
              <div className="space-y-0">
                {[
                  "Execute high-conviction theses with concentrated exposures",
                  "Deploy capital efficiently without standard diversification constraints",
                  "Operate with streamlined governance while maintaining transparency obligations",
                ].map((p) => (
                  <Reveal key={p}>
                    <div className="flex items-start gap-4 py-4 border-t border-white/15">
                      <span className="text-crimson-300 mt-1">—</span>
                      <p className="text-base text-white/85">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary">
                  Discuss LVF eligibility
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
