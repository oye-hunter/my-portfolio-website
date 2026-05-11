export type Project = {
  id: string;
  name: string;
  stack: string[];
  summary: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  label: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export type ExperienceItem = {
  duration: string;
  role: string;
  company: string;
  summary: string;
};

export const identity = {
  name: "Hassan Mughal",
  role: "Full-Stack Software Developer",
  specialization: "SaaS & MVP Development",
  location: "Rawalpindi, Pakistan",
  experience: "1.5+ years",
  currentRole: "Software Developer @ Komatsu Pak Soft",
  availability: "Open to freelance opportunities",
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Project Relay",
    stack: ["Next.js", "TypeScript", "Better Auth", "NeonDB", "Drizzle"],
    summary:
      "Static email inbox system with authentication, route protection, and type-safe database access.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "02",
    name: "Fit-Fusion (AI SaaS)",
    stack: ["Next.js", "Supabase", "Realtime"],
    summary:
      "AI-driven workout and diet recommendations with community features and live updates.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "03",
    name: "Fleet Companion App",
    stack: ["React Native", "Supabase", "Stripe", "Google APIs"],
    summary:
      "Marketplace flow for trucking operations with escrow payments, real-time bidding, and location tracking.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "04",
    name: "Size Queen (Chrome Extension)",
    stack: ["React", "Supabase", "Stripe", "OpenAI"],
    summary:
      "Extension that parses size charts and generates personalized recommendations with paid plans.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "05",
    name: "School Management SaaS",
    stack: ["Next.js", "Supabase", "RBAC"],
    summary:
      "Role-based operational suite handling admissions, assessments, billing, and document workflows.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "06",
    name: "E-Commerce App with Chat",
    stack: ["React Native", "Firebase", "Intercom"],
    summary:
      "Cross-platform e-commerce app with product CRUD and integrated real-time customer chat.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "07",
    name: "Device Registration Portal",
    stack: ["Next.js", "GraphQL", "JWT"],
    summary:
      "Multi-step registration with autosave and resume support for long-running form completion.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "08",
    name: "EZLY Optimization",
    stack: ["Next.js", "NeonDB", "SWR"],
    summary:
      "Performance-focused updates with API caching improvements and faster UI response.",
    githubUrl: "https://github.com/oye-hunter",
  },
  {
    id: "09",
    name: "Book Brary",
    stack: ["MERN", "REST APIs"],
    summary:
      "Marketplace combining book exchange and tutor discovery with integrated backend APIs.",
    githubUrl: "https://github.com/oye-hunter",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { label: "Next.js", level: 92 },
      { label: "React", level: 93 },
      { label: "TypeScript", level: 90 },
      { label: "State Management (Zustand + Query)", level: 86 },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js (Express)", level: 88 },
      { label: ".NET Core", level: 82 },
      { label: "REST + GraphQL", level: 87 },
      { label: "Authentication (JWT / Better Auth)", level: 84 },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "PostgreSQL + Supabase + NeonDB", level: 89 },
      { label: "MongoDB + MySQL", level: 84 },
      { label: "Drizzle ORM", level: 82 },
      { label: "Caching Strategies", level: 80 },
    ],
  },
  {
    title: "Mobile + Integrations",
    items: [
      { label: "React Native (Expo)", level: 88 },
      { label: "Flutter (Basic)", level: 64 },
      { label: "Stripe + Firebase + Google APIs", level: 85 },
      { label: "OpenAI Integrations", level: 81 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    duration: "Jan 2026 - Present",
    role: "Software Developer",
    company: "Komatsu Pak Soft",
    summary:
      "Building full-stack and backend systems with .NET Core, focused on maintainability and enterprise structure.",
  },
  {
    duration: "Sep 2024 - Recent",
    role: "Full-Stack Developer (Part-Time)",
    company: "Tavren",
    summary:
      "Delivered RBAC SaaS modules, a React Native marketplace, Stripe escrow flow, and map-based tracking.",
  },
  {
    duration: "Jun 2025 - Nov 2025",
    role: "Junior Full-Stack Developer",
    company: "Silverthread Labs",
    summary:
      "Improved API reliability, optimized app performance, and shipped a recommendation-driven Chrome extension.",
  },
  {
    duration: "Feb 2025 - Apr 2025",
    role: "Junior Full-Stack Developer",
    company: "AlimcoSoft Pvt. Ltd",
    summary:
      "Developed web and mobile modules, autosave GraphQL flows, SaaS dashboards, and real-time support channels.",
  },
  {
    duration: "Oct 2024 - Jan 2025",
    role: "Frontend Developer Intern",
    company: "Grace Technologies",
    summary:
      "Built responsive React interfaces and reworked UI for tracking and marketplace workflows.",
  },
  {
    duration: "Jul 2024",
    role: "Frontend Intern",
    company: "Digital Empowerment Network",
    summary: "Created responsive UI components for real-time tracking experiences.",
  },
  {
    duration: "Jun 2023 - Sep 2023",
    role: "Frontend Intern",
    company: "Naviquis",
    summary: "Worked on foundational frontend implementation and component-level UI tasks.",
  },
];

export const contact = {
  email: "muhammadhassanmughal47@gmail.com",
  github: "https://github.com/oye-hunter",
  linkedin: "https://www.linkedin.com/in/hassan814/",
  resume: "/resume.pdf",
};
