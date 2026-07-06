import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/data/navigation";
import { Logo } from "@/components/common/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="container-tb flex items-center justify-between h-[72px]">
          <Link to="/" className="z-10" aria-label="Landmark Capital home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 text-[13px] tracking-wider uppercase transition-colors duration-300 relative",
                      isActive ? "text-red-500" : "text-paper hover:text-red-500"
                    )
                  }
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-[8px] align-middle">▾</span>}
                </NavLink>
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[240px]"
                    >
                      <div className="bg-canvas border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] rounded-2xl p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block px-4 py-3 text-sm text-paper hover:bg-canvas-3 hover:text-red-500 rounded-xl transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 grid place-items-center"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <span
              className={cn(
                "absolute h-[1.5px] w-6 bg-paper transition-transform duration-500 ease-out",
                open ? "rotate-45" : "-translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-6 bg-paper transition-transform duration-500 ease-out",
                open ? "-rotate-45" : "translate-y-[5px]"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 z-40 bg-canvas"
          >
            <div className="h-full flex flex-col pt-[100px] container-tb overflow-y-auto pb-12">
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-white/10"
                  >
                    <Link
                      to={item.to}
                      className="block py-5 display-3 text-paper"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="text-sm text-paper/50 py-2"
                          >
                            — {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
