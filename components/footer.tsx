"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t, direction } = useLanguage()

  return (
    <footer className="bg-navy-900 text-gray-200" dir={direction}>
      <div className="container px-4 md:px-6 py-12 md:py-16">
        {/* Red accent bar at the top of the footer */}
        <div className="w-full h-1 bg-red-600 mb-8 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/tnet-logo.png"
                alt="TNET Logo"
                width={120}
                height={48}
                className="h-10 w-auto bg-white p-1 rounded"
              />
            </Link>
            <p className="text-sm text-gray-300">{t("footerDescription")}</p>
            <div className={`flex ${direction === "rtl" ? "space-x-reverse" : ""} space-x-4`}>
              <Link href="https://www.facebook.com/tnet.ae" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/tnetinfotech" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/tnet.ae/#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link> */}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">{t("quickLinks")}</h3>
            <div className="w-12 h-0.5 bg-red-600 rounded-full"></div>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("home")}
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("about")}
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("services")}
              </Link>
              <Link href="/clients" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("clients")}
              </Link>
              <Link href="/work" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("work")}
              </Link>
              <Link href="/careers" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("careers")}
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("contact")}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">{t("services")}</h3>
            <div className="w-12 h-0.5 bg-red-600 rounded-full"></div>
            <nav className="flex flex-col space-y-2">
              <Link href="/services/accounting" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("accounting")}
              </Link>
              <Link href="/services/hosting" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("hosting")}
              </Link>
              <Link href="/services/consulting" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("consulting")}
              </Link>
              <Link href="/services/security" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("security")}
              </Link>
              <Link href="/services/social-media" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("socialMedia")}
              </Link>
              <Link href="/services/web-design" className="text-gray-300 hover:text-red-500 transition-colors">
                {t("webDesign")}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">{t("contactInfo")}</h3>
            <div className="w-12 h-0.5 bg-red-600 rounded-full"></div>
            <div className="space-y-3">
              <div className={`flex items-start ${direction === "rtl" ? "space-x-reverse" : ""} space-x-3`}>
                <MapPin className="h-5 w-5 mt-0.5 text-red-500" />
                <span className="text-gray-300">{t("address")}</span>
              </div>
              <div className={`flex items-center ${direction === "rtl" ? "space-x-reverse" : ""} space-x-3`}>
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">{t("email")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-navy-800 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TNET. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
