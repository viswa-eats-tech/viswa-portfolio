// Single source of truth for all portfolio content.
// Edit this file to customize the portfolio with your own details.

export const profile = {
  name: "Alex Rivera",
  handle: "alexrivera",
  role: "Senior Software Engineer",
  tagline: "I build delightful, high-performance products for the web.",
  location: "San Francisco, CA",
  avatarInitials: "AR",
  email: "alex@riveradev.io",
  phone: "+1 (415) 555-0132",
  website: "riveradev.io",
  github: "https://github.com/alexrivera",
  githubUser: "alexrivera",
  linkedin: "https://linkedin.com/in/alexrivera",
  twitter: "https://twitter.com/alexrivera",
  bio: [
    "I'm a product-minded engineer with 8+ years shipping software that people love. I specialize in the intersection of design and engineering — building interfaces that feel fast, intentional, and human.",
    "Most recently I led frontend architecture for a fintech platform serving millions of users. I care deeply about performance, accessibility, and the small details that make software feel premium.",
    "When I'm not coding, you'll find me photographing city streets, tinkering with synthesizers, or chasing good espresso.",
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
    company: "Northwind Financial",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    summary: "Leading frontend architecture for a consumer fintech platform used by 4M+ people.",
    highlights: [
      "Rebuilt the core dashboard, cutting time-to-interactive by 62%.",
      "Established a design system adopted across 6 product teams.",
      "Mentored 5 engineers and led the frontend hiring loop.",
    ],
    tags: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    company: "Lumen Labs",
    role: "Software Engineer",
    period: "2019 — 2022",
    location: "Remote",
    summary: "Built data-heavy analytics products from zero to one.",
    highlights: [
      "Shipped a real-time visualization engine handling 100k events/sec.",
      "Drove adoption of end-to-end type safety across the stack.",
      "Owned the component library used by the entire org.",
    ],
    tags: ["React", "D3", "Node.js", "WebSockets"],
  },
  {
    company: "Pixel Forge",
    role: "Frontend Developer",
    period: "2017 — 2019",
    location: "Austin, TX",
    summary: "Crafted marketing sites and web apps for early-stage startups.",
    highlights: [
      "Delivered 20+ client projects with a 98% satisfaction rate.",
      "Introduced automated visual regression testing.",
      "Reduced average bundle size by 40% across projects.",
    ],
    tags: ["JavaScript", "Vue", "CSS", "Webpack"],
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
}

export const projects: Project[] = [
  {
    name: "Aperture",
    description: "A GPU-accelerated image editor that runs entirely in the browser.",
    longDescription:
      "Aperture brings desktop-grade photo editing to the web using WebGL and WebAssembly. Non-destructive layers, real-time filters, and a plugin API.",
    tags: ["WebGL", "WASM", "React", "Rust"],
    link: "#",
    repo: "https://github.com/alexrivera/aperture",
    accent: "#0a84ff",
    year: "2024",
  },
  {
    name: "Cadence",
    description: "A calendar that learns how you work and protects your focus time.",
    longDescription:
      "Cadence uses on-device heuristics to auto-schedule deep work blocks and defend them from meeting overload. Built with a local-first sync engine.",
    tags: ["Next.js", "SQLite", "Local-first"],
    link: "#",
    repo: "https://github.com/alexrivera/cadence",
    accent: "#ff375f",
    year: "2023",
  },
  {
    name: "Harbor",
    description: "Self-hostable deployment platform with a beautiful CLI and dashboard.",
    longDescription:
      "Harbor makes deploying containers as simple as `harbor up`. Real-time logs, rollbacks, and preview environments out of the box.",
    tags: ["Go", "Docker", "React", "gRPC"],
    link: "#",
    repo: "https://github.com/alexrivera/harbor",
    accent: "#30d158",
    year: "2023",
  },
  {
    name: "Synth Studio",
    description: "A polyphonic web synthesizer with a modular patching interface.",
    longDescription:
      "Synth Studio is a full Web Audio synthesizer with oscillators, filters, and a drag-to-patch modular canvas. MIDI support included.",
    tags: ["Web Audio", "Canvas", "TypeScript"],
    link: "#",
    repo: "https://github.com/alexrivera/synth-studio",
    accent: "#ff9f0a",
    year: "2022",
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
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "Rust", level: 65 },
      { name: "Go", level: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "Tooling",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 82 },
      { name: "Figma", level: 78 },
    ],
  },
]

export const education = [
  {
    school: "University of California, Berkeley",
    degree: "B.S. Electrical Engineering & Computer Science",
    period: "2013 — 2017",
  },
]

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google UX Design Professional Certificate",
]
