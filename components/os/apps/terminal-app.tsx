"use client"

import { useEffect, useRef, useState } from "react"
import { useOS } from "@/lib/os-context"
import type { AppId } from "@/lib/os-config"
import { profile, projects, experiences, skillGroups } from "@/lib/portfolio-data"

type Line = { type: "input" | "output"; text: string }

const PROMPT = "guest@rivera-os ~ %"

export function TerminalApp() {
  const { openApp, toggleTheme, setTheme } = useOS()
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "Rivera OS Terminal v1.0.0 — type 'help' to get started." },
  ])
  const [input, setInput] = useState("")
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIndex, setHistIndex] = useState(-1)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const print = (text: string) => setHistory((h) => [...h, { type: "output", text }])

  const run = (raw: string) => {
    const cmd = raw.trim()
    setHistory((h) => [...h, { type: "input", text: `${PROMPT} ${cmd}` }])
    if (!cmd) return
    setCmdHistory((c) => [...c, cmd])

    const [name, ...args] = cmd.split(/\s+/)
    switch (name.toLowerCase()) {
      case "help":
        print(
          [
            "Available commands:",
            "  help            Show this message",
            "  whoami          Print current profile",
            "  about           Short bio",
            "  ls              List sections",
            "  open <app>      Open an app (about, projects, skills, resume, contact, experience, settings)",
            "  projects        List projects",
            "  experience      List work history",
            "  skills          List skills",
            "  contact         Show contact info",
            "  theme [dark|light]  Toggle or set appearance",
            "  github          Open GitHub profile",
            "  neofetch        System info",
            "  echo <text>     Print text",
            "  date            Current date/time",
            "  clear           Clear the screen",
          ].join("\n"),
        )
        break
      case "whoami":
        print(`${profile.name} — ${profile.role} @ ${profile.location}`)
        break
      case "about":
        print(profile.bio[0])
        break
      case "ls":
        print("about  experience  projects  skills  resume  contact  settings")
        break
      case "open": {
        const app = args[0]?.toLowerCase() as AppId
        const valid: AppId[] = [
          "about",
          "experience",
          "projects",
          "skills",
          "resume",
          "contact",
          "terminal",
          "settings",
        ]
        if (valid.includes(app)) {
          openApp(app)
          print(`Opening ${app}...`)
        } else {
          print(`open: unknown app '${args[0] ?? ""}'. Try: about, projects, skills, resume, contact`)
        }
        break
      }
      case "projects":
        print(projects.map((p) => `  ${p.name} (${p.year}) — ${p.description}`).join("\n"))
        break
      case "experience":
        print(experiences.map((e) => `  ${e.period}  ${e.role} @ ${e.company}`).join("\n"))
        break
      case "skills":
        print(
          skillGroups
            .map((g) => `  ${g.category}: ${g.skills.map((s) => s.name).join(", ")}`)
            .join("\n"),
        )
        break
      case "contact":
        print(`  email:  ${profile.email}\n  github: ${profile.github}\n  web:    ${profile.website}`)
        break
      case "theme":
        if (args[0] === "dark" || args[0] === "light") {
          setTheme(args[0])
          print(`Appearance set to ${args[0]}.`)
        } else {
          toggleTheme()
          print("Toggled appearance.")
        }
        break
      case "github":
        window.open(profile.github, "_blank", "noopener,noreferrer")
        print("Opening GitHub in a new tab...")
        break
      case "neofetch":
        print(
          [
            `${profile.name}`,
            "-----------------",
            "OS: Rivera OS (macOS Sonoma theme)",
            "Shell: zsh 5.9",
            "Kernel: React 19 / Next.js 16",
            "Uptime: since login",
            `Role: ${profile.role}`,
            `Location: ${profile.location}`,
          ].join("\n"),
        )
        break
      case "echo":
        print(args.join(" "))
        break
      case "date":
        print(new Date().toString())
        break
      case "sudo":
        print("Nice try. Permission denied — you don't have root on my portfolio. :)")
        break
      case "clear":
        setHistory([])
        break
      default:
        print(`command not found: ${name}. Type 'help' for a list of commands.`)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.keyCode === 229) return
    if (e.key === "Enter") {
      run(input)
      setInput("")
      setHistIndex(-1)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const idx = histIndex < 0 ? cmdHistory.length - 1 : Math.max(0, histIndex - 1)
      setHistIndex(idx)
      setInput(cmdHistory[idx])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (histIndex < 0) return
      const idx = histIndex + 1
      if (idx >= cmdHistory.length) {
        setHistIndex(-1)
        setInput("")
      } else {
        setHistIndex(idx)
        setInput(cmdHistory[idx])
      }
    }
  }

  return (
    <div
      className="os-scroll h-full cursor-text bg-neutral-950/90 p-4 font-mono text-[13px] leading-relaxed text-neutral-100"
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <pre
          key={i}
          className={`whitespace-pre-wrap break-words ${
            line.type === "input" ? "text-emerald-400" : "text-neutral-200"
          }`}
        >
          {line.text}
        </pre>
      ))}
      <div className="flex items-center gap-2">
        <span className="shrink-0 text-emerald-400">{PROMPT}</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent text-neutral-100 caret-emerald-400 outline-none"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
      <div ref={endRef} />
    </div>
  )
}
