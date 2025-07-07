"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Zap, CheckCircle, ChevronRight, Target, Brush, BarChart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AdvertisingPage() {
  const { direction } = useLanguage() // Using direction for RTL support
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
          const container = videoRef.current.closest("section")
          if (container) {
            container.style.minHeight = `${sectionHeight}px`
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

    if (videoRef.current) {
      videoRef.current.load()
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.log("Autoplay prevented:", error)
        }
      }
      playVideo()
      handleResize()
      window.addEventListener("resize", handleResize)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Core offerings
  const offerings = [
    {
      title: "Unlock Your Brand's Vibe",
      description:
        "In a world where everyone's scrolling, your brand needs to pop. We're not just about ads; we're about crafting experiences that resonate. We dive deep to understand your unique story and amplify your message across all the platforms that matter.",
    },
    {
      title: "Strategy That Slaps",
      description:
        "Forget the old-school playbooks. We're on top of the latest trends, using data-driven insights and a dash of creative genius to build advertising strategies that actually work. We ensure every dollar you spend delivers real results.",
    },
    {
      title: "Our Creative Arsenal",
      description:
        "Whether you need eye-catching visuals, scroll-stopping videos, compelling copy, or full-blown digital campaigns, we've got the talent to make it happen. We bring your vision to life in ways that get people talking.",
    },
    {
      title: "Partnership for Growth",
      description:
        "Our work doesn't stop at launch. We provide ongoing management, A/B testing, and transparent reporting. We see ourselves as an extension of your team, constantly refining strategies to ensure sustained growth and peak efficiency.",
    },
  ]

  // Detailed services
  const services = [
    {
      title: "Strategic Brand Blueprint & Audience Deep Dive",
      description:
        "We kick things off by really getting into your brand's DNA. We meticulously research your market, identify your ideal audience down to their scrolling habits, and craft a unique brand voice that genuinely connects.",
    },
    {
      title: "Performance-Driven Campaign Architecture",
      description:
        "We design advertising strategies engineered for maximum impact and ROI. Our expertise spans highly targeted paid social media campaigns (TikTok, Instagram, etc.), precision-driven Google Ads (SEM), and impactful display advertising.",
    },
    {
      title: "Creative Content That Converts & Captivates",
      description:
        "Our team of digital wizards produce bespoke assets that not only grab attention but also inspire action. Our services include high-quality video production, stunning graphic design, and compelling copywriting that turns scrollers into customers.",
    },
    {
      title: "Continuous Optimization & Transparent Reporting",
      description:
        "We provide ongoing management, A/B testing, and performance analysis, constantly refining strategies. We offer transparent reporting, regular insights, and proactive recommendations to keep your brand on an upward trajectory.",
    },
  ]

  return (
    <main className="flex-1" dir={direction}>
      {/* Hero Section with Video Banner */}
      <section className="relative py-12 md:py-20 lg:py-28 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-r from-brand-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-500 opacity-10 blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </div>

        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/60 to-purple-900/60 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          
              <Image
                              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Healthcare VAPT Case Study"
                              fill
                              className="object-cover"
                            />

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-8 md:hidden">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
              <Zap className="mr-2 h-4 w-4" />
              Tnet Advertisement
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ignite Your Digital Presence.</h1>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Level Up Your Brand
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  See Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 h-full hidden md:flex flex-col justify-center">
          <div className="flex flex-row items-center gap-12">
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <Zap className="mr-2 h-4 w-4" />
                Tnet Advertisement
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Ignite Your Digital Presence.
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                Drive Real Impact, Cut Through the Noise. Get Seen. Get Heard.
              </p>
              <div className="flex flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    Level Up Your Brand
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    See Our Services
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
              <div className="relative h-[400px] lg:h-[500px] w-full opacity-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
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
              Why We're Different
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Strategy That Slaps. Creative That Connects.
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We're a new breed of advertising partner. We combine data-driven strategy with undeniable creative flair to
              make sure your brand isn't just seen—it's remembered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{offering.title}</h3>
                    <p className="text-slate-600">{offering.description}</p>
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
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              A Look Inside Our Arsenal
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              From deep-diving into your brand's DNA to launching campaigns that captivate and convert, here's how we
              make the magic happen.
            </p>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Level Up?</h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Stop blending in and start standing out. If you're ready to transform your brand's presence and drive
              actual growth, let's connect. Your next big moment starts here.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Let's Chat
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