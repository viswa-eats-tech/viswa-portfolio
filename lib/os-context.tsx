"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { AppId } from "./os-config"
import { APPS, WALLPAPERS } from "./os-config"

export type WindowState = {
  id: AppId
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  minimized: boolean
  maximized: boolean
  // pre-maximize bounds
  prev?: { x: number; y: number; width: number; height: number }
}

type Theme = "dark" | "light"
type BootPhase = "booting" | "login" | "desktop"

type OSContextValue = {
  windows: WindowState[]
  openApps: AppId[]
  focusedId: AppId | null
  theme: Theme
  wallpaper: string
  bootPhase: BootPhase
  spotlightOpen: boolean
  openApp: (id: AppId) => void
  closeApp: (id: AppId) => void
  focusApp: (id: AppId) => void
  minimizeApp: (id: AppId) => void
  toggleMaximize: (id: AppId) => void
  moveWindow: (id: AppId, x: number, y: number) => void
  setTheme: (t: Theme) => void
  toggleTheme: () => void
  setWallpaper: (id: string) => void
  setBootPhase: (p: BootPhase) => void
  setSpotlightOpen: (o: boolean) => void
}

const OSContext = createContext<OSContextValue | null>(null)

let zCounter = 10

function initialPosition(index: number, width: number, height: number) {
  if (typeof window === "undefined") {
    return { x: 120 + index * 28, y: 90 + index * 28 }
  }
  const maxX = Math.max(40, window.innerWidth - width - 40)
  const maxY = Math.max(60, window.innerHeight - height - 120)
  const x = Math.min(maxX, 120 + index * 28)
  const y = Math.min(maxY, 90 + index * 28)
  return { x, y }
}

export function OSProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [focusedId, setFocusedId] = useState<AppId | null>(null)
  const [theme, setThemeState] = useState<Theme>("dark")
  const [wallpaper, setWallpaperState] = useState<string>(WALLPAPERS[0].id)
  const [bootPhase, setBootPhase] = useState<BootPhase>("booting")
  const [spotlightOpen, setSpotlightOpen] = useState(false)

  // apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const focusApp = useCallback((id: AppId) => {
    setFocusedId(id)
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: ++zCounter, minimized: false } : w)),
    )
  }, [])

  const openApp = useCallback(
    (id: AppId) => {
      setWindows((prev) => {
        const existing = prev.find((w) => w.id === id)
        if (existing) {
          return prev.map((w) =>
            w.id === id ? { ...w, minimized: false, zIndex: ++zCounter } : w,
          )
        }
        const meta = APPS[id]
        const { width, height } = meta.defaultSize
        const { x, y } = initialPosition(prev.length, width, height)
        return [
          ...prev,
          {
            id,
            x,
            y,
            width,
            height,
            zIndex: ++zCounter,
            minimized: false,
            maximized: false,
          },
        ]
      })
      setFocusedId(id)
    },
    [],
  )

  const closeApp = useCallback(
    (id: AppId) => {
      setWindows((prev) => prev.filter((w) => w.id !== id))
      setFocusedId((cur) => (cur === id ? null : cur))
    },
    [],
  )

  const minimizeApp = useCallback((id: AppId) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)))
    setFocusedId((cur) => (cur === id ? null : cur))
  }, [])

  const toggleMaximize = useCallback((id: AppId) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) return w
        if (w.maximized && w.prev) {
          return { ...w, maximized: false, ...w.prev, prev: undefined, zIndex: ++zCounter }
        }
        const prevBounds = { x: w.x, y: w.y, width: w.width, height: w.height }
        return {
          ...w,
          maximized: true,
          prev: prevBounds,
          x: 8,
          y: 36,
          width: window.innerWidth - 16,
          height: window.innerHeight - 140,
          zIndex: ++zCounter,
        }
      }),
    )
    setFocusedId(id)
  }, [])

  const moveWindow = useCallback((id: AppId, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)))
  }, [])

  const setTheme = useCallback((t: Theme) => setThemeState(t), [])
  const toggleTheme = useCallback(() => setThemeState((t) => (t === "dark" ? "light" : "dark")), [])
  const setWallpaper = useCallback((id: string) => setWallpaperState(id), [])

  const openApps = useMemo(() => windows.map((w) => w.id), [windows])

  const value = useMemo<OSContextValue>(
    () => ({
      windows,
      openApps,
      focusedId,
      theme,
      wallpaper,
      bootPhase,
      spotlightOpen,
      openApp,
      closeApp,
      focusApp,
      minimizeApp,
      toggleMaximize,
      moveWindow,
      setTheme,
      toggleTheme,
      setWallpaper,
      setBootPhase,
      setSpotlightOpen,
    }),
    [
      windows,
      openApps,
      focusedId,
      theme,
      wallpaper,
      bootPhase,
      spotlightOpen,
      openApp,
      closeApp,
      focusApp,
      minimizeApp,
      toggleMaximize,
      moveWindow,
      setTheme,
      toggleTheme,
      setWallpaper,
    ],
  )

  return <OSContext.Provider value={value}>{children}</OSContext.Provider>
}

export function useOS() {
  const ctx = useContext(OSContext)
  if (!ctx) throw new Error("useOS must be used within OSProvider")
  return ctx
}
