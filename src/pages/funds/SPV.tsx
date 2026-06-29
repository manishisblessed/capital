import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";

const why = [
  {
    title: "Deal-Wise Capital & Structuring",
    body: "No blind pools — capital is deployed per transaction via standalone SPVs, JVs, or Trusts tailored to each asset.",
  },
  {
    title: "Flexible Commitment Sizes",
    body: "Invest at scales that suit you — from mid-sized opportunities to marquee projects — without arbitrary ticket-size floors.",
  },
  {
    title: "Proactive Origination",
    body: "Off-market, megatrend-aligned assets (logistics, data centres, green housing, etc.).",
  },
  {
    title: "Agile Liquidity & Exit Planning",
    body: "Clearly defined hold periods, pre-set exit windows, and transparent pathways ensure timely liquidity.",
  },
  {
    title: "Better Risk Management",
    body: "Investor has better appreciation of risk when investing in a deal compared to a blind pool.",
  },
  {
    title: "Profit-Sharing Alignment",
    body: "Zero upfront fees — our managers earn only when a deal closes profitably for you.",
  },
  {
    title: "Rigorous, Hands-On Management",
    body: "End-to-end due diligence (title, technical, commercial, ESG) plus active asset oversight and value creation.",
  },
  {
    title: "Full Transparency",
    body: "Deal-level P&L statements, real-time dashboards, and bespoke reporting keep you informed at every stage.",
  },
  {
    title: "Tactical Agility",
    body: "Quickly capitalize on emerging themes.",
  },
];

const routes = [
  {
    title: "LVF (AIF Category II)",
    chip: "For Larger Ticket Size",
    body: "Investors commit capital into a SEBI-regulated Alternative Investment Fund. The fund subsequently invests into project-level Special Purpose Vehicles, maintaining regulatory compliance and pass-through status.",
    bullets: [
      "SEBI-regulated pathway for Accredited Investors, UHNIs, Multi-Family Offices, and global capital",
      "Investments made through an SPV",
      "Equity positions taken by TridentBay in each structure",
      "Large Ticket Size > ₹25 Cr",
      "Tenure 3 to 4 years",
      "Suitable for HNIs, Family Offices, Institutions",
    ],
  },
  {
    title: "AI Only Fund",
    chip: "For Flexible Ticket Size",
    body: "AIF exclusively for Accredited Investors with relaxed norms and flexible private market structuring.",
    bullets: [
      "SEBI-regulated AIF exclusively for Accredited Investors with relaxed regulatory norms",
      "Investments made through SPVs",
      "Flexible ticket size (no ₹25 Cr minimum like LVF)",
      "Structured capital deployment with customized return frameworks",
      "Tenure 3 to 4 years",
      "Suitable for Sophisticated HNIs, Emerging UHNIs, and Family Offices",
    ],
  },
  {
    title: "Direct SPV Route",
    chip: "For Customised Solutions",
    body: "Investors receive direct allotment of investment instrument in deal-specific SPVs, creating a more direct investment relationship.",
    bullets: [
      "Investors participate through an SPV created for each deal",
      "Pre-defined returns, security structure, and tenure (3 to 4 years)",
      "Customised to investor's risk profile and return expectations",
    ],
  },
];

export default function SPV() {
  return (
    <>
      <PageHero
        eyebrow="Direct SPV Route"
        title={
          <>
            <span className="block">Deal-by-deal,</span>
            <span className="italic font-light block">never blind pools.</span>
          </>
        }
        subtitle="TridentBay operates a deal-by-deal, client-aligned investment model that empowers sophisticated investors to select opportunities precisely matching their risk profile, return expectations, liquidity requirements, and thematic preferences."
      />

      {/* Three routes */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Three Routes To Participate</p>
            <h2 className="display-2 mb-20 text-balance">
              Choose the structure
              <br />
              <span className="italic font-light">that fits your mandate.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {routes.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col p-10 bg-cream rounded-3xl border border-rule hover:border-red-500/40 hover:bg-paper transition-all duration-500 relative overflow-hidden"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] text-red-500 mb-6">
                  {r.chip}
                </span>
                <h3 className="font-display text-3xl text-navy-500 mb-6">{r.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-8">{r.body}</p>
                <div className="rule mb-6" />
                <ul className="space-y-3 mt-auto">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="text-red-500 mt-1 shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why deal-by-deal works */}
      <section className="py-28 lg:py-36 bg-navy-500 text-paper">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-red-300 mb-6">Why Deal-by-Deal Works</p>
                <h2 className="display-2 text-paper text-balance">
                  Flexible. Transparent.
                  <br />
                  <span className="italic font-light text-red-300">Aligned.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-paper/75">
                  Each transaction is executed through a dedicated SPV — ensuring no cross-deal
                  exposure — backed by rigorous diligence and hands-on asset oversight. Flexible
                  commitment sizes, off-market origination, structured security, clearly defined
                  hold periods, and zero upfront fees. Profit participation occurs only when
                  investors profit.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {why.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-navy-500 p-8 lg:p-10 hover:bg-navy-600 transition-colors duration-500"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-red-300 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl text-paper mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-paper/65">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
