"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ContactClientPage() {
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
        {/* Header - <CHANGE> Added H1 with primary keyword and schema data */}
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Ready to Automate Your Business?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Let's discuss your next big digital move. Get in touch with us today for a free consultation.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="p-8 bg-card border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      aria-required="true"
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
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
                  <div
                    className="mt-4 p-4 bg-primary/20 border border-primary rounded-lg text-primary animate-pulse"
                    role="status"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-card border-border">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <a
                      href="mailto:hello@prodomation.tech"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email Prodomation"
                    >
                      hello@prodomation.tech
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-secondary mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/7080313566"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label="Contact via WhatsApp"
                    >
                      +91 9120316037, +91 7080313566
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/company/prodomation"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Connect on LinkedIn"
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
                    <span>Numerous years of experience in automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-3">✓</span>
                    <span>Dedicated support & custom solutions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>Proven track record with numerous projects</span>
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
