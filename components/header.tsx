"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const { t, direction } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  // Service categories that match the ones in services-overview.tsx
  const serviceCategories = [
    {
      title: t("accounting"),
      href: "/services/accounting",
    },
    {
      title: t("hosting"),
      href: "/services/hosting",
    },
    {
      title: t("consulting"),
      href: "/services/consulting",
    },
    {
      title: t("it"),
      href: "/services/it",
    },
    {
      title: t("security"),
      href: "/services/security",
    },
    {
      title: t("socialMedia"),
      href: "/services/social-media",
    },
    {
      title: t("seo"),
      href: "/services/seo",
    },
    {
      title: t("vulnerability"),
      href: "/services/vulnerability",
    },
    {
      title: t("webDesign"),
      href: "/services/web-design",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white" dir={direction}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/tnet-logo.png" alt="TNET Logo" width={100} height={40} className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
            {t("home")}
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
            {t("about")}
          </Link>
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-red-600 transition-colors focus:outline-none">
                  {t("services")}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {serviceCategories.map((service, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link href={service.href} className="w-full">
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link href="/clients" className="text-sm font-medium hover:text-red-600 transition-colors">
            {t("clients")}
          </Link>
          <Link href="/work" className="text-sm font-medium hover:text-red-600 transition-colors">
            {t("work")}
          </Link>
          <Link href="/careers" className="text-sm font-medium hover:text-red-600 transition-colors">
            {t("careers")}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-red-600 transition-colors">
            {t("contact")}
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700">{t("getInTouch")}</Button>
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button className="ml-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-white border-t">
            <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
              {t("home")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
              {t("about")}
            </Link>
            <div>
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full text-sm font-medium hover:text-red-600 transition-colors"
              >
                <span>{t("services")}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div
                  className={`pl-4 mt-2 space-y-2 ${direction === "rtl" ? "border-r mr-2" : "border-l ml-2"} border-gray-200`}
                >
                  {serviceCategories.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-red-600 transition-colors py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/clients" className="text-sm font-medium hover:text-red-600 transition-colors">
              {t("clients")}
            </Link>
            <Link href="/work" className="text-sm font-medium hover:text-red-600 transition-colors">
              {t("work")}
            </Link>
            <Link href="/careers" className="text-sm font-medium hover:text-red-600 transition-colors">
              {t("careers")}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-red-600 transition-colors">
              {t("contact")}
            </Link>
            <Link href="/contact">
              <Button className="w-full bg-red-600 hover:bg-red-700">{t("getInTouch")}</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
