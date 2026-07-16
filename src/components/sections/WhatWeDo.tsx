import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";

const pillars = [
  {
    title: "Privileged Access",
    body: "Sourcing through long-standing developer and partner relationships across India.",
  },
  {
    title: "Select, Then Structure",
    body: "Underwriting precedes capital. Only opportunities that clear a high bar move forward.",
  },
  {
    title: "Designed Around the Deal",
    body: "Structures tailored to asset risk, investor preference, and exit path — not a template.",
  },
  {
    title: "Hands-On Execution",
    body: "Operational involvement from diligence through construction, leasing, and exit.",
  },
  {
    title: "Structured for Exit",
    body: "Multiple liquidity pathways defined before capital is committed.",
  },
  {
    title: "Ring-Fenced, Deal by Deal",
    body: "Investors see — and choose — what they own, with deal-level reporting.",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="How we invest"
          title="Select. Structure. Deliver."
          description="Landmark Capital originates and structures select real estate opportunities with a focus on risk, governance, and aligned outcomes for sophisticated investors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <span className="text-xs font-mono text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-charcoal mt-3 mb-3">{p.title}</h3>
              <p className="text-slate leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            to="/strategies"
            className="inline-block mt-14 text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
          >
            View investment strategies
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
