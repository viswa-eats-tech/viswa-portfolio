"use client"

import { motion, useDragControls } from "motion/react"
import { useOS, type WindowState } from "@/lib/os-context"
import { APPS } from "@/lib/os-config"

export function Window({
  state,
  children,
}: {
  state: WindowState
  children: React.ReactNode
}) {
  const { focusApp, closeApp, minimizeApp, toggleMaximize, moveWindow, focusedId } = useOS()
  const controls = useDragControls()
  const meta = APPS[state.id]
  const isFocused = focusedId === state.id

  if (state.minimized) return null

  return (
    <motion.div
      className="glass-strong absolute flex flex-col overflow-hidden rounded-xl border border-white/15 shadow-2xl"
      style={{ zIndex: state.zIndex, width: state.width, height: state.height }}
      initial={{ opacity: 0, scale: 0.92, x: state.x, y: state.y }}
      animate={{ opacity: 1, scale: 1, x: state.x, y: state.y }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      drag
      dragListener={false}
      dragControls={controls}
      dragMomentum={false}
      dragElastic={0}
      onPointerDownCapture={() => focusApp(state.id)}
      onDragEnd={(_, info) => {
        moveWindow(state.id, state.x + info.offset.x, state.y + info.offset.y)
      }}
    >
      {/* Title bar */}
      <div
        onPointerDown={(e) => {
          if (!state.maximized) controls.start(e)
        }}
        onDoubleClick={() => toggleMaximize(state.id)}
        className={`flex h-9 shrink-0 cursor-grab items-center gap-2 border-b border-white/10 px-3 active:cursor-grabbing ${
          isFocused ? "" : "opacity-80"
        }`}
      >
        {/* Traffic lights */}
        <div className="group flex items-center gap-2">
          <button
            aria-label="Close"
            onClick={() => closeApp(state.id)}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] ring-1 ring-black/10"
          >
            <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 group-hover:opacity-100">
              ×
            </span>
          </button>
          <button
            aria-label="Minimize"
            onClick={() => minimizeApp(state.id)}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e] ring-1 ring-black/10"
          >
            <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 group-hover:opacity-100">
              −
            </span>
          </button>
          <button
            aria-label="Maximize"
            onClick={() => toggleMaximize(state.id)}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840] ring-1 ring-black/10"
          >
            <span className="text-[7px] font-bold leading-none text-black/60 opacity-0 group-hover:opacity-100">
              +
            </span>
          </button>
        </div>

        <p className="pointer-events-none flex-1 select-none text-center text-[13px] font-medium text-foreground/90">
          {meta.title}
        </p>
        <div className="w-14" />
      </div>

      {/* Content */}
      <div className="os-scroll flex-1 overflow-y-auto bg-[var(--os-window)]/60">
        {children}
      </div>
    </motion.div>
  )
}
