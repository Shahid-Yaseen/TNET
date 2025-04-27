"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Lightbulb, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t, direction } = useLanguage()

  // Company values based on the uploaded content
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t("valueInnovation"),
      description: t("valueInnovationDesc"),
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: t("valueExcellence"),
      description: t("valueExcellenceDesc"),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t("valueCustomerCentric"),
      description: t("valueCustomerCentricDesc"),
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t("valueIntegrity"),
      description: t("valueIntegrityDesc"),
    },
  ]

  // Team members
  const team = [
    {
      name: "John Smith",
      position: t("ceoFounder"),
      bio: t("ceoFounderBio"),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Sarah Johnson",
      position: t("cto"),
      bio: t("ctoBio"),
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      position: t("headOfOperations"),
      bio: t("headOfOperationsBio"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      position: t("marketingDirector"),
      bio: t("marketingDirectorBio"),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop",
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
              {t("aboutUsHero")}
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("aboutUsHeroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
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
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">{t("whoWeAre")}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("notJustAnotherTechCompany")}
              </h2>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("whoWeAreDesc")}
              </p>
              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-700 mb-2">{t("ourMission")}</h3>
                  <p className="text-slate-600">{t("ourMissionDesc")}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-700 mb-2">{t("ourVision")}</h3>
                  <p className="text-slate-600">{t("ourVisionDesc")}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=600&auto=format&fit=crop"
                  alt="TNET Team"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">
                {t("ourValues")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("whatDrivesUs")}
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("ourValuesDesc")}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="bg-brand-50 p-3 rounded-full w-12 h-12 flex items-center justify-center text-brand-600 mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 flex-grow">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&h=600&auto=format&fit=crop"
                  alt="What Sets Us Apart"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800">
                {t("whatSetsUsApart")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("ourDifference")}
              </h2>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("whatSetsUsApartDesc")}
              </p>

              <ul className="space-y-3 mt-6">
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">{t("customerCentricApproach")}</h3>
                    <p className="text-slate-600">{t("customerCentricApproachDesc")}</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">{t("expertiseAndExperience")}</h3>
                    <p className="text-slate-600">{t("expertiseAndExperienceDesc")}</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">{t("provenTrackRecord")}</h3>
                    <p className="text-slate-600">{t("provenTrackRecordDesc")}</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">{t("commitmentToExcellence")}</h3>
                    <p className="text-slate-600">{t("commitmentToExcellenceDesc")}</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">{t("ourTeam")}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("meetOurExperts")}
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("ourTeamDesc")}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-0 shadow-md h-full overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-brand-600 font-medium mb-3">{member.position}</p>
                    <p className="text-slate-600 flex-grow">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-700 via-brand-800 to-purple-900 text-white relative overflow-hidden">
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
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("readyToPartner")}</h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("readyToPartnerDesc")}
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
                  className="inline-flex items-center justify-center bg-white text-brand-700 hover:bg-teal-50"
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
