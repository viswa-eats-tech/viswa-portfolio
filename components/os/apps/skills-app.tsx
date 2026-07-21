"use client"

import { motion } from "motion/react"
import { skillGroups } from "@/lib/portfolio-data"

export function SkillsApp() {
  return (
    <div className="p-6">
      <h1 className="mb-5 text-xl font-semibold tracking-tight">Skills & Tools</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.category}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.category}
            </h2>
            <div className="space-y-3">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
