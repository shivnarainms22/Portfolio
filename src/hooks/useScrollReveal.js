import { useState, useEffect, useRef } from "react";

const revealImmediately =
  typeof window === "undefined" ||
  typeof IntersectionObserver === "undefined" ||
  (window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches);

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  // Show content right away when motion is reduced or IntersectionObserver is
  // unavailable, so sections are never left stuck at opacity: 0.
  const [visible, setVisible] = useState(revealImmediately);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, visible]);

  return [ref, visible];
}
