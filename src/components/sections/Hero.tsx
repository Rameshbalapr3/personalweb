"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { personal } from "@/data/portfolio";
import { siteConfig } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 hero-grain" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <FadeUp className="lg:hidden">
            <ProfilePhoto size="lg" />
          </FadeUp>

          <div className="w-full max-w-2xl text-center lg:pb-4 lg:text-left">
            <FadeUp>
              <h1 className="font-display text-[3.25rem] leading-[0.95] tracking-[-0.02em] text-foreground sm:text-7xl lg:text-[5.25rem]">
                {personal.firstName}
                <span className="mt-1 block text-muted/80">{personal.lastName}</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
                {personal.headline}
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-5 font-mono text-xs tracking-wide text-muted/75 sm:text-[13px]">
                {personal.credibilityLine}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#work">
                  <Button size="lg">
                    Selected work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={siteConfig.resumePath}
                  download
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Download resume
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="hidden shrink-0 lg:block">
            <ProfilePhoto size="xl" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
