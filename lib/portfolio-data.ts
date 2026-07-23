// Single source of truth for all portfolio content.
// Edit this file to customize the portfolio with your own details.

export const profile = {
  name: "Gaddam Viswavijeth",
  handle: "viswa-eats-tech",

  role: "Software Engineer | Full-Stack Developer | AI Enthusiast",

  tagline:
    "Building scalable backend systems, distributed applications, and AI-powered products.",

  location: "Visakhapatnam, India",

  avatarInitials: "GV",

  email: "cs23bt076@iitdh.ac.in",

  phone: "+91 7842909100",

  website: "https://viswaportfolio-td.vercel.app",

  github: "https://github.com/viswa-eats-tech",
  githubUser: "viswa-eats-tech",

  linkedin: "https://www.linkedin.com/in/gaddam-viswavijeth-76b719295/",

  instagram: "https://www.instagram.com/vis_whooo/",

  bio: [
    "I'm a Computer Science undergraduate at IIT Dharwad passionate about building scalable backend systems, distributed applications, and AI-powered products. I enjoy turning complex ideas into clean, reliable software.",

    "Outside of coding, you'll usually find me at the gym, swimming, listening to music, or diving into films—I'm a huge cinephile who enjoys everything from commercial blockbusters to thought-provoking cinema.",

    "When I'm not doing any of that, I'm probably grinding ranked games, exploring new technologies, contributing to side projects, or learning something that makes me a better engineer.",
  ],
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Advanced Application Engineering Analyst Intern",
    period: "May 2026 — Jul 2026",
    location: "Chennai, India",
    summary:
      "Researched enterprise Agentic AI adoption in the Japanese market and developed AI-powered solutions for elder care.",
    highlights: [
      "Conducted market research on enterprise Agentic AI adoption in the Japanese market, authoring a technical white paper analyzing buyer demand, AI governance, cloud ecosystems, and deployment opportunities across healthcare, manufacturing, BFSI, retail, and government sectors.",
      "Built a prototype called ElderCareAI, a multi-agent AI system for Japanese elder care facilities, orchestrating specialized agents for ML-based health anomaly detection, fall-risk monitoring, caregiver scheduling, and LLM-generated caregiver summaries using Ollama + LLaMA2, with an offline-first architecture for edge deployment.",
      "Identified white-space opportunities for Agentic AI adoption across multiple industries and proposed domain-specific enterprise solutions and investment opportunities, enabling Accenture to evaluate potential AI service offerings for the Japanese market.",
    ],
    tags: [
      "Agentic AI",
      "Ollama",
      "LLaMA2",
      "scikit-learn",
      "Flask",
      "SQLite",
      "Machine Learning",
      "Research",
    ],
  },

  {
    company: "TP Vision",
    role: "Software Development Engineer Intern",
    period: "May 2025 — Jul 2025",
    location: "Bengaluru, India",
    summary:
      "Developed scalable backend services and enterprise admin portal features for display device management.",
    highlights: [
      "Developed scalable RESTful APIs using Fastify and TypeBox with MongoDB and PostgreSQL, implementing a hybrid backend architecture integrated with GraphQL for efficient data retrieval; developed responsive, component-driven interfaces for the Admin Portal using React.js.",
      "Designed and implemented the Unclaim workflow within the Admin Portal, enabling secure revocation and reassignment of display licenses and application subscriptions for deactivated devices across customer accounts.",
      "Developed a centralized display management interface in the Admin Portal to streamline device monitoring, management, and operational workflows.",
      "Integrated AWS Simple Email Service (SES) for secure transactional email delivery, enabling authentication and authorization of the Unclaim workflow while reducing manual intervention.",
    ],
    tags: [
      "Fastify",
      "TypeBox",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "React.js",
      "AWS SES",
      "REST API",
    ],
  },
]

export type Project = {
  name: string
  description: string
  longDescription: string
  tags: string[]
  link: string
  repo: string
  accent: string
  year: string
  showInResume: boolean
}

