import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoSource from "../assets/d1.png";

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
        <span className="block text-[15px] font-semibold tracking-[-0.02em] text-[#1e2d7b] sm:text-[17px]">
          Doctor Saba
        </span>
        <span className="block text-[13px] font-medium italic text-[#087f73] sm:text-[15px]">
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
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/95 shadow-[0_10px_35px_rgba(16,36,62,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/90"
      }`}
    >
      <div className="page-shell flex h-[78px] items-center justify-between sm:h-[88px]">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="focus-ring relative rounded-sm py-3 text-[15px] font-medium text-slate-600 transition-colors hover:text-[#087f73]"
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-[#087f73]" : ""}>
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

        <a
          href="tel:+251936640980"
          className="focus-ring hidden h-12 items-center gap-2 rounded-xl bg-[#087f73] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(8,127,115,0.2)] transition hover:-translate-y-0.5 hover:bg-[#06675e] lg:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Contact us
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#10243e] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
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
                        ? "bg-[#eef7f5] text-[#087f73]"
                        : "text-slate-700 hover:bg-slate-50"
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
