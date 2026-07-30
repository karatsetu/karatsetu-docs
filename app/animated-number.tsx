"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let started = false;
    let frame = 0;

    function start() {
      started = true;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        setDisplay(value);
        return;
      }
      const startTime = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // A plain IntersectionObserver can miss this element entirely if a fast
    // scroll (flick, End key, scrollbar-track click) jumps it from below to
    // above the viewport between two check-cycles. Sweep on scroll/resize too
    // so the counter can never get stuck at 0.
    function sweep() {
      frame = 0;
      if (started) return;
      // Generous margin: a sibling client island (e.g. ScrollReveal) may hydrate
      // a tick later than this component and briefly leave an ancestor .reveal
      // transform in place, skewing this element's measured position by ~20-30px.
      if (node!.getBoundingClientRect().top < window.innerHeight + 200) start();
    }

    function onScrollOrResize() {
      if (frame || started) return;
      frame = requestAnimationFrame(sweep);
    }

    // Defer the first check by a frame: a sibling .reveal element (e.g. this
    // number's own ancestor card) may still be sitting at its pre-transition
    // transform when this effect runs, which would shift this element's
    // measured position and cause a false "not visible yet" reading.
    frame = requestAnimationFrame(sweep);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
