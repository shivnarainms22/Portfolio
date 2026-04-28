import { useState, useEffect } from "react";
import { navItems, contactInfo, profile } from "./data/portfolio";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { InteractiveBuilds } from "./components/InteractiveBuilds";
import { Projects } from "./components/Projects";
import { Leadership } from "./components/Leadership";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import "./App.css";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <a href="#main" className="skip-link">Skip to main content</a>

      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} aria-label="Main navigation">
        <a href="#" className="nav__logo">
          <img src="/Portfolio/logo.png" alt="Shivnarain Sarin logo" className="nav__logo-img" />
        </a>
        <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="nav__toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
      </nav>

      <Hero />

      <main id="main">
        <About />
        <Experience />
        <Projects />
        <InteractiveBuilds />
        <Leadership />
        <Skills />
        <Education />
      </main>

      <footer className="footer" id="contact">
        <h2 className="footer__heading">Open to building ambitious AI products.</h2>
        <p className="footer__text">{profile.openTo}</p>
        <div className="footer__links">
          <a href={`mailto:${contactInfo.email}`} className="footer__link">Email</a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
        </div>
        <div className="footer__copy">&copy; 2026 Shivnarain Sarin</div>
      </footer>
    </div>
  );
}
