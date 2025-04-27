"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Award, Briefcase, Package } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  title: string
  delay: number
}

function StatItem({ icon, value, suffix = "", title, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isInView) {
      let start = 0
      const step = Math.ceil(value / 50)

      const counter = () => {
        start += step
        if (start < value) {
          setCount(start)
          timeout = setTimeout(counter, 30)
        } else {
          setCount(value)
        }
      }

      timeout = setTimeout(counter, delay * 100)
    }

    return () => clearTimeout(timeout)
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <div className="mb-4 bg-gradient-to-br from-red-400 to-red-600 p-4 rounded-full text-white">{icon}</div>
      <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-navy-300">
        {count}
        {suffix}
      </div>
      <p className="text-white font-medium">{title}</p>
    </motion.div>
  )
}

export default function StatisticsSection() {
  const { t, direction } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: 250,
      suffix: "+",
      title: t("happyClients"),
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: 15,
      suffix: "+",
      title: t("yearsExperience"),
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: 650,
      suffix: "+",
      title: t("projectsCompleted"),
    },
    {
      icon: <Package className="h-6 w-6" />,
      value: 8,
      suffix: "",
      title: t("ownProducts"),
    },
  ]

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-r from-navy-900 to-red-900 text-white relative overflow-hidden"
      style={{ opacity, scale }}
      dir={direction}
    >
      {/* Animated background elements */}
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
            <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white">
              {t("ourAchievements")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("creativeStatistics")}</h2>
            <p className="mx-auto max-w-[700px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("statisticsDescription")}
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
              delay={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
