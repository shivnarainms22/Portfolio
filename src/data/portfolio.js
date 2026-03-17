export const projects = [
  {
    title: "Research Agent",
    desc: "Autonomous research pipeline that discovers papers from arXiv and Semantic Scholar, analyzes them with Claude, runs experiments in Docker sandboxes or Modal cloud GPUs, and generates weekly narrative reports.",
    tags: ["Python", "Claude API", "ChromaDB", "Docker", "Streamlit"],
    github: "https://github.com/shivnarainms22/Research-Agent",
  },
  {
    title: "StockX",
    desc: "AI-powered local stock analysis app with a ReAct reasoning loop, technical and fundamental analysis, portfolio P&L tracking, sector heatmaps, and real-time alerts.",
    tags: ["Python", "PyQt", "ChromaDB", "yfinance", "LLMs"],
    github: "https://github.com/shivnarainms22/StockX",
  },
  {
    title: "Tetris Reinforcement Learning Agent",
    desc: "Deep RL Tetris agent with custom reward shaping and GA-optimized features. GPU-accelerated DQN with experience replay achieving 3\u00d7 improvement over baseline.",
    tags: ["Python", "PyTorch", "Reinforcement Learning"],
    github: "https://github.com/shivnarainms22",
  },
  {
    title: "Research Paper RAG Assistant",
    desc: "End-to-end RAG system for querying research papers with semantic search, grounded responses, and source citations via ChromaDB vector storage.",
    tags: ["Python", "LangChain", "ChromaDB", "FastAPI"],
    github: "https://github.com/shivnarainms22",
  },
  {
    title: "Dog Breed Identification Model",
    desc: "Multiclass image classification using MobileNetV2 transfer learning on 10k+ images. 88% validation accuracy with data augmentation and regularization.",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    github: "https://github.com/shivnarainms22",
  },
  {
    title: "Online Bookstore",
    desc: "Secure e-commerce platform with JWT auth and RBAC. Reduced checkout latency 40% through optimized SQL and containerized multi-container deployment.",
    tags: ["Java", "Spring Boot", "React", "Docker"],
    github: "https://github.com/shivnarainms22",
  },
];

export const skills = [
  "Python", "Java", "JavaScript", "TypeScript", "SQL",
  "PyTorch", "TensorFlow", "React", "Next.js", "FastAPI",
  "Spring Boot", "Node.js", "LangChain", "PostgreSQL", "MySQL",
  "Docker", "AWS", "Git", "Kubernetes", "SQLAlchemy", "ChromaDB",
];

export const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    school: "Northeastern University",
    period: "2025 \u2014 2027",
  },
  {
    degree: "Bachelor of Technology in Electrical & Electronics Engineering",
    school: "APJ Abdul Kalam Technological University",
    period: "2020 \u2014 2024",
  },
];

export const contactInfo = {
  email: "shivnarainms22@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivnarain-sarin-3a5277269/",
  github: "https://github.com/shivnarainms22",
};

export const navItems = ["About", "Projects", "Skills", "Education"];
