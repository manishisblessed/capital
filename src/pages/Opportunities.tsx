import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { RiskDisclosure } from "@/components/common/Disclosures";
import { Seo } from "@/components/common/Seo";
import { currentDeals } from "@/data/deals";

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

export default function Opportunities() {
  return (
    <>
      <Seo
        title="Opportunities"
        description="Live underwriting and geographic pipeline across warehousing, industrial, residential, plotted and mixed-use assets."
      />
      <PageHero
        eyebrow="Opportunities"
        title="Current and pipeline opportunities."
        subtitle="Live underwriting and geographic pipeline across warehousing, industrial, residential, plotted and mixed-use assets."
        tone="stone"
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <Reveal>
            <div className="accent-bar mb-5" />
            <p className="eyebrow mb-4">Live deals</p>
            <h2 className="display-3 mb-10">Under active consideration</h2>
          </Reveal>

          <div className="overflow-x-auto border border-border rounded-[12px] bg-paper">
            <table className="table-report min-w-[720px]">
              <thead>
                <tr>
                  <th>Opportunity</th>
                  <th>Location</th>
                  <th>Category</th>
                  <th>Land</th>
                  <th>Development</th>
                </tr>
              </thead>
              <tbody>
                {currentDeals.map((deal) => (
                  <tr key={deal.id}>
                    <td className="!text-charcoal font-medium">{deal.name}</td>
                    <td>{deal.city}</td>
                    <td>
                      <span className="text-slate-blue">{deal.category}</span>
                    </td>
                    <td className="tabular-nums">{deal.landArea ?? "\u2014"}</td>
                    <td className="tabular-nums">{deal.developmentArea ?? "\u2014"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-slate max-w-2xl">
            Figures are indicative and subject to diligence, structuring and investor eligibility.
            Detailed materials are shared under appropriate confidentiality.
          </p>
        </div>
      </section>

      <section className="section-pad surface-stone">
        <div className="container-tb">
          <Reveal>
            <div className="accent-bar-bronze mb-5" />
            <p className="eyebrow-accent mb-4">Pipeline</p>
            <h2 className="display-3 mb-10">Markets under evaluation</h2>
          </Reveal>
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {pipelineCities.map((city) => (
              <li key={city} className="font-display text-2xl text-charcoal">
                {city}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink to="/contact" variant="primary">
              Request information
            </ButtonLink>
          </div>
        </div>
      </section>

      <RiskDisclosure />
    </>
  );
}
