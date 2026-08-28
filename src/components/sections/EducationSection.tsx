import { FadeUp } from "@/components/animations/FadeUp";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { certifications, education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel number="05" label="Education" />

        <FadeUp>
          <h2 className="mb-12 text-2xl font-bold tracking-tight sm:text-3xl">
            Education & Certifications
          </h2>
        </FadeUp>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="gradient-border h-full rounded-2xl p-6 sm:p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="mt-2 text-accent">{education.institution}</p>
              <p className="mt-1 text-sm text-muted">{education.location}</p>
              <p className="mt-4 font-mono text-xs text-muted">
                {education.date}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-medium">{cert.title}</h3>
                  {cert.date && (
                    <p className="mt-2 font-mono text-xs text-muted">
                      {cert.date}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
