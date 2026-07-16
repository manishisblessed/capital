import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { type ReactNode } from "react";
import { transitions } from "@/lib/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transitions.page}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
