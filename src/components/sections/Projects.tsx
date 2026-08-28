"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  getFeaturedProjects,
  getOtherProjects,
} from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import { useState } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <>
      <section id="projects" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" label="Projects" />

          <FadeUp>
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Production systems I&apos;ve built
            </h2>
          <p className="mb-12 max-w-2xl text-muted">
            Selected work from my professional experience — full case studies
            with architecture, tech stack, and engineering details.
          </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Featured Work
            </p>
          </FadeUp>

          <div className="mb-16 space-y-8">
            {featured.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.08}>
                <div id={`project-${project.id}`} className="scroll-mt-24">
                  <ProjectCard
                    project={project}
                    onViewDetails={setSelectedProject}
                    variant="featured"
                  />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              More Projects
            </p>
          </FadeUp>

          <div className="grid gap-8 lg:grid-cols-2">
            {others.map((project, i) => (
              <FadeUp key={project.id} delay={i * 0.08}>
                <div id={`project-${project.id}`} className="scroll-mt-24">
                  <ProjectCard
                    project={project}
                    onViewDetails={setSelectedProject}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
