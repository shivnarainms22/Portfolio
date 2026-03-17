import { useScrollReveal } from "../hooks/useScrollReveal";

export function Section({ children, id, label }) {
  const [ref, visible] = useScrollReveal();
  return (
    <section
      ref={ref}
      id={id}
      aria-label={label}
      className={`section ${visible ? "section--visible" : ""}`}
    >
      {children}
    </section>
  );
}
