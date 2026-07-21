"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Send, Check, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function ContactApp() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: "", email: "", message: "" })
    }, 2500)
  }

  return (
    <div className="p-6">
      <h1 className="mb-1 text-xl font-semibold tracking-tight">Get in touch</h1>
      <p className="mb-5 text-sm text-muted-foreground">
        Have a project in mind? Send a message — this composes a note in a mock Mail app.
      </p>

      <form onSubmit={submit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="rounded-lg border border-border bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-sky-500"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your email"
            className="rounded-lg border border-border bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-sky-500"
          />
        </div>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Your message..."
          className="w-full resize-none rounded-lg border border-border bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-sky-500"
        />
        <button
          type="submit"
          disabled={sent}
          className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600 disabled:opacity-70"
        >
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2"
              >
                <Check className="h-4 w-4" /> Message sent
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2"
              >
                <Send className="h-4 w-4" /> Send message
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
        <ContactLink href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" />} label="Email" />
        <ContactLink href={profile.github} icon={<Github className="h-4 w-4" />} label="GitHub" />
        <ContactLink href={profile.linkedin} icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
        <ContactLink href={profile.twitter} icon={<Twitter className="h-4 w-4" />} label="Twitter" />
      </div>
    </div>
  )
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-sm transition hover:bg-foreground/10"
    >
      {icon} {label}
    </a>
  )
}
