"use client"

import { MapPin, Mail, Globe } from "lucide-react"
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../brand-icons"
import { profile } from "@/lib/portfolio-data"

export function AboutApp() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-semibold text-white shadow-lg">
          {profile.avatarInitials}
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="text-primary/80 text-sm font-medium text-sky-500">{profile.role}</p>
          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-muted-foreground sm:justify-start">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </p>
        </div>
      </div>

      <p className="mt-6 text-pretty text-[15px] font-medium leading-relaxed text-foreground/90">
        {profile.tagline}
      </p>

      <div className="mt-4 space-y-3 text-pretty text-sm leading-relaxed text-muted-foreground">
        {profile.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-sm transition hover:bg-foreground/10"
        >
          <Mail className="h-4 w-4" /> {profile.email}
        </a>
        <a
          href={`https://${profile.website}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-sm transition hover:bg-foreground/10"
        >
          <Globe className="h-4 w-4" /> {profile.website}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-sm transition hover:bg-foreground/10"
        >
          <GithubIcon className="h-4 w-4" /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-sm transition hover:bg-foreground/10"
        >
          <LinkedinIcon className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-sm transition hover:bg-foreground/10"
        >
          <InstagramIcon className="h-4 w-4" /> Instagram
        </a>
      </div>
    </div>
  )
}
