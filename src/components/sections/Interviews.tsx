import { useState } from "react";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { interviews, type Interview } from "@/data/interviews";
import { cn } from "@/lib/utils";

/**
 * Leadership Insights — Blackstone-style featured interview with a
 * secondary rail of related conversations.
 *
 * The featured card renders a large 16:9 thumbnail with a play button
 * overlay. On click, if a `videoUrl` is present, it swaps to an
 * inline iframe player; otherwise the play button stays static
 * (placeholder mode for the client design review).
 */
export function Interviews() {
  const [featured, setFeatured] = useState<Interview>(interviews[0]);
  const [playing, setPlaying] = useState(false);

  const others = interviews.filter((i) => i.id !== featured.id);

  const selectFeatured = (item: Interview) => {
    setFeatured(item);
    setPlaying(false);
  };

  return (
    <section className="section-pad surface-ivory">
      <div className="container-tb">
        <SectionHeader
          align="split"
          eyebrow="Leadership insights"
          title="In conversation with the people behind the platform."
          description="A recurring series of long-form interviews with Landmark Capital's investment committee — market perspectives, portfolio thinking and the discipline that underwrites every deal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <FeaturedCard
                item={featured}
                playing={playing}
                onPlay={() => setPlaying(true)}
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8 lg:mt-10">
                <p className="eyebrow-accent mb-3">{featured.eyebrow}</p>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal text-balance leading-snug">
                  {featured.title}
                </h3>
                <p className="mt-5 text-slate leading-relaxed max-w-2xl">
                  {featured.description}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-blue">
                  <span className="font-medium text-charcoal">{featured.speaker.name}</span>
                  <span className="w-1 h-1 rounded-full bg-border" aria-hidden />
                  <span>{featured.speaker.role}</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="eyebrow-trust mb-6">More conversations</p>
              <ul className="space-y-4 border-t border-border">
                {others.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => selectFeatured(item)}
                      className="group w-full text-left grid grid-cols-[8rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 sm:gap-5 py-5 border-b border-border transition-colors hover:bg-stone/50"
                    >
                      <div className="relative aspect-video rounded-md overflow-hidden bg-stone">
                        <img
                          src={item.thumbnail}
                          alt={item.thumbnailAlt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/25 group-hover:bg-charcoal/40 transition-colors">
                          <Play className="w-5 h-5 text-white fill-white" aria-hidden />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-bronze mb-1.5">
                          {item.eyebrow}
                        </p>
                        <p className="font-display text-base md:text-lg text-charcoal leading-snug line-clamp-2 group-hover:text-crimson-500 transition-colors">
                          {item.title}
                        </p>
                        <p className="mt-2 text-xs text-slate-blue">
                          {item.speaker.name} · {item.duration}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  item,
  playing,
  onPlay,
}: {
  item: Interview;
  playing: boolean;
  onPlay: () => void;
}) {
  const canPlay = Boolean(item.videoUrl);

  return (
    <div className="relative aspect-video w-full rounded-[12px] overflow-hidden bg-charcoal shadow-[0_30px_80px_-40px_rgba(36,41,47,0.55)]">
      <AnimatePresence mode="wait">
        {playing && canPlay ? (
          <motion.iframe
            key="player"
            src={item.videoUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.div
            key={`thumb-${item.id}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={item.thumbnail}
              alt={item.thumbnailAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(36,41,47,0.05) 0%, rgba(36,41,47,0.15) 55%, rgba(36,41,47,0.65) 100%)",
              }}
              aria-hidden
            />

            <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/85 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500" aria-hidden />
              <span className="text-[0.65rem] uppercase tracking-[0.16em] text-charcoal font-medium">
                {item.eyebrow}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="font-display text-lg md:text-xl leading-snug line-clamp-2">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs opacity-80">
                  {item.speaker.name} · {item.speaker.role}
                </p>
              </div>
              <span className="shrink-0 text-xs tabular-nums px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
                {item.duration}
              </span>
            </div>

            <button
              type="button"
              onClick={onPlay}
              aria-label={`Play interview: ${item.title}`}
              className={cn(
                "absolute inset-0 flex items-center justify-center group",
                !canPlay && "cursor-default"
              )}
            >
              <span className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-paper/95 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 rounded-full bg-paper/40 animate-ping opacity-40" aria-hidden />
                <Play
                  className="w-6 h-6 md:w-7 md:h-7 text-charcoal fill-charcoal translate-x-[2px]"
                  aria-hidden
                />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
