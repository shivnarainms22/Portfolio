export const profile = {
  heroSubtitle: "AI Engineer • Research Systems • GPU & Robotics",
  heroTitle: ["Shivnarain", "Sarin"],
  heroDescription:
    "I build AI systems end to end: CUDA kernels, language models trained from scratch, autonomous agents, and the measurement harnesses that prove whether any of it actually works.",
  about: [
    "I am an MS in Artificial Intelligence student at Northeastern University working across the full depth of the stack: GPU kernels and training runs at one end, agentic products and real interfaces at the other.",
    "The thread through all of it is measurement. I care less about the demo than about whether the number survives scrutiny, so most of my work ships with the baseline pinned honestly, the negative results kept in, and the parts that were never verified written down.",
  ],
  focusAreas: [
    "Agentic AI systems",
    "GPU & kernel engineering",
    "Evaluation & benchmarking",
  ],
  openTo:
    "Open to AI engineer, research engineer, and applied ML roles where systems depth and honest evaluation matter as much as model quality.",
};

export const projects = [
  {
    title: "Cuda-Engine",
    desc: "Plain English plus a PyTorch reference in, a verified and benchmarked CUDA kernel out, packaged as an installable module that composes inside a torch.compile graph. Published on PyPI.",
    highlights: [
      "A five-stage LLM agent loop (interview → codegen → correctness gate → Nsight-driven perf repair → polish), provider-pluggable across Claude, OpenAI, and Gemini with per-stage model routing.",
      "The measurement harness is built to catch its own false positives: correctness is re-verified at the shape the kernel was timed at, and the baseline is torch.compile's fastest mode, not its first. 30/30 on the internal suite and 12/12 on a KernelBench subset on an A100; topk_fp32 hits 12.5×, and the bandwidth-bound ops that sit at parity are reported as parity.",
      "Every exported package ships a VERIFICATION.md stating what was checked and what was not, and export refuses any run whose correctness gate failed.",
    ],
    tags: ["Python", "CUDA", "Nsight", "torch.compile", "Claude API", "PyPI"],
    links: [
      { label: "PyPI", url: "https://pypi.org/project/cuda-engine/" },
      { label: "GitHub", url: "https://github.com/shivnarainms22/Cuda-Engine" },
    ],
  },
  {
    title: "Drone Ranger",
    desc: "Headless, reproducible bring-up of Isaac Sim 5.1 + Pegasus + PX4 SITL on ROS 2 Jazzy, with a supervised autonomy stack that patrols, confirms a target from camera evidence, holds a standoff, deters, and resumes.",
    highlights: [
      "Validated the perception to world bridge rather than assuming it: a camera detection became a WGS84 fix 0.19 m from a surveyed target, and produced no message at all once the target was removed.",
      "Full supervised mission in sim: target confirmed 2.0 s after first evidence, an 8 m standoff held at 7.31 m measured off the flown positions, geofence never violated, twice in one flight. The negative control flew a full lap with a live detector and never engaged.",
      "Characterised the failure mode instead of hiding it: a level forward camera is blind below 2.309 × altitude, so a surveyed ground camera takes over the fix at realistic altitude, giving 1972 fixes at ~12.7/s against ~2/s and holding the standoff outright at 8.04 m.",
    ],
    tags: ["Isaac Sim", "ROS 2 Jazzy", "PX4 SITL", "Pegasus", "Python"],
    links: [],
    note: "Private repository",
  },
  {
    title: "Workbench",
    desc: "A graph-grounded LLM reasoning system for lung adenocarcinoma, built at CalHacks and awarded Most Technical Hack. Upload a tumor mutation profile, watch it map onto a biological pathway graph, and ask an agent intervention questions. It answers by traversing a Neo4j knowledge graph and citing the exact subgraph it reasoned over.",
    highlights: [
      "Built the agentic core from scratch: the planner that turns a question into Cypher, the read-only execution layer, the reasoner that writes a mechanistic report with an intervention verdict, and the orchestrator tying them together. The planner is grounded in the graph as actually loaded, so the model cannot cite entities it never retrieved.",
      "Wrote the drug-routing module that returns variant-specific targeted therapies and hands uncovered variants to the ML fallback classifier, the Neo4j transport over the HTTP Query API on port 443 so it works behind networks that block Bolt, the reasoning subgraph rendered beside every answer, and most of the backend test suite.",
      "Took it to production on split Vercel and Render deployment, with chat stop, retry, and persistent history backed by agent memory, and node selection given precedence over the background profile so the agent reasons about what the user actually clicked.",
    ],
    tags: ["FastAPI", "Neo4j", "GraphRAG", "Claude API", "scikit-learn", "React"],
    links: [
      { label: "Live", url: "https://frontend-tan-two-ho66t3rmdo.vercel.app" },
      { label: "GitHub", url: "https://github.com/shivnarainms22/Workbench" },
    ],
    note: "CalHacks · Most Technical Hack · team of 4",
  },
  {
    title: "Research Agent",
    desc: "Autonomous research system that discovers papers, analyzes them with AI, proposes experiments, runs approved evaluations in Docker or Modal, and writes weekly reports, closing the loop from literature review to empirical result.",
    highlights: [
      "Connected ingestion, synthesis, experiment execution, retrieval, and reporting into one continuous loop.",
      "Guarded experiment execution with sandboxed containers, statistical analysis of results, and human approval gates before anything runs.",
    ],
    tags: ["Python", "Claude API", "ChromaDB", "Docker", "Modal", "Streamlit"],
    links: [
      { label: "GitHub", url: "https://github.com/shivnarainms22/Research-Agent" },
    ],
  },
  {
    title: "CUDA Vector Search Engine",
    desc: "GPU nearest-neighbor search written from scratch: four CUDA kernels, each adding exactly one optimization over the last, benchmarked on SIFT1M on an A100.",
    highlights: [
      "250× over the CPU baseline at 100% recall@10 (21.4 s → 86 ms at N=1M, D=128, K=10), from a column-major database layout giving stride-1 coalesced warp access.",
      "Reported the optimizations that didn't pay and why: shared-memory caching is neutral because the 512-byte query already fits in L1, and the fused warp top-K is 5× slower at K=10 because it trades one pass plus a sort for K passes over N.",
    ],
    tags: ["CUDA", "C++", "pybind11", "CMake", "A100"],
    links: [
      { label: "GitHub", url: "https://github.com/shivnarainms22/Vector-Search-Engine" },
    ],
  },
  {
    title: "StockX",
    desc: "Desktop AI stock-analysis agent for Windows: portfolio tracking, sector screening, commodity and macro monitoring, and geopolitical scenario analysis behind a multi-provider ReAct reasoning loop.",
    highlights: [
      "Built the quant layer properly: lookahead-safe vectorized backtesting with a full tearsheet, Markowitz mean-variance optimization, VaR, drawdown and factor stress tests, and a probit recession model fit on live FRED data.",
      "Shaped as a product rather than a notebook: 16-commodity macro dashboard, alerting with per-ticker cooldowns and confidence thresholds, and an LLM fallover chain so a dead provider doesn't kill the app.",
    ],
    tags: ["Python", "PyQt", "ChromaDB", "yfinance", "FRED / EIA", "LLMs"],
    links: [
      { label: "GitHub", url: "https://github.com/shivnarainms22/StockX" },
    ],
  },
  {
    title: "ResumeForge",
    desc: "AI resume tailoring product: maintain a master profile, paste a job description, and get a one-page ATS-optimized PDF with bullets rewritten to match the target role.",
    highlights: [
      "Full-stack workflow across React 19, FastAPI, async SQLAlchemy, PostgreSQL, and LaTeX PDF generation with automatic page-fit trimming.",
      "Profile bootstrapping from an existing resume, a GitHub account, or a crawled portfolio site, then domain-aware bullet ranking and rewriting that adds JD keywords without fabricating claims.",
    ],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "LaTeX", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/shivnarainms22/Resume-Forge" },
    ],
  },
  {
    title: "TwinMind Pro",
    desc: "Real-time AI meeting copilot that captures both sides of a browser-based call, transcribes each stream independently, and surfaces context-aware suggestions during the conversation.",
    highlights: [
      "Dual-stream capture over microphone plus tab audio, labeling every transcript line You or Them so the model can answer their question instead of restating your point.",
      "Groq transcription on a 30-second suggestion cadence, with click-to-expand answers streaming into an in-session chat panel.",
    ],
    tags: ["Next.js", "TypeScript", "Groq", "Web Audio", "Tailwind", "Vercel"],
    links: [
      { label: "Live", url: "https://twin-mind-s6wq.vercel.app/" },
      { label: "GitHub", url: "https://github.com/shivnarainms22/TM-Pro" },
    ],
  },
  {
    title: "Earlier Work",
    desc: "Selected earlier projects that shaped how I work now, across tooling, reinforcement learning, and retrieval.",
    highlights: [
      "Forge: property-based verification and safe auto-repair for LLM-generated Python, gated on introducing no new diagnostics.",
      "Tetris RL Agent: GPU-accelerated DQN with custom reward shaping and GA-optimized features.",
      "Research Paper Q&A: end-to-end RAG over papers with semantic search and source citations.",
    ],
    tags: [],
    links: [],
  },
];

