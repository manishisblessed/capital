import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { Reveal } from "@/components/common/Reveal";

export function Footer() {
  return (
    <footer className="bg-navy-500 text-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-[0.06] pointer-events-none" />

      <div className="container-tb py-20 lg:py-28 relative">
        <Reveal className="mb-16">
          <p className="display-2 text-paper max-w-3xl text-balance">
            Patient capital.<br />
            <span className="text-red-300/90 italic font-light">Selected deals.</span><br />
            Built for India.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-white/10">
          <div className="md:col-span-4">
            <Logo className="[&_span]:text-paper [&_*]:text-paper" />
            <p className="mt-6 text-sm text-paper/70 leading-relaxed max-w-xs">
              A SEBI-registered Alternative Investment Fund manager. Operating across Warehousing,
              Residential, Industrial and Plotted Development across India.
            </p>
            <div className="mt-6 text-xs text-paper/50 leading-relaxed">
              63, 6th Floor, Maker Tower "F",<br />
              Cuffe Parade, Mumbai 400 005
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-paper/80">
              <li><Link to="/our-business" className="hover:text-red-300 transition-colors">Our Business</Link></li>
              <li><Link to="/our-people" className="hover:text-red-300 transition-colors">Our People</Link></li>
              <li><Link to="/contact" className="hover:text-red-300 transition-colors">Contact</Link></li>
              <li><Link to="/disclaimer" className="hover:text-red-300 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-5">Funds</h4>
            <ul className="space-y-3 text-sm text-paper/80">
              <li><Link to="/funds/multiplier" className="hover:text-red-300 transition-colors">Multiplier Fund</Link></li>
              <li><Link to="/funds/opportunity" className="hover:text-red-300 transition-colors">Opportunity Fund</Link></li>
              <li><Link to="/funds/lvf" className="hover:text-red-300 transition-colors">LVF</Link></li>
              <li><Link to="/funds/spv" className="hover:text-red-300 transition-colors">Direct SPV</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-5">Knowledge</h4>
            <ul className="space-y-3 text-sm text-paper/80">
              <li><Link to="/knowledge/blogs" className="hover:text-red-300 transition-colors">Blogs</Link></li>
              <li><Link to="/knowledge/faq" className="hover:text-red-300 transition-colors">FAQ</Link></li>
              <li>
                <a href="/Tax%20Reckoner.pdf" target="_blank" rel="noreferrer" className="hover:text-red-300 transition-colors">Tax Reckoner</a>
              </li>
              <li>
                <a href="https://smartodr.in/login" target="_blank" rel="noreferrer" className="hover:text-red-300 transition-colors">SmartODR Portal</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-5">Connect</h4>
            <ul className="space-y-3 text-sm text-paper/80">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-red-300 transition-colors inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73C5.51 6.73 4.7 5.92 4.7 4.93s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:contact@tridentbay.in" className="hover:text-red-300 transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} TridentBay Asset Managers. All rights reserved.</p>
          <p className="font-light italic">Not More Real Estate. Better Real Estate.</p>
        </div>
      </div>
    </footer>
  );
}
