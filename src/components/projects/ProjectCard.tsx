"use client";

import { ArchitectureFlow } from "@/components/projects/ArchitectureFlow";
import { ImpactChips } from "@/components/projects/ImpactChips";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  className?: string;
  variant?: "default" | "featured";
}

export function ProjectCard({
  project,
  onViewDetails,
  className,
  variant = "default",
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isFeatured = variant === "featured" || project.featured;

  return (
    <motion.article
      className={cn(
        "gradient-border group relative overflow-hidden rounded-2xl",
        isFeatured ? "p-6 sm:p-8 lg:p-10" : "p-6 sm:p-8",
        className
      )}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-accent">
          {project.number} / 04
        </span>
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      <h3
        className={cn(
          "font-semibold tracking-tight",
          isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        )}
      >
        {project.title}
      </h3>

      <p className="mt-2 font-mono text-xs text-muted">{project.role}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        {project.shortDescription}
      </p>

      <p className="mt-3 rounded-lg border border-border/60 bg-background-secondary/40 px-3 py-2 text-xs leading-relaxed text-muted sm:text-sm">
        {project.approachLine}
      </p>

      <ImpactChips chips={project.impactChips} className="mt-5" />

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, isFeatured ? 8 : 6).map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > (isFeatured ? 8 : 6) && (
          <Badge variant="outline">
            +{project.technologies.length - (isFeatured ? 8 : 6)}
          </Badge>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-border bg-background-secondary/50 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          Architecture
        </p>
        <ArchitectureFlow steps={project.architecture} variant="compact" />
      </div>

      <ul className="mt-6 space-y-2">
        {project.highlights.slice(0, isFeatured ? 5 : 4).map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={() => onViewDetails(project)} size="sm">
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onViewDetails(project)}
        >
          View Details
        </Button>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        )}
      </div>
    </motion.article>
  );
}
