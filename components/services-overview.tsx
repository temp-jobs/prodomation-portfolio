"use client"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function ServicesOverview() {
  const services = [
    {
      icon: "💻",
      title: "Web & App Development",
      description:
        "Custom solutions built with modern technologies and best practices. Scalable, secure, and user-centric.",
      features: ["Responsive Design", "Performance Optimized", "Scalable Architecture"],
    },
    {
      icon: "🤖",
      title: "AI & Chatbot Development",
      description: "Intelligent AI-powered conversational systems for seamless customer interaction and support.",
      features: ["NLP Processing", "24/7 Availability", "Smart Learning"],
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      description: "Streamline operations and eliminate manual processes with intelligent RPA solutions.",
      features: ["Workflow Optimization", "Error Reduction", "Cost Savings"],
    },
    {
      icon: "🔌",
      title: "IoT & Smart Automation",
      description: "Connect, monitor, and automate your infrastructure in real-time with advanced IoT solutions.",
      features: ["Real-time Monitoring", "Remote Control", "Data Analytics"],
    },
  ]

  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleCards((prev) => {
              const updated = [...prev]
              updated[index] = entry.isIntersecting
              return updated
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Solutions</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Tailored technology services designed to transform your business operations and drive measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`p-6 bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group cursor-pointer relative overflow-hidden ${
                visibleCards[index] ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
