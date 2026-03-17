import "./Hero.css";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__subtitle">AI Engineer &amp; Researcher</div>
      <h1 className="hero__name">Shivnarain<br />Sarin</h1>
      <div className="hero__divider" />
      <p className="hero__desc">
        Building intelligent systems at the intersection of research and engineering.
      </p>
      <div className="hero__cta">
        <a href="#projects" className="hero__cta-primary">View Work</a>
        <a href="#contact" className="hero__cta-secondary">Get in Touch</a>
      </div>
      <div className="hero__chevron" aria-hidden="true">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l7 7 7-7" />
        </svg>
      </div>
    </header>
  );
}
