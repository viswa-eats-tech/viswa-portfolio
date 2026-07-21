"use client"

import { useEffect, useState } from "react"
import {
  Apple,
  Wifi,
  Search,
  BatteryFull,
  Volume2,
  Moon,
  Sun,
} from "lucide-react"
import { useOS } from "@/lib/os-context"
import { APPS } from "@/lib/os-config"

export function MenuBar() {
  const { focusedId, theme, toggleTheme, setSpotlightOpen } = useOS()

  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())

    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const activeTitle = focusedId ? APPS[focusedId].title : "Finder"
  const menus = ["File", "Edit", "View", "Window", "Help"]

  const dateStr = now
    ? now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : ""

  const timeStr = now
    ? now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : ""

  return (
    <header className="glass fixed inset-x-0 top-0 z-[500] flex h-7 items-center justify-between border-b border-white/10 px-3 text-[13px] text-foreground">
      <div className="flex items-center gap-4">
        <Apple className="h-4 w-4 fill-current" strokeWidth={0} />

        <span className="font-semibold">{activeTitle}</span>

        <nav className="hidden items-center gap-4 sm:flex">
          {menus.map((menu) => (
            <button
              key={menu}
              className="rounded px-1 opacity-90 transition hover:bg-foreground/10"
            >
              {menu}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3.5">
        <button
          aria-label="Toggle appearance"
          onClick={toggleTheme}
          className="transition hover:opacity-70"
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </button>

        <Volume2 className="h-4 w-4" />
        <Wifi className="h-4 w-4" />
        <BatteryFull className="h-[18px] w-[18px]" />

        <button
          aria-label="Spotlight search"
          onClick={() => setSpotlightOpen(true)}
          className="transition hover:opacity-70"
        >
          <Search className="h-4 w-4" />
        </button>

        <span className="hidden tabular-nums md:inline">
          {dateStr}
        </span>

        <span className="tabular-nums">
          {timeStr}
        </span>
      </div>
    </header>
  )
}