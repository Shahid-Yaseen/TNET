import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo, Tajawal } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
// Import the ScrollToTop component
import { ScrollToTop } from "@/components/scroll-to-top"

// Latin font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Arabic fonts
const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
})

const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "TNET - Innovative Technology Solutions",
  description:
    "TNET delivers cutting-edge IT services, web solutions, and digital marketing strategies to help your business thrive in the digital age.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cairo.variable} ${tajawal.variable} min-h-screen flex flex-col`}>
        <LanguageProvider>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
