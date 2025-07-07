"use client"

import Link from "next/link"
import {
  BarChart,
  Globe,
  HardDrive,
  type LucideIcon,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  Users,
  Wrench,
  ChevronRight,
  Rocket,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  const { direction, t } = useLanguage()

  return (
    <Link href={href} className="group h-full">
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="h-full"
      >
        <Card className="border-0 shadow-lg transition-all duration-200 h-full overflow-hidden group-hover:border-red-200 border-transparent border-2">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center space-x-2 text-red-600 mb-4">
              <div className="bg-red-50 p-2 rounded-lg group-hover:bg-red-100 transition-colors">
                <Icon className="h-6 w-6 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            </div>
            <p className="text-slate-600 flex-grow mb-4">{description}</p>
            <div
              className={`flex items-center text-red-600 font-medium ${direction === "rtl" ? "justify-start" : "justify-end"} mt-auto`}
            >
              <span className="group-hover:underline">{t("learnMore")}</span>
              <ChevronRight
                className={`${direction === "rtl" ? "mr-1 rotate-180" : "ml-1"} h-4 w-4 transition-transform group-hover:translate-x-1`}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}

export default function ServicesOverview() {
  const { t, direction } = useLanguage()

  // Updated service descriptions based on uploaded files
  const services = [
    {
      title: t("advertisement"),
      description: t("advertisementDescriptionUpdated"),
      icon: Rocket,
      href: "/services/advertisement",
    },
    {
      title: t("hosting"),
      description: t("hostingDescription"),
      icon: Globe,
      href: "/services/hosting",
    },
    {
      title: t("consulting"),
      description: t("consultingDescriptionUpdated"),
      icon: Users,
      href: "/services/consulting",
    },
    {
      title: t("it"),
      description: t("itDescriptionUpdated"),
      icon: HardDrive,
      href: "/services/it",
    },
    {
      title: t("security"),
      description: t("securityDescription"),
      icon: Shield,
      href: "/services/security",
    },
    {
      title: t("socialMedia"),
      description: t("socialMediaDescription"),
      icon: MessageSquare,
      href: "/services/social-media",
    },
    {
      title: t("seo"),
      description: t("seoDescription"),
      icon: Search,
      href: "/services/seo",
    },
    {
      title: t("vulnerability"),
      description: t("vulnerabilityDescriptionUpdated"),
      icon: Wrench,
      href: "/services/vulnerability",
    },
    {
      title: t("webDesign"),
      description: t("webDesignDescriptionUpdated"),
      icon: Smartphone,
      href: "/services/web-design",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" dir={direction}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-50 opacity-50 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-navy-50 opacity-50 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
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
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">{t("ourServices")}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("comprehensiveSolutions")}
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("servicesDescriptionUpdated")}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/services">
            <Button className="inline-flex h-10 items-center justify-center bg-red-600 hover:bg-red-700">
              {t("viewAllServices")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
