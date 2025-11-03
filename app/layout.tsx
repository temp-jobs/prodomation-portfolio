import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Prodomation | Intelligent Automation & Web Development Company",
  description:
    "Prodomation offers web development, chatbot development, process automation, and IoT solutions. Transform your business with intelligent automation technology.",
  keywords: [
    "automation",
    "web development",
    "chatbot",
    "process automation",
    "IoT",
    "smart automation",
    "digital transformation",
  ],
  metadataBase: new URL("https://prodomation.tech"),
  canonical: "https://prodomation.tech",
  openGraph: {
    title: "Prodomation | Intelligent Automation Solutions",
    description: "Transform your business with cutting-edge automation technology, Web/App and AI solutions.",
    url: "https://prodomation.tech",
    siteName: "Prodomation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prodomation | Automation & Development",
    description: "Intelligent solutions for business automation and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ZclwuhjHa7TnrvvFj_lSC79abEZnZU47n7khYUpF6", // Add your actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout interFont={_inter}>{children}</ClientLayout>
}
