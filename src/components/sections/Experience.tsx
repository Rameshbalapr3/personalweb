import { FadeUp } from "@/components/animations/FadeUp";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/data/portfolio";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel number="02" label="Experience" />

        <FadeUp>
          <div className="gradient-border rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {experience.role}
                </h2>
                <p className="mt-1 text-accent">{experience.company}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {experience.location}
                  </span>
                  <span>{experience.period}</span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {experience.summary}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  Responsibilities
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  Products Built
                </h3>
                <ul className="space-y-2">
                  {experience.productsBuilt.map((product) => (
                    <li key={product.id}>
                      <a
                        href={`#project-${product.id}`}
                        className="block rounded-lg border border-border bg-background-secondary/50 px-4 py-3 text-sm transition-colors hover:border-accent/40 hover:text-foreground"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted">
                  See project details, tech stack, and case studies below.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
