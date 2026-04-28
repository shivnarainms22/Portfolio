import "./Hero.css";
import { profile, contactInfo } from "../data/portfolio";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__subtitle">{profile.heroSubtitle}</div>
      <h1 className="hero__name">
        {profile.heroTitle[0]}
        <br />
        {profile.heroTitle[1]}
      </h1>
      <div className="hero__divider" />
      <p className="hero__desc">{profile.heroDescription}</p>
      <div className="hero__cta">
        <a href="#projects" className="hero__cta-primary">View Work</a>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hero__cta-secondary"
        >
          GitHub
        </a>
      </div>
      <div className="hero__chevron" aria-hidden="true">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l7 7 7-7" />
        </svg>
      </div>
    </header>
  );
}
