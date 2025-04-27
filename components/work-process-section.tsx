"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform } from "framer-motion"
import { FileSearch, Code, CheckCircle, Zap } from "lucide-react"

interface ProcessStepProps {
  icon: React.ReactNode
  title: string
  description: string
  stepNumber: number
}

function ProcessStep({ icon, title, description, stepNumber }: ProcessStepProps) {
  const { direction } = useLanguage()

  return (
    <motion.div
      className="relative flex flex-col items-center text-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: stepNumber * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 -mt-3 flex items-center justify-center">
        <div className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
          {stepNumber}
        </div>
        {stepNumber < 4 && (
          <div
            className={`h-0.5 bg-red-200 ${direction === "rtl" ? "right-6" : "left-6"} absolute w-full max-w-[150px]`}
          ></div>
        )}
      </div>
      <div className="mt-8 mb-4 bg-red-100 p-4 rounded-full text-red-600">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </motion.div>
  )
}

export default function WorkProcessSection() {
  const { t, direction } = useLanguage()

  const processSteps = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: t("processStep1Title"),
      description: t("processStep1Description"),
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: t("processStep2Title"),
      description: t("processStep2Description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: t("processStep3Title"),
      description: t("processStep3Description"),
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t("processStep4Title"),
      description: t("processStep4Description"),
    },
  ]

  const { scrollYProgress } = useScroll()

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      dir={direction}
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-200 opacity-20 blur-3xl"
        initial={{ y: 0 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) } as any}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-navy-200 opacity-20 blur-3xl"
        initial={{ y: 0 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) } as any}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">{t("workProcess")}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("simpleSmartProcess")}
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("processDescription")}
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
