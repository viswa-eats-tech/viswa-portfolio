"use client"

import { motion } from "motion/react"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/portfolio-data"

export function ProjectsApp() {
  return (
    <div className="p-6">
      <h1 className="mb-5 text-xl font-semibold tracking-tight">Selected Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-foreground/5"
          >
            <div
              className="flex h-20 items-center px-4"
              style={{
                background: `linear-gradient(135deg, ${p.accent}, ${p.accent}22)`,
              }}
            >
              <span className="text-lg font-semibold text-white drop-shadow">{p.name}</span>
              <span className="ml-auto text-xs font-medium text-white/80">{p.year}</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-sm text-foreground/90">{p.description}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {p.longDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-foreground/8 px-2 py-0.5 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 pt-1">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition hover:text-foreground"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
