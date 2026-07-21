"use client"

import { Download, Printer } from "lucide-react"
import {
  profile,
  experiences,
  education,
  certifications,
  skillGroups,
} from "@/lib/portfolio-data"

export function ResumeApp() {
  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Résumé</h1>
        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-3 py-1.5 text-xs font-medium transition hover:bg-foreground/10"
          >
            <Printer className="h-3.5 w-3.5" /> Print
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-sky-600"
          >
            <Download className="h-3.5 w-3.5" /> PDF
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-[var(--os-window)] p-6 text-sm">
        <div className="border-b border-border pb-4">
          <h2 className="text-lg font-bold">{profile.name}</h2>
          <p className="font-medium text-sky-500">{profile.role}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {profile.email} · {profile.phone} · {profile.location}
          </p>
        </div>

        <Section title="Experience">
          {experiences.map((e) => (
            <div key={e.company} className="mb-3 last:mb-0">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {e.role}, {e.company}
                </span>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">{e.summary}</p>
            </div>
          ))}
        </Section>

        <Section title="Education">
          {education.map((e) => (
            <div key={e.school} className="flex justify-between">
              <span>
                <span className="font-semibold">{e.degree}</span>, {e.school}
              </span>
              <span className="text-xs text-muted-foreground">{e.period}</span>
            </div>
          ))}
        </Section>

        <Section title="Core Skills">
          <p className="text-muted-foreground">
            {skillGroups.flatMap((g) => g.skills.map((s) => s.name)).join(" · ")}
          </p>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc pl-4 text-muted-foreground">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-500">
        {title}
      </h3>
      {children}
    </div>
  )
}
