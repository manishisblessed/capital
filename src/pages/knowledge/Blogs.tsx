import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { blogs } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Portal"
        title={
          <>
            <span className="block">Insights.</span>
            <span className="italic font-light block">Honestly written.</span>
          </>
        }
        subtitle="Perspectives on real estate, warehousing, capital markets, and the structural shifts reshaping India's investment landscape."
      />

      <section className="py-20 lg:py-28 bg-canvas">
        <div className="container-tb">
          <div className="space-y-12">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/knowledge/blogs/${blog.slug}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 group py-10 border-b border-white/10"
                >
                  {/* Index + meta */}
                  <div className="lg:col-span-2 flex items-start gap-3">
                    <span className="font-mono text-xs text-paper/50 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {blog.category && (
                      <span className="text-[10px] uppercase tracking-[0.22em] text-red-500">
                        {blog.category}
                      </span>
                    )}
                  </div>

                  {/* Title + excerpt */}
                  <div className="lg:col-span-7">
                    <h2 className="display-3 text-paper group-hover:text-red-500 transition-colors duration-500 text-balance">
                      {blog.title}
                    </h2>
                    <p className="mt-4 text-base text-paper/75 leading-relaxed max-w-2xl line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Author + date */}
                  <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end justify-between">
                    <div className="lg:text-right">
                      <p className="text-sm font-medium text-paper">{blog.author}</p>
                      <p className="text-xs text-paper/50 mt-1">{formatDate(blog.date)}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-paper group-hover:text-red-500 transition-colors">
                      Read
                      <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
