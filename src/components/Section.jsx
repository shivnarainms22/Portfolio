import { useScrollReveal } from "../hooks/useScrollReveal";

export function Section({ children, id, label, className = "" }) {
  const [ref, visible] = useScrollReveal();
  return (
    <section
      ref={ref}
      id={id}
      aria-label={label}
      className={`section ${className} ${visible ? "section--visible" : ""}`.trim()}
    >
      {children}
    </section>
  );
}
