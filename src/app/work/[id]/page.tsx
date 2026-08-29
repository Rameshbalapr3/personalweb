import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureFlow } from "@/components/projects/ArchitectureFlow";
import { ImpactChips } from "@/components/projects/ImpactChips";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getProjectById, projects } from "@/data/portfolio";
import { siteConfig } from "@/lib/config";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface WorkPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.shortDescription,
  };
}

export default async function WorkCaseStudyPage({ params }: WorkPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="border-b border-border/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
          <span className="font-mono text-xs text-accent">
            {project.number} / 04
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {project.outcomeMetric}
        </p>
        <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 font-mono text-xs text-muted sm:text-sm">
          {project.role}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {project.description}
        </p>
        <ImpactChips chips={project.impactChips} className="mt-6" />

        <ProjectVisual
          project={project}
          variant="page"
          className="mt-10 min-h-[280px] w-full"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              Problem
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.problem}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              Solution
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {project.solution}
            </p>
          </section>
        </div>

        <section className="mt-14">
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
            Architecture
          </h2>
          <ArchitectureFlow steps={project.architecture} variant="horizontal" />
        </section>

        <section className="mt-14">
          <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
            Engineering decisions
          </h2>
          <ul className="space-y-3">
            {project.engineeringChallenges.map((item, index) => (
              <li
                key={item}
                className="rounded-xl border border-border/80 bg-card/40 px-5 py-4 text-sm leading-relaxed text-muted"
              >
                <span className="mr-3 font-mono text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-accent/20 bg-accent-soft/40 p-6 sm:p-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
            Outcome
          </h2>
          <p className="font-display mt-3 text-2xl leading-snug text-foreground sm:text-3xl">
            {project.outcomeMetric}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {project.outcome}
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                Live demo
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
                GitHub
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
          <Link href="/#work">
            <Button size="sm">Back to work</Button>
          </Link>
        </div>
      </article>
    </main>
  );
}
