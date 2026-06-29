import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { faqs } from "@/data/faq";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        title={
          <>
            <span className="block">Things to know</span>
            <span className="italic font-light block">before you invest.</span>
          </>
        }
        subtitle="Common questions about investing in our funds, drawdowns, reporting, and the investor lifecycle."
      />

      <section className="py-20 lg:py-28 bg-paper">
        <div className="container-narrow">
          <ul className="divide-y divide-rule border-y border-rule">
            {faqs.map((faq, i) => (
              <li key={faq.question}>
                <Reveal delay={i * 0.04}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start gap-6 py-8 lg:py-10 text-left group"
                    aria-expanded={open === i}
                  >
                    <span className="font-mono text-xs text-muted tabular-nums pt-2 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-2xl lg:text-3xl text-navy-500 group-hover:text-red-500 transition-colors duration-500 text-balance">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 mt-2 w-10 h-10 rounded-full grid place-items-center transition-all duration-500 ${
                        open === i ? "bg-red-500 text-paper rotate-180" : "bg-mist text-navy-500"
                      }`}
                    >
                      {open === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </Reveal>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-16 pb-10 lg:pb-12">
                        <p className="text-base lg:text-lg leading-relaxed text-ink-soft max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
