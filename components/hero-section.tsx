"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useRef, useEffect } from "react"

export default function HeroSection() {
  const { t, direction } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }

    return () => {
      // Pause video when component unmounts
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden" dir={direction}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328940142/digital-network-24933.mp4?width=1280&hash=f6a8dfbfb51c042c4fdbde35a587d4efe7d8e6b1"
            type="video/mp4"
          />
          <source
            src="https://cdn.pixabay.com/vimeo/328940142/digital-network-24933.webm?width=1280&hash=f6a8dfbfb51c042c4fdbde35a587d4efe7d8e6b1"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container px-4 md:px-6 relative z-20 flex items-center justify-center h-full">
        <motion.div
          className="flex flex-col justify-center items-center space-y-6 text-white text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("heroTitleUpdated")}
            </motion.h1>
            <motion.p
              className="text-red-100 md:text-xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("heroDescriptionUpdated")}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white"
              >
                {t("exploreServices")}
                <ArrowRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center justify-center bg-transparent border-white text-white hover:bg-white hover:text-navy-900"
              >
                {t("contactUs")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
