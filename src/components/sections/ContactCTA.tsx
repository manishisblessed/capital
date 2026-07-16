import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";

export function ContactCTA() {
  return (
    <section className="section-pad surface-stone border-t border-border">
      <div className="container-tb">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 rounded-[12px] bg-paper border border-border p-8 lg:p-14">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="accent-bar-bronze mb-5" />
              <p className="eyebrow-accent mb-5">Contact</p>
              <h2 className="display-2 text-balance max-w-2xl">
                Inquire about the right opportunity.
              </h2>
              <p className="mt-6 text-lg text-slate max-w-xl leading-relaxed">
                For investment discussions, fund participation, or partnership inquiries, our team
                in Mumbai responds with clarity and discretion.
              </p>
              <div className="mt-10">
                <ButtonLink to="/contact" variant="primary" size="lg">
                  Contact Landmark
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.05}>
              <dl className="space-y-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-2">
                    Office
                  </dt>
                  <dd className="text-charcoal leading-relaxed">
                    63, 6th Floor, Maker Tower &ldquo;F&rdquo;,
                    <br />
                    Cuffe Parade, Mumbai 400 005
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-2">
                    Phone
                  </dt>
                  <dd className="text-charcoal">
                    <a href="tel:+912262366266" className="link-underline">
                      +91 22 6236 6266
                    </a>
                    <span className="text-slate"> / </span>
                    <a href="tel:+912262366277" className="link-underline">
                      6277
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate-blue mb-2">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:dhananjay@landmarkcapital.in"
                      className="text-charcoal link-underline"
                    >
                      dhananjay@landmarkcapital.in
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
