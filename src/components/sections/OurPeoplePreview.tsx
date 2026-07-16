import { Link } from "react-router-dom";
import { Reveal } from "@/components/common/Reveal";
import { Avatar } from "@/components/common/Avatar";
import { leadership, teamMembers } from "@/data/team";

const preview = [...leadership, ...teamMembers].slice(0, 6);

export function OurPeoplePreview() {
  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <Reveal>
            <div className="accent-bar mb-5" />
            <p className="eyebrow mb-5">Leadership</p>
            <h2 className="display-2 text-balance max-w-xl">
              A small team, close to every deal.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              to="/leadership"
              className="text-sm uppercase tracking-[0.1em] text-charcoal link-underline"
            >
              Meet the full team
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {preview.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.04}>
              <Link to="/leadership" className="group block">
                <Avatar
                  name={m.name}
                  photo={m.photo}
                  size="xl"
                  className="mb-4 transition-opacity duration-300 group-hover:opacity-90"
                />
                <p className="font-display text-xl text-charcoal group-hover:text-crimson-500 transition-colors">
                  {m.name}
                </p>
                <p className="text-sm text-slate-blue mt-1">{m.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
