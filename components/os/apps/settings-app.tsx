"use client"

import { Check, Moon, Sun } from "lucide-react"
import { useOS } from "@/lib/os-context"
import { WALLPAPERS } from "@/lib/os-config"
import { profile } from "@/lib/portfolio-data"

export function SettingsApp() {
  const { theme, setTheme, wallpaper, setWallpaper } = useOS()

  return (
    <div className="p-6">
      <h1 className="mb-5 text-xl font-semibold tracking-tight">System Settings</h1>

      {/* Appearance */}
      <section className="mb-7">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Appearance
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`flex flex-1 flex-col items-center gap-2 rounded-xl border p-4 transition ${
              theme === "light"
                ? "border-sky-500 ring-2 ring-sky-500/40"
                : "border-border hover:bg-foreground/5"
            }`}
          >
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-300">
              <Sun className="h-6 w-6 text-amber-500" />
            </div>
            <span className="text-sm font-medium">Light</span>
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex flex-1 flex-col items-center gap-2 rounded-xl border p-4 transition ${
              theme === "dark"
                ? "border-sky-500 ring-2 ring-sky-500/40"
                : "border-border hover:bg-foreground/5"
            }`}
          >
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-950">
              <Moon className="h-6 w-6 text-sky-300" />
            </div>
            <span className="text-sm font-medium">Dark</span>
          </button>
        </div>
      </section>

      {/* Wallpaper */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Wallpaper
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {WALLPAPERS.map((wp) => (
            <button
              key={wp.id}
              onClick={() => setWallpaper(wp.id)}
              className={`group relative overflow-hidden rounded-xl border transition ${
                wallpaper === wp.id
                  ? "border-sky-500 ring-2 ring-sky-500/40"
                  : "border-border hover:opacity-90"
              }`}
            >
              <img
                src={wp.src || "/placeholder.svg"}
                alt={wp.name}
                className="aspect-video w-full object-cover"
              />
              {wallpaper === wp.id && (
                <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-white">
                  <Check className="h-3 w-3" />
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 bg-black/40 px-2 py-1 text-left text-xs font-medium text-white backdrop-blur-sm">
                {wp.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      <p className="mt-6 text-xs text-muted-foreground">
        Signed in as {profile.name} · Rivera OS
      </p>
    </div>
  )
}
