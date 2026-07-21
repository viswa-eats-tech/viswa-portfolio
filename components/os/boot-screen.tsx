"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Apple } from "lucide-react"

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const duration = 2200
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // ease-out
      setProgress(1 - Math.pow(1 - t, 2))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(onDone, 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <Apple className="h-20 w-20 fill-white text-white" strokeWidth={0} />
      </motion.div>

      <div className="absolute bottom-[22%] flex flex-col items-center gap-4">
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full bg-white"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  )
}
