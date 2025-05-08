"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const { t, direction } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videoDurations, setVideoDurations] = useState<number[]>([])
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Define the videos array with service paths
  const videos = [
    {
      src: "/banners/HomePage.mp4",
      poster: "/placeholder.svg?key=service3",
       label: "Discover",
      path: "/services/cloud-services",
    },
    {
      src: "/banners/SocialMediaMarketing.mp4",
      poster: "/placeholder.svg?key=service1",
      label: 'Skyrocket your brand with our Social Media Marketing!',
      // label: t("webDevelopment"),
      path: "/services/web-development",
    },
    {
      src: "/banners/AccountingBookingPage.mp4",
      poster: "/placeholder.svg?key=service2",
      label: "Accurate Books, Confident Business",
      // label: t("mobileDevelopment"),
      path: "/services/mobile-development",
    },
    
    {
      src: "/banners/IT.mp4",
      poster: "/placeholder.svg?key=service4",
      label: 'The Future is Intelligent. Discover AI',
      // label: t("aiSolutions"),
      path: "/services/ai-solutions",
    },
    {
      src: "/banners/survilance.mp4",
      poster: "/placeholder.svg?key=service5",
      label: 'Secure Your World. Surveillance Solutions',
      // label: t("cyberSecurity"),
      path: "/services/cyber-security",
    },
    {
      src: "/banners/WebDesign.mp4",
      poster: "/placeholder.svg?key=service6",
      label: 'AI Web Design: Create Beyond Imagination',
      // label: t("dataAnalytics"),
      path: "/services/data-analytics",
    },
  ]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  // Handle video metadata loading to get durations
  useEffect(() => {
    const handleMetadataLoaded = (index: number) => {
      const video = videoRefs.current[index]
      if (video) {
        setVideoDurations((prev) => {
          const newDurations = [...prev]
          newDurations[index] = video.duration
          return newDurations
        })

        if (index === currentIndex) {
          setIsVideoLoaded(true)
        }
      }
    }

    // Set up metadata loaded event listeners for all videos
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.addEventListener("loadedmetadata", () => handleMetadataLoaded(index))
      }
    })

    return () => {
      // Clean up event listeners
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          videoRef.removeEventListener("loadedmetadata", () => handleMetadataLoaded(index))
        }
      })
    }
  }, [currentIndex])

  // Auto-slide functionality based on video duration
  useEffect(() => {
    if (isVideoLoaded && videoDurations[currentIndex]) {
      resetTimeout()

      // Get the duration of the current video in milliseconds
      const currentVideoDuration = videoDurations[currentIndex] * 1000

      // Set timeout to the duration of the current video
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1))
        setIsVideoLoaded(false) // Reset loaded state for next video
      }, currentVideoDuration)
    }

    return () => {
      resetTimeout()
    }
  }, [currentIndex, videoDurations, isVideoLoaded, videos.length])

  // Handle responsive video positioning for all videos
  useEffect(() => {
    const handleResize = () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          const windowWidth = window.innerWidth
          const windowHeight = window.innerHeight
          const aspectRatio = windowWidth / windowHeight

          // Extra small devices (phones)
          if (windowWidth < 576) {
            videoRef.style.width = "auto"
            videoRef.style.height = "100%"
            videoRef.style.transform = "translateX(-50%)"
            videoRef.style.left = "50%"
            videoRef.style.top = "0"
          }
          // Small devices (tablets)
          else if (windowWidth < 768) {
            videoRef.style.width = aspectRatio < 1 ? "auto" : "100%"
            videoRef.style.height = aspectRatio < 1 ? "100%" : "auto"
            videoRef.style.transform = aspectRatio < 1 ? "translateX(-50%)" : "translateY(-50%)"
            videoRef.style.left = aspectRatio < 1 ? "50%" : "0"
            videoRef.style.top = aspectRatio < 1 ? "0" : "50%"
          }
          // Medium devices and larger
          else {
            videoRef.style.width = "100%"
            videoRef.style.height = "auto"
            videoRef.style.minHeight = "100%"
            videoRef.style.transform = ""
            videoRef.style.left = "0"
            videoRef.style.top = "0"
          }
        }
      })
    }

    // Initialize responsive handling
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Play current video and preload next video
  useEffect(() => {
    // Play the current video
    const currentVideo = videoRefs.current[currentIndex]
    if (currentVideo) {
      // Force reload the video to ensure it plays from the beginning
      currentVideo.load()

      const playVideo = async () => {
        try {
          await currentVideo.play()
        } catch (error) {
          console.log("Autoplay prevented:", error)
          // Try playing again with user interaction
          document.addEventListener(
            "click",
            () => {
              currentVideo.play().catch((e) => console.log("Still can't play:", e))
            },
            { once: true },
          )
        }
      }

      playVideo()
    }

    // Preload the next video
    const nextIndex = (currentIndex + 1) % videos.length
    const nextVideo = videoRefs.current[nextIndex]
    if (nextVideo) {
      nextVideo.load()
    }
  }, [currentIndex, videos.length])

  // Handle video ended event as a backup for auto-sliding
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex]

    const handleVideoEnded = () => {
      // This is a backup in case the timeout doesn't work
      setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1))
      setIsVideoLoaded(false)
    }

    if (currentVideo) {
      currentVideo.addEventListener("ended", handleVideoEnded)
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("ended", handleVideoEnded)
      }
    }
  }, [currentIndex, videos.length])

  const goToSlide = (index: number) => {
    resetTimeout()
    setCurrentIndex(index)
    setIsVideoLoaded(false)
  }

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
        <AnimatePresence mode="wait">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 ${index === currentIndex ? "z-10" : "z-0"}`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-navy-900/60 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  autoPlay={index === currentIndex}
                  muted
                  playsInline
                  preload="auto"
                  className="absolute object-cover"
                  poster={video.poster}
                  style={{ width: "100%", height: "100%" }}
                  onLoadedMetadata={() => {
                    if (index === currentIndex) {
                      setIsVideoLoaded(true)
                    }
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Service Labels */}
        <div className="absolute bottom-20 left-0 right-0 text-center z-20">
          <Link href={videos[currentIndex].path}>
            <motion.div
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold cursor-pointer hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {videos[currentIndex].label}
            </motion.div>
          </Link>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-red-600 w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile text container - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-8 md:hidden">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
            {t("welcomeToTnet")}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Innovative Solutions</h1>
          {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("innovativeSolutions")}</h1> */}
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
      <div className="container px-4 md:px-6 relative z-30 h-full hidden md:flex flex-col justify-center">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Innovative Solutions</h1>
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{t("innovativeSolutions")}</h1> */}
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
