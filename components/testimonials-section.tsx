"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  imageSrc: string
}

export default function TestimonialsSection() {
  const { t, direction, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Define testimonials
  const testimonials: Record<string, Testimonial[]> = {
    en: [
      {
        quote:
          "TNET transformed our IT infrastructure and significantly improved our operational efficiency. Their team was professional and knowledgeable throughout the entire process.",
        author: "Sarah Johnson",
        position: "CTO",
        company: "Global Innovations",
        imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "The website TNET designed for us has dramatically increased our online conversions. Their SEO expertise has also helped us rank higher in search results.",
        author: "Michael Chen",
        position: "Marketing Director",
        company: "TechSolutions Inc.",
        imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "TNET's security solutions have given us peace of mind. Their vulnerability assessment identified critical issues we weren't aware of and provided effective solutions.",
        author: "David Rodriguez",
        position: "Security Manager",
        company: "Secure Systems Ltd.",
        imageSrc: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=3712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "Working with TNET on our social media strategy has been a game-changer. Our engagement metrics have improved by over 200% since implementing their recommendations.",
        author: "Emily Watson",
        position: "Social Media Manager",
        company: "Retail Innovations",
        imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
{
  quote:
    "Tnet's team completely transformed our digital presence. Their creative strategy didn't just get us seen—it got us results. Our engagement and lead quality have skyrocketed. They're more than an agency; they're a true growth partner.",
  author: "Sarah Chen",
  position: "Marketing Director",
  company: "Nexus Tech",
  imageSrc: "https://images.unsplash.com/photo-1560787313-5dff3307e257?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}
    ],
    ar: [
      {
        quote:
          "قامت TNET بتحويل البنية التحتية لتكنولوجيا المعلومات لدينا وتحسين كفاءة عملياتنا بشكل كبير. كان فريقهم محترفًا ومطلعًا طوال العملية بأكملها.",
        author: "سارة جونسون",
        position: "المدير التقني",
        company: "الابتكارات العالمية",
        imageSrc: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "أدى موقع الويب الذي صممته TNET لنا إلى زيادة التحويلات عبر الإنترنت بشكل كبير. كما ساعدتنا خبرتهم في تحسين محركات البحث على تحقيق مرتبة أعلى في نتائج البحث.",
        author: "مايكل تشن",
        position: "مدير التسويق",
        company: "تك سوليوشنز",
        imageSrc: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "منحتنا حلول الأمان من TNET راحة البال. حدد تقييم نقاط الضعف لديهم المشكلات الحرجة التي لم نكن على دراية بها وقدم حلولاً فعالة.",
        author: "ديفيد رودريغيز",
        position: "مدير الأمن",
        company: "أنظمة آمنة المحدودة",
        imageSrc: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "كان العمل مع TNET في استراتيجية وسائل التواصل الاجتماعي الخاصة بنا بمثابة نقلة نوعية. تحسنت مقاييس المشاركة لدينا بأكثر من 200٪ منذ تنفيذ توصياتهم.",
        author: "إيميلي واتسون",
        position: "مدير وسائل التواصل الاجتماعي",
        company: "ابتكارات التجزئة",
        imageSrc: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "أدى تنفيذ برنامج المحاسبة من TNET إلى تبسيط عملياتنا المالية وتوفير ساعات لا حصر لها كل شهر. فريق الدعم لديهم دائمًا سريع الاستجابة.",
        author: "روبرت كيم",
        position: "المدير المالي",
        company: "التميز في التصنيع",
        imageSrc: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  // Reset index when language changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [language])

  // Get current testimonials based on language
  const currentTestimonials = testimonials[language] || testimonials.en

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentTestimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentTestimonials.length) % currentTestimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    setAutoplay(false)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  // Resume autoplay on mouse leave
  const resumeAutoplay = () => {
    setAutoplay(true)
  }

  // Auto-advance the slider every 8 seconds
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        goToNext()
      }, 8000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [currentIndex, autoplay, currentTestimonials.length])

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      dir={direction}
    >
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">{t("testimonials")}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("whatClientsSay")}
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("testimonialsDescription")}
            </p>
          </div>
        </motion.div>

        <div
          ref={sliderRef}
          className="relative mx-auto max-w-4xl"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden rounded-xl shadow-xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="absolute top-8 left-8 text-red-500 opacity-10">
                  <Quote size={80} />
                </div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-8">
                    "{currentTestimonials[currentIndex].quote}"
                  </p>
                  <div className={`flex items-center ${direction === "rtl" ? "space-x-reverse" : ""} space-x-4`}>
                    <div className="flex-shrink-0">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-red-200">
                        <Image
                          src={currentTestimonials[currentIndex].imageSrc || "/placeholder.svg"}
                          alt={currentTestimonials[currentIndex].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{currentTestimonials[currentIndex].author}</h4>
                      <p className="text-slate-600">
                        {currentTestimonials[currentIndex].position}, {currentTestimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <motion.button
              onClick={goToPrevious}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={t("previousTestimonial")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className={`h-6 w-6 text-red-600 ${direction === "rtl" ? "rotate-180" : ""}`} />
            </motion.button>

            {/* Indicators */}
            <div className="flex justify-center space-x-2">
              {currentTestimonials.map((_, index) => (
                <motion.button
                  key={`indicator-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-red-600 w-8" : "bg-slate-300 w-3"
                  }`}
                  aria-label={`${t("goToTestimonial")} ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={t("nextTestimonial")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className={`h-6 w-6 text-red-600 ${direction === "rtl" ? "rotate-180" : ""}`} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
