import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { StatsSection } from "@/components/stats-section"
import { HowWeWork } from "@/components/how-we-work"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Prodomation | Automation Solutions & Web Development",
  description:
    "Discover intelligent automation, web development, chatbot solutions, and IoT services. Transform your business with Prodomation's cutting-edge technology.",
  keywords: ["automation company", "web development", "AI solutions", "business automation", "digital transformation"],
  openGraph: {
    title: "Prodomation | Transform Your Business with Automation",
    description: "Expert solutions in automation, AI, and web development.",
    url: "https://prodomation.tech",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prodomation",
  url: "https://prodomation.tech",
  description: "Intelligent Automation & Web Development Company",
  logo: "https://prodomation.tech/logo.png",
  sameAs: ["https://linkedin.com/company/prodomation", "https://twitter.com/prodomation"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    telephone: "+917080313566",
    email: "hello@prodomation.tech",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <HowWeWork />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  )
}
