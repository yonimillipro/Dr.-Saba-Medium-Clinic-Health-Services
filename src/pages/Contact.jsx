import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { motion } from "framer-motion";
import LocationMap from "./LocationMap";

const contactRows = [
  {
    icon: MapPin,
    label: "Summit clinic",
    content: "Summit 20 meter, next to AJORA MCH Center",
  },
  {
    icon: MapPin,
    label: "Ayat branch",
    content: "Behind Ayat Adebabay Station",
  },
  {
    icon: Phone,
    label: "Phone",
    content: "(+251) 936 640 980 · (+251) 970 333 383",
  },
  {
    icon: Mail,
    label: "Email",
    content: "saba2009welde@gmail.com",
  },
  {
    icon: Clock3,
    label: "Opening hours",
    content: "Open 24 hours · Every day",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

function Contact() {
  return (
    <div className="overflow-hidden bg-white pb-28 pt-[132px] sm:pt-[160px]">
      <section className="page-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
          className="grid gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-20"
        >
          <motion.div variants={reveal}>
            <div className="eyeline-rule mb-8" />
            <h1 className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.88] tracking-[-0.05em] text-[#10243e]">
              Here when
              <br />
              you need us.
            </h1>
          </motion.div>
          <motion.div variants={reveal} className="lg:pb-2">
            <p className="max-w-[520px] text-lg leading-8 text-slate-600">
              Visit our Summit location or call our team anytime. Emergency care
              is available 24/7.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+251936640980"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(8,127,115,0.18)] hover:bg-[#06675e]"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a
                href="mailto:saba2009welde@gmail.com"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-[#087f73] px-6 text-sm font-semibold text-[#087f73] hover:bg-[#eef7f5]"
              >
                <Mail className="h-4 w-4" /> Send an email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
          className="border-t border-slate-200"
        >
          {contactRows.map((row) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.label}
                variants={reveal}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-slate-200 py-5 sm:grid-cols-[52px_150px_1fr] sm:items-center"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eef7f5] text-[#087f73]">
                  <Icon className="h-5 w-5 stroke-[1.6]" />
                </span>
                <p className="text-sm font-semibold text-[#087f73]">{row.label}</p>
                <p className="col-start-2 text-sm leading-6 text-slate-600 sm:col-start-auto">
                  {row.content}
                </p>
              </motion.div>
            );
          })}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.google.com/maps/place/Dr.+Saba+Medium+Clinic/@9.0145092,38.8529577,15z"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white hover:bg-[#06675e]"
            >
              Get directions <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0 round 28px)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0 round 28px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <LocationMap />
        </motion.div>
      </section>

      <section className="page-shell mt-20 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 rounded-[28px] bg-[#08213d] px-7 py-10 text-white sm:px-12 sm:py-14 lg:grid-cols-[auto_1fr_auto] lg:items-center"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-[#d5a52e]">
            <ShieldAlert className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
              Medical emergency
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Urgent help is one call away.
            </h2>
            <p className="mt-3 max-w-[650px] leading-7 text-slate-300">
              For urgent medical assistance, call the clinic immediately. Our
              emergency support is available 24 hours a day.
            </p>
          </div>
          <a
            href="tel:+251936640980"
            className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-[#10243e] hover:bg-[#eef7f5]"
          >
            <Phone className="h-4 w-4" /> (+251) 936 640 980
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
