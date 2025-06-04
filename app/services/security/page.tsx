"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronRight, Shield, Camera, Lock, Eye, Bell, Key, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export default function SecurityPage() {
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

  // Security solutions
  const securitySolutions = [
    {
      icon: <Camera className="h-6 w-6 text-brand-600" />,
      title: "CCTV Systems",
      description:
        "Advanced surveillance camera systems for comprehensive monitoring of your premises, with high-definition video quality and intelligent analytics.",
    },
    {
      icon: <Key className="h-6 w-6 text-brand-600" />,
      title: "Access Control",
      description:
        "Secure entry systems including key cards, biometric scanners, and electronic locks to restrict and monitor access to your facilities.",
    },
    {
      icon: <Bell className="h-6 w-6 text-brand-600" />,
      title: "Alarm Systems",
      description:
        "Reliable intrusion detection and alarm systems that immediately alert you and security personnel to unauthorized access attempts.",
    },
    {
      icon: <Eye className="h-6 w-6 text-brand-600" />,
      title: "Remote Monitoring",
      description:
        "24/7 remote surveillance services that allow you to monitor your property from anywhere using mobile devices or computers.",
    },
    {
      icon: <Lock className="h-6 w-6 text-brand-600" />,
      title: "Integrated Security Systems",
      description:
        "Comprehensive security solutions that integrate CCTV, access control, and alarm systems into a unified security platform.",
    },
    {
      icon: <Users className="h-6 w-6 text-brand-600" />,
      title: "Security Consulting",
      description:
        "Expert security assessments and recommendations tailored to your specific needs and potential vulnerabilities.",
    },
  ]

  // Benefits
  const benefits = [
    {
      title: "Deterrence of Criminal Activity",
      description:
        "Visible security systems act as a powerful deterrent to potential intruders and criminals, significantly reducing the risk of theft, vandalism, and other criminal activities.",
    },
    {
      title: "Real-Time Monitoring & Alerts",
      description:
        "Our systems provide instant notifications of security breaches or suspicious activities, allowing for immediate response and mitigation of potential threats.",
    },
    {
      title: "Evidence Collection",
      description:
        "High-quality video recordings serve as valuable evidence for investigations and legal proceedings in the event of a security incident.",
    },
    {
      title: "Remote Access & Control",
      description:
        "Monitor and manage your security systems from anywhere in the world using our secure mobile and web applications.",
    },
    {
      title: "Operational Insights",
      description:
        "Modern surveillance systems can provide valuable data on customer behavior, employee productivity, and operational efficiency beyond just security purposes.",
    },
  ]

  // Technologies
  const technologies = [
    {
      title: "AI-Powered Analytics",
      description:
        "Advanced artificial intelligence algorithms that can detect unusual activities, recognize faces, and identify objects, enhancing the effectiveness of your security system.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=400&h=300&auto=format&fit=crop",
    },
    {
      title: "4K Ultra HD Cameras",
      description:
        "Crystal-clear video quality with 4K resolution cameras that capture detailed footage even in challenging lighting conditions.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=400&h=300&auto=format&fit=crop",
    },
    {
      title: "Cloud Storage Solutions",
      description:
        "Secure cloud-based storage for your surveillance footage, providing reliable backup and easy access to historical recordings.",
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=400&h=300&auto=format&fit=crop",
    },
    {
      title: "Biometric Authentication",
      description:
        "Advanced biometric technologies including fingerprint, facial recognition, and retina scanning for the highest level of access control security.",
      image: "https://images.unsplash.com/photo-1572916675387-66681896decd?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                src="https://ik.imagekit.io/4dh6n2719/survilance.mp4?updatedAt=1749001731648"
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
              <Shield className="mr-2 h-4 w-4" />
              {t("security")}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Comprehensive Security & Surveillance Solutions
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("getStarted")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="#solutions">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  Explore Solutions
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
                <Shield className="mr-2 h-4 w-4" />
                {t("security")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Comprehensive Security & Surveillance Solutions
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                Protect your business, assets, and people with state-of-the-art security systems and expert surveillance
                solutions.
              </p>
              <div className="flex flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    {t("getStarted")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#solutions">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    Explore Solutions
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

      {/* Benefits Section */}
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
              The Benefits of Our Security Solutions
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Our comprehensive security and surveillance systems provide numerous advantages beyond just protection.
            </p>
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

      {/* Security Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              Our Solutions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Comprehensive Security Services
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We offer a wide range of security and surveillance solutions tailored to meet your specific needs and
              requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-slate-100 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-brand-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                Tailored Security Solutions for Your Unique Needs
              </h2>
              <p className="text-slate-600 md:text-lg">
                We understand that every business has unique security requirements. Our approach is centered around
                understanding your specific needs and designing customized security solutions that provide optimal
                protection.
              </p>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Comprehensive Assessment</h3>
                    <p className="text-slate-600">
                      We begin with a thorough assessment of your premises, identifying potential vulnerabilities and
                      security risks.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Custom Design</h3>
                    <p className="text-slate-600">
                      Based on our assessment, we design a tailored security solution that addresses your specific needs
                      and budget constraints.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Professional Installation</h3>
                    <p className="text-slate-600">
                      Our team of certified technicians ensures that your security systems are installed correctly and
                      functioning optimally.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Ongoing Support & Maintenance</h3>
                    <p className="text-slate-600">
                      We provide continuous support and regular maintenance to ensure your security systems remain
                      effective and up-to-date.
                    </p>
                  </div>
                </motion.li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-brand-600 hover:bg-brand-700">Schedule a Security Assessment</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1563920443079-783e5c786b83?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Security Assessment"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              Cutting-Edge Technology
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Advanced Security Technologies
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We leverage the latest security technologies to provide you with the most effective protection possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative h-48 w-full">
                  <Image src={tech.image || "/placeholder.svg"} alt={tech.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.title}</h3>
                  <p className="text-slate-600">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
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
              Success Story
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              How We Secured a Major Retail Chain
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Learn how our comprehensive security solution helped a retail chain reduce theft by 75% and improve
              operational efficiency.
            </p>
          </motion.div>

          <div className="bg-slate-50 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=500&h=300&auto=format&fit=crop"
                  alt="Retail Security Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
                <p className="text-slate-600">
                  A major retail chain with 25 locations was experiencing significant inventory shrinkage due to theft
                  and inadequate security measures. Their existing surveillance system was outdated and ineffective, and
                  they lacked proper access control for restricted areas.
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
                <p className="text-slate-600">We implemented a comprehensive security solution that included:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>High-definition CCTV cameras with AI-powered analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced access control systems for restricted areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Integrated alarm systems with immediate notification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Centralized monitoring system for all locations</span>
                  </li>
                </ul>
                <h3 className="text-2xl font-bold text-slate-900">The Results</h3>
                <p className="text-slate-600">
                  Within six months of implementation, the retail chain experienced a 75% reduction in theft, resulting
                  in significant cost savings. The advanced analytics also provided valuable insights into customer
                  behavior and store operations, leading to improved merchandising strategies and increased sales.
                </p>
              </div>
            </div>
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
              Ready to Enhance Your Security?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Contact us today to schedule a comprehensive security assessment and discover how our solutions can
              protect your business, assets, and people.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Get a Free Security Assessment
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
