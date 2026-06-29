import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Avatar } from "@/components/sections/OurPeoplePreview";
import { leadership, teamMembers } from "@/data/team";
import type { TeamMember } from "@/data/team";

export default function OurPeople() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title={
          <>
            <span className="block">A team of professionals</span>
            <span className="italic font-light block">with 70+ years of experience.</span>
          </>
        }
        subtitle="The same people who originate, underwrite, structure, and execute. Disciplined real estate investing across cycles."
      />

      {/* Leadership */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">Leadership</p>
            <h2 className="display-2 mb-16 text-balance">
              The people <span className="italic font-light">at the helm.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {leadership.map((m, i) => (
              <TeamCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="container-tb">
          <Reveal>
            <p className="eyebrow mb-6">The Team</p>
            <h2 className="display-2 mb-16 text-balance">
              Built around <span className="italic font-light">discipline.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.id} member={m} index={i} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TeamCard({
  member,
  index,
  compact,
}: {
  member: TeamMember;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group p-8 lg:p-10 bg-paper border border-rule rounded-3xl hover:border-red-500/30 hover:shadow-[0_30px_60px_-30px_rgba(4,3,107,0.15)] transition-all duration-700"
    >
      <div className="flex items-start gap-6 mb-6">
        <Avatar name={member.name} size={compact ? "md" : "lg"} />
        <div className="flex-1 pt-2">
          <h3 className="font-display text-2xl lg:text-3xl text-navy-500">{member.name}</h3>
          <p className="text-[10px] uppercase tracking-[0.22em] text-red-500 mt-2">
            {member.role}
          </p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 mt-3 text-xs text-muted hover:text-red-500 transition-colors"
              aria-label={`${member.name} on LinkedIn`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73C5.51 6.73 4.7 5.92 4.7 4.93s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z" />
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <div className="rule mb-6" />

      <ul className="space-y-3">
        {member.bio.map((line) => (
          <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
            <span className="text-red-500 mt-1.5 shrink-0">→</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {member.credentials && (
        <p className="mt-6 pt-6 border-t border-rule text-xs uppercase tracking-[0.18em] text-navy-500 font-medium">
          {member.credentials}
        </p>
      )}
    </motion.article>
  );
}
