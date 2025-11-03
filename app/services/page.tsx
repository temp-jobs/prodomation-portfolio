"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web & App Development",
      description:
        "Custom web and mobile applications built with cutting-edge frameworks and technologies. Responsive, scalable, and user-centric solutions.",
      features: ["Full-stack development", "Progressive web apps", "Native mobile apps", "API integration"],
    },
    {
      icon: "🤖",
      title: "Chatbot Development",
      description:
        "Intelligent conversational AI solutions powered by advanced NLP. Transform customer service, lead generation, and support operations.",
      features: ["NLP & ML integration", "Multi-platform deployment", "24/7 availability", "Natural interactions"],
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      description:
        "Streamline your business processes with intelligent automation. Reduce manual work, eliminate errors, and boost productivity.",
      features: ["RPA solutions", "Workflow optimization", "Data integration", "Cost reduction"],
    },
    {
      icon: "🔌",
      title: "IoT & Smart Automation",
      description:
        "Connect and automate your physical infrastructure. Real-time monitoring, predictive maintenance, and intelligent control systems.",
      features: ["Device connectivity", "Real-time analytics", "Predictive maintenance", "Smart controls"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive solutions designed to automate, innovate, and scale your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90">
                  Get Quote
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
