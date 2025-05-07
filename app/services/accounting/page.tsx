"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BarChart, CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export default function AccountingPage() {
  const { t, direction } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Handle responsive video positioning
    const handleResize = () => {
      if (videoRef.current) {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const aspectRatio = windowWidth / windowHeight
        const sectionHeight = windowWidth < 768 ? Math.min(windowHeight * 0.8, 600) : windowHeight * 0.9

        // Extra small devices (phones)
        if (windowWidth < 576) {
          videoRef.current.style.width = "auto"
          videoRef.current.style.height = "100%"
          videoRef.current.style.transform = "translateX(-50%)"
          videoRef.current.style.left = "50%"
          videoRef.current.style.top = "0"
          // Adjust container height for very small screens
          const container = videoRef.current.closest("section")
          if (container) {
            container.style.minHeight = `${sectionHeight}px`
            // Ensure video container takes full height
            const videoContainer = container.querySelector("div.absolute.inset-0.flex")
            if (videoContainer) {
              videoContainer.style.height = "100%"
            }
          }
        }
        // Small devices (tablets)
        else if (windowWidth < 768) {
          videoRef.current.style.width = aspectRatio < 1 ? "auto" : "100%"
          videoRef.current.style.height = aspectRatio < 1 ? "100%" : "auto"
          videoRef.current.style.transform = aspectRatio < 1 ? "translateX(-50%)" : "translateY(-50%)"
          videoRef.current.style.left = aspectRatio < 1 ? "50%" : "0"
          videoRef.current.style.top = aspectRatio < 1 ? "0" : "50%"
          // Adjust container height for small screens
          const container = videoRef.current.closest("section")
          if (container) {
            container.style.minHeight = `${sectionHeight}px`
          }
        }
        // Medium devices (landscape tablets, small laptops)
        else if (windowWidth < 992) {
          videoRef.current.style.width = "100%"
          videoRef.current.style.height = "auto"
          videoRef.current.style.transform = windowWidth / windowHeight < 16 / 9 ? "translateY(-25%)" : ""
          videoRef.current.style.left = "0"
          videoRef.current.style.top = windowWidth / windowHeight < 16 / 9 ? "25%" : "0"
        }
        // Large devices (laptops, desktops)
        else {
          videoRef.current.style.width = "100%"
          videoRef.current.style.height = "auto"
          videoRef.current.style.minHeight = "100%"
          videoRef.current.style.transform = ""
          videoRef.current.style.left = "0"
          videoRef.current.style.top = "0"
        }
      }
    }

    // Ensure video plays when component mounts
    if (videoRef.current) {
      // Force reload the video to ensure it plays from the beginning
      videoRef.current.load()

      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.log("Autoplay prevented:", error)
          // Try playing again with user interaction
          document.addEventListener(
            "click",
            () => {
              videoRef.current?.play().catch((e) => console.log("Still can't play:", e))
            },
            { once: true },
          )
        }
      }

      playVideo()

      // Add event listeners to debug video playback
      videoRef.current.addEventListener("ended", () => console.log("Video ended"))
      videoRef.current.addEventListener("error", (e) => console.log("Video error:", e))
      videoRef.current.addEventListener("stalled", () => console.log("Video stalled"))
      videoRef.current.addEventListener("waiting", () => console.log("Video waiting"))

      // Initialize responsive handling
      handleResize()
      window.addEventListener("resize", handleResize)
    }

    return () => {
      // Clean up event listeners
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", () => {})
        videoRef.current.removeEventListener("error", () => {})
        videoRef.current.removeEventListener("stalled", () => {})
        videoRef.current.removeEventListener("waiting", () => {})
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Services offered
  const services = [
    {
      title: t("bookkeeping"),
      description: t("bookkeepingDesc"),
    },
    {
      title: t("accounting"),
      description: t("accountingServiceDesc"),
    },
    {
      title: t("taxPreparation"),
      description: t("taxPreparationDesc"),
    },
    {
      title: t("payrollServices"),
      description: t("payrollServicesDesc"),
    },
    {
      title: t("financialConsulting"),
      description: t("financialConsultingDesc"),
    },
  ]

  // Benefits
  const benefits = [
    {
      title: t("beyondCompliance"),
      description: t("beyondComplianceDesc"),
    },
    {
      title: t("personalizedSolutions"),
      description: t("personalizedSolutionsDesc"),
    },
    {
      title: t("clearCommunication"),
      description: t("clearCommunicationDesc"),
    },
    {
      title: t("technologyDrivenEfficiency"),
      description: t("technologyDrivenEfficiencyDesc"),
    },
    {
      title: t("trustedAdvisors"),
      description: t("trustedAdvisorsDesc"),
    },
  ]

  return (
    <main className="flex-1" dir={direction}>
      {/* Hero Section with Video Banner */}
      <section className="relative py-12 md:py-20 lg:py-28 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-r from-brand-900 to-purple-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-500 opacity-10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Full-width video banner with responsive handling */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/60 to-purple-900/60 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              className="absolute object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/placeholder.svg?key=da908"
            >
              <source
                src="/banners/AccountingBookingPage.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Mobile text container - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8 md:hidden">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
              <BarChart className="mr-2 h-4 w-4" />
              {t("accounting")}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("beyondNumbers")}</h1>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("getStarted")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  {t("exploreServices")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop text container */}
        <div className="container px-4 md:px-6 relative z-10 h-full hidden md:flex flex-col justify-center">
          <div className="flex flex-row items-center gap-12">
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <BarChart className="mr-2 h-4 w-4" />
                {t("accounting")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{t("beyondNumbers")}</h1>
              <p className="text-blue-100 md:text-xl/relaxed">{t("accountingIntro")}</p>
              <div className="flex flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    {t("getStarted")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    {t("exploreServices")}
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* This div is kept for spacing and layout purposes */}
              <div className="relative h-[400px] lg:h-[500px] w-full opacity-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              {t("whyChooseUs")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("financialClarityConfidence")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("financialClarityConfidenceDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              {t("ourServices")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("comprehensiveFinancialServices")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("comprehensiveFinancialServicesDesc")}</p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-700 via-brand-800 to-purple-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("readyToOptimizeFinances")}
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">{t("readyToOptimizeFinancesDesc")}</p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("scheduleConsultation")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
