"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Search, CornerDownLeft } from "lucide-react"
import { useOS } from "@/lib/os-context"
import { APPS, DOCK_ORDER, type AppId } from "@/lib/os-config"
import { AppIcon } from "./app-icon"
import { projects } from "@/lib/portfolio-data"

type Result =
  | { kind: "app"; id: AppId; title: string; icon: string; subtitle: string }
  | { kind: "project"; title: string; subtitle: string; target: AppId }

export function Spotlight() {
  const { spotlightOpen, setSpotlightOpen, openApp } = useOS()
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo<Result[]>(() => {
    const apps: Result[] = DOCK_ORDER.map((id) => ({
      kind: "app" as const,
      id,
      title: APPS[id].title,
      icon: APPS[id].icon,
      subtitle: "Application",
    }))
    const projs: Result[] = projects.map((p) => ({
      kind: "project" as const,
      title: p.name,
      subtitle: `Project · ${p.year}`,
      target: "projects" as AppId,
    }))
    const all = [...apps, ...projs]
    if (!query.trim()) return apps
    const q = query.toLowerCase()
    return all.filter(
      (r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q),
    )
  }, [query])

  useEffect(() => {
    setActive(0)
  }, [query])

  // Global keyboard shortcut: Cmd/Ctrl+K or Cmd/Ctrl+Space
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.code === "Space")) {
        e.preventDefault()
        setSpotlightOpen(true)
      }
      if (e.key === "Escape") setSpotlightOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [setSpotlightOpen])

  useEffect(() => {
    if (spotlightOpen) {
      setQuery("")
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [spotlightOpen])

  const choose = (r: Result) => {
    if (r.kind === "app") openApp(r.id)
    else openApp(r.target)
    setSpotlightOpen(false)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((a) => Math.min(results.length - 1, a + 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((a) => Math.max(0, a - 1))
    } else if (e.key === "Enter" && results[active]) {
      choose(results[active])
    }
  }

  return (
    <AnimatePresence>
      {spotlightOpen && (
        <motion.div
          className="fixed inset-0 z-[800] flex items-start justify-center pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => setSpotlightOpen(false)}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <motion.div
            onMouseDown={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="glass-strong relative w-[92%] max-w-xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Spotlight Search"
                className="h-14 flex-1 bg-transparent text-lg text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="os-scroll max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No results for “{query}”
                </p>
              )}
              {results.map((r, i) => (
                <button
                  key={`${r.kind}-${r.title}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(r)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition ${
                    active === i ? "bg-sky-500 text-white" : "hover:bg-foreground/5"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      r.kind === "app"
                        ? `bg-gradient-to-br ${APPS[(r as { id: AppId }).id].gradient} text-white`
                        : "bg-foreground/10"
                    }`}
                  >
                    {r.kind === "app" ? (
                      <AppIcon name={r.icon} className="h-4 w-4" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium">{r.title}</span>
                    <span
                      className={`block text-xs ${
                        active === i ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {r.subtitle}
                    </span>
                  </span>
                  {active === i && <CornerDownLeft className="h-4 w-4 opacity-80" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
