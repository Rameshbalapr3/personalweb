"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { skillGroups } from "@/data/portfolio";
import { Brain, Monitor, Server, type LucideIcon } from "lucide-react";

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

const categoryMeta: Record<string, { icon: LucideIcon }> = {
  Frontend: { icon: Monitor },
  "Backend & Data": { icon: Server },
  "AI & Security": { icon: Brain },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Skills
          </p>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Technical toolkit
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            What I use to ship production applications — UI, APIs, data, and AI.
          </p>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-10">
          <div className="rounded-2xl border border-border/80 bg-background-secondary/40 p-4 sm:p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 font-mono text-xs font-medium text-accent sm:text-[13px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        <StaggerContainer
          className="mt-6 grid gap-4 sm:grid-cols-3"
          stagger={0.06}
        >
          {skillGroups.map((group) => {
            const Icon = categoryMeta[group.category]?.icon ?? Monitor;
            return (
              <StaggerItem
                key={group.category}
                className="rounded-2xl border border-border/80 bg-card/40 p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/80 px-2.5 py-1.5 font-mono text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
