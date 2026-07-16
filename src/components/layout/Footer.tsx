import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";

const regulatoryDetails = [
  { label: "Investment Manager", value: "Landmark Capital Advisors" },
  { label: "SEBI Reg. — Multiplier Fund", value: "IN/AIF2/21-22/0928" },
  { label: "SEBI Reg. — Opportunity Fund", value: "IN/AIF2/13-14/0068" },
  { label: "Category", value: "II Alternative Investment Fund" },
];

const contactRegulatory = [
  {
    label: "Compliance Officer",
    name: "Ravindra Gupta",
    email: "compliance@landmarkcapital.in",
  },
  {
    label: "Investor Grievance",
    name: "Grievance Redressal Cell",
    email: "grievance@landmarkcapital.in",
  },
];

export function Footer() {
  return (
    <footer
      className="bg-midnight text-white relative overflow-hidden"
      role="contentinfo"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-tb py-16 lg:py-20 relative">
        <div className="accent-bar-bronze mb-8" />
        <p className="display-2 text-white max-w-3xl text-balance mb-14">
          Institutional real estate investing
          <br />
          <span className="italic font-light text-bronze">
            backed by research and governance.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-white/15">
          <div className="md:col-span-4">
            <Logo onDark className="h-11 w-auto" />
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">
              A SEBI-registered Alternative Investment Fund manager. Operating across warehousing,
              residential, industrial and plotted development across India.
            </p>
            <address className="mt-6 text-xs text-white/70 leading-relaxed not-italic">
              63, 6th Floor, Maker Tower &ldquo;F&rdquo;,
              <br />
              Cuffe Parade, Mumbai 400 005
            </address>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </nav>

          <nav aria-label="Strategies" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Strategies</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/strategies/multiplier" className="hover:text-white transition-colors">Multiplier Fund</Link></li>
              <li><Link to="/strategies/opportunity" className="hover:text-white transition-colors">Opportunity Fund</Link></li>
              <li><Link to="/strategies/lvf" className="hover:text-white transition-colors">LVF</Link></li>
              <li><Link to="/strategies/spv" className="hover:text-white transition-colors">Direct SPV</Link></li>
            </ul>
          </nav>

          <nav aria-label="Insights" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Insights</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/insights" className="hover:text-white transition-colors">Research & Insights</Link></li>
              <li><Link to="/insights/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li>
                <a href="/Tax%20Reckoner.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Tax Reckoner</a>
              </li>
              <li>
                <a href="https://smartodr.in/login" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">SmartODR Portal</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Connect" className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-5">Connect</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:dhananjay@landmarkcapital.in" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li><Link to="/opportunities" className="hover:text-white transition-colors">Opportunities</Link></li>
              <li><Link to="/transactions" className="hover:text-white transition-colors">Transactions</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-10 border-t border-white/15">
          <h4 className="text-[10px] tracking-[0.22em] uppercase text-bronze mb-6">
            Regulatory information
          </h4>
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {regulatoryDetails.map((r) => (
              <div key={r.label}>
                <dt className="text-[10px] tracking-[0.14em] uppercase text-white/55 mb-1.5">
                  {r.label}
                </dt>
                <dd className="text-xs text-white/85 leading-relaxed font-mono tabular-nums">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactRegulatory.map((c) => (
              <div key={c.label}>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/55 mb-1.5">
                  {c.label}
                </p>
                <p className="text-sm text-white/85">{c.name}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="text-xs text-white/70 hover:text-white transition-colors"
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-white/60 max-w-4xl">
            This website is intended for informational purposes only and does not constitute an
            offer or solicitation to invest in any scheme managed by Landmark Capital. Investments
            in Alternative Investment Funds are subject to market, liquidity and regulatory risks
            and long lock-in periods. Investors should read the Private Placement Memorandum and
            Contribution Agreement carefully before making any investment decision. Past
            performance is not indicative of future results.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Landmark Capital. All rights reserved.</p>
          <p className="text-white/70">Institutional discipline. Local execution.</p>
        </div>
      </div>
    </footer>
  );
}
