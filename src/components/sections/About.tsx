import { FadeUp } from "@/components/animations/FadeUp";
import { certifications, education, personal } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            About
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {personal.aboutHeading}
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <FadeUp delay={0.05}>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {personal.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 border-t border-border/70 pt-6 text-sm text-muted">
              <span className="text-foreground">{education.degree}</span>
              {" · "}
              {education.institution}, {education.location} · {education.date}
            </p>
            {certifications.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-muted/80">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    {cert.title}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </li>
                ))}
              </ul>
            )}
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {personal.aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/80 bg-card/40 px-5 py-5"
                >
                  <p className="font-display text-3xl text-accent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
