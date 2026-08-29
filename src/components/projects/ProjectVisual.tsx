"use client";

import { ArchitectureFlow } from "@/components/projects/ArchitectureFlow";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectVisualProps {
  project: Project;
  className?: string;
  variant?: "card" | "page";
}

export function ProjectVisual({
  project,
  className,
  variant = "card",
}: ProjectVisualProps) {
  const isPage = variant === "page";

  return (
    <div
      className={cn(
        "project-shot relative flex flex-col overflow-hidden border-border/70 bg-background-secondary/40",
        isPage ? "rounded-2xl border" : "rounded-none border-0",
        className
      )}
    >
      <div className="project-shot-grid absolute inset-0" aria-hidden="true" />

      <div
        className={cn(
          "relative flex flex-1 flex-col justify-between",
          isPage ? "gap-8 p-6 sm:p-8" : "gap-5 p-5 sm:p-6"
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Impact
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {project.number} / 04
          </span>
        </div>

        <div
          className={cn(
            "grid items-stretch gap-3",
            "grid-cols-[1fr_auto_1fr]"
          )}
        >
          <div className="rounded-xl border border-border/80 bg-card/60 px-3 py-4 sm:px-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Before
            </p>
            <p
              className={cn(
                "mt-2 font-display leading-snug text-foreground",
                isPage ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.beforeAfter.before}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">
              {project.beforeAfter.beforeLabel}
            </p>
          </div>

          <div className="flex items-center justify-center text-accent" aria-hidden="true">
            <ArrowRight className="h-5 w-5" />
          </div>

          <div className="rounded-xl border border-accent/30 bg-accent-soft px-3 py-4 sm:px-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              After
            </p>
            <p
              className={cn(
                "mt-2 font-display leading-snug text-foreground",
                isPage ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.beforeAfter.after}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">
              {project.beforeAfter.afterLabel}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
            System flow
          </p>
          <ArchitectureFlow
            steps={project.architecture}
            variant="horizontal"
            className="text-[11px] sm:text-xs"
          />
        </div>
      </div>
    </div>
  );
}
