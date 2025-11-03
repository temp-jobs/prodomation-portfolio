"use client"
import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Re-define projects data within the client component
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Automation",
    description: "Automated inventory management and order processing for a leading retail company.",
    image: "/e-commerce-dashboard.png",
    imageAlt: "E-commerce automated inventory management dashboard showing real-time order processing and stock levels",
    tags: ["Automation", "E-Commerce", "RPA"],
    tech: ["Python", "Node.js", "PostgreSQL"],
    results: "60% time savings on order processing",
  },
  {
    id: 2,
    title: "AI Customer Support Chatbot",
    description: "Intelligent conversational AI handling 80% of customer inquiries automatically.",
    image: "/chatbot-interface.png",
    imageAlt: "AI chatbot interface demonstrating natural language processing and customer support automation",
    tags: ["AI", "Chatbot", "NLP"],
    tech: ["Python", "TensorFlow", "Dialogflow"],
    results: "45% reduction in support costs",
  },
  {
    id: 3,
    title: "IoT Manufacturing System",
    description: "Real-time monitoring and predictive maintenance for smart manufacturing.",
    image: "/iot-dashboard-factory.jpg",
    imageAlt:
      "IoT manufacturing dashboard with real-time monitoring, predictive maintenance alerts, and factory equipment analytics",
    tags: ["IoT", "Analytics", "Manufacturing"],
    tech: ["IoT", "Apache Kafka", "Python"],
    results: "35% decrease in downtime",
  },
  {
    id: 4,
    title: "Financial Process Automation",
    description: "Streamlined invoice processing and reconciliation workflow.",
    image: "/financial-dashboard-reports.jpg",
    imageAlt:
      "Financial dashboard showing automated invoice processing, reconciliation reports, and accounting automation",
    tags: ["Finance", "RPA", "Integration"],
    tech: ["UiPath", "SAP", "Python"],
    results: "80% faster processing",
  },
  {
    id: 5,
    title: "Healthcare Data Platform",
    description: "HIPAA-compliant data integration and analysis platform.",
    image: "/medical-data-dashboard.jpg",
    imageAlt: "Healthcare data platform with HIPAA-compliant medical records management and patient data analytics",
    tags: ["Healthcare", "Data", "Security"],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    results: "Secure handling of 1M+ records",
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    description: "Intelligent supply chain tracking and optimization system.",
    image: "/supply-chain-tracking-map.jpg",
    imageAlt: "Supply chain tracking map showing real-time logistics, inventory optimization, and route planning",
    tags: ["Supply Chain", "Analytics", "AI"],
    tech: ["React", "Node.js", "MongoDB"],
    results: "25% cost reduction",
  },
]

export default function PortfolioClient() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20">
        {/* Header - <CHANGE> Added H1 with primary keywords */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Portfolio & Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our successful automation and development projects with measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg?height=192&width=400&query=automation-dashboard"}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Card className="bg-card border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="float-right text-2xl text-muted-foreground hover:text-foreground"
                aria-label="Close project details"
              >
                ×
              </button>

              <img
                src={selectedProject.image || "/placeholder.svg?height=256&width=500&query=automation-project"}
                alt={selectedProject.imageAlt}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold mb-3">Technologies</h3>
                  <div className="space-y-1">
                    {selectedProject.tech.map((tech, i) => (
                      <p key={i} className="text-muted-foreground">
                        • {tech}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Results</h3>
                  <p className="text-primary font-semibold">{selectedProject.results}</p>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90">
                  Request Demo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  )
}
