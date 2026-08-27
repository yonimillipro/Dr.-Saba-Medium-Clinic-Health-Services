import {
  ArrowRight,
  Baby,
  Clock3,
  FlaskConical,
  Mail,
  MapPin,
  Phone,
  Pill,
  Scissors,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClinicGallery from "./ClinicGallery";
import LocationMap from "./LocationMap";
import heroImage from "../assets/clinicIMG/Med-equ.jpg";
import storyImage from "../assets/clinicIMG/lab1.jpg";

const services = [
  {
    title: "General consultation",
    copy: "Everyday care for adults and children.",
    icon: Stethoscope,
  },
  {
    title: "Laboratory diagnostics",
    copy: "Practical testing to support clear decisions.",
    icon: FlaskConical,
  },
  {
    title: "Emergency care",
    copy: "Urgent medical support, available 24/7.",
    icon: Truck,
  },
  {
    title: "Maternal & child health",
    copy: "Attentive care for mothers and growing families.",
    icon: Baby,
  },
  {
    title: "Minor procedures",
    copy: "Safe outpatient procedures with attentive follow-up.",
    icon: Scissors,
  },
  {
    title: "Pharmacy support",
    copy: "Medication guidance as part of coordinated care.",
    icon: Pill,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Home() {
  return (
    <div className="theme-page overflow-hidden">
      <section
        className="relative flex min-h-[880px] items-center pb-20 pt-[132px] sm:min-h-[920px] sm:pt-[150px] lg:min-h-[760px] lg:pb-16 lg:pt-[142px]"
      >
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="relative z-10"
          >
            <motion.h1
              variants={reveal}
              className="theme-heading font-display max-w-[680px] text-[clamp(3.5rem,5.7vw,5.35rem)] leading-[0.94] tracking-[-0.045em]"
            >
              Modern care.
              <br />
              <span className="lg:whitespace-nowrap">Human attention.</span>
            </motion.h1>
            <motion.p
              variants={reveal}
              className="theme-copy mt-7 max-w-[610px] text-lg leading-8 sm:text-xl"
            >
              Comprehensive medical care, diagnostics, and 24/7 emergency
              support—delivered with clarity, compassion, and expertise.
            </motion.p>
            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/services"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(8,127,115,0.2)] transition hover:-translate-y-0.5 hover:bg-[#06675e]"
              >
                Explore our services <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+251936640980"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#087f73] px-6 text-sm font-semibold text-[#087f73] transition hover:bg-[#eef7f5] dark:text-teal-300 dark:hover:bg-white/5"
              >
                <Phone className="h-4 w-4" /> Call emergency
              </a>
            </motion.div>
            <motion.div variants={reveal} className="mt-12">
              <div className="eyeline-rule mb-7" />
              <div className="theme-copy flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:gap-7">
                <span className="flex items-center gap-3">
                  <span className="theme-icon-surface grid h-10 w-10 place-items-center rounded-full">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  Serving our community since 1995
                </span>
                <span className="hidden h-7 w-px bg-slate-200 dark:bg-white/10 sm:block" />
                <span className="flex items-center gap-3">
                  <span className="theme-icon-surface grid h-10 w-10 place-items-center rounded-full">
                    <Clock3 className="h-4 w-4" />
                  </span>
                  Open 24 hours · 7 days a week
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 34 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:-mr-10"
          >
            <motion.div className="theme-soft relative overflow-hidden rounded-[30px] shadow-[0_30px_70px_rgba(16,36,62,0.15)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
              <img
                src={heroImage}
                alt="Diagnostic laboratory at Doctor Saba Medical Center"
                className="aspect-[1.12/1] w-full object-cover sm:aspect-[1.22/1]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="page-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
            className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <div>
              <div className="eyeline-rule mb-7" />
              <h2 className="theme-heading font-display max-w-[440px] text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl">
                Care for every stage of life
              </h2>
              <p className="theme-copy mt-6 max-w-[420px] leading-7">
                From everyday check-ups to urgent support, our team brings
                essential services together under one roof.
              </p>
              <Link
                to="/services"
                className="focus-ring mt-8 inline-flex items-center gap-3 rounded-md border-b border-[#087f73] pb-1.5 text-sm font-semibold text-[#087f73] dark:text-teal-300"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.09 } },
              }}
              className="grid gap-x-10 md:grid-cols-2"
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={reveal}
                    className="theme-border group flex items-center gap-5 border-b py-6"
                  >
                    <Icon
                      className="h-7 w-7 shrink-0 stroke-[1.5] text-[#087f73] dark:text-teal-300"
                      aria-hidden="true"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="theme-heading font-display text-2xl leading-tight">
                        {service.title}
                      </h3>
                      <p className="theme-muted mt-1 text-sm leading-6">
                        {service.copy}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#d5a52e] transition-transform group-hover:translate-x-1" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="theme-soft py-20 sm:py-28">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyeline-rule mb-7" />
            <h2 className="font-display max-w-[470px] text-5xl leading-[1.02] tracking-[-0.035em] text-[#087f73] dark:text-teal-300 sm:text-6xl">
              Care you can feel.
              <br />
              Standards you can trust.
            </h2>
            <p className="theme-copy mt-7 max-w-[470px] text-lg leading-8">
              We combine experienced professionals, clear communication, and a
              practical approach to every patient&apos;s needs.
            </p>
            <Link
              to="/doctors"
              className="focus-ring mt-8 inline-flex min-h-[52px] items-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(8,127,115,0.18)] transition hover:-translate-y-0.5 hover:bg-[#06675e]"
            >
              Meet our doctors <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 28px)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 28px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-no-clip overflow-hidden rounded-[28px] shadow-[0_26px_60px_rgba(16,36,62,0.16)]"
          >
            <img
              src={storyImage}
              alt="The clinic laboratory and diagnostic equipment"
              className="aspect-[1.35/1] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#08213d] py-24 text-white sm:py-28">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <div className="eyeline-rule mb-6" />
              <h2 className="font-display text-5xl tracking-[-0.03em] sm:text-6xl">
                Inside our clinic
              </h2>
            </div>
            <p className="max-w-[440px] leading-7 text-slate-300">
              A real look at the spaces, equipment, and people supporting your
              care at Doctor Saba Medical Center.
            </p>
          </motion.div>
          <ClinicGallery />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyeline-rule mb-7" />
            <h2 className="theme-heading font-display text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl">
              Here when you need us
            </h2>
            <p className="theme-copy mt-6 text-lg leading-8">
              Visit our Summit location or call our team anytime. Emergency care
              is available 24/7.
            </p>

            <div className="theme-border mt-9 divide-y divide-slate-200 border-y dark:divide-white/10">
              <div className="flex gap-4 py-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#087f73] dark:text-teal-300" />
                <div>
                  <p className="font-semibold text-[#087f73] dark:text-teal-300">Summit clinic</p>
                  <p className="theme-copy mt-1 leading-6">
                    Summit 20 meter, next to AJORA MCH Center
                  </p>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#087f73] dark:text-teal-300" />
                <div>
                  <p className="font-semibold text-[#087f73] dark:text-teal-300">Ayat branch</p>
                  <p className="theme-copy mt-1 leading-6">
                    Behind Ayat Adebabay Station
                  </p>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#087f73] dark:text-teal-300" />
                <div className="theme-copy space-y-1">
                  <a href="tel:+251936640980" className="block hover:text-[#087f73] dark:hover:text-teal-300">
                    (+251) 936 640 980
                  </a>
                  <a href="tel:+251970333383" className="block hover:text-[#087f73] dark:hover:text-teal-300">
                    (+251) 970 333 383
                  </a>
                </div>
              </div>
              <a
                href="mailto:saba2009welde@gmail.com"
                className="theme-copy flex gap-4 py-5 hover:text-[#087f73] dark:hover:text-teal-300"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#087f73] dark:text-teal-300" />
                saba2009welde@gmail.com
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/place/Dr.+Saba+Medium+Clinic/@9.0145092,38.8529577,15z"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white transition hover:bg-[#06675e]"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
              <a
                href="tel:+251936640980"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-[#087f73] px-6 text-sm font-semibold text-[#087f73] hover:bg-[#eef7f5] dark:text-teal-300 dark:hover:bg-white/5"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0 round 28px)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0 round 28px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-no-clip"
          >
            <LocationMap />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
