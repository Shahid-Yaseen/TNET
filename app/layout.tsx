import type React from "react"
import type { Metadata } from "next"
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
// Import the ScrollToTop component
import { ScrollToTop } from "@/components/scroll-to-top"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "TNET",
  description: `accounting software
bookkeeping services
web hosting
domain registration
IT support
IT services
cyber security
social media marketing agency
SEO services
website builder
small business accounting services
online bookkeeping for startups
tax preparation services for UAE
cloud accounting solutions
virtual CFO services
best web hosting for small business
cheap domain name registration
VPS hosting providers
dedicated server hosting
domain name search tool
IT consulting for small businesses
cloud migration services
network infrastructure consulting
IT strategy consulting
managed IT services
IT solutions for [industry]
enterprise IT services
data backup and recovery services
computer network services
IT project management
business security systems
CCTV installation services
managed security services provider (MSSP)
vulnerability scanning services
penetration testing services
social media management services
Facebook advertising agency
Instagram marketing services
social media strategy development
social media content creation
local SEO services
e-commerce SEO agency
keyword research tools
technical SEO audit
link building services
website vulnerability scanner
network vulnerability assessment
application security testing
PCI compliance scanning
security audit services
responsive website design company
small business website design
e-commerce website development
affordable website design services
custom website design
Dubai
Abu Dhabi
Sharjah
Ajman
GCC
Egypt
Iraq
Syria
Lybia
KSA
kuwait
Oman
Qatar
مصر
العراق
الامارات 
دبي
أبو ظبي
السعودية 
الكويت 
قطر
البحرين 
عملن`,
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ScrollToTop />
          <Header/>
          {children}
          <Footer/>
          {/* WhatsApp Icon */}
          <Link
            href="https://wa.me/+13512272277"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1.5" />
            </svg>
          </Link>
        </LanguageProvider>
      </body>
      <GoogleTagManager gtmId="GTM-T2LSMJB8" />
      <GoogleAnalytics gaId="G-CGM6YFRK30" />

    </html>
  )
}
