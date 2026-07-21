"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Command, Search } from "lucide-react"
import { useOS } from "@/lib/os-context"
import { profile } from "@/lib/portfolio-data"

export function DesktopWidgets() {
  const { setSpotlightOpen, openApps } = useOS()

  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())

    const t = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(t)
  }, [])

  // Hide the intro widgets once the user starts opening apps to reduce clutter
  const showHint = openApps.length === 0

  return (
    <div className="pointer-events-none absolute right-4 top-10 flex w-56 flex-col gap-3">
      {/* Clock widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-2xl border border-white/15 p-4 text-white shadow-xl"
      >
        <p
          suppressHydrationWarning
          className="text-xs font-medium opacity-80"
        >
          {now
            ? now.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })
            : ""}
        </p>

        <p
          suppressHydrationWarning
          className="text-4xl font-semibold tabular-nums tracking-tight"
        >
          {now
            ? now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : ""}
        </p>
      </motion.div>

      {/* Welcome / hint widget */}
      {showHint && (
        <motion.button
          type="button"
          onClick={() => setSpotlightOpen(true)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.45 }}
          className="glass pointer-events-auto rounded-2xl border border-white/15 p-4 text-left text-white shadow-xl"
        >
          <p className="text-sm font-semibold">
            Welcome to {profile.name.split(" ")[0]}&apos;s OS
          </p>

          <p className="mt-1 text-xs leading-relaxed opacity-80">
            Click the dock icons to explore, or open Spotlight to search.
          </p>

          <span className="mt-3 flex items-center gap-1.5 text-xs font-medium">
            <span className="flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5">
              <Command className="h-3 w-3" /> K
            </span>

            <span className="opacity-80">or</span>

            <span className="flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5">
              <Search className="h-3 w-3" /> Spotlight
            </span>
          </span>
        </motion.button>
      )}
    </div>
  )
}