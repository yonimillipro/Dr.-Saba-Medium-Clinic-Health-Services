import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoSource from "../assets/d1.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Our Doctors" },
  { to: "/contact", label: "Contact" },
];

function Brand() {
  return (
    <Link to="/" className="focus-ring flex items-center gap-2.5 rounded-lg">
      <span className="brand-symbol" aria-hidden="true">
        <img src={logoSource} alt="" />
      </span>
      <span className="leading-[1.03]">
        <span className="block text-[15px] font-semibold tracking-[-0.02em] text-[#1e2d7b] transition-colors dark:text-slate-100 sm:text-[17px]">
          Doctor Saba
        </span>
        <span className="block text-[13px] font-medium italic text-[#087f73] dark:text-teal-300 sm:text-[15px]">
          Medical center
        </span>
      </span>
    </Link>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let animationFrame = 0;

    const updateScrollState = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled((current) =>
        current ? scrollPosition > 6 : scrollPosition > 24,
      );
      animationFrame = 0;
    };

    const onScroll = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateScrollState);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/95 shadow-[0_10px_35px_rgba(16,36,62,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-[#071625]/95 dark:shadow-[0_10px_35px_rgba(0,0,0,0.24)]"
          : "border-transparent bg-white/90 dark:bg-[#071625]/90"
      }`}
    >
      <div className="page-shell flex h-[78px] items-center justify-between sm:h-[88px]">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="focus-ring relative rounded-sm py-3 text-[15px] font-medium text-slate-600 transition-colors hover:text-[#087f73] dark:text-slate-300 dark:hover:text-teal-300"
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-[#087f73] dark:text-teal-300" : ""}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-[#087f73]"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="tel:+251936640980"
            className="focus-ring hidden h-12 items-center gap-2 rounded-xl bg-[#087f73] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(8,127,115,0.2)] transition hover:-translate-y-0.5 hover:bg-[#06675e] lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact us
          </a>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#10243e] transition-colors dark:border-white/10 dark:text-slate-100 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white dark:border-white/10 dark:bg-[#071625] lg:hidden"
            aria-label="Mobile"
          >
            <div className="page-shell space-y-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3.5 text-[15px] font-medium transition ${
                      isActive
                        ? "bg-[#eef7f5] text-[#087f73] dark:bg-[#102f3a] dark:text-teal-300"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="tel:+251936640980"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087f73] px-5 py-3.5 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> Call emergency
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
