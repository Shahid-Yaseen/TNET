"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { BarChart, Globe, HardDrive, MessageSquare, Search, Shield, Smartphone, Users, Wrench } from "lucide-react"

export default function ServicesPage() {
  const { t, direction } = useLanguage()

  // Service categories with icons
  const services = [
    {
      title: "Advertisement",
      description: t("advertisementDescriptionUpdated"),
      icon: Rocket,
      href: "/services/advertisement",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: t("hosting"),
      description: t("hostingDescription"),
      icon: Globe,
      href: "/services/hosting",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("consulting"),
      description: t("consultingDescriptionUpdated"),
      icon: Users,
      href: "/services/consulting",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("it"),
      description: t("itDescriptionUpdated"),
      icon: HardDrive,
      href: "/services/it",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("security"),
      description: t("securityDescription"),
      icon: Shield,
      href: "/services/security",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("socialMedia"),
      description: t("socialMediaDescription"),
      icon: MessageSquare,
      href: "/services/social-media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("seo"),
      description: t("seoDescription"),
      icon: Search,
      href: "/services/seo",
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("vulnerability"),
      description: t("vulnerabilityDescriptionUpdated"),
      icon: Wrench,
      href: "/services/vulnerability",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=500&h=300&auto=format&fit=crop",
    },
    {
      title: t("webDesign"),
      description: t("webDesignDescriptionUpdated"),
      icon: Smartphone,
      href: "/services/web-design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500&h=300&auto=format&fit=crop",
    },
  ]

  return (
    <main className="flex-1" dir={direction}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-brand-900 to-purple-900 text-white overflow-hidden">
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

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t("ourServices")}
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("servicesDescriptionUpdated")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link href={service.href} className="group h-full block">
                  <Card className="overflow-hidden h-full border-0 shadow-lg transition-all duration-200 group-hover:shadow-xl">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <service.icon className="h-6 w-6 text-brand-600" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 flex-grow mb-4">{service.description}</p>
                      <div
                        className={`flex items-center text-brand-600 font-medium ${
                          direction === "rtl" ? "justify-start" : "justify-end"
                        } mt-auto`}
                      >
                        <span className="group-hover:underline">{t("learnMore")}</span>
                        <ChevronRight
                          className={`${
                            direction === "rtl" ? "mr-1 rotate-180" : "ml-1"
                          } h-4 w-4 transition-transform group-hover:translate-x-1`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("needCustomSolution")}
              </h2>
              <p className="text-slate-600 md:text-xl/relaxed">{t("customSolutionDesc")}</p>
              <div className="pt-6">
                <Link href="/contact">
                  <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white">
                    {t("contactUsToday")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
