import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { currentDeals } from "@/data/deals";

const principles = [
  {
    title: "Operational Investor",
    body: "Financial commitment with operational involvement. Experience and expertise in defining project-level strategy. Guiding investee companies in critical areas of their business.",
  },
  {
    title: "Underpenetrated Markets",
    body: "Search for potential market opportunities which are globally proven but under-penetrated in India. Continuously exploring opportunities in under-penetrated asset classes.",
  },
  {
    title: "Digitalization",
    body: "Changing technology has created massive shifts in different sectors of the market. Participating in opportunities created by digitalization of the business landscape.",
  },
  {
    title: "Consumption Pattern",
    body: "Constant observation of consumer taste, consumption patterns, and the ever-evolving business landscape. Conjecture of substantial impact on existing asset classes.",
  },
];

const capabilities = [
  {
    title: "Dedicated Acquisition Team",
    body: "Dedicated personnel to solely identify and source quality investments.",
  },
  {
    title: "Geographical Experience",
    body: "Pan-India experience enables us to identify and execute projects across several cities.",
  },
  {
    title: "End-to-End Deal Underwriting",
    body: "Experience across every cycle of real estate enables us to look at investments end-to-end and ensure successful exits.",
  },
  {
    title: "Transaction Structuring",
    body: "Structuring transactions to minimize tax impact and ensure investor's safety.",
  },
  {
    title: "Strong Local Partners",
    body: "Identify strong local partners to handle local issues and ensure smooth execution.",
  },
  {
    title: "In-house Expertise",
    body: "In-house expertise across legal, liaisoning and construction enables us to screen deals extensively.",
  },
];

const investmentProcess = [
  {
    step: "01",
    title: "Deal-by-Deal Investment",
    body: "We present curated opportunities with clear geography focus, sector focus, market cycle alignment, and detailed investment thesis.",
  },
  {
    step: "02",
    title: "Investors Validation for Each Transaction",
    body: "Every deal is presented transparently with full financial, risk, and asset clarity — enabling investors to independently evaluate and approve each transaction before committing.",
  },
  {
    step: "03",
    title: "Direct Insight",
    body: "Tailored structure, full investment visibility, comprehensive due diligence, deal-level performance reporting, zero upfront fees (only success-based profit sharing), and regular progress updates.",
  },
  {
    step: "04",
    title: "Exit Execution",
    body: "Defined exit strategies with multiple pathways — strategic sale, secondary stake sale, refinancing, or asset monetization — ensuring timely liquidity and value maximization.",
  },
];

const pipelineCities = [
  "Delhi/NCR",
  "Ayodhya",
  "Vrindavan",
  "Lucknow",
  "Mumbai",
  "Pune/Karjat",
  "Hyderabad",
  "Bengaluru",
  "Chennai",
];

export default function OurBusiness() {
  return (
    <>
      <PageHero
        eyebrow="Our Business"
        title={
          <>
            <span className="block">Smart opportunities.</span>
            <span className="italic font-light block">Solid execution.</span>
          </>
        }
        subtitle="A SEBI-registered Alternative Investment Fund manager operating two real estate funds and a deal-by-deal transaction platform across India."
      />

      {/* Investment Principles */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">Investment Principles</p>
                <h2 className="display-2 text-balance">
                  Four lenses,
                  <br />
                  <span className="italic font-light">every deal.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule rounded-3xl overflow-hidden">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-paper p-10 lg:p-12 hover:bg-cream transition-colors duration-500"
              >
                <span className="font-display text-5xl text-red-500/30">0{i + 1}</span>
                <h3 className="font-display text-2xl text-navy-500 mt-4 mb-4">{p.title}</h3>
                <p className="text-base leading-relaxed text-ink-soft max-w-md">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">About TridentBay</p>
            <h2 className="display-2 mb-16 text-balance">
              Six things <span className="italic font-light">we do well.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-paper border border-rule rounded-3xl hover:border-red-500/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 grid place-items-center mb-6 group-hover:bg-red-500 transition-colors">
                  <span className="font-display text-lg text-red-500 group-hover:text-paper transition-colors">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl text-navy-500 mb-3">{c.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-28 lg:py-36 bg-navy-500 text-paper">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow text-red-300 mb-6">Investment Process</p>
            <h2 className="display-2 text-paper mb-16 text-balance">
              From sourcing
              <br />
              <span className="italic font-light text-red-300">to exit.</span>
            </h2>
          </Reveal>

          <div className="space-y-px bg-white/10 rounded-3xl overflow-hidden">
            {investmentProcess.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-navy-500 p-8 lg:p-12 hover:bg-navy-600 transition-colors duration-500 grid grid-cols-12 gap-8 items-start"
              >
                <span className="col-span-2 lg:col-span-1 font-display text-3xl lg:text-5xl text-red-300/60 leading-none">
                  {p.step}
                </span>
                <div className="col-span-10 lg:col-span-3">
                  <h3 className="font-display text-2xl lg:text-3xl text-paper">{p.title}</h3>
                </div>
                <p className="col-span-12 lg:col-span-8 text-base leading-relaxed text-paper/70">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Deals */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Current Deals</p>
            <h2 className="display-2 mb-16 text-balance">
              What's live <span className="italic font-light">right now.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDeals.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-cream border border-rule rounded-3xl hover:border-red-500/40 hover:bg-paper transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-red-500">
                    {deal.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Active
                  </span>
                </div>
                <h3 className="font-display text-xl text-navy-500 mb-2">{deal.name}</h3>
                <p className="text-sm text-muted mb-6">{deal.city}</p>
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-rule">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted mb-1">
                      Land
                    </p>
                    <p className="text-sm font-medium text-navy-500">{deal.landArea}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted mb-1">
                      Development
                    </p>
                    <p className="text-sm font-medium text-navy-500">{deal.developmentArea}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline cities */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">Upcoming Pipeline</p>
                <h2 className="display-2 text-balance">
                  Strategically sourced
                  <br />
                  <span className="italic font-light">across India.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-base lg:text-lg text-ink-soft leading-relaxed max-w-md">
                  On-ground investment opportunities across key growth markets — the cities where
                  India's next decade is being built.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {pipelineCities.map((city, i) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 p-5 bg-paper border border-rule rounded-2xl hover:border-red-500/40 transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                    <span className="font-display text-lg text-navy-500">{city}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
