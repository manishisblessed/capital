import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Avatar } from "@/components/common/Avatar";
import { Seo } from "@/components/common/Seo";
import { leadership, teamMembers } from "@/data/team";

export default function Leadership() {
  return (
    <>
      <Seo
        title="Leadership"
        description="Board direction and an on-the-ground team spanning investment, legal, land and project execution."
      />
      <PageHero
        eyebrow="Leadership"
        title="We are a team of professionals with 70+ years of experience in the industry."
        subtitle="Board direction and an on-the-ground team spanning investment, legal, land, and project execution."
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <Reveal>
            <div className="accent-bar mb-6" />
            <p className="eyebrow mb-12">Board of Directors</p>
          </Reveal>

          <div className="space-y-0 border-t border-border">
            {leadership.map((m) => (
              <Reveal key={m.id}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-12 border-b border-border">
                  <div className="lg:col-span-4">
                    <Avatar
                      name={m.name}
                      photo={m.photo}
                      size="xl"
                      className="max-w-[280px]"
                    />
                    <div className="mt-5">
                      <h2 className="font-display text-2xl lg:text-3xl text-charcoal">
                        {m.name}
                      </h2>
                      <p className="text-sm text-crimson-500 mt-1 uppercase tracking-[0.08em]">
                        {m.role}
                      </p>
                      {m.credentials && (
                        <p className="text-xs text-slate mt-3 leading-relaxed max-w-sm">
                          {m.credentials}
                        </p>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-3 text-xs uppercase tracking-[0.12em] text-crimson-500 link-underline"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="lg:col-span-7 lg:col-start-6 space-y-4 self-center">
                    {m.bio.map((line) => (
                      <li key={line} className="flex gap-3 text-slate leading-relaxed text-base lg:text-lg">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-crimson-500 shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-stone">
        <div className="container-tb">
          <Reveal>
            <div className="accent-bar-bronze mb-6" />
            <p className="eyebrow-accent mb-4">Our Team</p>
            <h2 className="display-2 text-balance max-w-2xl mb-14">
              Specialists across investment, legal, land and delivery.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14">
            {teamMembers.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.03}>
                <article>
                  <Avatar
                    name={m.name}
                    photo={m.photo}
                    size="xl"
                    className="mb-5"
                  />
                  <h3 className="font-display text-2xl text-charcoal">{m.name}</h3>
                  <p className="text-xs uppercase tracking-[0.12em] text-crimson-500 mt-2 mb-4">
                    {m.role}
                  </p>
                  {m.credentials && (
                    <p className="text-xs text-slate-blue mb-4 leading-relaxed">
                      {m.credentials}
                    </p>
                  )}
                  <ul className="space-y-2.5">
                    {m.bio.map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm text-slate leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-bronze shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 text-xs uppercase tracking-[0.12em] text-crimson-500 link-underline"
                    >
                      LinkedIn
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
