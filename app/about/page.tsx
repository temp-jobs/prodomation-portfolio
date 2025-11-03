"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20">
        {/* Hero */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            About Prodomation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We believe in the power of intelligent automation to transform businesses and create lasting impact.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent automation solutions that drive innovation, reduce costs, and
                accelerate growth.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Vision</h3>
              <p className="text-muted-foreground">
                A world where businesses of all sizes can leverage cutting-edge technology to scale effortlessly and
                compete globally.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Values</h3>
              <p className="text-muted-foreground">
                Innovation, integrity, and client-centricity drive everything we do. We're committed to excellence and
                long-term partnerships.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of the curve with the latest technologies and methodologies in automation and AI.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-secondary/50 transition-all duration-300">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                Our solutions are built to last with 99.9% uptime and continuous monitoring and support.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">♥</div>
              <h3 className="text-2xl font-bold mb-3">Client-Centric</h3>
              <p className="text-muted-foreground">
                We prioritize your success with dedicated support, custom solutions, and transparent communication.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
