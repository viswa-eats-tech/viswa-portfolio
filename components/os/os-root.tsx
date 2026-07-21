"use client"

import { AnimatePresence } from "motion/react"
import { useOS } from "@/lib/os-context"
import { BootScreen } from "./boot-screen"
import { LoginScreen } from "./login-screen"
import { Desktop } from "./desktop"

export function OSRoot() {
  const { bootPhase, setBootPhase, wallpaper } = useOS()

  return (
    <main className="relative h-dvh w-full select-none overflow-hidden bg-black">
      <Desktop />

      <AnimatePresence>
        {bootPhase === "login" && (
          <LoginScreen
            key="login"
            wallpaper={wallpaper}
            onUnlock={() => setBootPhase("desktop")}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bootPhase === "booting" && (
          <BootScreen key="boot" onDone={() => setBootPhase("login")} />
        )}
      </AnimatePresence>
    </main>
  )
}
