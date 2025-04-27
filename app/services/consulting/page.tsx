"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ConsultingPage() {
  const { t, direction } = useLanguage()

  // Services offered
  const services = [
    {
      title: t("itStrategyDevelopment"),
      description: t("itStrategyDevelopmentDesc"),
    },
    {
      title: t("itInfrastructureAssessment"),
      description: t("itInfrastructureAssessmentDesc"),
    },
    {
      title: t("technologyImplementation"),
      description: t("technologyImplementationDesc"),
    },
    {
      title: t("cloudMigration"),
      description: t("cloudMigrationDesc"),
    },
    {
      title: t("cybersecurityConsulting"),
      description: t("cybersecurityConsultingDesc"),
    },
    {
      title: t("itProjectManagement"),
      description: t("itProjectManagementDesc"),
    },
  ]

  // Benefits
  const benefits = [
    {
      title: t("strategicItConsulting"),
      description: t("strategicItConsultingDesc"),
    },
    {
      title: t("experiencedProfessionals"),
      description: t("experiencedProfessionalsDesc"),
    },
    {
      title: t("customizedSolutions"),
      description: t("customizedSolutionsDesc"),
    },
    {
      title: t("provenResults"),
      description: t("provenResultsDesc"),
    },
    {
      title: t("clientFocusedApproach"),
      description: t("clientFocusedApproachDesc"),
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
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                <Users className="mr-2 h-4 w-4" />
                {t("consulting")}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {t("yourTrustedItPartner")}
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">{t("consultingIntro")}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    {t("getStarted")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    {t("exploreServices")}
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
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="IT Consulting"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              {t("leverageTechnologyForGrowth")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("leverageTechnologyForGrowthDesc")}</p>
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
              {t("ourServices")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("comprehensiveItConsultingServices")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("comprehensiveItConsultingServicesDesc")}</p>
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

      {/* Industries We Serve Section */}
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
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">
                {t("industriesWeServe")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                {t("tailoredSolutionsForIndustries")}
              </h2>
              <p className="text-slate-600 md:text-lg">{t("tailoredSolutionsForIndustriesDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("healthcare")}</h3>
                    <p className="text-slate-600">{t("healthcareDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("finance")}</h3>
                    <p className="text-slate-600">{t("financeDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("retail")}</h3>
                    <p className="text-slate-600">{t("retailDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("manufacturing")}</h3>
                    <p className="text-slate-600">{t("manufacturingDesc")}</p>
                  </div>
                </motion.li>
              </ul>
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
                  src="https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Industries We Serve"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
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
              {t("readyToOptimizeItInfrastructure")}
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">{t("readyToOptimizeItInfrastructureDesc")}</p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("scheduleConsultation")}
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
