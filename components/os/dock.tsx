"use client"

import { useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"
import { GithubIcon } from "./brand-icons"
import { useOS } from "@/lib/os-context"
import { APPS, DOCK_ORDER, type AppId } from "@/lib/os-config"
import { AppIcon } from "./app-icon"
import { profile } from "@/lib/portfolio-data"

const BASE = 52
const MAX = 84
const DISTANCE = 130

function DockItem({
  mouseX,
  children,
  label,
  onClick,
  running,
}: {
  mouseX: MotionValue<number>
  children: React.ReactNode
  label: string
  onClick: () => void
  running?: boolean
}) {
  const ref = useRef<HTMLButtonElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: BASE }
    return val - bounds.x - bounds.width / 2
  })

  const sizeSync = useTransform(distance, [-DISTANCE, 0, DISTANCE], [BASE, MAX, BASE])
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 200, damping: 14 })

  return (
    <div className="group relative flex flex-col items-center">
      <span className="glass-strong pointer-events-none absolute -top-11 whitespace-nowrap rounded-lg border border-white/15 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
        {label}
      </span>
      <motion.button
        ref={ref}
        onClick={onClick}
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-2xl"
        aria-label={label}
      >
        {children}
      </motion.button>
      <span
        className={`mt-0.5 h-1 w-1 rounded-full bg-foreground/70 transition-opacity ${
          running ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}

export function Dock() {
  const { openApp, openApps } = useOS()
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <div className="fixed inset-x-0 bottom-2 z-[400] flex justify-center">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="glass-strong flex items-end gap-2 rounded-3xl border border-white/15 px-3 pb-1.5 pt-2 shadow-2xl"
      >
        {DOCK_ORDER.map((id: AppId) => {
          const meta = APPS[id]
          return (
            <DockItem
              key={id}
              mouseX={mouseX}
              label={meta.title}
              onClick={() => openApp(id)}
              running={openApps.includes(id)}
            >
              <span
                className={`flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br ${meta.gradient} text-white shadow-inner`}
              >
                <AppIcon name={meta.icon} className="h-1/2 w-1/2" />
              </span>
            </DockItem>
          )
        })}

        {/* Divider */}
        <div className="mx-1 h-12 w-px self-center bg-foreground/15" />

        {/* External GitHub */}
        <DockItem
          mouseX={mouseX}
          label="GitHub"
          onClick={() => window.open(profile.github, "_blank", "noopener,noreferrer")}
        >
          <span className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-900 text-white shadow-inner">
            <Github className="h-1/2 w-1/2" />
          </span>
        </DockItem>
      </motion.nav>
    </div>
  )
}
