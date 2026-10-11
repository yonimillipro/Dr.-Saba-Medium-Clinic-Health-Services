import { ArrowRight, HeartHandshake, Phone, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "../assets/clinicIMG/nurse.jpg";

const doctors = [
  {
    name: "Dr. Saba W/gebriel",
    specialty: "General Medicine",
    experience: "15 years of experience",
    initials: "SW",
  },
  {
    name: "Dr. Kassahune Mamo",
    specialty: "Cardiology",
    experience: "12 years of experience",
    initials: "KM",
  },
  {
    name: "Dr. Moges",
    specialty: "Pediatrics",
    experience: "10 years of experience",
    initials: "DM",
  },
  {
    name: "Dr. Henok Asfa",
    specialty: "Orthopedics",
    experience: "20 years of experience",
    initials: "HA",
  },
];

function Doctors() {
  return (
    <div className="theme-page pb-28 pt-[132px] sm:pt-[160px]">
      <section className="page-shell grid items-end gap-12 pb-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
        <div>
          <div data-motion-enter className="eyeline-rule mb-8" />
          <h1
            data-motion-enter
            className="theme-heading font-display max-w-[700px] text-[clamp(3.8rem,8vw,7.7rem)] leading-[0.9] tracking-[-0.05em]"
          >
            Expertise,
            <br />
            with empathy.
          </h1>
          <p
            data-motion-enter
            className="theme-copy mt-7 max-w-[570px] text-lg leading-8"
          >
            Our medical team brings broad experience to every consultation while
            keeping the conversation clear, respectful, and centered on you.
          </p>
        </div>

        <div
          data-motion-enter
          data-motion-image
          className="theme-soft relative overflow-hidden rounded-[28px]"
        >
          <img
            data-motion-image-inner
            src={teamImage}
            alt="Consultation room at Doctor Saba Medical Center"
            className="aspect-[1.2/1] w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur dark:bg-[#0b1e2d]/95">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#087f73] dark:text-teal-300">
              <HeartHandshake className="h-4 w-4" /> Patient-centered care
            </p>
          </div>
        </div>
      </section>

      <section className="theme-soft py-20 sm:py-28">
        <div data-motion-pin-section className="page-shell grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div data-motion-pin className="lg:self-start">
            <div data-motion-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087f73] dark:text-teal-300">
                Our medical team
              </p>
              <h2 className="theme-heading font-display mt-4 text-4xl leading-tight sm:text-5xl">
                Experience across the care you need most.
              </h2>
            </div>
          </div>

          <div
            className="border-t border-[#10243e]/15 dark:border-white/10"
          >
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                data-motion-reveal
                className="grid gap-5 border-b border-[#10243e]/15 py-7 dark:border-white/10 sm:grid-cols-[64px_1fr_auto] sm:items-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white font-display text-lg text-[#087f73] shadow-sm dark:bg-[#143542] dark:text-teal-300">
                  {doctor.initials}
                </span>
                <div>
                  <h3 className="theme-heading font-display text-3xl">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#087f73] dark:text-teal-300">
                    {doctor.specialty}
                  </p>
                </div>
                <p className="theme-muted text-sm sm:text-right">
                  {doctor.experience}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-24">
        <div
          data-motion-reveal
          className="theme-border grid gap-8 border-y py-12 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div className="flex gap-5">
            <span className="theme-icon-surface grid h-12 w-12 shrink-0 place-items-center rounded-full">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div>
              <h2 className="theme-heading font-display text-4xl">
                Find the right care for your concern.
              </h2>
              <p className="theme-copy mt-3 max-w-[650px] leading-7">
                Call the clinic and our team will guide you to the appropriate
                service or available clinician.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+251936640980"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#087f73] px-6 text-sm font-semibold text-white hover:bg-[#06675e]"
            >
              <Phone className="h-4 w-4" /> Call the clinic
            </a>
            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-[#087f73] px-6 text-sm font-semibold text-[#087f73] hover:bg-[#eef7f5] dark:text-teal-300 dark:hover:bg-white/5"
            >
              Contact details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctors;
