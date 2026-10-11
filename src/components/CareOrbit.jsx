import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ArrowUpRight, HeartPulse, Microscope, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const OrbitScene = lazy(() => import("./OrbitScene"));

const steps = [
  {
    title: "We listen first",
    copy: "A conversation about what matters to you is where thoughtful care begins.",
    icon: Stethoscope,
  },
  {
    title: "We find clarity",
    copy: "Consultations and diagnostics help our team understand the right next step.",
    icon: Microscope,
  },
  {
    title: "We stay with you",
    copy: "Clear guidance and follow-up keep your care connected beyond the visit.",
    icon: HeartPulse,
  },
];

function useOrbitEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(desktop.matches && !reduced.matches);
    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

function CareOrbit() {
  const [activeStep, setActiveStep] = useState(0);
  const [nearViewport, setNearViewport] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const visual = useRef(null);
  const enabled = useOrbitEnabled();

  useEffect(() => {
    if (!enabled || nearViewport) return;
    if (!("IntersectionObserver" in window)) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px" },
    );
    observer.observe(visual.current);
    return () => observer.disconnect();
  }, [enabled, nearViewport]);

  return (
    <section className="care-orbit-section py-24 sm:py-32" aria-labelledby="care-orbit-title">
      <div className="page-shell">
        <div className="care-orbit-panel grid gap-10 overflow-hidden rounded-[30px] px-6 py-10 text-white sm:px-10 sm:py-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 lg:px-14 lg:py-16">
          <div className="relative z-10 flex flex-col justify-center">
            <div data-motion-reveal className="mb-10">
              <div className="eyeline-rule mb-8" />
              <h2 id="care-orbit-title" className="font-display max-w-[620px] text-[clamp(2.8rem,5vw,5.1rem)] leading-[0.98] tracking-[-0.04em]">
                Care, connected around you.
              </h2>
              <p className="mt-6 max-w-[450px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                Each step works together, from listening to understanding to
                the support that follows.
              </p>
            </div>

            <div className="care-orbit-steps" aria-label="Explore our approach to care">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={step.title}
                    type="button"
                    data-motion-reveal
                    className={`care-orbit-step focus-ring group w-full text-left ${activeStep === index ? "is-active" : ""}`}
                    aria-pressed={activeStep === index}
                    onClick={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <span className="care-orbit-step-icon" aria-hidden="true">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>
                    <span className="block min-w-0 flex-1">
                      <span className="block font-display text-[1.55rem] leading-tight sm:text-[1.7rem]">{step.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-300">{step.copy}</span>
                    </span>
                    <span className="care-orbit-step-line" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <Link
              to="/services"
              className="focus-ring mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#08213d] transition-colors hover:bg-[#e9faf5]"
            >
              Explore our services <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div ref={visual} className="care-orbit-visual relative isolate min-h-[320px] self-center overflow-hidden rounded-[24px] sm:min-h-[470px] lg:min-h-[600px] lg:self-start" aria-hidden="true">
            <div className="care-orbit-halo" />
            <div className="care-orbit-static">
              <div className="care-orbit-static-ring care-orbit-static-ring-outer" />
              <div className="care-orbit-static-ring care-orbit-static-ring-inner" />
              <div className="care-orbit-static-core">
                <span className="care-orbit-static-cross" />
              </div>
            </div>
            {enabled && nearViewport && !sceneFailed && (
              <Suspense fallback={null}>
                <OrbitScene phase={activeStep} onError={() => setSceneFailed(true)} />
              </Suspense>
            )}
            <div className="care-orbit-visual-caption">Thoughtful care, in every direction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareOrbit;
