import { ArrowUp, Code2, Download, Link2, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { getSocialHref } from "@/lib/utils";

interface SocialLink {
  href: string;
  label: string;
  icon: typeof Code2;
  external?: boolean;
}

export function Footer() {
  const githubHref = getSocialHref("github", siteConfig.github);
  const linkedinHref = getSocialHref("linkedin", siteConfig.linkedin);
  const emailHref = getSocialHref("email", siteConfig.email);

  const socialLinks: SocialLink[] = [
    ...(githubHref
      ? [{ href: githubHref, label: "GitHub", icon: Code2, external: true }]
      : []),
    ...(linkedinHref
      ? [{ href: linkedinHref, label: "LinkedIn", icon: Link2, external: true }]
      : []),
    ...(emailHref ? [{ href: emailHref, label: "Email", icon: Mail }] : []),
    {
      href: siteConfig.resumePath,
      label: "Resume",
      icon: Download,
    },
  ];

  return (
    <footer className="relative border-t border-border/80 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <a
              href="#home"
              className="inline-block font-mono text-sm font-semibold tracking-[0.18em] text-foreground transition-colors hover:text-accent"
            >
              RAMESH BALA
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.title} based in {siteConfig.location.split(",")[0]}.
              Building production web applications, APIs, and AI-integrated
              systems.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted/70">
              Open to software engineering roles
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-20">
            <nav aria-label="Footer navigation">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Navigate
              </p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Connect
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : label === "Resume"
                        ? { download: true }
                        : {})}
                    aria-label={label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted transition-all hover:border-accent/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-105" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
