import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { Seo } from "@/components/common/Seo";
import { Timeline } from "@/components/sections/Timeline";
import { Interviews } from "@/components/sections/Interviews";

const principles = [
  {
    title: "Operational Investor",
    body: "Financial commitment with operational involvement. Experience in defining project-level strategy and guiding investee companies in critical areas of their business.",
  },
  {
    title: "Underpenetrated Markets",
    body: "We seek opportunities that are globally proven but under-penetrated in India, continuously exploring under-served asset classes.",
  },
  {
    title: "Digitalization",
    body: "Technology has created structural shifts across sectors. We participate in opportunities created by the digitalization of the business landscape.",
  },
  {
    title: "Consumption Pattern",
    body: "Constant observation of consumer taste and consumption patterns — and their impact on existing and emerging asset classes.",
  },
];

const capabilities = [
  {
    title: "Dedicated Acquisition Team",
    body: "Personnel focused solely on identifying and sourcing quality investments.",
  },
  {
    title: "Geographical Experience",
    body: "Pan-India experience enables identification and execution across several cities.",
  },
  {
    title: "End-to-End Deal Underwriting",
    body: "Experience across every cycle of real estate — from underwriting through successful exits.",
  },
  {
    title: "Transaction Structuring",
    body: "Structuring transactions to manage tax impact and protect investor interests.",
  },
  {
    title: "Strong Local Partners",
    body: "Local partners selected to handle on-ground issues and ensure smooth execution.",
  },
  {
    title: "In-house Expertise",
    body: "Legal, liaisoning and construction capability to screen deals extensively.",
  },
];

const process = [
  {
    step: "01",
    title: "Deal-by-Deal Investment",
    body: "Curated opportunities with clear geography, sector focus, market-cycle alignment, and a detailed investment thesis.",
  },
  {
    step: "02",
    title: "Investor Validation",
    body: "Every deal is presented with financial, risk, and asset clarity — enabling independent evaluation before commitment.",
  },
  {
    step: "03",
    title: "Direct Insight",
    body: "Tailored structure, full visibility, comprehensive diligence, deal-level reporting, and success-based economics.",
  },
  {
    step: "04",
    title: "Exit Execution",
    body: "Defined exit pathways — strategic sale, secondary sale, refinancing, or asset monetization — for timely liquidity.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="A SEBI-registered Alternative Investment Fund manager operating two real estate funds and a deal-by-deal transaction platform across India."
      />
      <PageHero
        eyebrow="About"
        title="Institutional real estate, built on discipline."
        subtitle="A SEBI-registered Alternative Investment Fund manager operating two real estate funds and a deal-by-deal transaction platform across India."
      />

      <section className="section-pad bg-ivory">
        <div className="container-narrow prose-institutional">
          <Reveal>
            <p className="text-lg lg:text-xl text-slate leading-relaxed">
              Landmark Capital delivers institutional-grade real estate investment and advisory
              solutions built on expertise, transparency and disciplined execution. For more than
              three decades, the firm has refined a single craft through every market cycle.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg text-slate leading-relaxed mt-6">
              Today that craft is expressed through SEBI-registered Category II AIFs and exclusive
              deal-level structures with family offices. The vehicle has changed. The discipline
              has not.
            </p>
          </Reveal>
        </div>
      </section>

      <Timeline />

      <Interviews />

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Investment principles</p>
            <h2 className="display-2 text-balance max-w-2xl mb-14">
              Four lenses applied to every opportunity.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <span className="text-xs font-mono text-crimson-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-charcoal mt-3 mb-3">{p.title}</h3>
                <p className="text-slate leading-relaxed max-w-md">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Capabilities</p>
            <h2 className="display-2 mb-14 text-balance">What the platform delivers.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.03}>
                <h3 className="font-display text-xl text-charcoal mb-3">{c.title}</h3>
                <p className="text-slate leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Process</p>
            <h2 className="display-2 mb-14 text-balance">From thesis to exit.</h2>
          </Reveal>
          <div className="space-y-0 border-t border-border">
            {process.map((step) => (
              <Reveal key={step.step}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border">
                  <span className="md:col-span-2 font-mono text-sm text-crimson-500">
                    {step.step}
                  </span>
                  <h3 className="md:col-span-3 font-display text-xl text-charcoal">
                    {step.title}
                  </h3>
                  <p className="md:col-span-7 text-slate leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <ButtonLink to="/strategies" variant="primary">
              Investment Strategies
            </ButtonLink>
            <ButtonLink to="/opportunities" variant="secondary">
              Current Opportunities
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