export const projects: Project[] = [
  {
    name: "Wellness Centre Notification System",
    description:
      "Real-time IoT nurse-call system with Node.js/Socket.IO backend, React Native mobile app, and live TV displays.",
    longDescription:
      "Designed and developed a real-time bidirectional communication backend using Node.js, Express.js, and Socket.IO, serving three concurrent client types — React Native mobile app, nurse station display, and reception TV — with sub-second event propagation. Architected a REST + WebSocket hybrid API with role-based authentication and CIDR-based IP validation for network-layer access control. Deployed on a Raspberry Pi display server with PM2 for zero-touch boot operation.",
    tags: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "React Native",
      "Raspberry Pi",
      "PM2",
      "REST API",
      "WebSocket",
    ],
    link: "",
    repo: "https://github.com/viswa-eats-tech/WellnessCentreBuzzerApp.",
    accent: "#0A84FF",
    year: "2026",
    showInResume: true,
  },

  {
    name: "ElderCareAI — Multi-Agent AI System",
    description:
      "Offline-first multi-agent AI system for elderly care with health monitoring, fall detection, reminders, and LLM-generated caregiver summaries.",
    longDescription:
      "Developed a modular, privacy-first multi-agent AI system for elder care facilities. Built specialized agents for ML-based health anomaly detection (vitals monitoring), fall-risk assessment, medication/appointment reminders, and natural language caregiver summaries using Ollama + LLaMA2. Features an offline-first architecture with SQLite persistence, ideal for edge deployment in low-connectivity environments.",
    tags: [
      "Agentic AI",
      "Ollama",
      "LLaMA2",
      "scikit-learn",
      "Python",
      "Flask",
      "SQLite",
      "Machine Learning",
    ],
    link: "",
    repo: "https://github.com/viswa-eats-tech/ElderCareAi",
    accent: "#10B981",
    year: "2026",
    showInResume: true,
  },

  {
    name: "DataFort — Blockchain-Based Secure File Storage",
    description:
      "Distributed file storage platform using a private permissioned blockchain and decentralized IPFS storage.",
    longDescription:
      "Developed the complete Node.js/Express.js backend implementing all server-side routes for user registration, login, file upload, and retrieval. Engineered the file ingestion pipeline streaming files to a local IPFS node, persisting content hashes (CIDs) to MongoDB. Implemented session-based authentication with role-based access control, and integrated the Exonum private permissioned blockchain (Proof of Authority) for tamper-evident audit trails.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "IPFS",
      "Exonum Blockchain",
      "Proof of Authority",
      "REST API",
    ],
    link: "",
    repo: "https://github.com/viswa-eats-tech/DataFort-Inc.",
    accent: "#30D158",
    year: "2024",
    showInResume: true,
  },

  {
    name: "College Library Management System",
    description:
      "Full-stack library portal with role-based access; backend-led contribution.",
    longDescription:
      "Developed the complete Node.js/Express.js backend implementing all RESTful API routes for book issuance, returns, reservations, and availability queries, with session middleware enforcing role-based access control between admin and student accounts. Designed the MySQL relational schema and wrote optimized queries for real-time availability checks and overdue detection. Integrated EJS server-side templating for role-specific dashboards.",
    tags: [
      "Node.js",
      "Express.js",
      "MySQL",
      "EJS",
      "REST API",
      "Session Auth",
    ],
    link: "",
    repo: "https://github.com/viswa-eats-tech/The-DOMinators",
    accent: "#FF9F0A",
    year: "2024",
    showInResume: true,
  },
  {
    name: "The Vardhan Store",
    description:
      "Premium ornament e-commerce platform with user portal, admin dashboard, and Supabase-powered backend.",
    longDescription:
      "Built a full-stack e-commerce platform for premium ornaments using React 18, TypeScript, and Tailwind CSS. Implemented a user portal with product browsing, category filtering, and search, alongside a secure admin dashboard for inventory management. Designed a PostgreSQL schema on Supabase with Row Level Security across five tables and integrated Supabase Auth for session-based email/password authentication. Deployed on Vercel with a CI/CD pipeline via GitHub Actions.",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vite",
      "React Router",
    ],
    link: "https://vardan-store.vercel.app/",
    repo: "https://github.com/viswa-eats-tech/Vardhan-Store",
    accent: "#FF6B6B",
    year: "2025",
    showInResume: false,
  },

  {
    name: "Abhikalpa — IIT Dharwad Design Club Website",
    description:
      "Official web platform for Abhikalpa, the Design Club of IIT Dharwad, with auth, merch cart, and animated landing page.",
    longDescription:
      "Built the full-stack website for Abhikalpa, IIT Dharwad's design club, using React, Vite, and Tailwind CSS. Implemented a component-driven frontend with cursor-reactive hero animations, scroll-triggered reveals via Intersection Observer, a trivia carousel, featured works grid, and an interactive design challenge generator. Integrated Supabase Auth for user login, signup, and persistent sessions, along with a merch page and cart system using React Context. Built a Node.js/Express backend with Nodemailer for HTML-styled transactional emails via a contact form API. Deployed on Vercel with a ~85KB gzipped production bundle.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Node.js",
      "Express",
      "Nodemailer",
      "JavaScript",
    ],
    link: "https://designclub-beta.vercel.app",
    repo: "https://github.com/viswa-eats-tech/IITDH_Design_Club_Website",
    accent: "#A855F7",
    year: "2025",
    showInResume: false,
  },

  {
    name: "ML Model Benchmarking — AI Course Project",
    description:
      "Comparative ML study implementing Linear Regression, Polynomial Regression, KNN, and Neural Networks from scratch with full performance analysis.",
    longDescription:
      "Implemented and benchmarked four machine learning models — Linear Regression, Polynomial Regression, KNN Classifier, and Neural Network (both classification and regression) — as part of the AI course at IIT Dharwad. Built a data preprocessing pipeline for train/val/test splits, trained each model, and evaluated performance using dedicated metrics CSVs. Developed a PerformanceAnalyser module for cross-model comparison across error and accuracy metrics.",
    tags: [
      "Python",
      "NumPy",
      "scikit-learn",
      "Neural Networks",
      "KNN",
      "Linear Regression",
      "Jupyter Notebook",
    ],
    link: "",
    repo: "https://github.com/viswa-eats-tech/AI-Project",
    accent: "#F59E0B",
    year: "2025",
    showInResume: false,
  },

  {
    name: "Processor & Cache Simulator — CS311 Lab",
    description:
      "Simulators for a custom RISC-based ISA and pipelined processor with cache hierarchy analysis, built as IIT Dharwad coursework.",
    longDescription:
      "Developed simulators for a custom RISC-based ISA and pipelined processor across 6 lab assignments and an end-semester exam. Simulated cache hierarchies and analyzed hit/miss rates for performance optimization. Verified correctness through custom-written assembly programs.",
    tags: ["Java", "Python", "Assembly", "Computer Architecture", "RISC", "Cache Simulation"],
    link: "",
    repo: "https://github.com/viswa-eats-tech/CS311-Computer-Architecture-Lab",
    accent: "#06B6D4",
    year: "2025",
    showInResume: false,
  },
]

