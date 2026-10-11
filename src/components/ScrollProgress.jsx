import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap, useGSAP } from "../lib/motion";

export default function ScrollProgress() {
  const progress = useRef(null);
  const { pathname } = useLocation();

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          progress.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
          },
        );
      });
      return () => media.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div ref={progress} className="scroll-progress-fill" />
    </div>
  );
}
