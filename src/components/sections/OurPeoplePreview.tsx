import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/common/Reveal";
import { leadership, teamMembers } from "@/data/team";
import { ArrowUpRight } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

export function OurPeoplePreview() {
  const featured = [...leadership, ...teamMembers].slice(0, 6);

  return (
    <section className="relative py-32 lg:py-40 bg-paper overflow-hidden">
      <div className="container-tb">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Our People</p>
              <h2 className="display-2 text-balance">
                A small team,
                <br />
                <span className="italic font-light">close to every deal.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-6">
            <Reveal delay={0.2}>
              <p className="text-base lg:text-lg text-ink-soft leading-relaxed">
                The same people who originate, underwrite, structure, and execute. Decades of
                experience across every cycle of Indian real estate.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                to="/our-people"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-navy-500 link-underline self-start"
              >
                Meet the full team
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-rule rounded-3xl overflow-hidden">
          {featured.map((member, i) => (
            <TeamPreviewCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPreviewCard({
  member,
  index,
}: {
  member: { id: string; name: string; role: string };
  index: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 5, scale: 1.008, glare: false });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="bg-paper p-8 lg:p-10 group hover:bg-cream transition-colors duration-500"
    >
      <div ref={tiltRef} className="relative">
        <Avatar name={member.name} />
        <div className="mt-6 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl text-navy-500">{member.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.22em] text-red-500 mt-1">
              {member.role}
            </p>
          </div>
          <ArrowUpRight
            size={16}
            className="text-muted transition-transform duration-500 group-hover:rotate-0 -rotate-45 group-hover:text-red-500 mt-1"
          />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Elegant initials-based avatar with subtle gradient — placeholder until photos arrive.
 */
export function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizeClass = {
    sm: "w-14 h-14 text-base",
    md: "w-20 h-20 text-xl",
    lg: "w-32 h-32 text-3xl",
  }[size];

  return (
    <div
      className={`${sizeClass} rounded-full grid place-items-center font-display text-navy-500 bg-mist border border-navy-500/10 relative overflow-hidden`}
    >
      {/* Decorative arch */}
      <svg className="absolute inset-0 opacity-40" viewBox="0 0 80 80" fill="none" aria-hidden>
        <path d="M0 60 Q 40 30, 80 60" stroke="#bb1c1c" strokeWidth="0.5" fill="none" />
        <path d="M0 70 Q 40 40, 80 70" stroke="#04036b" strokeWidth="0.5" fill="none" opacity="0.4" />
      </svg>
      <span className="relative">{initials}</span>
    </div>
  );
}
