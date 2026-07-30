"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function reveal(target: HTMLElement) {
  const delay = target.dataset.revealDelay;
  if (delay) target.style.transitionDelay = `${delay}ms`;
  target.classList.add("in-view");
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    function sweep() {
      frame = 0;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)").forEach((el) => {
        // Reveal anything currently on screen or just below it, and anything already
        // scrolled past (a large jump — End key, scrollbar-track click, fast flick —
        // can skip an element between two scroll ticks and would otherwise leave it
        // hidden forever). The margin also absorbs sibling client islands (e.g. this
        // component) hydrating a tick later than the page content around it.
        if (el.getBoundingClientRect().top < window.innerHeight + 150) {
          reveal(el);
        }
      });
    }

    function onScrollOrResize() {
      if (frame) return;
      frame = requestAnimationFrame(sweep);
    }

    sweep();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
