"use client"
import { useEffect, useRef, useState } from "react"

export function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: 150 },
    { label: "Happy Clients", value: 98 },
    { label: "Team Members", value: 45 },
    { label: "Years of Excellence", value: 12 },
  ]

  const [counts, setCounts] = useState<number[]>(new Array(stats.length).fill(0))
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (duration / 50)
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCounts((prev) => {
            const updated = [...prev]
            updated[index] = stat.value
            return updated
          })
        } else {
          setCounts((prev) => {
            const updated = [...prev]
            updated[index] = Math.floor(current)
            return updated
          })
        }
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-shimmer" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {counts[index]}+
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
