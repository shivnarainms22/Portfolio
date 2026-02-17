import { useState, useEffect, useRef, useCallback } from "react";
import logo from "/logo.png";

// Particle Canvas Background
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animFrame = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const init = () => {
      particles.current = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.25)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
        // mouse interaction
        const mdx = p.x - mouse.current.x, mdy = p.y - mouse.current.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - md / 120)})`;
          ctx.stroke();
        }
      }
      animFrame.current = requestAnimationFrame(draw);
    };

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const onMouse = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    init();
    draw();

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />;
};

// Scroll animation hook
const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const Section = ({ children, id }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <section ref={ref} id={id} style={{ ...styles.section, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 0.7s cubic-bezier(.4,0,.2,1)" }}>
      {children}
    </section>
  );
};

// Data
const projects = [
  { title: "Tetris Reinforcement Learning Agent", desc: "Built an intelligent Tetris agent using Deep Reinforcement Learning with custom reward shaping and GA-optimized features. Implemented GPU-accelerated DQN with experience replay and achieved 3× improvement in average lines cleared vs. baseline.", tags: ["Python", "PyTorch", "Reinforcement Learning"] },
  { title: "Research Paper RAG Assistant", desc: "End-to-end RAG system for querying research papers with semantic search and grounded responses. Built LLM-powered Q&A with source citations and integrated ChromaDB for efficient vector storage.", tags: ["Python", "LangChain", "ChromaDB", "FastAPI"] },
  { title: "Dog Breed Identification Model", desc: "Multiclass image classification using transfer learning on 10k+ images. Achieved 88% validation accuracy using MobileNetV2 fine-tuning with data augmentation and regularization techniques.", tags: ["Python", "TensorFlow", "Computer Vision"] },
  { title: "Online Bookstore", desc: "Secure e-commerce platform with JWT authentication and RBAC. Reduced checkout latency by 40% through optimized SQL queries and containerized with Docker for multi-container deployment.", tags: ["Java", "Spring Boot", "React", "Docker"] },
];

const skills = {
  "Languages": ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"],
  "AI / ML": ["LLMs", "PyTorch", "TensorFlow", "Agentic AI", "Computer Vision", "Deep Learning", "Reinforcement Learning"],
  "Research Focus": ["Vision-Language-Action Models", "World Models", "Embodied AI", "Multimodal Learning"],
  "Frameworks": ["React", "Spring Boot", "FastAPI", "Node.js", "REST APIs", "LangChain"],
  "Tools & Platforms": ["Docker", "Kubernetes", "Git", "Postman", "VS Code", "Jupyter Notebook", "Google Colab"],
};

const education = [
  { role: "Master of Science in Artificial Intelligence", org: "Northeastern University", period: "Sep 2025 – May 2027" },
  { role: "Bachelor of Technology in Electrical & Electronics Engineering", org: "APJ Abdul Kalam Technological University", period: "Oct 2020 – May 2024" },
];

const experience = [
  { role: "AI Research & Development", org: "Independent", period: "Ongoing", desc: "Building projects spanning computer vision, reinforcement learning, RAG systems, and world models. Exploring Vision-Language-Action models, Embodied AI, and multimodal learning." },
];

const contactInfo = {
  email: "shivnarainms22@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivnarain-sarin-3a5277269/",
  github: "https://github.com/shivnarainms22"
};

const navItems = ["About", "Projects", "Skills", "Education", "Contact"];

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("About");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["about", "projects", "skills", "education", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveNav(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.page}>
      <ParticleBackground />

      {/* Navbar */}
      <nav style={{ ...styles.nav, backdropFilter: "blur(12px)", backgroundColor: scrollY > 50 ? "rgba(255,255,255,0.85)" : "transparent", boxShadow: scrollY > 50 ? "0 1px 12px rgba(0,0,0,0.06)" : "none" }}>
        <div style={styles.navInner}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <div style={styles.navLinks}>
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ ...styles.navBtn, color: activeNav === item ? "#4f46e5" : "#64748b", fontWeight: activeNav === item ? 600 : 400 }}>
                {item}
                {activeNav === item && <span style={styles.navUnderline} />}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={styles.heroGreeting}>Hi, I'm</p>
          <h1 style={styles.heroName}>Shivnarain</h1>
          <p style={styles.heroSub}>MS in AI @ Northeastern University · Machine Learning Engineer · AI Researcher</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, justifyContent: "center" }}>
            <button onClick={() => scrollTo("projects")} style={styles.btnPrimary}>View Projects</button>
            <button onClick={() => scrollTo("contact")} style={styles.btnSecondary}>Contact Me</button>
          </div>
        </div>
      </header>

      <div style={styles.content}>
        {/* About */}
        <Section id="about">
          <h2 style={styles.h2}>About Me</h2>
          <div style={styles.aboutCard}>
            <p style={styles.aboutText}>
              I'm an <strong>AI Researcher</strong> and <strong>Graduate Student</strong> passionate about building intelligent systems. Currently pursuing my <strong>MS in Artificial Intelligence at Northeastern University</strong> (2025-2027).
            </p>
            <p style={styles.aboutText}>
              I'm focused on <strong>Vision-Language-Action (VLA) models</strong>, <strong>Agentic AI</strong>, and <strong>World Models</strong>. My work explores Embodied AI, Multimodal learning, and Interpretability in AI with experience in Deep Learning, Reinforcement Learning, and LLM applications.
            </p>
            <p style={styles.aboutText}>
              Fun fact: Trained a Tetris RL agent that predicts future game states and plans 3× better than baseline!
            </p>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects">
          <h2 style={styles.h2}>Projects</h2>
          <div style={styles.grid}>
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills">
          <h2 style={styles.h2}>Skills & Tech Stack</h2>
          <div style={styles.skillsGrid}>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={styles.skillCategory}>
                <h3 style={styles.skillCatTitle}>{cat}</h3>
                <div style={styles.tagWrap}>
                  {items.map((s) => <span key={s} style={styles.skillTag}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education">
          <h2 style={styles.h2}>Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {education.map((e, i) => (
              <div key={i} style={styles.expCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={styles.expRole}>{e.role}</h3>
                    <p style={styles.expOrg}>{e.org}</p>
                  </div>
                  <span style={styles.expPeriod}>{e.period}</span>
                </div>
                <p style={styles.expDesc}>{e.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <h2 style={styles.h2}>Contact Me</h2>
          <div style={styles.aboutCard}>
            <p style={styles.aboutText}>
              I'm always open to discussing new projects, collaborations, or opportunities in AI/ML. Feel free to reach out!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
              <a href={`mailto:${contactInfo.email}`} style={styles.contactLink}>
                <div style={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>Email</div>
                  <div style={styles.contactValue}>{contactInfo.email}</div>
                </div>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                <div style={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>LinkedIn</div>
                  <div style={styles.contactValue}>Shivnarain Sarin</div>
                </div>
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                <div style={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <div>
                  <div style={styles.contactLabel}>GitHub</div>
                  <div style={styles.contactValue}>@shivnarainms22</div>
                </div>
              </a>
            </div>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{ margin: 0, color: "#94a3b8", fontSize: 14 }}>© 2026 Shivnarain · Built with passion</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, desc, tags }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(79,70,229,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
        borderColor: hovered ? "#c7d2fe" : "#e2e8f0",
      }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #eef2ff, #e0e7ff)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      <div style={styles.tagWrap}>
        {tags.map((t) => <span key={t} style={styles.tag}>{t}</span>)}
      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#fafbff", color: "#1e293b", minHeight: "100vh", position: "relative" },
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s ease" },
  navInner: { maxWidth: 900, margin: "0 auto", padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { width: 40, height: 40, borderRadius: "50%", objectFit: "cover" },
  navLinks: { display: "flex", gap: 6 },
  navBtn: { background: "none", border: "none", cursor: "pointer", fontSize: 14, padding: "6px 12px", borderRadius: 6, position: "relative", transition: "color 0.2s" },
  navUnderline: { position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 2, background: "#4f46e5", borderRadius: 1 },
  hero: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px", position: "relative" },
  heroGreeting: { fontSize: 18, color: "#6366f1", fontWeight: 500, marginBottom: 8, letterSpacing: 1 },
  heroName: { fontSize: 56, fontWeight: 800, color: "#1e293b", margin: "0 0 12px", letterSpacing: -2, lineHeight: 1.1 },
  heroSub: { fontSize: 18, color: "#64748b", fontWeight: 400 },
  btnPrimary: { padding: "12px 28px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", display: "inline-flex", alignItems: "center" },
  btnSecondary: { padding: "12px 28px", background: "transparent", color: "#4f46e5", border: "2px solid #c7d2fe", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", display: "inline-flex", alignItems: "center" },
  content: { maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 },
  section: { paddingTop: 80, paddingBottom: 40 },
  h2: { fontSize: 32, fontWeight: 700, color: "#1e293b", marginBottom: 32, letterSpacing: -0.5 },
  aboutCard: { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", borderRadius: 16, padding: 32, border: "1px solid #e2e8f0" },
  aboutText: { fontSize: 16, lineHeight: 1.75, color: "#475569", margin: "0 0 16px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 },
  card: { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 14, padding: 24, border: "1px solid #e2e8f0", transition: "all 0.3s cubic-bezier(.4,0,.2,1)", cursor: "default" },
  cardTitle: { fontSize: 17, fontWeight: 650, color: "#1e293b", margin: "0 0 8px" },
  cardDesc: { fontSize: 14, lineHeight: 1.6, color: "#64748b", margin: "0 0 14px" },
  tagWrap: { display: "flex", flexWrap: "wrap", gap: 6 },
  tag: { fontSize: 12, padding: "4px 10px", background: "#eef2ff", color: "#4f46e5", borderRadius: 6, fontWeight: 500 },
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 },
  skillCategory: { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", borderRadius: 14, padding: 24, border: "1px solid #e2e8f0" },
  skillCatTitle: { fontSize: 15, fontWeight: 650, color: "#4f46e5", margin: "0 0 14px" },
  skillTag: { fontSize: 13, padding: "5px 12px", background: "#f1f5f9", color: "#475569", borderRadius: 8, fontWeight: 500 },
  expCard: { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)", borderRadius: 14, padding: 24, border: "1px solid #e2e8f0" },
  expRole: { fontSize: 17, fontWeight: 650, color: "#1e293b", margin: 0 },
  expOrg: { fontSize: 14, color: "#6366f1", fontWeight: 500, margin: "2px 0 0" },
  expPeriod: { fontSize: 13, color: "#94a3b8", fontWeight: 500, background: "#f1f5f9", padding: "4px 12px", borderRadius: 6 },
  expDesc: { fontSize: 14, lineHeight: 1.65, color: "#64748b", marginTop: 12, marginBottom: 0 },
  contactLink: { display: "flex", alignItems: "center", gap: 16, padding: 16, background: "#f8fafc", borderRadius: 10, textDecoration: "none", transition: "all 0.2s", border: "1px solid #e2e8f0" },
  contactIcon: { width: 48, height: 48, borderRadius: 10, background: "linear-gradient(135deg, #eef2ff, #e0e7ff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  contactLabel: { fontSize: 12, color: "#94a3b8", fontWeight: 500, marginBottom: 4 },
  contactValue: { fontSize: 15, color: "#1e293b", fontWeight: 600 },
  footer: { textAlign: "center", padding: "40px 24px", position: "relative", zIndex: 1 },
};