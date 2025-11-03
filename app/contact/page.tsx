"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", company: "", projectType: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Ready to Automate Your Business?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Let's discuss your next big digital move. Get in touch with us today.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="p-8 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a project type</option>
                      <option value="web">Web Development</option>
                      <option value="chatbot">Chatbot Development</option>
                      <option value="automation">Process Automation</option>
                      <option value="iot">IoT & Smart Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                  >
                    Send Message
                  </Button>
                </form>

                {submitted && (
                  <div className="mt-4 p-4 bg-primary/20 border border-primary rounded-lg text-primary animate-pulse">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Email</h4>
                    <a
                      href="mailto:hello@prodomation.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@prodomation.com
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary mb-2">WhatsApp</h4>
                    <a
                      href="https://wa.me/1234567890"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/company/prodomation"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @prodomation
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>10+ years of experience in automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">✓</span>
                    <span>Dedicated support & custom solutions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>Proven track record with 500+ projects</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">✓</span>
                    <span>Cost-effective with measurable ROI</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
