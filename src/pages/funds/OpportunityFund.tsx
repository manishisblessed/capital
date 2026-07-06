import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";

const highlights = [
  { label: "Total Investments", value: "4", note: "In Warehousing, Residential and Student Housing" },
  { label: "Fund Tenure", value: "5 yrs", note: "(1 + 1 year extension)" },
  { label: "Targeted Gross IRR", value: "16–18%", note: "Per annum" },
  { label: "Carried Interest", value: "10%", note: "Per annum (without catch up)" },
];

export default function OpportunityFund() {
  return (
    <>
      <PageHero
        eyebrow="Opportunity Fund — Closed"
        title={
          <>
            <span className="block">The first vehicle.</span>
            <span className="italic font-light block">Closed for subscription.</span>
          </>
        }
        subtitle="A Category II AIF set up under the Indian Trust Act, 1882 and registered with SEBI under the Alternative Investment Funds Regulations, 2012."
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-navy-500 text-paper text-[10px] uppercase tracking-[0.2em]">
            Closed
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 text-paper text-[10px] uppercase tracking-[0.2em] font-mono">
            IN/AIF2/13-14/0068
          </span>
        </div>
      </PageHero>

      {/* Legal structure */}
      <section className="py-28 lg:py-36 bg-canvas-2">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-6">Legal Structure</p>
                <h2 className="display-3 text-balance">
                  Trust-based, <span className="italic font-light">SEBI-regulated.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.15}>
                <div className="bg-canvas border border-white/10 rounded-3xl p-10 lg:p-14">
                  <p className="text-base lg:text-lg leading-relaxed text-paper/75">
                    The fund is a scheme floated by the trust, set up under the Indian Trust Act,
                    1882 and registered with the Securities and Exchange Board of India (SEBI)
                    under the Alternative Investment Funds Regulations, 2012 as a{" "}
                    <span className="text-paper font-medium">Category II Alternative Investment Fund</span>.
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-paper/75 mt-6">
                    IL&FS Trust Company Limited shall act as the Trustee to the Fund.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Fund highlights */}
      <section className="py-28 lg:py-36 bg-canvas">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Fund Highlights</p>
            <h2 className="display-2 mb-16 text-balance">
              The summary.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-canvas p-10 lg:p-12"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-red-500 mb-6">
                  {h.label}
                </p>
                <p className="font-display text-4xl lg:text-5xl text-paper mb-4 leading-none">
                  {h.value}
                </p>
                <p className="text-xs text-paper/50 leading-relaxed">{h.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
