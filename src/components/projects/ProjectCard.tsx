"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ImpactChips } from "@/components/projects/ImpactChips";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  variant?: "default" | "featured";
}

export function ProjectCard({
  project,
  className,
  variant = "default",
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isFeatured = variant === "featured" || project.featured;

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-card/40",
        className
      )}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={cn(
          "grid",
          isFeatured ? "lg:grid-cols-[1.25fr_1fr]" : "grid-cols-1"
        )}
      >
        <ProjectVisual
          project={project}
          className={cn(
            "min-h-[220px] border-b border-border/70 sm:min-h-[250px]",
            isFeatured ? "lg:min-h-full lg:border-b-0 lg:border-r" : ""
          )}
        />

        <div
          className={cn("flex flex-col", isFeatured ? "p-6 sm:p-8" : "p-5 sm:p-6")}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-accent">
              {project.number} / 04
            </span>
            <span className="rounded-full border border-accent/25 bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
              {project.outcomeMetric}
            </span>
          </div>

          <h3
            className={cn(
              "font-semibold tracking-tight",
              isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
            )}
          >
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.shortDescription}
          </p>

          <ImpactChips chips={project.impactChips} className="mt-4" />

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <Link href={`/work/${project.id}`}>
              <Button size="sm">
                Case study
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  Live demo
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
