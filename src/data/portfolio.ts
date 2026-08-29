export interface ArchitectureStep {
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface BeforeAfter {
  before: string;
  beforeLabel: string;
  after: string;
  afterLabel: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture: ArchitectureStep[];
  problem: string;
  solution: string;
  engineeringChallenges: string[];
  outcome: string;
  outcomeMetric: string;
  beforeAfter: BeforeAfter;
  role: string;
  approachLine: string;
  impactChips: string[];
  featured?: boolean;
  screenshots?: ProjectScreenshot[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  productsBuilt: { id: string; name: string }[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const personal = {
  name: "Ramesh Bala P.R.",
  firstName: "Ramesh Bala",
  lastName: "P.R.",
  title: "AI-Integrated Full Stack Engineer",
  company: "Easy2Work",
  location: "Chennai, Tamil Nadu, India",
  experience: "1+ Year Professional Experience",
  badge: "Open to software engineering roles",
  headline:
    "I build production systems that turn messy business workflows into software people actually use.",
  subheadline:
    "Full-stack across frontend, backend, APIs, databases, and AI-powered features.",
  credibilityLine:
    "Easy2Work · Chennai · Next.js, TypeScript, Node.js, PostgreSQL",
  aboutHeading: "Building software that solves real business problems.",
  aboutParagraphs: [
    "I'm a full-stack engineer at Easy2Work with a year of shipping production web apps — from Next.js interfaces to PostgreSQL schemas, webhook integrations, and Gemini-powered AI features.",
    "I own features end-to-end: requirements, architecture, implementation, and deployment. The work that sticks with me is turning slow manual processes into systems sales teams can trust in the field.",
  ],
  aboutStats: [
    { value: "4", label: "Production systems shipped" },
    { value: "RAG", label: "In production with pgvector" },
    { value: "E2E", label: "Feature ownership" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Ionic",
      "Responsive Design",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Webhooks",
      "ASP.NET MVC",
    ],
  },
  {
    category: "AI & Security",
    skills: [
      "Google Gemini",
      "RAG",
      "pgvector",
      "Embeddings",
      "OCR",
      "JWT",
      "HMAC",
      "RBAC",
      "OTP Auth",
    ],
  },
];

export const experience: Experience = {
  company: "Easy2Work",
  role: "AI-Integrated Full Stack Engineer",
  location: "Chennai, India",
  period: "September 2025 – Present",
  summary:
    "Building and maintaining production full-stack applications for sales, advertising, and outdoor media workflows.",
  responsibilities: [
    "Develop full-stack web applications with Next.js, React, TypeScript, and PostgreSQL",
    "Design REST APIs, database schemas, and authentication flows",
    "Integrate third-party APIs, webhooks, and AI services into production features",
    "Own features end-to-end — from requirements to deployment",
  ],
  productsBuilt: [
    { id: "quotebuddy", name: "QuoteBuddy — AI Quote Generation PWA" },
    { id: "lms", name: "Lead Management Platform (LMS)" },
    { id: "rms", name: "Rate Management System (RMS)" },
    { id: "adspot", name: "AdSpot — Outdoor Media Discovery" },
  ],
};

export const projects: Project[] = [
  {
    id: "quotebuddy",
    number: "01",
    title: "QuoteBuddy — AI Quote Generation PWA",
    shortDescription:
      "Mobile-first AI quotation platform that turns natural-language requests into structured, exportable quotes.",
    description:
      "A mobile-first AI-powered quotation platform that converts natural-language requests into structured quotations from uploaded rate cards and proposals.",
    role: "Full-stack ownership — RAG pipeline, document ingestion, and mobile PWA",
    approachLine:
      "Natural-language requests → pgvector retrieval → structured quotes exported as PDF.",
    impactChips: ["Production", "RAG + pgvector", "Owned E2E"],
    outcomeMetric: "~30 min → ~2 min",
    beforeAfter: {
      before: "~30 min",
      beforeLabel: "Manual rate search + quote build",
      after: "~2 min",
      afterLabel: "AI quote from natural language",
    },
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Ionic",
      "Google Gemini",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "OCR",
      "Capacitor",
    ],
    highlights: [
      "Natural-language quote generation",
      "RAG pipeline with Gemini embeddings",
      "Multi-format document ingestion",
      "Structured PDF export",
      "Offline fallback + mobile file handling",
    ],
    architecture: [
      { label: "Request" },
      { label: "Rate data" },
      { label: "Embeddings" },
      { label: "pgvector" },
      { label: "RAG" },
      { label: "Gemini" },
      { label: "Quote PDF" },
    ],
    problem:
      "Sales teams spent ~30 minutes manually searching rate cards and building quotations during client meetings.",
    solution:
      "Built a mobile-first PWA with RAG-powered quote generation using Gemini embeddings, pgvector retrieval, multi-format document ingestion, and structured PDF export with offline fallback.",
    engineeringChallenges: [
      "Designing a RAG pipeline with pgvector for accurate pricing retrieval",
      "Building multi-format document ingestion with OCR for images",
      "Implementing natural-language to structured quote conversion via Gemini",
      "Enabling offline fallback and native mobile file handling with Capacitor",
    ],
    outcome:
      "Cut quote turnaround from roughly 30 minutes of manual work to about 2 minutes of AI-assisted generation from uploaded rate data.",
  },
  {
    id: "lms",
    number: "02",
    title: "Lead Management Platform (LMS)",
    shortDescription:
      "Production lead platform for capturing, assigning, tracking, and converting leads across Meta ads and outbound channels.",
    description:
      "A production full-stack lead management platform designed to help sales teams capture, assign, track, and convert leads across Meta ads, directories, and outbound channels.",
    role: "Full-stack ownership — webhooks, auth, assignment logic, and SLA automation",
    approachLine:
      "Meta Lead Ads webhooks → HMAC verification → round-robin assignment → SLA enforcement.",
    impactChips: ["Production", "HMAC webhooks", "Owned E2E"],
    outcomeMetric: "Secure ingest → assign",
    beforeAfter: {
      before: "Manual",
      beforeLabel: "Leads lost across channels",
      after: "Auto",
      afterLabel: "Webhook → assign → SLA",
    },
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Meta Lead Ads",
      "Webhooks",
      "JWT",
      "bcrypt",
    ],
    highlights: [
      "Meta Lead Ads webhook integration",
      "HMAC signature verification",
      "Automated round-robin assignment",
      "OTP auth + JWT sessions",
      "SLA enforcement via cron jobs",
    ],
    architecture: [
      { label: "Meta Ads" },
      { label: "Webhook" },
      { label: "HMAC" },
      { label: "Process" },
      { label: "Assign" },
      { label: "Follow-up" },
    ],
    problem:
      "Sales teams needed a secure, centralized system to ingest leads from Meta, assign them fairly, and enforce follow-up SLAs.",
    solution:
      "Built a full-stack platform with Meta webhook ingestion, HMAC verification, round-robin assignment, OTP authentication, and scheduled SLA enforcement.",
    engineeringChallenges: [
      "Implementing secure HMAC signature verification for Meta webhook payloads",
      "Designing fair round-robin lead assignment with concurrent webhook handling",
      "Building OTP authentication with rate limiting and audit logging",
      "Enforcing follow-up SLAs through scheduled background jobs",
    ],
    outcome:
      "Automated lead capture through secure webhook processing, fair assignment, and SLA-backed follow-up for the sales team.",
  },
  {
    id: "rms",
    number: "03",
    title: "Rate Management System (RMS)",
    shortDescription:
      "Centralized platform for uploading, normalizing, and searching vendor advertising rates.",
    description:
      "A centralized advertising rate management platform that allows teams to upload, browse, manage, and process vendor advertising rates.",
    role: "Full-stack ownership — import pipelines, AI extraction, and REST API layer",
    approachLine:
      "Vendor Excel/PDF/image → column mapping & OCR → validated rate library.",
    impactChips: ["Production", "29 APIs", "Gemini Vision"],
    outcomeMetric: "29 production APIs",
    beforeAfter: {
      before: "Messy files",
      beforeLabel: "Excel / PDF / image rate chaos",
      after: "Library",
      afterLabel: "Searchable validated rates",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "PostgreSQL",
      "SheetJS",
      "Google Gemini Vision",
    ],
    highlights: [
      "Vendor Excel import with dynamic column mapping",
      "Header fingerprint learning",
      "Gemini Vision rate extraction",
      "29 REST API routes",
      "Admin configuration tools",
    ],
    architecture: [
      { label: "Upload" },
      { label: "Map / OCR" },
      { label: "Extract" },
      { label: "Validate" },
      { label: "Library" },
    ],
    problem:
      "Vendor rates arrived in inconsistent Excel, PDF, and image formats, making pricing hard to centralize and search.",
    solution:
      "Built import pipelines with dynamic column mapping, header fingerprinting, and Gemini Vision extraction into a searchable rate library.",
    engineeringChallenges: [
      "Flexible Excel import with dynamic column mapping",
      "Header fingerprint learning for recurring vendor formats",
      "Gemini Vision for PDF, image, and handwritten rates",
      "Designing 29 REST API routes for upload, validation, and admin config",
    ],
    outcome:
      "Normalized messy vendor inputs into a searchable, queryable rate library backed by 29 production API routes.",
  },
  {
    id: "adspot",
    number: "04",
    title: "AdSpot — Outdoor Media Discovery Platform",
    shortDescription:
      "Map-first platform for browsing, filtering, and booking outdoor advertising inventory across India.",
    description:
      "A map-first outdoor media discovery platform that enables advertisers to browse, filter, and book outdoor advertising inventory across India.",
    role: "Full-stack ownership — map discovery, booking workflow, and admin console",
    approachLine:
      "Map-first discovery → geospatial filters → cart → GST-aware booking.",
    impactChips: ["Production", "Geospatial", "Owned E2E"],
    outcomeMetric: "Map → book flow",
    beforeAfter: {
      before: "Scattered",
      beforeLabel: "Hard to find outdoor inventory",
      after: "One map",
      afterLabel: "Discover → filter → book",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "REST APIs",
    ],
    highlights: [
      "Map-first inventory discovery",
      "Geospatial radius filtering",
      "Persistent cart + booking flow",
      "GST-based pricing",
      "Admin inventory console",
    ],
    architecture: [
      { label: "Map" },
      { label: "Filters" },
      { label: "Inventory" },
      { label: "Cart" },
      { label: "Booking" },
    ],
    problem:
      "Advertisers needed one place to discover outdoor inventory by location and price, then book with accurate GST.",
    solution:
      "Built map-first discovery with geospatial filters, persistent cart, GST pricing, and an admin console for live inventory.",
    engineeringChallenges: [
      "Geospatial radius filtering for map-based discovery",
      "Persistent shopping cart with booking state management",
      "GST-based pricing across inventory types",
      "Admin tools for real-time inventory management",
    ],
    outcome:
      "Delivered end-to-end outdoor media discovery and booking — from map search to GST-aware checkout.",
  },
];

export const heroTechBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Gemini",
  "RAG",
];

export const education = {
  degree: "B.E. Computer Science & Engineering",
  institution: "Sethu Institute of Technology",
  location: "Virudhunagar",
  date: "March 2025",
};

export const certifications = [
  {
    title: "The Joy of Computing using Python — NPTEL",
    date: "July 2023",
  },
  {
    title: "Full Stack Web Development with C#, MS SQL & ASP.NET MVC",
    date: "",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getOtherProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}
