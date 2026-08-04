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
  summary: string;
};

export const identity = {
  name: "Hassan Mughal",
  role: "Full-Stack Software Developer",
  specialization: "SaaS & MVP Development",
  location: "Rawalpindi, Pakistan",
  experience: "2+ years",
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
    caseStudy: {
      overview:
        "High-performance static email client delivering instantaneous inbox rendering, session protection, and type-safe database sync for developer workflows.",
      keyFeatures: [
        "Better Auth session management with role-based route middleware protection",
        "Neon Serverless PostgreSQL integration queried via Drizzle ORM",
        "Sub-50ms optimistic UI updates for mark-as-read, star, and archiving actions",
        "CRT amber phosphor aesthetic with full dark mode contrast compliance"
      ],
      architectureDetails:
        "Engineered on Next.js 15 App Router. Data access layers leverage Drizzle ORM against Neon Serverless DB for zero-cold-start performance. Optimistic state transitions provide real-time UI feedback.",
      challengesAndSolutions: [
        {
          challenge: "Preventing layout thrashing and render lag during bulk email selections.",
          solution: "Implemented lightweight item component memoization and virtualized list rendering."
        }
      ],
      impactMetrics: ["100% Type Coverage", "Sub-50ms Optimistic UI Latency", "Zero-downtime serverless database sync"]
    }
  },
  {
    id: "02",
    name: "Fit-Fusion (AI SaaS)",
    stack: ["Next.js", "Supabase", "Realtime"],
    summary:
      "AI-driven workout and diet recommendations with community features and live updates.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "An AI-powered SaaS application generating personalized nutrition plans, workout routines, and real-time community interaction.",
      keyFeatures: [
        "Dynamic meal and workout recommendation pipeline integrated with AI models",
        "Real-time social feed with Supabase Realtime WebSocket subscriptions",
        "User progress tracking with visual streak analytics",
        "Responsive cross-platform interface supporting mobile PWA usage"
      ],
      architectureDetails:
        "Next.js App Router frontend paired with Supabase PostgreSQL backend. Authentication handled via Supabase Auth with Row Level Security (RLS) policies enforcing data boundaries.",
      challengesAndSolutions: [
        {
          challenge: "Handling concurrent real-time comment updates during high activity spikes.",
          solution: "Optimized Supabase Realtime channel event filtering and batched state synchronization."
        }
      ],
      impactMetrics: ["Real-time WebSocket sync", "Strict RLS Data Isolation"]
    }
  },
  {
    id: "03",
    name: "Fleet Companion App",
    stack: ["React Native", "Supabase", "Stripe", "Google APIs"],
    summary:
      "Marketplace flow for trucking operations with escrow payments, real-time bidding, and location tracking.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Mobile marketplace application connecting freight brokers and logistics operators with real-time bidding, location tracking, and escrow financial safety.",
      keyFeatures: [
        "Live load bidding engine with auto-matching algorithms",
        "Stripe Escrow payment integration ensuring payout upon verified drop-off",
        "Background GPS location tracking via Google Maps Geolocation APIs",
        "Offline-first mobile data sync for drivers operating in low-connectivity zones"
      ],
      architectureDetails:
        "Built with React Native (Expo). Uses Supabase edge functions for payment webhooks and geo-fencing validations. Integrated with Google Maps SDK for route visualization.",
      challengesAndSolutions: [
        {
          challenge: "Managing continuous mobile background GPS battery drain for long-haul drivers.",
          solution: "Implemented adaptive location polling intervals based on vehicle speed and highway velocity."
        }
      ],
      impactMetrics: ["End-to-end Escrow Flow", "Sub-second GPS Location Updates"]
    }
  },
  {
    id: "04",
    name: "Size Queen (Chrome Extension)",
    stack: ["React", "Supabase", "Stripe", "OpenAI"],
    summary:
      "Extension that parses size charts and generates personalized recommendations with paid plans.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Browser extension that extracts sizing charts from e-commerce product pages and calculates accurate size fits based on user body metrics.",
      keyFeatures: [
        "DOM size chart extraction engine utilizing custom CSS selectors",
        "OpenAI API analysis comparing body measurements to retailer fit charts",
        "Stripe subscription tier gating for premium recommendations",
        "Cross-browser extension popup with instant overlay preview"
      ],
      architectureDetails:
        "React Content Scripts and Background Service Workers executing size parsing routines. Syncs user preference profiles with Supabase DB backend.",
      challengesAndSolutions: [
        {
          challenge: "Parsing messy, unformatted HTML size tables across diverse e-commerce sites.",
          solution: "Built a structured table parser with OpenAI fallback normalization for irregular chart schemas."
        }
      ],
      impactMetrics: ["Instant Fit Recommendations", "Stripe Monetization Tiering"]
    }
  },
  {
    id: "05",
    name: "School Management SaaS",
    stack: ["Next.js", "Supabase", "RBAC"],
    summary:
      "Role-based operational suite handling admissions, assessments, billing, and document workflows.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Comprehensive educational management platform providing granular access control for administrators, teachers, students, and parents.",
      keyFeatures: [
        "Multi-role RBAC permission system (Admin, Teacher, Student, Parent)",
        "Automated gradebook calculations and PDF report card generation",
        "Student fee invoice tracking with digital payment status",
        "Document workflow system for admissions and transfer requests"
      ],
      architectureDetails:
        "Next.js App Router application backed by PostgreSQL schema with strict RBAC policies. Server Actions used for secure data mutation handling.",
      challengesAndSolutions: [
        {
          challenge: "Generating bulk PDF report cards for thousands of students without blocking main thread.",
          solution: "Delegated PDF document rendering to background worker queues."
        }
      ],
      impactMetrics: ["Multi-Tenant Security", "Automated PDF Generation"]
    }
  },
  {
    id: "06",
    name: "E-Commerce App with Chat",
    stack: ["React Native", "Firebase", "Intercom"],
    summary:
      "Cross-platform e-commerce app with product CRUD and integrated real-time customer chat.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Mobile shopping application featuring dynamic product catalog browsing, cart management, and embedded live customer support chat.",
      keyFeatures: [
        "Product catalog with real-time inventory updates via Firebase Firestore",
        "Seamless in-app Intercom chat widget for instant customer support",
        "Push notifications for order tracking and status changes"
      ],
      architectureDetails:
        "React Native application using Firebase Authentication and Firestore for real-time catalog state management.",
      challengesAndSolutions: [
        {
          challenge: "Optimizing image loading performance across low-end mobile devices.",
          solution: "Implemented progressive image caching with placeholder shimmer states."
        }
      ]
    }
  },
  {
    id: "07",
    name: "Device Registration Portal",
    stack: ["Next.js", "GraphQL", "JWT"],
    summary:
      "Multi-step registration with autosave and resume support for long-running form completion.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Enterprise portal for registering industrial devices with step-by-step validation, autosave progress, and GraphQL API integration.",
      keyFeatures: [
        "Multi-step wizard form with client-side & server-side validation",
        "Automatic background progress saving to prevent data loss",
        "GraphQL queries for device serial number lookup and verification"
      ],
      architectureDetails:
        "Next.js frontend communicating with GraphQL API endpoint secured via JWT token authentication.",
      challengesAndSolutions: [
        {
          challenge: "Ensuring form progress is retained even if the browser session closes abruptly.",
          solution: "Used local storage draft persistence merged with server-side GraphQL autosave endpoints."
        }
      ]
    }
  },
  {
    id: "08",
    name: "EZLY Optimization",
    stack: ["Next.js", "NeonDB", "SWR"],
    summary:
      "Performance-focused updates with API caching improvements and faster UI response.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Performance optimization initiative for a web portal focusing on reducing load times and improving API caching efficiency.",
      keyFeatures: [
        "SWR data fetching with stale-while-revalidate caching strategies",
        "NeonDB query index optimizations reducing database response times",
        "Reduced bundle size via dynamic imports and code splitting"
      ],
      architectureDetails:
        "Next.js App Router optimized with SWR for intelligent client-side request deduplication and NeonDB connection pooling.",
      challengesAndSolutions: [
        {
          challenge: "Eliminating redundant API refetches on tab focus.",
          solution: "Configured SWR deduplication intervals and custom revalidation controls."
        }
      ]
    }
  },
  {
    id: "09",
    name: "Book Brary",
    stack: ["MERN", "REST APIs"],
    summary:
      "Marketplace combining book exchange and tutor discovery with integrated backend APIs.",
    githubUrl: "https://github.com/oye-hunter",
    caseStudy: {
      overview:
        "Community marketplace application facilitating peer-to-peer book sharing and academic tutor discovery.",
      keyFeatures: [
        "Book inventory listing with search and category filters",
        "Tutor profile discovery with rating and review system",
        "Express.js RESTful API endpoints with MongoDB data models"
      ],
      architectureDetails:
        "Full-stack MERN (MongoDB, Express, React, Node.js) application with JWT authentication and RESTful API architecture.",
      challengesAndSolutions: [
        {
          challenge: "Building fast search indexing across book titles and author tags.",
          solution: "Created MongoDB compound text indexes on title, author, and category fields."
        }
      ]
    }
  }
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
