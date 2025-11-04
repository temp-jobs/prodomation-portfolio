"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      label: "Discovery & Strategy",
      description: "We deeply understand your business, challenges, and opportunities to craft the perfect solution.",
    },
    {
      number: "02",
      label: "Design & Planning",
      description: "Our team designs scalable solutions tailored to your specific needs and technical requirements.",
    },
    {
      number: "03",
      label: "Development & Build",
      description: "We develop robust systems using cutting-edge technology, following best practices and standards.",
    },
    {
      number: "04",
      label: "Deploy & Optimize",
      description: "We deploy your solution and continuously optimize for performance, security, and growth.",
    },
  ]

  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false))
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepsRef.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleSteps((prev) => {
              const updated = [...prev]
              updated[index] = entry.isIntersecting
              return updated
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            A proven four-step methodology that ensures success, transparency, and measurable results at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepsRef.current[index] = el
              }}
              className={`relative transition-all duration-500 ${
                visibleSteps[index] ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-center hover:text-primary transition-colors">{step.label}</h3>
              <p className="text-muted-foreground text-center text-sm leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="md:hidden text-center mt-6 text-primary animate-bounce">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6">
            Let's start your digital transformation journey today with a free consultation.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
