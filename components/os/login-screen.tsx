"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { ChevronRight, Wifi, BatteryFull } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { WALLPAPERS } from "@/lib/os-config"

export function LoginScreen({
  wallpaper,
  onUnlock,
}: {
  wallpaper: string
  onUnlock: () => void
}) {
  const [time, setTime] = useState(() => new Date())
  const [password, setPassword] = useState("")
  const wp = WALLPAPERS.find((w) => w.id === wallpaper) ?? WALLPAPERS[0]

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // Any password (or empty) unlocks — this is a portfolio, not a vault.
    onUnlock()
  }

  const dateStr = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
  const timeStr = time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })

  return (
    <motion.div
      className="fixed inset-0 z-[900] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wp.src})` }}
      />
      <div className="absolute inset-0 bg-black/25 backdrop-blur-2xl" />

      {/* Clock */}
      <div className="absolute left-1/2 top-[16%] -translate-x-1/2 text-center text-white drop-shadow-lg">
        <p className="text-lg font-medium tracking-wide">{dateStr}</p>
        <p className="text-8xl font-semibold tabular-nums tracking-tight">{timeStr}</p>
      </div>

      {/* Top-right status */}
      <div className="absolute right-6 top-5 flex items-center gap-3 text-white/90">
        <Wifi className="h-4 w-4" />
        <BatteryFull className="h-5 w-5" />
      </div>

      {/* Login card */}
      <motion.form
        onSubmit={submit}
        className="absolute bottom-[18%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-3xl font-semibold text-white shadow-xl ring-4 ring-white/30">
          {profile.avatarInitials}
        </div>
        <p className="text-xl font-medium text-white drop-shadow">{profile.name}</p>

        <div className="flex items-center gap-2">
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="h-9 w-56 rounded-full border border-white/30 bg-white/15 px-4 text-center text-sm text-white placeholder:text-white/60 backdrop-blur-md outline-none focus:bg-white/25"
          />
          <button
            type="submit"
            aria-label="Log in"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-white/70">Hint: press Enter to log in</p>
      </motion.form>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
        Click anywhere or press Enter to continue
      </p>

      {/* Click-anywhere overlay for quick entry */}
      <button
        aria-label="Unlock"
        onClick={onUnlock}
        className="absolute inset-0 -z-0"
        tabIndex={-1}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  )
}
