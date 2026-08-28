import { FadeUp } from "@/components/animations/FadeUp";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personal } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel number="01" label="About" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {personal.aboutHeading}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {personal.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
