"use client"

import type { AppId } from "@/lib/os-config"
import { AboutApp } from "./apps/about-app"
import { ExperienceApp } from "./apps/experience-app"
import { ProjectsApp } from "./apps/projects-app"
import { SkillsApp } from "./apps/skills-app"
import { ResumeApp } from "./apps/resume-app"
import { ContactApp } from "./apps/contact-app"
import { TerminalApp } from "./apps/terminal-app"
import { SettingsApp } from "./apps/settings-app"

export function AppContent({ id }: { id: AppId }) {
  switch (id) {
    case "about":
      return <AboutApp />
    case "experience":
      return <ExperienceApp />
    case "projects":
      return <ProjectsApp />
    case "skills":
      return <SkillsApp />
    case "resume":
      return <ResumeApp />
    case "contact":
      return <ContactApp />
    case "terminal":
      return <TerminalApp />
    case "settings":
      return <SettingsApp />
    default:
      return null
  }
}
