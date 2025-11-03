import type { Metadata } from "next"
import PortfolioClient from "./portfolio-client"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Prodomation Projects",
  description:
    "Explore Prodomation's successful automation projects and case studies. See how we've helped businesses with web development, chatbots, process automation, and IoT solutions.",
  keywords: ["case studies", "portfolio", "automation projects", "success stories", "automation examples"],
  openGraph: {
    title: "Portfolio | Prodomation Case Studies",
    description: "Discover our successful automation and development projects.",
    url: "https://prodomation.com/portfolio",
  },
}

export default function Portfolio() {
  return <PortfolioClient />
}
