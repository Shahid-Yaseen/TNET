"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const { t, direction } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Handle responsive video positioning
    const handleResize = () => {
      if (videoRef.current) {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const aspectRatio = windowWidth / windowHeight

        // Extra small devices (phones)
        if (windowWidth < 576) {
          videoRef.current.style.width = "auto"
          videoRef.current.style.height = "100%"
          videoRef.current.style.transform = "translateX(-50%)"
          videoRef.current.style.left = "50%"
          videoRef.current.style.top = "0"
        }
        // Small devices (tablets)
        else if (windowWidth < 768) {
          videoRef.current.style.width = aspectRatio < 1 ? "auto" : "100%"
          videoRef.current.style.height = aspectRatio < 1 ? "100%" : "auto"
          videoRef.current.style.transform = aspectRatio < 1 ? "translateX(-50%)" : "translateY(-50%)"
          videoRef.current.style.left = aspectRatio < 1 ? "50%" : "0"
          videoRef.current.style.top = aspectRatio < 1 ? "0" : "50%"
        }
        // Medium devices and larger
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

      // Initialize responsive handling
      handleResize()
      window.addEventListener("resize", handleResize)
    }

    return () => {
      // Clean up event listeners
      if (videoRef.current) {
        videoRef.current.pause()
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative py-12 md:py-20 lg:py-28 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-r from-red-900 to-navy-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-red-500 opacity-10 blur-3xl"
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
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-navy-500 opacity-10 blur-3xl"
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-navy-900/60 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute object-cover"
            poster="/placeholder.svg?key=da908"
            style={{ width: "100%", height: "100%" }}
          >
            <source
              src="/banners/HomePage.mp4"
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
            {t("welcomeToTnet")}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("innovativeSolutions")}</h1>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
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
              {t("welcomeToTnet")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{t("innovativeSolutions")}</h1>
            <p className="text-red-100 md:text-xl/relaxed">{t("heroDescription")}</p>
            <div className="flex flex-row gap-3 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
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
  )
}
