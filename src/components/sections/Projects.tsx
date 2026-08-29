"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  getFeaturedProjects,
  getOtherProjects,
} from "@/data/portfolio";

export function Projects() {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <section id="work" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Work
          </p>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Production systems I&apos;ve built
          </h2>
          <p className="mt-4 mb-12 max-w-2xl text-muted">
            Selected professional work — real product surfaces, architecture,
            and engineering decisions.
          </p>
        </FadeUp>

        <div className="mb-10 space-y-8">
          {featured.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.06}>
              <div id={`project-${project.id}`} className="scroll-mt-24">
                <ProjectCard project={project} variant="featured" />
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            More projects
          </p>
        </FadeUp>

        <div className="grid gap-6 lg:grid-cols-2">
          {others.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.06}>
              <div id={`project-${project.id}`} className="scroll-mt-24">
                <ProjectCard project={project} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
