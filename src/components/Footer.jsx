import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoSource from "../assets/d1.png";

const footerLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Our Doctors", "/doctors"],
  ["Contact", "/contact"],
];

function Footer() {
  return (
    <footer className="overflow-hidden bg-[#08213d] text-white">
      <div className="page-shell py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 lg:flex-row lg:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="brand-symbol rounded-lg bg-white" aria-hidden="true">
              <img src={logoSource} alt="" />
            </span>
            <div className="leading-tight">
              <p className="text-lg font-semibold">Doctor Saba</p>
              <p className="text-sm italic text-teal-300">Medical center</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300" aria-label="Footer">
            {footerLinks.map(([label, path]) => (
              <Link key={path} to={path} className="transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </motion.div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              <MapPin className="h-4 w-4 text-[#d5a52e]" /> Summit clinic
            </p>
            <p className="max-w-[240px] text-sm leading-6 text-slate-300">
              Summit 20 meter, next to AJORA MCH Center.
            </p>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              <MapPin className="h-4 w-4 text-[#d5a52e]" /> Ayat branch
            </p>
            <p className="text-sm leading-6 text-slate-300">Behind Ayat Adebabay Station.</p>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              <Phone className="h-4 w-4 text-[#d5a52e]" /> Call us
            </p>
            <a href="tel:+251936640980" className="block text-sm leading-6 text-slate-300 hover:text-white">
              (+251) 936 640 980
            </a>
            <a href="tel:+251970333383" className="block text-sm leading-6 text-slate-300 hover:text-white">
              (+251) 970 333 383
            </a>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
              <Clock3 className="h-4 w-4 text-[#d5a52e]" /> Hours
            </p>
            <p className="text-sm leading-6 text-slate-300">Open 24 hours · Every day</p>
            <a href="mailto:saba2009welde@gmail.com" className="mt-2 flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Mail className="h-4 w-4" /> Email the clinic
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#d5a52e]/50 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Doctor Saba Medical Center.</p>
          <p className="font-display text-lg italic text-slate-200">Thoughtful care, close to home.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
