"use client";

import { ArchitectureFlow } from "@/components/projects/ArchitectureFlow";
import { ImpactChips } from "@/components/projects/ImpactChips";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-4 z-50 mx-auto flex max-h-[90vh] max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2"
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-start justify-between border-b border-border p-6">
              <div>
                <span className="font-mono text-xs text-accent">
                  {project.number} / 04
                </span>
                <h2
                  id="project-modal-title"
                  className="mt-1 text-xl font-semibold sm:text-2xl"
                >
                  {project.title}
                </h2>
                <p className="mt-2 font-mono text-xs text-muted">
                  {project.role}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-accent-soft hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <p className="mb-4 text-muted">{project.description}</p>
              <ImpactChips chips={project.impactChips} className="mb-8" />

              <div className="space-y-8">
                <section>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                    Problem
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                    Solution
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {project.solution}
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                    Architecture
                  </h3>
                  <ArchitectureFlow steps={project.architecture} />
                </section>

                <section>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                    Key Features
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-lg border border-border bg-background-secondary/50 px-3 py-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                    Engineering Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.engineeringChallenges.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "rounded-lg border border-border px-4 py-3 text-sm text-muted"
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                    Outcome
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {project.outcome}
                  </p>
                </section>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-border p-6">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="sm">
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm">
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              )}
              <Button onClick={onClose} size="sm">
                Close
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
