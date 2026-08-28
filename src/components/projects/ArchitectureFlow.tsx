"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ArchitectureStep } from "@/data/portfolio";

interface ArchitectureFlowProps {
  steps: ArchitectureStep[];
  className?: string;
  variant?: "default" | "compact" | "horizontal";
}

export function ArchitectureFlow({
  steps,
  className,
  variant = "default",
}: ArchitectureFlowProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === "horizontal") {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center gap-2 font-mono text-xs",
          className
        )}
      >
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <span className="rounded-md border border-border bg-background-secondary px-2.5 py-1.5 text-muted">
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <span className="text-accent/60">→</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-0", className)}>
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center">
          <motion.div
            className={cn(
              "w-full rounded-lg border border-border bg-background-secondary px-4 py-3 text-center font-mono text-xs sm:text-sm",
              variant === "compact" ? "py-2" : "py-3"
            )}
            initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <span className="text-foreground">{step.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              className="flex flex-col items-center py-1 text-accent/50"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.04 }}
              aria-hidden="true"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
