export type ProjectCaseStudy = {
  overview: string;
  keyFeatures: string[];
  architectureDetails: string;
  challengesAndSolutions: { challenge: string; solution: string }[];
  impactMetrics?: string[];
};

export type Project = {
  id: string;
  name: string;
  stack: string[];
  summary: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: ProjectCaseStudy;
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
  location?: string;
  summary: string;
  bullets?: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  duration: string;
};

export const identity = {
  name: "Muhammad Hassan Mughal",
  shortName: "Hassan Mughal",
  role: "Full-Stack Software Developer",
  specialization: "Scalable SaaS, AI Agents & Real-Time Systems",
  location: "Rawalpindi, Pakistan",
  experience: "2+ years",
  currentRole: "Software Developer L1 @ Komatsu Pakistan Soft",
  availability: "Open to freelance & full-stack opportunities",
  phone: "(+92) 321-5211814",
  summary:
    "Full-Stack Developer specializing in scalable SaaS, AI-powered, and real-time applications using Next.js, React Native, TypeScript, and modern backend technologies. Experienced in building production-ready platforms including scheduling systems, marketplaces, dashboards, Chrome extensions, and AI-integrated products used by real users.",
  education: {
    institution: "Sir Syed CASE Institute of Technology",
    degree: "Bachelor's In Computer Science (Graduated)",
    location: "B-17, Islamabad",
    duration: "10/2021 - 07/2025",
  },
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Appointment Scheduling System",
    stack: ["Next.js", "GoHighLevel", "Google Maps", "NeonDB", "Drizzle", "TanStack Query"],
    summary:
      "Enterprise booking and scheduling platform with Google Calendar-style consultant availability, master scheduling, and GoHighLevel API sync used by 1,000+ monthly users.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Engineered an end-to-end appointment management system for a home service provider organization, streamlining bookings, rescheduling, and consultant zone management for over 1,000+ monthly active users.",
      keyFeatures: [
        "Master scheduling calendar calculating real-time availability windows against blocked slots and daily limits",
        "GoHighLevel (GHL) API integration for bidirectional lead/appointment syncing and automated client communications",
        "Consultant & Admin dashboards with Google Calendar-like views, zone mapping, and full CRUD controls",
        "Google Maps API polygon/radius zone creation for location-based technician dispatching",
        "TanStack Query client-side caching reducing redundant API calls by over 60%"
      ],
      architectureDetails:
        "Built with Next.js App Router, Neon Serverless PostgreSQL, and Drizzle ORM. Utilizes TanStack Query for optimistic updates and caching. Real-time availability algorithms compute conflict-free booking slots dynamically.",
      challengesAndSolutions: [
        {
          challenge: "Preventing double-booking across overlapping consultant timezones and dynamic travel buffers.",
          solution: "Implemented an atomic slot reservation transaction in Drizzle ORM with instant optimistic lock release on timeout."
        }
      ],
      impactMetrics: ["1,000+ Monthly Active Users", "60% Reduction in Redundant Queries", "Real-Time Multi-Zone Dispatching"]
    }
  },
  {
    id: "02",
    name: "Parakh (AI Risk Profiling)",
    stack: ["React Native", "Expo", "Next.js", "Groq AI", "NeonDB", "Drizzle", "Better Auth"],
    summary:
      "AI-powered customer risk profiling platform for digital onboarding analyzing KYC documents with deterministic signal engines and Groq-powered AI agents.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Customer risk profiling and KYC verification platform engineered to detect digital onboarding fraud through deterministic cross-field validation paired with Groq LLM reasoning.",
      keyFeatures: [
        "Deterministic cross-field signal engine combined with Groq LLM agent to classify Low/Medium/High risk with explainable reasoning",
        "React Native (Expo) dual-flow mobile application with dedicated applicant onboarding and compliance officer review queues",
        "Next.js REST API with Better Auth session security and Neon PostgreSQL + Drizzle ORM backend",
        "TanStack Query cross-screen cache synchronization for immediate status updates across compliance reviewers"
      ],
      architectureDetails:
        "Expo React Native frontend sharing types with Next.js backend. Risk scoring pipeline executes multi-pass document validation via Groq LLaMA models and writes audit logs to Neon PostgreSQL.",
      challengesAndSolutions: [
        {
          challenge: "Achieving sub-second latency for complex multi-page KYC risk evaluation.",
          solution: "Leveraged Groq LPU inference accelerators delivering structured JSON evaluations in under 400ms."
        }
      ],
      impactMetrics: ["Sub-400ms AI Decision Latency", "Explainable AI Risk Scores", "Automated EDD Queues"]
    }
  },
  {
    id: "03",
    name: "Servis AI (Multi-Agent Booking)",
    stack: ["React Native", "Next.js", "AI Agents", "Gemini LLM", "NeonDB", "Drizzle", "Google Maps"],
    summary:
      "AI-powered multi-lingual service platform converting natural language in English, Urdu, and Roman Urdu into automated technician dispatching via a TypeScript agent pipeline.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Autonomous service booking application that accepts conversational voice and text prompts in regional languages (English, Urdu, Roman Urdu) and orchestrates technician matching.",
      keyFeatures: [
        "Multi-agent TypeScript pipeline executing intent extraction, geocoding, provider ranking, and appointment dispatch",
        "Multilingual NLP parsing powered by Gemini LLM for English, Urdu script, and transliterated Roman Urdu",
        "Google Maps SDK integration for precise geocoding, distance matrix calculations, and nearest-provider ranking",
        "Next.js + Expo monorepo architecture with shared API routes, schemas, and admin telemetry dashboard"
      ],
      architectureDetails:
        "Monorepo architecture powered by Turborepo, Next.js, and Expo. TypeScript agent pipeline decomposes complex requests into state machine actions backed by Drizzle ORM on Neon DB.",
      challengesAndSolutions: [
        {
          challenge: "Accurately identifying service intent from colloquial Roman Urdu slang and informal phonetic spelling.",
          solution: "Fine-tuned Gemini system prompts with few-shot regional dialect examples and fuzzy intent validation."
        }
      ],
      impactMetrics: ["Trilingual NLP Support (EN/UR/Roman UR)", "Autonomous Provider Ranking", "Monorepo Scalability"]
    }
  },
  {
    id: "04",
    name: "WhatsApp Maintenance Dispatch",
    stack: ["Next.js", "Groq AI", "WhatsApp Cloud API", "NeonDB", "Drizzle"],
    summary:
      "Intelligent facility dispatch bot that interprets natural language tenant requests over WhatsApp into structured maintenance tickets and automated provider schedules.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Automated WhatsApp-based facility maintenance dispatcher that transforms unstructured resident messages into actionable work orders and provider schedules.",
      keyFeatures: [
        "WhatsApp Cloud API webhook receiver processing incoming voice notes, text messages, and issue photos",
        "Groq AI intent extraction parsing urgency level, facility unit, maintenance category, and preferred time slot",
        "Automated contractor notification dispatch with interactive WhatsApp button approvals",
        "Neon DB + Drizzle ORM ticket ledger maintaining complete audit history and SLA timers"
      ],
      architectureDetails:
        "Event-driven architecture with Next.js edge route handlers processing WhatsApp webhooks, routing payloads through Groq AI classification pipelines.",
      challengesAndSolutions: [
        {
          challenge: "Handling intermittent WhatsApp webhook delivery retries without creating duplicate work orders.",
          solution: "Implemented idempotent request hashing with database deduplication keys."
        }
      ],
      impactMetrics: ["Zero-App Tenant Experience", "Under 2s End-to-End Ticket Dispatch", "WhatsApp Cloud API Verified"]
    }
  },
  {
    id: "05",
    name: "Project Relay",
    stack: ["Next.js", "TypeScript", "Better Auth", "NeonDB", "Drizzle"],
    summary:
      "Static email client with authentication, role-based route middleware protection, and type-safe database queries.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "High-performance static email client delivering instantaneous inbox rendering, session protection, and type-safe database sync for developer workflows.",
      keyFeatures: [
        "Better Auth session management with role-based route middleware protection via proxy handlers",
        "Neon Serverless PostgreSQL integration queried via Drizzle ORM for zero cold-start queries",
        "TailwindCSS + shadcn/ui components customized with dark phosphor CRT aesthetic",
        "Sub-50ms optimistic UI updates for mark-as-read, star, and archiving actions"
      ],
      architectureDetails:
        "Engineered on Next.js 16 App Router. Data access layers leverage Drizzle ORM against Neon Serverless DB for zero-cold-start performance. Optimistic state transitions provide real-time UI feedback.",
      challengesAndSolutions: [
        {
          challenge: "Preventing layout thrashing and render lag during bulk email selections.",
          solution: "Implemented lightweight item component memoization and virtualized list rendering."
        }
      ],
      impactMetrics: ["100% Type Coverage", "Sub-50ms Optimistic UI Latency", "Next.js 16 Architecture"]
    }
  },
  {
    id: "06",
    name: "Fit-Fusion (AI Fitness SaaS)",
    stack: ["Next.js", "Supabase", "TypeScript", "KNN Models"],
    summary:
      "AI-driven workout and diet recommendation engine with KNN classification, live community feed, and health metric tracking.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "An AI-powered SaaS application generating personalized nutrition plans, workout routines, and real-time community interaction using machine learning classifiers.",
      keyFeatures: [
        "KNN-based recommendation algorithm matching user fitness goals, BMI, and dietary constraints with personalized routines",
        "Real-time social feed with Supabase Realtime WebSocket subscriptions for workout sharing and comments",
        "User progress tracking with visual streak analytics and metric history charts",
        "Responsive cross-platform interface supporting mobile PWA usage"
      ],
      architectureDetails:
        "Next.js App Router frontend paired with Supabase PostgreSQL backend. Authentication handled via Supabase Auth with Row Level Security (RLS) policies enforcing strict data boundaries.",
      challengesAndSolutions: [
        {
          challenge: "Handling concurrent real-time comment updates during high activity spikes.",
          solution: "Optimized Supabase Realtime channel event filtering and batched state synchronization."
        }
      ],
      impactMetrics: ["KNN Recommendation Engine", "Real-time WebSocket Sync", "Strict RLS Data Isolation"]
    }
  },
  {
    id: "07",
    name: "Fleet Companion App",
    stack: ["React Native", "Supabase", "Stripe", "Google APIs"],
    summary:
      "Mobile marketplace for trucking operations featuring live quote bidding, Stripe escrow payments, and continuous GPS location tracking.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Mobile marketplace application connecting freight brokers and logistics operators with real-time bidding, live location tracking, and escrow financial protection.",
      keyFeatures: [
        "Live load bidding engine where truckers submit and negotiate quotes in real-time",
        "Stripe Escrow payment integration ensuring secure escrow holds and automatic payouts upon delivery confirmation",
        "Background GPS location tracking via Google Maps Geolocation APIs",
        "Supabase Realtime for instant messaging, quote updates, and continuous fleet visibility"
      ],
      architectureDetails:
        "Built with React Native (Expo). Uses Supabase edge functions for payment webhooks and geo-fencing validations. Integrated with Google Maps SDK for route visualization.",
      challengesAndSolutions: [
        {
          challenge: "Managing continuous mobile background GPS battery drain for long-haul drivers.",
          solution: "Implemented adaptive location polling intervals based on vehicle speed and highway velocity."
        }
      ],
      impactMetrics: ["End-to-end Escrow Flow", "Sub-second GPS Location Updates", "Supabase Realtime Sync"]
    }
  },
  {
    id: "08",
    name: "Size Queen (Chrome Extension)",
    stack: ["React (Vite)", "Supabase", "Stripe", "OpenAI"],
    summary:
      "Browser extension scraping e-commerce clothing pages and using OpenAI to generate personalized size fit recommendations with Stripe billing.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Browser extension that extracts sizing charts from e-commerce product pages and calculates accurate size fits based on user body metrics.",
      keyFeatures: [
        "DOM size chart extraction engine utilizing custom CSS selectors and table parsing routines",
        "OpenAI API analysis comparing body measurements to retailer fit charts for accurate size recommendations",
        "Stripe subscription tier gating for premium recommendations and multi-profile support",
        "Cross-browser extension popup with instant overlay preview"
      ],
      architectureDetails:
        "React (Vite) Content Scripts and Background Service Workers executing size parsing routines. Syncs user preference profiles with Supabase DB backend.",
      challengesAndSolutions: [
        {
          challenge: "Parsing messy, unformatted HTML size tables across diverse e-commerce sites.",
          solution: "Built a structured table parser with OpenAI fallback normalization for irregular chart schemas."
        }
      ],
      impactMetrics: ["Instant Fit Recommendations", "Stripe Monetization Tiering", "OpenAI Vision/Text Integration"]
    }
  },
  {
    id: "09",
    name: "Device Registration Portal",
    stack: ["Next.js", "GraphQL", "Apollo Client", "Zustand", "JWT"],
    summary:
      "Stepper-based enterprise registration portal with autosave, resume progress, and GraphQL API integration.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Enterprise portal for registering industrial devices with step-by-step validation, autosave progress, and GraphQL API integration.",
      keyFeatures: [
        "Multi-step stepper form in Next.js using GraphQL and Apollo Client with incremental data saving",
        "Zustand state management and local storage persistence for JWT session continuity",
        "Resumable progress allowing users to exit and return without losing form state",
        "GraphQL queries for device serial number lookup and live verification"
      ],
      architectureDetails:
        "Next.js frontend communicating with Apollo Client and GraphQL API endpoint secured via JWT token authentication.",
      challengesAndSolutions: [
        {
          challenge: "Ensuring form progress is retained even if the browser session closes abruptly.",
          solution: "Used local storage draft persistence merged with server-side GraphQL autosave endpoints."
        }
      ],
      impactMetrics: ["Zero Data-Loss Form Saving", "Zustand State Architecture", "GraphQL Query Optimization"]
    }
  },
  {
    id: "10",
    name: "School Management SaaS",
    stack: ["Next.js", "Supabase", "RBAC", "AWS S3"],
    summary:
      "Role-based educational SaaS handling admissions, enrollments, assessments, fee tracking, and S3 document uploads.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Comprehensive educational management platform providing granular access control for administrators, teachers, students, and parents.",
      keyFeatures: [
        "Multi-role RBAC permission system (Admin, Teacher, Student) using Supabase Row Level Security",
        "Online student admission forms with AWS S3 storage for document and credential uploads",
        "Course data, enrollment tracking, assessment grading, and fee management modules",
        "Automated gradebook calculations and digital invoice status"
      ],
      architectureDetails:
        "Next.js App Router application backed by PostgreSQL schema with strict RBAC policies. Server Actions used for secure data mutation handling.",
      challengesAndSolutions: [
        {
          challenge: "Handling secure multi-role document upload permissions and S3 signed URLs.",
          solution: "Created presigned S3 URL generators validated against Supabase user session roles."
        }
      ],
      impactMetrics: ["Multi-Tenant RBAC Security", "AWS S3 Document Pipeline", "End-to-End School Ops"]
    }
  },
  {
    id: "11",
    name: "EZLY Performance Optimization",
    stack: ["Next.js", "NeonDB", "Drizzle", "SWR"],
    summary:
      "Performance-focused overhaul using SWR for efficient API caching, query index tuning, and UI responsiveness.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Performance optimization initiative for a web portal focusing on reducing load times and improving API caching efficiency.",
      keyFeatures: [
        "SWR data fetching with stale-while-revalidate caching strategies reducing network roundtrips",
        "NeonDB query index optimizations reducing database response times",
        "Reduced bundle size via dynamic imports and code splitting",
        "Streamlined UI styling for faster rendering and responsiveness"
      ],
      architectureDetails:
        "Next.js App Router optimized with SWR for intelligent client-side request deduplication and NeonDB connection pooling.",
      challengesAndSolutions: [
        {
          challenge: "Eliminating redundant API refetches on tab focus.",
          solution: "Configured SWR deduplication intervals and custom revalidation controls."
        }
      ],
      impactMetrics: ["Sub-50ms Cached Responses", "Reduced Server Load", "SWR Data Synchronization"]
    }
  },
  {
    id: "12",
    name: "Book Brary",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    summary:
      "Full-stack marketplace combining peer-to-peer book sales with academic tutor discovery and REST API backend.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Community marketplace application facilitating peer-to-peer book sharing and academic tutor discovery with Node.js backend integration.",
      keyFeatures: [
        "React frontend with responsive book catalog search and category filtering",
        "Tutor profile discovery with rating, reviews, and appointment request flow",
        "Express.js RESTful API endpoints with MongoDB data models and JWT auth"
      ],
      architectureDetails:
        "Full-stack MERN application with JWT authentication, Express middleware, and MongoDB database collections.",
      challengesAndSolutions: [
        {
          challenge: "Building fast search indexing across book titles and author tags.",
          solution: "Created MongoDB compound text indexes on title, author, and category fields."
        }
      ],
      impactMetrics: ["Full-Stack MERN Architecture", "Compound Search Indexing"]
    }
  }
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { label: "Next.js (App Router)", level: 94 },
      { label: "React & React Native", level: 93 },
      { label: "TypeScript", level: 92 },
      { label: "TailwindCSS", level: 95 },
      { label: "TanStack (Table & Query)", level: 89 },
      { label: "Zustand & Apollo Client", level: 86 },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { label: "Node.js & Express", level: 88 },
      { label: ".NET Core (APIs)", level: 83 },
      { label: "GraphQL & REST APIs", level: 88 },
      { label: "Better Auth & JWT", level: 87 },
      { label: "TanStack / SWR Caching", level: 85 },
    ],
  },
  {
    title: "Databases & ORM",
    items: [
      { label: "PostgreSQL & NeonDB", level: 91 },
      { label: "Supabase & RLS", level: 92 },
      { label: "Drizzle ORM", level: 89 },
      { label: "MySQL & MSSQL", level: 83 },
      { label: "Firebase & MongoDB", level: 85 },
    ],
  },
  {
    title: "AI Agents & Integrations",
    items: [
      { label: "AI Agents (Groq AI & Gemini LLM)", level: 88 },
      { label: "Stripe (Escrow & Subscriptions)", level: 87 },
      { label: "Google Maps / Location APIs", level: 89 },
      { label: "WhatsApp Cloud API", level: 84 },
      { label: "Git & Azure DevOps", level: 86 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    duration: "01/2026 - Present",
    role: "Software Developer L1",
    company: "Komatsu Pakistan Soft, Islamabad",
    location: "Islamabad (Onsite)",
    summary:
      "Optimized large-scale data table rendering performance using TanStack Table by eliminating full table re-rendering issues from row-level updates. Developed .NET Core backend API modules and standardized reusable form styles.",
    bullets: [
      "Optimized large-scale data table rendering performance using TanStack Table by reducing unnecessary re-renders.",
      "Resolved full table re-rendering issues caused by row-level state updates, improving UI responsiveness.",
      "Introduced modern reusable form styles, with one adopted as the standard across the project.",
      "Worked as a core member of the React/frontend team while contributing to backend development tasks.",
      "Developed multiple backend API modules using .NET Core and supported frontend-backend integrations."
    ]
  },
  {
    duration: "09/2024 - 02/2026",
    role: "Full-Stack Developer (Part Time)",
    company: "Tavren, Rawalpindi",
    location: "Rawalpindi (Onsite)",
    summary:
      "Built an appointment scheduling system serving 1,000+ monthly users, a Next.js + Supabase RBAC SaaS platform, and a React Native trucker marketplace with Stripe escrow payments.",
    bullets: [
      "Built an appointment scheduling system for a home service provider organization currently used by 1000+ monthly users.",
      "Built a SaaS platform with Next.js + Supabase, featuring RBAC and a multi-branch dashboard.",
      "Built a React Native (Expo) marketplace app for trucker service requests with real-time vendor quotes using Supabase.",
      "Integrated Stripe escrow payments and Google Location APIs for secure transactions and live tracking."
    ]
  },
  {
    duration: "06/2025 - 11/2025",
    role: "Junior Full-Stack Developer",
    company: "Silverthread Labs, Islamabad",
    location: "Islamabad (Onsite)",
    summary:
      "Refactored codebases for optimal performance, fixed critical API fetching issues, and built an AI-powered size recommendation Chrome extension with OpenAI.",
    bullets: [
      "Fixed API fetching bugs and improved UI components, resulting in a smoother and more reliable user experience.",
      "Refactored and cleaned the codebase by removing unused code, optimizing logic, and improving overall performance.",
      "Collaborated with a client to develop a Chrome extension that provides clothing size recommendations based on user input."
    ]
  },
  {
    duration: "02/2025 - 04/2025",
    role: "Junior Full-Stack Developer",
    company: "AlimcoSoft Pvt. Ltd, Islamabad",
    location: "Islamabad (Onsite)",
    summary:
      "Built web and mobile apps with Next.js, React Native, and GraphQL. Developed complex multi-step forms with autosave, and integrated Intercom real-time chat.",
    bullets: [
      "Built scalable web and mobile apps using Next.js, React Native, GraphQL, and TypeScript.",
      "Developed complex multi-step forms with auto-save features using Apollo Client and GraphQL.",
      "Integrated Firebase and Supabase for authentication, data storage, and file uploads.",
      "Created full-featured SaaS dashboards and eCommerce apps with role-based access control.",
      "Implemented real-time chat support service of Intercom in a React Native app."
    ]
  },
  {
    duration: "10/2024 - 01/2025",
    role: "Frontend Developer (Internship)",
    company: "Grace Technologies, Rawalpindi",
    location: "Rawalpindi (Onsite)",
    summary:
      "Developed responsive tracking applications in React.js, rebuilt mobile tracking interfaces with Material UI, and integrated tutor marketplace frontend with Node.js APIs.",
    bullets: [
      "Developed responsive web applications using React.js, focusing on real-time tracking and user-friendly interfaces.",
      "Rebuilt the UI of a mobile tracking app with React.js, Material UI, aligning it with the GTL project's design system.",
      "Built a book marketplace platform with tutor service features, integrating the React.js frontend with a Node.js backend."
    ]
  },
  {
    duration: "07/2024",
    role: "Frontend Developer (Internship)",
    company: "Digital Empowerment Network",
    location: "Remote",
    summary:
      "Developed responsive UI components and interactive modules for real-time digital experiences.",
    bullets: [
      "Created responsive UI components and frontend workflows for real-time tracking experiences."
    ]
  },
  {
    duration: "06/2023 - 09/2023",
    role: "Frontend Developer (Internship)",
    company: "Naviquis, Islamabad",
    location: "Islamabad (Onsite)",
    summary:
      "Constructed foundational frontend components, responsive layouts, and interactive client experiences.",
    bullets: [
      "Worked on foundational frontend implementation, responsive design, and component-level UI tasks."
    ]
  }
];

export const education: EducationItem = {
  institution: "Sir Syed CASE Institute of Technology",
  degree: "Bachelor's In Computer Science (Graduated)",
  location: "B-17, Islamabad",
  duration: "10/2021 - 07/2025",
};

export const contact = {
  email: "muhammadhassanmughal47@gmail.com",
  phone: "(+92) 321-5211814",
  github: "https://github.com/oye-hunter",
  linkedin: "https://www.linkedin.com/in/hassan814/",
  resume: "/resume.pdf",
};
