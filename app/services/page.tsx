import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Web Development, Chatbot & Automation Solutions",
  description:
    "Explore Prodomation's comprehensive services: web & app development, chatbot development, process automation, and IoT solutions for digital transformation.",
  keywords: [
    "web development",
    "chatbot development",
    "process automation",
    "IoT services",
    "RPA",
    "automation solutions",
  ],
  openGraph: {
    title: "Services | Automation & Development Solutions",
    description: "Complete automation and web development services for business transformation.",
    url: "https://prodomation.tech/services",
  },
}

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web & App Development",
      description:
        "Custom web and mobile applications built with cutting-edge frameworks and technologies. Responsive, scalable, and user-centric solutions for modern businesses.",
      features: ["Full-stack development", "Progressive web apps", "Native mobile apps", "API integration"],
      slug: "web-development",
    },
    {
      icon: "🤖",
      title: "Chatbot Development",
      description:
        "Intelligent conversational AI solutions powered by advanced NLP. Transform customer service, lead generation, and support operations with 24/7 automation.",
      features: ["NLP & ML integration", "Multi-platform deployment", "24/7 availability", "Natural interactions"],
      slug: "chatbot-development",
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      description:
        "Streamline your business processes with intelligent automation. Reduce manual work, eliminate errors, and boost productivity across your organization.",
      features: ["RPA solutions", "Workflow optimization", "Data integration", "Cost reduction"],
      slug: "process-automation",
    },
    {
      icon: "🔌",
      title: "IoT & Smart Automation",
      description:
        "Connect and automate your physical infrastructure. Real-time monitoring, predictive maintenance, and intelligent control systems for smart enterprises.",
      features: ["Device connectivity", "Real-time analytics", "Predictive maintenance", "Smart controls"],
      slug: "iot-automation",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20">
        {/* Header - Added H1 with primary keywords */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive automation and development solutions designed to innovate and scale your business.
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
                <div className="text-5xl mb-6" role="img" aria-label={`${service.title} icon`}>
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-sm">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact?service=" className="w-full block">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90">
                    Get Quote
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Related Services Section - Added internal linking */}
          <div className="mt-20 p-8 bg-card border border-border rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Explore Related Services</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/services" className="text-primary hover:text-accent transition-colors">
                → All Services
              </Link>
              <Link href="/portfolio" className="text-primary hover:text-accent transition-colors">
                → Case Studies
              </Link>
              <Link href="/about" className="text-primary hover:text-accent transition-colors">
                → About Us
              </Link>
              <Link href="/contact" className="text-primary hover:text-accent transition-colors">
                → Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
