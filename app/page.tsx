"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import TestimonialsSection from "@/components/testimonials-section"
import WorkProcessSection from "@/components/work-process-section"
import StatisticsSection from "@/components/statistics-section"
import GetInTouchSection from "@/components/get-in-touch-section"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t, direction } = useLanguage()

  return (
    <main className="flex-1" dir={direction}>
      <HeroSection />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">{t("aboutTnet")}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("empoweringBusinessesUpdated")}
              </h2>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("aboutDescriptionUpdated")}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="inline-flex h-10 items-center justify-center bg-red-600 hover:bg-red-700">
                    {t("learnMoreAboutUs")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden aspect-video"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1280&auto=format&fit=crop"
              >
                <source
                  src="https://cdn.pixabay.com/vimeo/414804645/computer-41972.mp4?width=1280&hash=3e2b2d2c7a0bccb4c1d1e5e3a4c8b3e5e3a4c8b3"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <WorkProcessSection />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-navy-100 px-3 py-1 text-sm text-navy-800">
                {t("whyChooseUs")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("tnetAdvantage")}</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("advantageDescription")}
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <h3 className="text-xl font-bold">{t("expertise")}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">{t("expertiseDescription")}</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <h3 className="text-xl font-bold">{t("customization")}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">{t("customizationDescription")}</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <h3 className="text-xl font-bold">{t("support")}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">{t("supportDescription")}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Get In Touch Section */}
      <GetInTouchSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-700 via-red-800 to-navy-900 text-white relative overflow-hidden">
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

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("readyToTransform")}</h2>
              <p className="mx-auto max-w-[700px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("ctaDescription")}
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="inline-flex items-center justify-center bg-white text-red-700 hover:bg-red-50"
                >
                  {t("contactUsToday")}
                  <ArrowRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
