import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
// Import the ScrollToTop component
import { ScrollToTop } from "@/components/scroll-to-top"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
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
    </html>
  )
}
