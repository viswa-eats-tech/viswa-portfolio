"use client"

import {
  User,
  Briefcase,
  FolderGit2,
  Sparkles,
  FileText,
  Mail,
  SquareTerminal,
  Settings,
} from "lucide-react"
import { GithubIcon } from "./brand-icons"

type IconComp = (props: { className?: string }) => React.ReactNode

const ICONS: Record<string, IconComp> = {
  User,
  Briefcase,
  FolderGit2,
  Sparkles,
  FileText,
  Mail,
  SquareTerminal,
  Settings,
  Github: GithubIcon,
}

export function AppIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? User
  return <Icon className={className} />
}
