import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";

const whyWarehousing = [
  {
    title: "Favorable Regulatory Landscape",
    body: "Introduction of GST and the National Logistics Policy continues to formalize and accelerate the warehousing sector.",
  },
  {
    title: "E-commerce & 3PL Demand",
    body: "The e-commerce sector has emerged as the most prominent driver of Indian warehousing market volumes alongside 3PL players.",
  },
  {
    title: "Grade A Demand",
    body: "Global best practices driving the changes leading to greater demand for institutional Grade A warehousing.",
  },
  {
    title: "Tier II City Expansion",
    body: "Increase in inventory levels leading to increased demand for space including Tier II cities.",
  },
  {
    title: "Omni-channel Retail",
    body: "Change in technology and demography has led to an increase in consumer expectations, transforming the retail model.",
  },
];

const strategy = [
  {
    title: "Execution and Development",
    body: "Partner at the execution and development stage — mitigating risks of land conversion, aggregation and approvals.",
  },
  {
    title: "Capital Value Creation",
    body: "Enables participation in capital value creation by entering the deal at the right stage.",
  },
  {
    title: "Leasing & Facility Management",
    body: "Value addition through in-house development expertise, leasing and tenant management.",
  },
  {
    title: "Exit Strategy",
    body: "Ensure exit at the right stage through multiple exit strategies.",
  },
];

const highlights = [
  { label: "Tenure", value: "4 years", note: "From 31st January, 2024 (Final Close Date)" },
  { label: "Target Corpus", value: "₹500 Cr", note: "Including ₹200 Cr green shoe option" },
  { label: "Target Returns", value: "18–20%+", note: "Gross IRR" },
  { label: "Investment Size", value: "₹50–75 Cr", note: "Across 6–8 investments" },
];

export default function MultiplierFund() {
  return (
    <>
      <PageHero
        eyebrow="Multiplier Fund — Open"
        title={
          <>
            <span className="block">Built-to-suit</span>
            <span className="italic font-light block">warehousing.</span>
          </>
        }
        subtitle="The fund seeks to invest in high quality, built-to-suit warehouses having strong leasing potential in economic hotspots such as Pune, Delhi, Mumbai, Ahmedabad, and Bangalore."
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-red-500 text-paper text-[10px] uppercase tracking-[0.2em]">
            Open For Subscription
          </span>
          <span className="px-4 py-1.5 rounded-full bg-navy-500/10 text-navy-500 text-[10px] uppercase tracking-[0.2em] font-mono">
            IN/AIF2/21-22/0928
          </span>
        </div>
      </PageHero>

      {/* Why Warehousing */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">Why Warehousing</p>
                <h2 className="display-2 text-balance">
                  Tailwinds aligning <span className="italic font-light">all at once.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule rounded-3xl overflow-hidden">
            {whyWarehousing.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="bg-paper p-10 hover:bg-cream transition-colors duration-500 relative"
              >
                <span className="absolute top-6 right-6 font-display text-2xl text-rule">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-navy-500 mb-4 mt-4 max-w-[200px]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-28 lg:py-36 bg-navy-500 text-paper">
        <div className="container-tb">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-red-300 mb-6">Investment Strategy</p>
                <h2 className="display-2 text-paper text-balance">
                  Four stages,
                  <br />
                  <span className="italic font-light text-red-300">one discipline.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {strategy.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-navy-500 p-10 lg:p-12 hover:bg-navy-600 transition-colors duration-500 relative"
              >
                <span className="font-display text-5xl text-red-300/40">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-paper mt-6 mb-4">{s.title}</h3>
                <p className="text-sm leading-relaxed text-paper/65">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Fund Highlights</p>
            <h2 className="display-2 mb-16 text-balance">
              Numbers, <span className="italic font-light">in summary.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule rounded-3xl overflow-hidden">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-paper p-10 lg:p-12"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-red-500 mb-6">
                  {h.label}
                </p>
                <p className="font-display text-4xl lg:text-5xl text-navy-500 mb-4 leading-none">
                  {h.value}
                </p>
                <p className="text-xs text-muted leading-relaxed">{h.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
