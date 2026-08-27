import {
  Activity,
  ArrowRight,
  Baby,
  ClipboardPlus,
  FileCheck2,
  FlaskConical,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "General adult & child health",
    description: "Comprehensive consultations for everyday health needs at every age.",
    icon: Stethoscope,
    group: "Everyday care",
  },
  {
    title: "Laboratory services",
    description: "A broad range of diagnostic tests to support timely clinical decisions.",
    icon: FlaskConical,
    group: "Diagnostics",
  },
  {
    title: "Emergency services",
    description: "Immediate support for urgent medical conditions, available around the clock.",
    icon: ShieldPlus,
    group: "Urgent care",
  },
  {
    title: "Minor surgery",
    description: "Outpatient procedures performed with careful preparation and follow-up.",
    icon: Syringe,
    group: "Procedures",
  },
  {
    title: "Antenatal care",
    description: "Ongoing care for mothers and babies throughout pregnancy.",
    icon: Baby,
    group: "Family health",
  },
  {
    title: "Family planning",
    description: "Private, practical counseling and reproductive health support.",
    icon: HeartPulse,
    group: "Family health",
  },
  {
    title: "Diabetes & hypertension",
    description: "Diagnosis, monitoring, and management for long-term health.",
    icon: Activity,
    group: "Chronic care",
  },
  {
    title: "Gouty arthritis & dyslipidemia",
    description: "Evaluation and management for joint pain and abnormal cholesterol levels.",
    icon: ClipboardPlus,
    group: "Chronic care",
  },
  {
    title: "Cardiac & lung examinations",
    description: "Assessment and treatment support for heart and respiratory concerns.",
    icon: HeartPulse,
    group: "Diagnostics",
  },
  {
    title: "Renal & liver function tests",
    description: "Laboratory evaluation of kidney and liver health and function.",
    icon: Microscope,
    group: "Diagnostics",
  },
  {
    title: "H. pylori diagnosis & treatment",
    description: "Testing and treatment planning for Helicobacter pylori infection.",
    icon: FlaskConical,
    group: "Diagnostics",
  },
  {
    title: "STI diagnosis & treatment",
    description: "Confidential screening, diagnosis, and treatment support.",
    icon: ShieldPlus,
    group: "Everyday care",
  },
  {
    title: "Medical certificates",
    description: "Health certification for driving licenses and employment.",
    icon: FileCheck2,
    group: "Documentation",
  },
  {
    title: "Screening & counseling",
    description: "Preventive screenings supported by clear health guidance.",
    icon: ClipboardPlus,
    group: "Preventive care",
  },
  {
    title: "Ultrasound services",
    description: "Diagnostic imaging to help clinicians understand your care needs.",
    icon: ScanLine,
    group: "Diagnostics",
  },
  {
    title: "Special dermatology service",
    description: "Focused skin care and treatment with a senior dermatologist.",
    icon: Sparkles,
    group: "Specialist care",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function Services() {
  return (
    <div className="bg-white pb-28 pt-[132px] sm:pt-[160px]">
      <section className="page-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-10 border-b border-slate-200 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="eyeline-rule mb-8" />
            <h1 className="font-display max-w-[760px] text-[clamp(3.7rem,8vw,7.8rem)] leading-[0.9] tracking-[-0.05em] text-[#10243e]">
              Essential care,
              <br />
              thoughtfully connected.
            </h1>
          </motion.div>
          <motion.div variants={itemVariants} className="lg:pb-2">
            <p className="max-w-[520px] text-lg leading-8 text-slate-600">
              From first consultation to testing, treatment, and follow-up, our
              services are designed to make care feel clear and accessible.
            </p>
            <a
              href="tel:+251936640980"
              className="focus-ring mt-7 inline-flex items-center gap-3 rounded-md border-b border-[#087f73] pb-1.5 text-sm font-semibold text-[#087f73]"
            >
              Ask about a service <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087f73]">
              Complete service list
            </p>
            <h2 className="font-display mt-4 max-w-[360px] text-4xl leading-tight text-[#10243e] sm:text-5xl">
              Care for everyday needs and more complex concerns.
            </h2>
            <p className="mt-5 max-w-[380px] leading-7 text-slate-600">
              If you are unsure which service you need, call our team. We will
              help you choose the right next step.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={{ visible: { transition: { staggerChildren: 0.065 } } }}
            className="border-t border-slate-200"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={itemVariants}
                  className="group grid gap-4 border-b border-slate-200 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-start sm:gap-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eef7f5] text-[#087f73]">
                    <Icon className="h-5 w-5 stroke-[1.6]" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl text-[#10243e] sm:text-[28px]">
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#087f73]">
                        {service.group}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[650px] leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <span className="hidden pt-2 text-xs tabular-nums text-slate-400 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 rounded-[28px] bg-[#eef7f5] px-7 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <h2 className="font-display text-4xl text-[#10243e] sm:text-5xl">
              Need care today?
            </h2>
            <p className="mt-3 max-w-[600px] leading-7 text-slate-600">
              Our team is available 24 hours a day, including emergency support.
            </p>
          </div>
          <Link
            to="/contact"
            className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white transition hover:bg-[#06675e]"
          >
            Contact the clinic <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;
