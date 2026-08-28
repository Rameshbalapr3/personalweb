"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { personal } from "@/data/portfolio";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,var(--accent-soft),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] grid-bg"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          {/* Mobile photo */}
          <FadeUp className="lg:hidden">
            <ProfilePhoto size="lg" />
          </FadeUp>

          <div className="w-full max-w-2xl text-center lg:text-left">
            <FadeUp>
              <p className="mb-8 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {personal.badge}
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
                Ramesh Bala
                <span className="block text-muted/90">P.R.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="hero-gradient-text mt-5 text-xl font-medium tracking-tight sm:text-2xl">
                {personal.title}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-[1.05rem] lg:mx-0">
                {personal.headline}{" "}
                <span className="text-foreground/80">
                  Next.js, TypeScript, Node.js, PostgreSQL.
                </span>
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 font-mono text-xs tracking-wide text-muted/80 sm:text-[13px]">
                {personal.location} · {personal.company} · {personal.experience}
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    View selected work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href={siteConfig.resumePath} download className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Download className="h-4 w-4" />
                    Resume
                  </Button>
                </a>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </FadeUp>
          </div>

          {/* Desktop photo */}
          <FadeUp delay={0.1} className="hidden shrink-0 lg:block">
            <ProfilePhoto size="xl" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
