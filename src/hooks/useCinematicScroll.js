import { gsap, ScrollTrigger, useGSAP } from "../lib/motion";

export default function useCinematicScroll(scope, pathname) {
  useGSAP(
    () => {
      const root = scope.current;
      const media = gsap.matchMedia();
      let mounted = true;
      const refreshLayout = gsap
        .delayedCall(0.15, () => ScrollTrigger.refresh())
        .pause();
      const scheduleRefresh = () => {
        if (mounted) refreshLayout.restart(true);
      };

      media.add(
        {
          all: "(min-width: 0px)",
          desktop: "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduced } = context.conditions;
          if (reduced) return;

          const select = gsap.utils.selector(root);
          const reveals = new Map();

          // Entrance motion is desktop-only so phone refreshes stay stable.
          const entrances = select("[data-motion-enter]");
          if (desktop && entrances.length) {
            gsap.from(entrances, {
              opacity: 0,
              y: 26,
              duration: 0.95,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "opacity,transform",
              onComplete: scheduleRefresh,
            });
          }

          select("[data-motion-reveal]").forEach((element) => {
            // Content already passed must remain visible on restored scrolls.
            if (element.getBoundingClientRect().bottom <= 0) return;
            const tween = gsap.from(element, {
              opacity: 0,
              y: desktop ? 32 : 0,
              duration: desktop ? 0.85 : 0.35,
              ease: "power3.out",
              clearProps: "opacity,transform",
              scrollTrigger: {
                trigger: element,
                start: "top 94%",
                once: true,
              },
            });
            reveals.set(element, tween);
          });

          if (desktop) {
            select("[data-motion-pin-section]").forEach((section) => {
              const heading = section.querySelector("[data-motion-pin]");
              if (!heading || heading.offsetHeight > window.innerHeight - 180) {
                return;
              }
              ScrollTrigger.create({
                trigger: heading,
                start: "top 132px",
                endTrigger: section,
                end: () => `bottom ${heading.offsetHeight + 132}px`,
                pin: heading,
                pinSpacing: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              });
            });

            select("[data-motion-image]").forEach((frame) => {
              const image = frame.querySelector("[data-motion-image-inner]");
              if (!image) return;
              gsap.fromTo(
                image,
                { yPercent: -3, scale: 1.12 },
                {
                  yPercent: 3,
                  scale: 1.08,
                  ease: "none",
                  scrollTrigger: {
                    trigger: frame,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.65,
                  },
                },
              );
            });

            select("[data-motion-text]").forEach((text) => {
              gsap.fromTo(
                text.querySelectorAll("[data-motion-word]"),
                { opacity: 0.2 },
                {
                  opacity: 1,
                  stagger: 0.12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: text,
                    start: "top 78%",
                    end: "bottom 48%",
                    scrub: 0.45,
                  },
                },
              );
            });

            select("[data-motion-gallery]").forEach((gallery) => {
              gsap.from(gallery.querySelectorAll("figure"), {
                y: 56,
                scale: 0.88,
                opacity: 0.3,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: gallery,
                  start: "top 92%",
                  end: "top 40%",
                  scrub: 0.6,
                },
              });
            });
          }

          // Keyboard navigation must never land inside faded-out content.
          const onFocus = (event) => {
            reveals.forEach((tween, element) => {
              if (element.contains(event.target)) tween.progress(1);
            });
          };
          root.addEventListener("focusin", onFocus);
          return () => root.removeEventListener("focusin", onFocus);
        },
      );

      // Re-measure after real assets settle, not on every scroll event.
      const images = Array.from(root.querySelectorAll("img"));
      images.forEach((image) => {
        if (!image.complete) {
          image.addEventListener("load", scheduleRefresh);
          image.addEventListener("error", scheduleRefresh);
        }
      });
      document.fonts?.ready.then(scheduleRefresh);
      scheduleRefresh();

      return () => {
        mounted = false;
        images.forEach((image) => {
          image.removeEventListener("load", scheduleRefresh);
          image.removeEventListener("error", scheduleRefresh);
        });
        refreshLayout.kill();
        media.revert();
      };
    },
    { scope, dependencies: [pathname], revertOnUpdate: true },
  );
}
