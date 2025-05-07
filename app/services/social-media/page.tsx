"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronRight, MessageSquare, BarChart, TrendingUp, Users, Target, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export default function SocialMediaPage() {
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

  // Social media services
  const services = [
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-600" />,
      title: "Social Media Management",
      description:
        "Comprehensive management of your social media accounts, including content creation, scheduling, and community engagement to build your online presence.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-brand-600" />,
      title: "Digital Marketing Campaigns",
      description:
        "Strategic digital marketing campaigns designed to increase brand awareness, drive website traffic, and generate leads for your business.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-600" />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your search engine rankings and online visibility with our comprehensive SEO services, including keyword research, on-page optimization, and link building.",
    },
    {
      icon: <Users className="h-6 w-6 text-brand-600" />,
      title: "Content Creation & Strategy",
      description:
        "Engaging and relevant content creation tailored to your target audience, including blog posts, social media content, videos, and infographics.",
    },
    {
      icon: <Target className="h-6 w-6 text-brand-600" />,
      title: "Paid Advertising Management",
      description:
        "Strategic management of your paid advertising campaigns across various platforms, including Google Ads, Facebook Ads, and LinkedIn Ads.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-brand-600" />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics and reporting to track the performance of your digital marketing efforts and provide actionable insights for continuous improvement.",
    },
  ]

  // Benefits
  const benefits = [
    {
      title: "Increased Brand Awareness",
      description:
        "Our social media marketing strategies help increase your brand visibility and recognition among your target audience, establishing your business as a trusted authority in your industry.",
    },
    {
      title: "Enhanced Customer Engagement",
      description:
        "Engage with your customers on the platforms they use most, building relationships, gathering feedback, and providing responsive customer service.",
    },
    {
      title: "Targeted Audience Reach",
      description:
        "Reach your ideal customers through precise targeting options available on social media platforms, ensuring your marketing budget is spent efficiently.",
    },
    {
      title: "Improved Website Traffic",
      description:
        "Drive qualified traffic to your website through strategic social media content and campaigns, increasing opportunities for conversions and sales.",
    },
    {
      title: "Measurable ROI",
      description:
        "Track and measure the performance of your social media marketing efforts with detailed analytics, allowing you to optimize campaigns for maximum return on investment.",
    },
  ]

  // Platforms
  const platforms = [
    {
      name: "Facebook",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      description:
        "Reach a broad audience and build community around your brand with the world's largest social network.",
    },
    {
      name: "Instagram",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      description: "Showcase your products and services visually to engage with a younger, image-focused audience.",
    },
    {
      name: "LinkedIn",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/LinkedIn_PNG16.png",
      description: "Connect with professionals and businesses to establish your brand as an industry leader.",
    },
    {
      name: "Twitter",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Twitter_X.png",
      description: "Join conversations and share timely updates to stay relevant in fast-paced industries.",
    },
    {
      name: "YouTube",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
      description:
        "Share video content to educate, entertain, and engage with your audience on the world's second-largest search engine.",
    },
    {
      name: "TikTok",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg",
      description:
        "Reach younger demographics with creative, short-form video content on this rapidly growing platform.",
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
                src="/banners/ SocialMediaMarketing.mp4"
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
              <MessageSquare className="mr-2 h-4 w-4" />
              {t("socialMedia")}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Digital Marketing Strategies to Grow Your Online Presence
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("getStarted")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  Explore Services
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
                <MessageSquare className="mr-2 h-4 w-4" />
                {t("socialMedia")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Digital Marketing Strategies to Grow Your Online Presence
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                Elevate your brand with our comprehensive social media marketing services designed to increase
                engagement, drive traffic, and boost conversions.
              </p>
              <div className="flex flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    {t("getStarted")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    Explore Services
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
              The Benefits of Social Media Marketing
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Harness the power of social media to connect with your audience, build brand loyalty, and drive business
              growth.
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

      {/* Services Section */}
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
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We offer a wide range of social media and digital marketing services to help your business thrive online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
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
                Strategic Social Media Marketing
              </h2>
              <p className="text-slate-600 md:text-lg">
                Our approach to social media marketing is strategic, data-driven, and tailored to your specific business
                goals. We focus on creating meaningful connections with your target audience and delivering measurable
                results.
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
                    <h3 className="font-bold text-slate-900">Research & Strategy Development</h3>
                    <p className="text-slate-600">
                      We begin with thorough research of your industry, competitors, and target audience to develop a
                      customized social media strategy.
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
                    <h3 className="font-bold text-slate-900">Content Creation & Curation</h3>
                    <p className="text-slate-600">
                      We create engaging, relevant content that resonates with your audience and reflects your brand
                      voice and values.
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
                    <h3 className="font-bold text-slate-900">Community Management</h3>
                    <p className="text-slate-600">
                      We actively engage with your audience, respond to comments and messages, and build a loyal
                      community around your brand.
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
                    <h3 className="font-bold text-slate-900">Analytics & Optimization</h3>
                    <p className="text-slate-600">
                      We continuously monitor performance metrics, analyze results, and optimize your social media
                      strategy for maximum impact.
                    </p>
                  </div>
                </motion.li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-brand-600 hover:bg-brand-700">Get a Custom Strategy</Button>
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
                  src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Social Media Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Platforms We Specialize In
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Reach Your Audience Where They Are
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We help you connect with your target audience across all major social media platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={platform.image || "/placeholder.svg"}
                    alt={platform.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{platform.name}</h3>
                  <p className="text-slate-600 text-sm">{platform.description}</p>
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
              How We Transformed a Client's Social Media Presence
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Learn how our social media marketing strategy helped a client achieve a 200% increase in engagement and a
              significant boost in sales.
            </p>
          </motion.div>

          <div className="bg-slate-50 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1683024367132-57e11345507b?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social Media Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
                <p className="text-slate-600">
                  A retail business was struggling with low engagement on their social media channels and minimal
                  website traffic from social platforms. Their content was inconsistent, and they lacked a cohesive
                  strategy to connect with their target audience.
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
                <p className="text-slate-600">
                  We implemented a comprehensive social media marketing strategy that included:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Development of a consistent brand voice and visual identity across all platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Creation of a content calendar with a mix of promotional, educational, and engaging content
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Implementation of targeted paid advertising campaigns to reach new audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Active community management and engagement with followers</span>
                  </li>
                </ul>
                <h3 className="text-2xl font-bold text-slate-900">The Results</h3>
                <p className="text-slate-600">
                  Within three months, the client saw a 200% increase in social media engagement, a 150% increase in
                  website traffic from social channels, and a 75% increase in online sales. Their follower count across
                  all platforms grew by 300%, creating a strong foundation for continued growth and customer engagement.
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
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Contact us today to discuss how our social media marketing services can help your business grow online and
              connect with your target audience.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Get a Free Social Media Audit
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
