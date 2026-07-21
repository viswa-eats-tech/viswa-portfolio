export type AppId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "resume"
  | "contact"
  | "terminal"
  | "settings"

export type AppMeta = {
  id: AppId
  title: string
  // lucide icon name resolved in the dock component
  icon: string
  // tailwind gradient classes for the dock icon background
  gradient: string
  defaultSize: { width: number; height: number }
}

export const APPS: Record<AppId, AppMeta> = {
  about: {
    id: "about",
    title: "About Me",
    icon: "User",
    gradient: "from-sky-400 to-blue-600",
    defaultSize: { width: 720, height: 520 },
  },
  experience: {
    id: "experience",
    title: "Experience",
    icon: "Briefcase",
    gradient: "from-amber-400 to-orange-600",
    defaultSize: { width: 720, height: 560 },
  },
  projects: {
    id: "projects",
    title: "Projects",
    icon: "FolderGit2",
    gradient: "from-emerald-400 to-green-600",
    defaultSize: { width: 820, height: 580 },
  },
  skills: {
    id: "skills",
    title: "Skills",
    icon: "Sparkles",
    gradient: "from-fuchsia-400 to-pink-600",
    defaultSize: { width: 680, height: 560 },
  },
  resume: {
    id: "resume",
    title: "Résumé",
    icon: "FileText",
    gradient: "from-rose-400 to-red-600",
    defaultSize: { width: 700, height: 600 },
  },
  contact: {
    id: "contact",
    title: "Contact",
    icon: "Mail",
    gradient: "from-cyan-400 to-teal-600",
    defaultSize: { width: 600, height: 520 },
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    icon: "SquareTerminal",
    gradient: "from-neutral-700 to-neutral-900",
    defaultSize: { width: 680, height: 460 },
  },
  settings: {
    id: "settings",
    title: "System Settings",
    icon: "Settings",
    gradient: "from-slate-400 to-slate-600",
    defaultSize: { width: 720, height: 540 },
  },
}

// Order shown in the dock
export const DOCK_ORDER: AppId[] = [
  "about",
  "experience",
  "projects",
  "skills",
  "resume",
  "contact",
  "terminal",
  "settings",
]

export type Wallpaper = {
  id: string
  name: string
  src: string
  // fallback theme suggestion
  theme: "dark" | "light"
}

export const WALLPAPERS: Wallpaper[] = [
  { id: "sonoma-night", name: "Sonoma Night", src: "/wallpapers/sonoma-night.png", theme: "dark" },
  { id: "sonoma-day", name: "Sonoma Day", src: "/wallpapers/sonoma-day.png", theme: "light" },
  { id: "monterey", name: "Monterey", src: "/wallpapers/monterey.png", theme: "dark" },
  { id: "ventura", name: "Ventura", src: "/wallpapers/ventura.png", theme: "dark" },
]
