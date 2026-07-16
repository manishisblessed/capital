import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { Seo } from "@/components/common/Seo";
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
      <Seo
        title="Research & Insights"
        description="Evidence-led perspectives on Indian real estate — warehousing, capital markets, regulation and the structural shifts shaping institutional investing."
      />
      <PageHero
        eyebrow="Research & Insights"
        title="Evidence-led perspectives on Indian real estate."
        subtitle="Notes on warehousing, capital markets, regulation and the structural shifts shaping institutional real estate investing."
        tone="stone"
      />

      <section className="section-pad surface-ivory">
        <div className="container-tb">
          <div className="border-t border-border">
            {blogs.map((blog, i) => (
              <Reveal key={blog.slug} delay={Math.min(i * 0.02, 0.2)}>
                <Link
                  to={`/insights/${blog.slug}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 group py-10 border-b border-border"
                >
                  <div className="lg:col-span-2 flex items-start gap-3">
                    <span className="font-mono text-xs text-bronze tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {blog.category && (
                      <span className="text-[10px] uppercase tracking-[0.14em] text-crimson-500">
                        {blog.category}
                      </span>
                    )}
                  </div>
                  <div className="lg:col-span-7">
                    <h2 className="display-3 text-charcoal group-hover:text-crimson-500 transition-colors text-balance">
                      {blog.title}
                    </h2>
                    <p className="mt-4 text-base text-slate leading-relaxed max-w-2xl line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end justify-between">
                    <div className="lg:text-right">
                      <p className="text-sm font-medium text-charcoal">{blog.author}</p>
                      <p className="text-xs text-slate-blue mt-1 tabular-nums">
                        {formatDate(blog.date)}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-charcoal group-hover:text-crimson-500 transition-colors">
                      Read
                      <Icon as={ArrowUpRight} size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
