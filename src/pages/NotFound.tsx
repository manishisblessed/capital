import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] grid place-items-center bg-canvas px-6 noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-50" />
      <div className="relative text-center max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          Page Not Found
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-1 mt-6"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg text-paper/75 text-balance"
        >
          The page you're looking for doesn't exist — but the right opportunities do.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 h-14 px-8 bg-navy-500 text-paper rounded-full text-sm uppercase tracking-[0.18em] hover:bg-red-500 transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform duration-500 group-hover:-translate-x-1" />
            Back home
          </Link>
          <Link
            to="/our-business"
            className="group inline-flex items-center gap-2 h-14 px-2 text-sm uppercase tracking-[0.18em] text-paper link-underline"
          >
            Explore our business
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
