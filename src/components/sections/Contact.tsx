"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Download,
  Link2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { cn, getSocialHref, isPlaceholderUrl } from "@/lib/utils";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
  external?: boolean;
  download?: boolean;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const githubHref = getSocialHref("github", siteConfig.github);
  const linkedinHref = getSocialHref("linkedin", siteConfig.linkedin);
  const emailHref = getSocialHref("email", siteConfig.email);
  const emailConfigured = !isPlaceholderUrl(siteConfig.email);

  const contactMethods: ContactMethod[] = [
    ...(emailHref
      ? [
          {
            id: "email",
            label: "Email",
            value:
              siteConfig.email !== "EMAIL" ? siteConfig.email : "Send an email",
            href: emailHref,
            icon: Mail,
          },
        ]
      : []),
    ...(linkedinHref
      ? [
          {
            id: "linkedin",
            label: "LinkedIn",
            value: "Connect on LinkedIn",
            href: linkedinHref,
            icon: Link2,
            external: true,
          },
        ]
      : []),
    ...(githubHref
      ? [
          {
            id: "github",
            label: "GitHub",
            value: "View projects & code",
            href: githubHref,
            icon: Code2,
            external: true,
          },
        ]
      : []),
    {
      id: "resume",
      label: "Resume",
      value: "Download PDF",
      href: siteConfig.resumePath,
      icon: Download,
      download: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatusMessage("");

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const validData = result.data;
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validData),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to send message");
      }

      setStatus("success");
      setStatusMessage(
        data.message ?? "Thanks — I'll reply to the email you shared."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please use email instead."
      );
    }
  };

  return (
    <section id="contact" className="relative border-t border-border/60 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,var(--accent-soft),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <FadeUp>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Contact
            </p>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Let&apos;s work
              <span className="block text-muted">together.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Open to full-time software engineering roles. I build production
              web apps, backends, integrations, and AI-powered products.
            </p>

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/40 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Available · 24–48 hr response
              </span>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 shrink-0" />
              {siteConfig.location}
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-card/30 backdrop-blur-sm">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.id}
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : method.download
                        ? { download: true }
                        : {})}
                    className={cn(
                      "contact-row group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-accent-soft/40 sm:px-6 sm:py-5",
                      index !== contactMethods.length - 1 &&
                        "border-b border-border/60"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/80 text-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                          {method.label}
                        </p>
                        <p className="mt-0.5 text-sm text-foreground transition-colors group-hover:text-accent sm:text-base">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-border/80 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Message
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                Send a note
              </h3>
              <p className="mt-2 text-sm text-muted">
                Tell me about the role or project — I&apos;ll get back to you.
              </p>

              {!emailConfigured && (
                <p className="mt-6 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted">
                  Add <code className="text-accent">NEXT_PUBLIC_EMAIL</code> in{" "}
                  <code className="text-accent">.env.local</code> to show your
                  email link.
                </p>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="contact-input w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm"
                      placeholder="Your name"
                      disabled={status === "loading"}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="contact-input w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm"
                      placeholder="you@company.com"
                      disabled={status === "loading"}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="contact-input w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm"
                    placeholder="Tell me about the role or project..."
                    disabled={status === "loading"}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {statusMessage && (
                  <p
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm",
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    )}
                    role="status"
                  >
                    {statusMessage}
                  </p>
                )}

                <div className="flex justify-end pt-1">
                  <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
