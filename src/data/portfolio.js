export const profile = {
  heroSubtitle: "AI Engineer • Research Systems • Product Builder",
  heroTitle: ["Shivnarain", "Sarin"],
  heroDescription:
    "I build agentic AI products, research automation pipelines, and real-time interfaces that turn strong models into usable systems.",
  about: [
    "I am an MS in Artificial Intelligence student at Northeastern University focused on the engineering side of modern AI: retrieval, agents, experimentation, and product delivery.",
    "The work I enjoy most sits between research depth and product execution. I like taking a problem from model behavior and system design all the way to the interface someone actually uses.",
  ],
  focusAreas: [
    "Agentic AI systems",
    "Research automation",
    "Real-time AI UX",
  ],
  openTo:
    "Open to AI engineer, applied ML, and research engineer roles where end-to-end product execution matters as much as model quality.",
};

export const projects = [
  {
    title: "Research Agent",
    kind: "Research system",
    visualCode: "RA",
    desc: "Autonomous research system that discovers papers, analyzes them with AI, proposes experiments, runs approved evaluations, and writes weekly reports.",
    highlights: [
      "Connected ingestion, synthesis, experiment execution, retrieval, and reporting in one loop.",
      "Added guarded experiment execution with Docker sandboxes, statistical analysis, and approval gates.",
    ],
    tags: ["Python", "Claude API", "ChromaDB", "Docker", "Streamlit"],
    github: "https://github.com/shivnarainms22/Research-Agent",
  },
  {
    title: "StockX",
    kind: "Desktop AI product",
    visualCode: "SX",
    desc: "Desktop AI stock analysis agent for Windows with portfolio tracking, sector screening, macro monitoring, and a multi-provider ReAct reasoning loop.",
    highlights: [
      "Built a product-style desktop interface instead of a notebook-first finance tool.",
      "Layered technical, fundamental, and geopolitical analysis with resilient persistence and alerts.",
    ],
    tags: ["Python", "PyQt", "ChromaDB", "yfinance", "LLMs"],
    github: "https://github.com/shivnarainms22/StockX",
  },
  {
    title: "TwinMind Pro",
    kind: "Realtime AI interface",
    visualCode: "TM",
    desc: "Real-time AI meeting copilot that captures both sides of a browser-based call, transcribes each stream independently, and surfaces context-aware suggestions during the conversation.",
    highlights: [
      "Built dual-stream capture with microphone plus tab audio labeling speakers as You and Them.",
      "Combined Groq transcription with an in-session chat workflow for fast follow-up answers.",
    ],
    tags: ["Next.js", "Groq", "Web Audio", "Tailwind", "Vercel"],
    github: "https://github.com/shivnarainms22/TM-Pro",
  },
  {
    title: "ResumeForge",
    kind: "Full-stack AI product",
    visualCode: "RF",
    desc: "AI resume tailoring product that analyzes a job description, matches experience bullets, rewrites them responsibly, and exports an ATS-optimized one-page PDF.",
    highlights: [
      "Shipped a full-stack workflow across React, FastAPI, PostgreSQL, and LaTeX PDF generation.",
      "Added bullet ranking and rewrite steps that optimize for keyword coverage without fabricating claims.",
    ],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/shivnarainms22/Resume-Forge",
  },
  {
    title: "AI Briefing",
    kind: "Intelligence workspace",
    visualCode: "AB",
    desc: "Production-oriented intelligence workspace for tracking research, markets, and competitor signals across a full-stack data and automation pipeline.",
    highlights: [
      "Structured the stack around Next.js, FastAPI, PostgreSQL, Redis, background jobs, and Docker Compose.",
      "Positioned the product around operational signal tracking rather than one-off AI chat.",
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Earlier Work",
    kind: "Foundation projects",
    visualCode: "EW",
    desc: "Selected earlier projects that helped shape my current work across ML, retrieval, and full-stack engineering.",
    highlights: [
      "Tetris Reinforcement Learning Agent",
      "Research Paper Q&A System (RAG)",
      "Shopping Assistance System for Visually Challenged People",
      "Online Bookstore",
      "Dog Breed Identification Model",
    ],
    tags: [],
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "ChromaDB",
      "Claude API",
      "Groq",
      "LLM workflows",
    ],
  },
  {
    title: "Product",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "PyQt",
      "Tailwind CSS",
      "Web Audio APIs",
      "UX for AI tools",
    ],
  },
  {
    title: "Backend",
    items: [
      "Java",
      "Node.js",
      "FastAPI",
      "Spring Boot",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "Redis",
      "yfinance",
      "LaTeX / PDF generation",
    ],
  },
  {
    title: "Infra",
    items: ["Docker", "AWS", "Kubernetes", "Git", "Vercel"],
  },
];

export const experience = [
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    period: "Sep 2024 — Jun 2025",
    summary:
      "Worked on full-stack product delivery in an Agile environment across backend services, frontend implementation, testing, and release quality.",
    bullets: [
      "Built and shipped features using Java Spring Boot and React, integrating JavaScript, HTML/CSS, and SQL.",
      "Reduced API latency by 30% through profiling, backend cleanup, and better database interaction patterns.",
      "Improved release stability by increasing unit test coverage by 25% and contributing to peer code reviews.",
      "Collaborated with QA, design, and product stakeholders in a fast-paced cross-functional team.",
    ],
  },
];

export const leadership = [
  {
    title: "IEEE MEC Student Branch",
    role: "Volunteer",
    period: "2023 — 2024",
    bullets: [
      "Organized 2+ hackathons and multiple technical workshops for 100+ student participants.",
      "Managed end-to-end event logistics including scheduling, vendor coordination, and volunteer assignments.",
      "Coordinated industry-focused exhibitions with 5+ companies and 200+ attendees.",
    ],
  },
  {
    title: "EMF MEC",
    role: "Volunteer",
    period: "2022 — 2024",
    bullets: [
      "Supported planning and execution of workshops, exhibitions, and student events.",
      "Worked with interdisciplinary teams to create collaborative learning environments on campus.",
    ],
  },
  {
    title: "Seminar Presenter",
    role: "ML for Predictive Maintenance in Industry 4.0",
    period: "2024",
    bullets: [
      "Delivered a technical seminar translating machine learning research into practical industrial examples.",
      "Presented to a mixed-background student audience of 50+ and created supporting presentation materials.",
    ],
  },
];

export const interactiveBuilds = [
  {
    title: "AI Pipeline",
    desc: "Interactive field guide to the infrastructure, systems, and supply chain behind frontier AI.",
    url: "https://frontier-stack-atlas.vercel.app/",
  },
  {
    title: "ML Quest",
    desc: "Game-like machine learning learning experience with interactive lessons, visualizations, and model playgrounds.",
    url: "https://ml-quest.vercel.app/",
  },
];

export const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    school: "Northeastern University",
    period: "2025 — 2027",
  },
  {
    degree: "Bachelor of Technology in Electrical & Electronics Engineering",
    school: "APJ Abdul Kalam Technological University",
    period: "2020 — 2024",
  },
];

export const contactInfo = {
  email: "shivnarainms22@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivnarain-sarin-3a5277269/",
  github: "https://github.com/shivnarainms22",
};

export const navItems = ["About", "Experience", "Projects", "Leadership", "Skills", "Education", "Contact"];
