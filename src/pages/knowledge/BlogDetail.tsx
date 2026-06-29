import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlog, blogs } from "@/data/blogs";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogDetail() {
  const { slug = "" } = useParams();
  const blog = getBlog(slug);

  if (!blog) {
    return <Navigate to="/knowledge/blogs" replace />;
  }

  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <article className="bg-paper">
      {/* Header */}
      <header className="pt-40 lg:pt-52 pb-16 lg:pb-24 border-b border-rule">
        <div className="container-narrow">
          <Reveal>
            <Link
              to="/knowledge/blogs"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted hover:text-red-500 transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              All Articles
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            {blog.category && (
              <p className="eyebrow mb-6">{blog.category}</p>
            )}
            <h1 className="display-1 text-balance">{blog.title}</h1>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-rule">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Author</p>
                <p className="text-base text-navy-500 mt-1">{blog.author}</p>
              </div>
              <div className="w-px h-10 bg-rule" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Published</p>
                <p className="text-base text-navy-500 mt-1">{formatDate(blog.date)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <section className="py-20 lg:py-28">
        <div className="container-narrow">
          <Reveal>
            <p className="font-display text-2xl lg:text-3xl leading-relaxed text-navy-500 italic mb-16 text-balance">
              "{blog.excerpt}"
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="prose-styles space-y-7 text-lg leading-relaxed text-ink-soft">
              <p>
                This article is part of TridentBay's ongoing series on the structural shifts
                reshaping Indian real estate and investment markets. The full piece will be
                published shortly.
              </p>
              <p>
                In the meantime, browse our other perspectives or reach out to discuss specific
                investment opportunities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-20 pt-10 border-t border-rule">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-navy-500 link-underline"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other articles */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container-tb">
          <p className="eyebrow mb-10">Continue Reading</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherBlogs.map((b, i) => (
              <motion.div
                key={b.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/knowledge/blogs/${b.slug}`}
                  className="group block p-8 bg-paper border border-rule rounded-3xl h-full hover:border-red-500/30 transition-all"
                >
                  {b.category && (
                    <p className="text-[10px] uppercase tracking-[0.22em] text-red-500 mb-4">
                      {b.category}
                    </p>
                  )}
                  <h3 className="font-display text-xl text-navy-500 mb-4 group-hover:text-red-500 transition-colors leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {b.author} · {formatDate(b.date)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
