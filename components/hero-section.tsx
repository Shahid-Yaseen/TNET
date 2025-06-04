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
  // const serviceCategories = [
   
  //   {
  //     title: t("consulting"),
  //     href: "/services/consulting",
  //   },
  //   {
  //     title: t("it"),
  //     href: ,
  //   },
  //   {
  //     title: t("security"),
  //     href: ,
  //   },
  //   {
  //     title: t("socialMedia"),
  //     href: ,
  //   },
  //   {
  //     title: t("seo"),
  //     href: "/services/seo",
  //   },
  //   {
  //     title: t("vulnerability"),
  //     href: "/services/vulnerability",
  //   },
  //   {
  //     title: t("webDesign"),
  //     href: ,
  //   },
  // ]
  // Define the videos array with service paths
  const videos = [
    {
      src: "https://ik.imagekit.io/4dh6n2719/HomePage.mp4?updatedAt=1749001721064",
      poster: "/placeholder.svg?key=service3",
       label: "The Future is Intelligent. Discover A",
      path: "/services/ai-consultation",
    },
    {
      src: "https://ik.imagekit.io/4dh6n2719/SocialMediaMarketing.mp4?updatedAt=1749001754676",
      poster: "/placeholder.svg?key=service1",
      label: 'Skyrocket your brand with our Social Media Marketing!',
      // label: t("webDevelopment"),
      path:"/services/social-media",
    },
    {
      src: "https://ik.imagekit.io/4dh6n2719/AccountingBookingPage.mp4?updatedAt=1749001714204",
      poster: "/placeholder.svg?key=service2",
      label: "Accurate Books, Confident Business",
      // label: t("mobileDevelopment"),
      path: "/services/accounting",
      
    },
    
    {
      src: "https://ik.imagekit.io/4dh6n2719/IT.mp4?updatedAt=1749001759492",
      poster: "/placeholder.svg?key=service4",
      label: 'Future-Proof your Business with Expert IT',
      // label: t("aiSolutions"),
      path: "/services/it",
    },
    {
      src: "https://ik.imagekit.io/4dh6n2719/survilance.mp4?updatedAt=1749001731648",
      poster: "/placeholder.svg?key=service5",
      label: 'Secure Your World. Surveillance Solutions',
      // label: t("cyberSecurity"),
      path: "/services/security",
    },
    {
      src: "https://ik.imagekit.io/4dh6n2719/WebDesign.mp4?updatedAt=1749001762640",
      poster: "/placeholder.svg?key=service6",
      label: 'AI Web Design: Create Beyond Imagination',
      // label: t("dataAnalytics"),
      path: "/services/web-design",
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
      

      {/* Desktop text container */}
     
    </section>
  )
}
