"use client"

import { AnimatePresence, motion } from "motion/react"
import { useOS } from "@/lib/os-context"
import { WALLPAPERS } from "@/lib/os-config"
import { MenuBar } from "./menu-bar"
import { Dock } from "./dock"
import { Window } from "./window"
import { AppContent } from "./app-content"
import { Spotlight } from "./spotlight"
import { DesktopWidgets } from "./desktop-widgets"

export function Desktop() {
  const { windows, wallpaper } = useOS()
  const wp = WALLPAPERS.find((w) => w.id === wallpaper) ?? WALLPAPERS[0]

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Wallpaper */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={wp.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${wp.src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <MenuBar />
      <DesktopWidgets />

      {/* Windows */}
      <AnimatePresence>
        {windows.map((w) => (
          <Window key={w.id} state={w}>
            <AppContent id={w.id} />
          </Window>
        ))}
      </AnimatePresence>

      <Spotlight />
      <Dock />
    </motion.div>
  )
}
