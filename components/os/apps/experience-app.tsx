"use client"

import { motion } from "motion/react"
import { experiences } from "@/lib/portfolio-data"

export function ExperienceApp() {
  return (
    <div className="p-6">
      <h1 className="mb-5 text-xl font-semibold tracking-tight">Work Experience</h1>
      <ol className="relative border-l border-border pl-6">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="mb-8 last:mb-0"
          >
            <span className="absolute -left-[6.5px] mt-1.5 h-3 w-3 rounded-full bg-sky-500 ring-4 ring-[var(--os-window)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h2 className="text-base font-semibold">{exp.role}</h2>
              <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-sm font-medium text-sky-500">{exp.company}</p>
            <p className="text-xs text-muted-foreground">{exp.location}</p>
            <p className="mt-2 text-sm text-foreground/90">{exp.summary}</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-foreground/8 px-2 py-0.5 text-xs font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