export const research = [
  {
    title: "TinyLM",
    kindLabel: "Original work · 275M LM from scratch",
    desc:
      "A 275M-parameter language model built and trained from scratch with Multi-head Latent Attention (for KV-cache compression) and the Muon optimizer, benchmarked end-to-end against TinyLlama-1.1B.",
    highlights: [
      "Designed and ran a four-way ablation (MLA/MHA × Muon/AdamW) on Northeastern's A100 cluster, training on 8B tokens of FineWeb-Edu and evaluating on HellaSwag, ARC-Easy, LAMBADA, and Winogrande, with a pre-registered, falsifiable hypothesis and every result reported unedited.",
      "Headline finding: training-data quality dominates architecture at this scale. Fixing a data bug alone was worth +3.97 average points, roughly 2.6× the full architecture-and-optimizer gain of +1.52, with the best arm (MLA + Muon) landing within ~4.5% of TinyLlama-1.1B on ARC-Easy at roughly a quarter of the parameters.",
    ],
    tags: ["Python", "PyTorch", "MLA", "Muon", "lm-eval", "HuggingFace"],
    links: [
      { label: "Model", url: "https://huggingface.co/Shiv-22/tinylm" },
      { label: "Checkpoints", url: "https://huggingface.co/Shiv-22/tinylm-checkpoints-v2" },
      { label: "WandB", url: "https://wandb.ai/shivnarainms22-northeastern-university/tinylm/runs/dig7xsqf" },
      { label: "GitHub", url: "https://github.com/shivnarainms22/TinyLM" },
    ],
  },
  {
    title: "WModel",
    kindLabel: "Original work · head-to-head benchmark",
    desc:
      "Eight methods for detecting when a world model's imagined rollout has gone wrong appeared within roughly six months of 2026, each evaluated on its own setup and never against each other. This is the head-to-head: cost-matched, with objective divergence labels taken by stepping the real simulator alongside the imagined rollout under the same actions.",
    highlights: [
      "Headline: a 0.01-cost supervised detector beats every published-style method on 10 of 10 DeepMind Control tasks, median +0.111 AUROC, including beating a 5-member ensemble at 1/96,500th its attributable cost. The field stays unsupervised to avoid annotation cost, but a simulator supplies those labels for free.",
      "Two findings that only surfaced because the harness was built to look for them: reporting each detector at its own best threshold is not a comparison (ensemble disagreement reads 0.7984 at its best cell and 0.5204 at a score-blind paired operating point), and failing to step-normalise destroys ≥40% of the standard validation signal in 8 of 50 detector-task pairs, with 4 sign flips.",
      "Written up with two failed hypotheses kept in, and the limits stated: best lift anywhere is 3.3×, so a passing AUROC gate can still mean a near-worthless detector on a rare-positive problem.",
    ],
    tags: ["Python", "PyTorch", "DeepMind Control", "Conformal prediction", "AUROC / lift"],
    links: [],
    note: "Private repository",
  },
  {
    title: "DiffMamba",
    kindLabel: "Reproduction & analysis study",
    desc:
      "An independent reproduction testing whether a bidirectional Mamba-2 denoiser can match a parameter-matched Transformer (DiT) inside the MDLM masked-diffusion framework, at 50 to 130M scale on academic HPC.",
    highlights: [
      "Trained matched models from scratch on OpenWebText across a two-seed stability check, a 50 to 130M scaling study, and a learning-rate fairness sweep, plus the full systems bring-up: CUDA and driver matching, source-built kernels, and SLURM job-chaining around an 8-hour wall limit.",
      "Honest mixed result: at matched compute the Transformer wins on quality (~20% validation perplexity; tuning BiMamba's learning rate closes ~43% of the gap but not all of it), yet the bidirectional Mamba-2 backbone runs ~3× faster at long context (3.12× at 32K tokens, linear against the Transformer's near-quadratic scaling), matching prior work where only a hybrid backbone recovers quality.",
    ],
    tags: ["PyTorch Lightning", "Mamba-2", "MDLM", "A100 / SLURM", "OpenWebText"],
    links: [
      { label: "Report", url: "https://github.com/shivnarainms22/DiffMamba/blob/master/DiffMamba_Report.md" },
      { label: "GitHub", url: "https://github.com/shivnarainms22/DiffMamba" },
      { label: "Checkpoints", url: "https://huggingface.co/Shiv-22/diffmamba-checkpoints" },
    ],
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: [
      "Python",
      "PyTorch",
      "PyTorch Lightning",
      "HuggingFace",
      "LLM agent loops",
      "GraphRAG / retrieval",
      "lm-eval",
      "Weights & Biases",
    ],
  },
  {
    title: "GPU / Kernels",
    items: [
      "CUDA",
      "Nsight Compute",
      "torch.compile",
      "pybind11",
      "CMake",
      "A100 / SLURM",
    ],
  },
  {
    title: "Robotics / Sim",
    items: ["Isaac Sim", "ROS 2 Jazzy", "PX4 SITL", "Pegasus Simulator"],
  },
  {
    title: "Product",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
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
      "PostgreSQL",
      "Neo4j",
      "SQL / MySQL",
      "SQLAlchemy",
      "Redis",
    ],
  },
  {
    title: "Infra",
    items: ["Docker", "AWS", "Kubernetes", "Modal", "Vercel", "Render"],
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
    desc: "Browser-based ML game: 100+ interactive lessons across 14 worlds, in-browser model playgrounds, XP and boss challenges, and spaced-repetition review.",
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

export const navItems = ["About", "Experience", "Research", "Projects", "Leadership", "Skills", "Education", "Contact"];
