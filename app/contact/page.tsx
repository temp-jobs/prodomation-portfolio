import type { Metadata } from "next"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | Prodomation - Get Your Free Automation Consultation",
  description:
    "Contact Prodomation for web development, automation, chatbot, and IoT solutions. Get a free consultation on your project.",
  keywords: ["contact us", "automation consultation", "business inquiry", "project quote", "schedule demo"],
  openGraph: {
    title: "Contact Prodomation | Schedule Your Consultation",
    description: "Reach out to discuss your automation and development needs.",
    url: "https://prodomation.tech/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
