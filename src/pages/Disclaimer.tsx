import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";

const sections = [
  {
    title: "General",
    body: "The information on this website is provided for general informational purposes only. It does not constitute an offer or solicitation to buy, sell, or otherwise deal in any units or securities of any scheme of any Alternative Investment Fund managed by TridentBay Asset Managers.",
  },
  {
    title: "Regulatory Status",
    body: "TridentBay manages two SEBI-registered Category II Alternative Investment Funds — the Multiplier Fund (IN/AIF2/21-22/0928) and the Opportunity Fund (IN/AIF2/13-14/0068). Any investment in these schemes is subject to the terms of the Private Placement Memorandum and Contribution Agreement.",
  },
  {
    title: "Investment Risk",
    body: "Investments in Alternative Investment Funds carry inherent risks. Past performance is not indicative of future results. Investors should carefully read the offering documents and consult their own legal, tax, and financial advisors before making any investment decision.",
  },
  {
    title: "Forward-Looking Statements",
    body: "Some statements on this website may constitute forward-looking statements. Actual results may differ materially from those projected. TridentBay disclaims any obligation to update or revise such statements.",
  },
  {
    title: "Third-Party Content",
    body: "Where this website links to external websites or includes third-party content, TridentBay is not responsible for the accuracy, completeness, or content of such external sources.",
  },
  {
    title: "Investor Grievance",
    body: "For grievances or disputes related to TridentBay funds, investors may approach the SmartODR Portal — the SEBI-mandated online dispute resolution platform — accessible from the footer of this website.",
  },
];

export default function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            <span className="block">Disclaimer.</span>
          </>
        }
        subtitle="Important regulatory and legal information regarding our funds, investments, and the use of this website."
      />

      <section className="py-20 lg:py-28 bg-paper">
        <div className="container-narrow">
          <div className="space-y-16">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs text-muted tabular-nums pt-2 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="display-3 text-navy-500 mb-4">{s.title}</h2>
                    <p className="text-base lg:text-lg text-ink-soft leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
