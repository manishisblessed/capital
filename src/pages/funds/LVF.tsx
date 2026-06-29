import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";

const advantages = [
  {
    title: "Accredited Investor Gateway",
    body: "Annual income ≥ ₹2 Cr or Net Worth ≥ ₹7.5 Cr (minimum 50% in financial assets).",
  },
  {
    title: "Reduced Entry Threshold",
    body: "Minimum investment lowered from ₹70 Cr to ₹25 Cr per investor (2025 reform).",
  },
  {
    title: "Enhanced Concentration Limits",
    body: "Deploy up to 50% in a single company vs. 25% standard AIF limit.",
  },
  {
    title: "Flexible Tenure Structure",
    body: "Extension capped at 5 years with 2/3rd investor approval requirement.",
  },
];

export default function LVF() {
  return (
    <>
      <PageHero
        eyebrow="Large Value Fund"
        title={
          <>
            <span className="block">Concentrated.</span>
            <span className="italic font-light block">Conviction-led.</span>
          </>
        }
        subtitle="Large Value Funds represent a premium institutional-grade vehicle within India's Alternative Investment Fund ecosystem — engineered for sophisticated investors pursuing concentrated, high-conviction exposures in private markets."
      />

      {/* Advantages */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Regulatory Framework</p>
            <h2 className="display-2 mb-16 text-balance">
              Strategic flexibility,
              <br />
              <span className="italic font-light">robust investor protection.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule rounded-3xl overflow-hidden">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-paper p-10 lg:p-12 hover:bg-cream transition-colors duration-500 relative group"
              >
                <span className="absolute top-6 right-6 font-display text-2xl text-rule group-hover:text-red-500/40 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-navy-500 mb-4 mt-4 max-w-md">
                  {a.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-soft max-w-md">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic positioning */}
      <section className="py-28 lg:py-36 bg-navy-500 text-paper">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-red-300 mb-6">Strategic Positioning</p>
                <h2 className="display-2 text-paper text-balance">
                  The preferred structure
                  <br />
                  <span className="italic font-light text-red-300">for large-ticket allocations.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-paper/75 mb-8">
                  Recent SEBI reforms have deliberately positioned LVFs as the preferred structure
                  for large-ticket institutional allocations across private equity, real assets,
                  structured credit, and complex strategic opportunities.
                </p>
              </Reveal>
              <div className="space-y-4">
                {[
                  "Execute high-conviction investment theses with concentrated exposures",
                  "Deploy capital efficiently without standard diversification constraints",
                  "Operate with streamlined governance whilst maintaining transparency obligations",
                ].map((p, i) => (
                  <Reveal key={p} delay={0.3 + i * 0.1}>
                    <div className="flex items-start gap-4 py-4 border-t border-white/10">
                      <span className="text-red-300 mt-1">—</span>
                      <p className="text-base text-paper/80">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
