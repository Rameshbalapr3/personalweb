export interface ArchitectureStep {
  label: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
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
  role: string;
  approachLine: string;
  impactChips: string[];
  featured?: boolean;
  screenshots: ProjectScreenshot[];
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
  title: "AI-Integrated Full Stack Engineer",
  company: "Easy2Work",
  location: "Chennai, Tamil Nadu, India",
  experience: "1+ Year Professional Experience",
  badge: "OPEN TO SOFTWARE ENGINEERING ROLES",
  headline:
    "Shipping production web applications with",
  subheadline:
    "Full-stack development across frontend, backend, APIs, databases, and AI-powered features.",
  credibilityLine:
    "AI-Integrated Full Stack Engineer @ Easy2Work · Chennai · 1+ yr professional experience",
  aboutHeading: "Building software that solves real business problems.",
  aboutParagraphs: [
    "I'm an AI-Integrated Full Stack Engineer with 1 year of professional experience building production web applications using Next.js, React, TypeScript, Node.js, and PostgreSQL at Easy2Work.",
    "My work spans full-stack development, REST API design, third-party API integration, webhook integration, database design, authentication and security, automation workflows, and AI/LLM-powered features — with end-to-end feature ownership from architecture to deployment.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C#"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Chakra UI",
      "Ionic",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "ASP.NET MVC",
      "REST APIs",
      "API Integration",
      "Webhook Integration",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Zod", "Zustand", "Prisma", "Capacitor", "SheetJS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Supabase", "SQL", "pgvector"],
  },
  {
    category: "Security",
    skills: [
      "JWT",
      "bcrypt",
      "OTP Authentication",
      "HMAC Signature Verification",
      "RBAC",
      "Rate Limiting",
    ],
  },
  {
    category: "AI",
    skills: [
      "Google Gemini",
      "Gemini Vision",
      "Gemini 2.5 Flash/Lite",
      "RAG",
      "Embeddings",
      "OCR",
    ],
  },
  {
    category: "Tools",
    skills: ["Git", "Vercel", "VS Code", "Visual Studio", "SSMS"],
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
      "Mobile-first AI-powered quotation platform that converts natural-language requests into structured quotations.",
    description:
      "A mobile-first AI-powered quotation platform that converts natural-language requests into structured quotations.",
    role: "Full-stack ownership — RAG pipeline, document ingestion, and mobile PWA",
    approachLine:
      "Natural-language requests → pgvector retrieval → structured quotes exported as PDF.",
    impactChips: ["Production", "RAG + pgvector", "Gemini Embeddings", "Mobile PWA"],
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
      "RAG pipeline",
      "Gemini embeddings",
      "PostgreSQL + pgvector",
      "PDF ingestion",
      "Excel ingestion",
      "Image OCR",
      "Pricing retrieval",
      "Structured quote generation",
      "PDF export",
      "Offline fallback",
      "Mobile file handling",
    ],
    architecture: [
      { label: "User Request" },
      { label: "Document / Rate Data" },
      { label: "Embeddings" },
      { label: "pgvector Retrieval" },
      { label: "RAG" },
      { label: "Gemini" },
      { label: "Structured Quote" },
      { label: "PDF" },
    ],
    screenshots: [
      {
        src: "/images/projects/quotebuddy-chat.png",
        alt: "QuoteBuddy AI chat interface for natural-language quote generation",
        caption: "AI chat interface",
      },
      {
        src: "/images/projects/quotebuddy-quote.png",
        alt: "QuoteBuddy structured quote preview and PDF export",
        caption: "Quote preview & export",
      },
    ],
    problem:
      "Sales teams spent significant time manually searching rate cards and building quotations from proposal documents during client meetings.",
    solution:
      "Built a mobile-first PWA with RAG-powered quote generation using Gemini embeddings, pgvector retrieval, multi-format document ingestion (PDF, Excel, images), and structured PDF export with offline fallback.",
    engineeringChallenges: [
      "Designing a RAG pipeline with pgvector for accurate pricing retrieval",
      "Building multi-format document ingestion with OCR for images",
      "Implementing natural-language to structured quote conversion via Gemini",
      "Enabling offline fallback and native mobile file handling with Capacitor",
    ],
    outcome:
      "Delivered an AI-powered quotation platform that transforms natural-language requests into professional, exportable quotes from uploaded rate data.",
  },
  {
    id: "lms",
    number: "02",
    title: "Lead Management Platform (LMS)",
    shortDescription:
      "Production full-stack lead management platform for sales teams to capture, assign, track, and convert leads.",
    description:
      "A production full-stack lead management platform designed to help sales teams capture, assign, track, and convert leads across Meta ads, directories, and outbound channels.",
    role: "Full-stack ownership — webhooks, auth, assignment logic, and SLA automation",
    approachLine:
      "Meta Lead Ads webhooks → HMAC verification → round-robin assignment → SLA enforcement.",
    impactChips: [
      "Production",
      "Meta Webhooks",
      "HMAC Verification",
      "JWT + OTP Auth",
    ],
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
      "Meta/Facebook Lead Ads webhook integration",
      "HMAC signature verification",
      "Automated round-robin lead assignment",
      "Email OTP authentication",
      "JWT sessions",
      "Login audit logging",
      "Rate limiting",
      "Automated follow-up SLA enforcement",
      "Scheduled cron jobs",
    ],
    architecture: [
      { label: "Meta Lead Ads" },
      { label: "Webhook" },
      { label: "HMAC Verification" },
      { label: "Lead Processing" },
      { label: "Round-Robin Assignment" },
      { label: "Sales Agent" },
      { label: "Follow-up / Conversion" },
    ],
    screenshots: [
      {
        src: "/images/projects/lms-dashboard.png",
        alt: "Lead Management Platform dashboard with lead tracking",
        caption: "Lead dashboard",
      },
      {
        src: "/images/projects/lms-webhook.png",
        alt: "Lead Management Platform webhook and assignment flow",
        caption: "Webhook & assignment flow",
      },
    ],
    problem:
      "Sales teams needed a centralized system to capture leads from multiple channels, verify incoming webhook data securely, and assign leads fairly with SLA-based follow-up enforcement.",
    solution:
      "Built a full-stack lead management platform with Meta Lead Ads webhook integration, HMAC signature verification, automated round-robin assignment, OTP-based authentication, and scheduled cron jobs for SLA enforcement.",
    engineeringChallenges: [
      "Implementing secure HMAC signature verification for Meta webhook payloads",
      "Designing fair round-robin lead assignment with concurrent webhook handling",
      "Building OTP authentication flow with rate limiting and audit logging",
      "Enforcing follow-up SLAs through scheduled background jobs",
    ],
    outcome:
      "Delivered a production lead management system that automates lead capture, secure processing, assignment, and follow-up workflows for the sales team.",
  },
  {
    id: "rms",
    number: "03",
    title: "Rate Management System (RMS)",
    shortDescription:
      "Centralized advertising rate management platform for uploading, processing, and managing vendor rates.",
    description:
      "A centralized advertising rate management platform that allows teams to upload, browse, manage, and process vendor advertising rates.",
    role: "Full-stack ownership — import pipelines, AI extraction, and REST API layer",
    approachLine:
      "Vendor Excel/PDF/image → column mapping & OCR → validated rate library.",
    impactChips: ["Production", "29 REST API Routes", "Gemini Vision", "Excel Pipeline"],
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
      "Vendor Excel import pipeline",
      "Dynamic column mapping",
      "Header fingerprint learning",
      "Spreadsheet normalization",
      "PDF/image/handwritten rate extraction",
      "Gemini Vision integration",
      "REST API architecture",
      "29 REST API routes",
      "Admin configuration tools",
    ],
    architecture: [
      { label: "Vendor Excel / PDF / Image" },
      { label: "Upload" },
      { label: "Column Mapping / OCR" },
      { label: "AI Extraction" },
      { label: "Validation" },
      { label: "Structured Database" },
      { label: "Searchable Rate Library" },
    ],
    screenshots: [
      {
        src: "/images/projects/rms-upload.png",
        alt: "Rate Management System vendor Excel upload and column mapping",
        caption: "Excel upload & mapping",
      },
      {
        src: "/images/projects/rms-extraction.png",
        alt: "Rate Management System AI rate extraction from documents",
        caption: "AI extraction pipeline",
      },
    ],
    problem:
      "Advertising teams received vendor rate data in inconsistent Excel, PDF, and image formats, making it difficult to centralize and search pricing information.",
    solution:
      "Built a rate management platform with Excel import pipelines, dynamic column mapping, header fingerprint learning, and Gemini Vision integration for extracting rates from PDFs and handwritten documents.",
    engineeringChallenges: [
      "Building a flexible Excel import pipeline with dynamic column mapping",
      "Implementing header fingerprint learning for recurring vendor formats",
      "Integrating Gemini Vision for PDF, image, and handwritten rate extraction",
      "Designing 29 REST API routes for upload, validation, and admin configuration",
    ],
    outcome:
      "Created a searchable rate library that normalizes diverse vendor inputs into structured, queryable database records.",
  },
  {
    id: "adspot",
    number: "04",
    title: "AdSpot — Outdoor Media Discovery Platform",
    shortDescription:
      "Map-first outdoor media discovery platform for browsing, filtering, and booking advertising inventory across India.",
    description:
      "A map-first outdoor media discovery platform that enables advertisers to browse, filter, and book outdoor advertising inventory across India.",
    role: "Full-stack ownership — map discovery, booking workflow, and admin console",
    approachLine:
      "Map-first discovery → geospatial filters → cart → GST-aware booking.",
    impactChips: ["Production", "Geospatial Filtering", "Booking Workflow", "JWT Auth"],
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
      "Price filtering",
      "Availability filtering",
      "Persistent shopping cart",
      "Booking workflow",
      "GST-based pricing calculation",
      "Admin console",
      "Real-time inventory management",
      "JWT authentication",
    ],
    architecture: [
      { label: "India Map" },
      { label: "Media Locations" },
      { label: "Filters" },
      { label: "Inventory Cards" },
      { label: "Cart" },
      { label: "Booking" },
    ],
    screenshots: [
      {
        src: "/images/projects/adspot-map.png",
        alt: "AdSpot map-first outdoor media discovery interface",
        caption: "Map discovery",
      },
      {
        src: "/images/projects/adspot-booking.png",
        alt: "AdSpot booking workflow and shopping cart",
        caption: "Booking workflow",
      },
    ],
    problem:
      "Advertisers needed a unified platform to discover outdoor media inventory across locations, filter by geography and price, and complete bookings with accurate GST calculations.",
    solution:
      "Developed a map-first discovery platform with geospatial radius filtering, persistent shopping cart, booking workflow, GST-based pricing, and an admin console for real-time inventory management.",
    engineeringChallenges: [
      "Implementing geospatial radius filtering for map-based inventory discovery",
      "Building a persistent shopping cart with booking workflow state management",
      "Designing GST-based pricing calculation across inventory types",
      "Creating admin tools for real-time inventory management",
    ],
    outcome:
      "Delivered an end-to-end outdoor media discovery and booking platform with map-first UX and admin inventory controls.",
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
