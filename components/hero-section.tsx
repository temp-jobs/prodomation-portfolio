"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-4 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className={isVisible ? "animate-fade-in-down" : "opacity-0"}>
          <p className="text-sm md:text-base text-primary font-semibold mb-4 tracking-widest uppercase">
            Welcome to Prodomation
          </p>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Building Smart Digital Systems for{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-300% animate-shimmer">
            Tomorrow
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          We empower businesses to automate operations, innovate faster, and scale intelligently with cutting-edge
          technology solutions. From AI-powered systems to IoT integration, we transform your vision into reality.
        </p>

        <div
          className={`flex flex-col md:flex-row gap-4 justify-center transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            Book Free Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group bg-transparent"
          >
            Explore Services
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>

        <div className="mt-16 flex justify-center animate-bounce">
          <div className="text-primary/60 text-sm">Scroll to explore</div>
        </div>
      </div>
    </section>
  )
}
