"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Layers,
  Monitor,
  Server,
  Shield,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const coreStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Gemini",
  "RAG",
];

const categoryMeta: Record<
  string,
  { icon: LucideIcon; description: string; span?: "wide" | "tall" }
> = {
  Languages: {
    icon: Code2,
    description: "Typed, maintainable code across the stack",
  },
  Frontend: {
    icon: Monitor,
    description: "Responsive interfaces and modern React apps",
    span: "wide",
  },
  Backend: {
    icon: Server,
    description: "APIs, integrations, and server-side logic",
  },
  "Frameworks & Libraries": {
    icon: Layers,
    description: "Validation, state, ORM, and mobile tooling",
  },
  Databases: {
    icon: Database,
    description: "Relational data, vectors, and cloud storage",
  },
  Security: {
    icon: Shield,
    description: "Auth, encryption, and access control in production",
  },
  AI: {
    icon: Brain,
    description: "LLM integration, RAG, embeddings, and OCR",
    span: "wide",
  },
  Tools: {
    icon: Terminal,
    description: "Development, deployment, and analytics",
  },
};

function SkillPill({ skill }: { skill: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      className="skill-pill group/pill relative inline-flex items-center rounded-lg border border-border/80 bg-background/80 px-3 py-2 font-mono text-xs text-muted backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-foreground sm:text-[13px]"
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.15 }}
    >
      <span className="mr-2 h-1 w-1 rounded-full bg-accent/50 transition-colors group-hover/pill:bg-accent" />
      {skill}
    </motion.span>
  );
}

function CategoryCard({
  category,
  skills,
  index,
}: {
  category: string;
  skills: string[];
  index: number;
}) {
  const meta = categoryMeta[category] ?? {
    icon: Code2,
    description: "",
  };
  const Icon = meta.icon;
  const isWide = meta.span === "wide";

  return (
    <StaggerItem
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/25 sm:p-6",
        isWide && "sm:col-span-2"
      )}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-60"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent transition-colors group-hover:border-accent/40">
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-semibold tracking-tight">{category}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
              {meta.description}
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-muted/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </StaggerItem>
  );
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,var(--accent-soft),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel number="04" label="Skills" />

        <FadeUp>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Technical toolkit
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Technologies I use to build production applications — from UI and
            APIs to databases, security, and AI integration.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-border/80 bg-background-secondary/40 p-4 sm:p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 font-mono text-xs font-medium text-accent sm:text-[13px]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeUp>

        <StaggerContainer
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {skillGroups.map((group, index) => (
            <CategoryCard
              key={group.category}
              category={group.category}
              skills={group.skills}
              index={index}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