export type SkillGroup = {
  category: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 85 },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 92 },
      { name: "Fastify", level: 88 },
      { name: "GraphQL", level: 88 },
      { name: "Socket.IO", level: 85 },
      { name: "REST API", level: 92 },
    ],
  },

  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "React Native", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 82 },
      { name: "EJS", level: 80 },
    ],
  },

  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "SQLite", level: 78 },
      { name: "Supabase", level: 78 },
    ],
  },

  {
    category: "AI/ML",
    skills: [
      { name: "scikit-learn", level: 80 },
      { name: "pandas", level: 78 },
      { name: "joblib", level: 75 },
      { name: "Ollama", level: 78 },
      { name: "LLaMA2", level: 75 },
      { name: "Flask", level: 78 },
    ],
  },

  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 78 },
      { name: "PM2", level: 80 },
      { name: "AWS SES", level: 75 },
      { name: "Postman", level: 85 },
      { name: "MongoDB Compass", level: 82 },
      { name: "Arduino IDE", level: 72 },
    ],
  },
]

export const education = [
  {
    school: "Indian Institute of Technology Dharwad",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2023 — Jul 2027",
    details: "CGPA: 8.81",
  },
  {
    school: "Board of Intermediate Education, Andhra Pradesh",
    degree: "Senior Secondary Education (Class XII)",
    period: "Apr 2022 — Apr 2023",
    details: "Percentage: 96.3%",
  },
  {
    school: "Indian Certificate of Secondary Education (ICSE)",
    degree: "Secondary Education (Class X)",
    period: "Apr 2020 — Apr 2021",
    details: "Percentage: 96.2%",
  },
]

export const certifications = [
  "Finlatics Machine Learning Program — Finlatics (Mar 2025)",
  "First Place — College Library Management System, Coding Club SOI Event, IIT Dharwad (Sep 2024)",
]