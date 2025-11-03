"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"

interface ClientLayoutProps {
  children: React.ReactNode
  interFont: { variable: string }
}

export default function ClientLayout({ children, interFont }: ClientLayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  // Update theme in DOM and localStorage
  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  if (!mounted) {
    return (
      <html lang="en" className="dark">
        <body className={`font-sans antialiased bg-background text-foreground ${interFont.variable}`}>
          {children}
          <Analytics />
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className={theme}>
      <body className={`font-sans antialiased bg-background text-foreground ${interFont.variable}`}>
        <button
          onClick={toggleTheme}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-foreground border border-primary/30 hover:border-primary/60 transition-all duration-300 cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
