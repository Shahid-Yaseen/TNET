"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Clock, Coffee, Globe, Award, Users, Zap, Lightbulb, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function CareersPage() {
  const { t, direction } = useLanguage()

  // Company values
  const values = [
    {
      icon: <Users className="h-6 w-6 text-brand-600" />,
      title: t("valueCollaboration"),
      description: t("valueCollaborationDesc"),
    },
    {
      icon: <Award className="h-6 w-6 text-brand-600" />,
      title: t("valueExcellence"),
      description: t("valueExcellenceDesc"),
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-600" />,
      title: t("valueInnovation"),
      description: t("valueInnovationDesc"),
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-600" />,
      title: t("valueIntegrity"),
      description: t("valueIntegrityDesc"),
    },
  ]

  // Benefits
  const benefits = [
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: t("careersCompetitiveSalary"),
      description: t("careersSalaryDescription"),
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: t("careersHealthBenefits"),
      description: t("careersHealthDescription"),
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: t("careersFlexibleWork"),
      description: t("careersFlexibleDescription"),
    },
    {
      icon: <Coffee className="h-6 w-6 text-white" />,
      title: t("careersProfessionalDev"),
      description: t("careersProfessionalDevDescription"),
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
              {t("careersJoinTeam")}
            </h1>
            <p className="text-blue-100 md:text-xl/relaxed">{t("careersBuildCareer")}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("careersApplyNow")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </a>
              <Link href="#why-join">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  {t("careersOurCulture")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Culture of Innovation and Growth Section */}
      <section id="why-join" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              {t("careersWhyJoin")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              A Culture of Innovation and Growth
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              At TNET, we're building a team of forward-thinking individuals who are passionate about driving growth and
              innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900">What We Look For in Our Team Members</h3>
              <p className="text-slate-600">
                We seek individuals who not only bring technical expertise but also a growth mindset and innovative
                thinking. Our interview process is designed to understand how you approach challenges and contribute to
                our collective success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-50 p-4 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-brand-600 mb-2" />
                  <h4 className="font-semibold text-slate-900">Innovation</h4>
                </div>
                <div className="bg-brand-50 p-4 rounded-lg">
                  <Rocket className="h-6 w-6 text-brand-600 mb-2" />
                  <h4 className="font-semibold text-slate-900">Growth</h4>
                </div>
                <div className="bg-brand-50 p-4 rounded-lg">
                  <Users className="h-6 w-6 text-brand-600 mb-2" />
                  <h4 className="font-semibold text-slate-900">Collaboration</h4>
                </div>
                <div className="bg-brand-50 p-4 rounded-lg">
                  <Zap className="h-6 w-6 text-brand-600 mb-2" />
                  <h4 className="font-semibold text-slate-900">Impact</h4>
                </div>
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="TNET Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-brand-50 to-slate-50 rounded-xl p-8 shadow-md border border-slate-100 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Questions We Ask Our Candidates</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="group" whileHover={{ y: -5 }}>
                <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 h-full transition-all duration-300 group-hover:shadow-md">
                  <p className="text-slate-700 italic">
                    "Looking ahead, what specific contributions do you envision making at TNET that will directly
                    contribute to our company's growth?"
                  </p>
                </div>
              </motion.div>

              <motion.div className="group" whileHover={{ y: -5 }}>
                <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 h-full transition-all duration-300 group-hover:shadow-md">
                  <p className="text-slate-700 italic">
                    "Beyond your skills and experience, how do you see yourself actively driving growth initiatives and
                    helping TNET expand its reach and impact?"
                  </p>
                </div>
              </motion.div>

              <motion.div className="group" whileHover={{ y: -5 }}>
                <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 h-full transition-all duration-300 group-hover:shadow-md">
                  <p className="text-slate-700 italic">
                    "At TNET, we're focused on growth. What unique strategies or approaches would you bring to the table
                    to help us achieve our expansion goals?"
                  </p>
                </div>
              </motion.div>

              <motion.div className="group" whileHover={{ y: -5 }}>
                <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 h-full transition-all duration-300 group-hover:shadow-md">
                  <p className="text-slate-700 italic">
                    "As a member of the TNET team, what are some key areas where you believe your talents and insights
                    could be most impactful in fostering the company's growth?"
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Thinking",
                description:
                  "We value fresh perspectives and ideas that can help TNET identify new opportunities for growth and development.",
                icon: <Lightbulb className="h-8 w-8" />,
                color: "from-purple-500 to-indigo-600",
                question:
                  "What are some fresh perspectives or ideas you have that could help TNET identify new opportunities for growth and development?",
              },
              {
                title: "Collaborative Approach",
                description:
                  "Success comes from working together across different teams to implement strategies that lead to significant company growth.",
                icon: <Users className="h-8 w-8" />,
                color: "from-blue-500 to-cyan-600",
                question:
                  "How would you collaborate with different teams within TNET to identify and implement strategies that lead to significant company growth?",
              },
              {
                title: "Vision for Growth",
                description:
                  "We seek team members who can envision their role in our company's future and contribute to our ambitious goals.",
                icon: <Rocket className="h-8 w-8" />,
                color: "from-red-500 to-orange-600",
                question:
                  "What are your aspirations for TNET's future, and how do you believe your contributions can help us reach those ambitious goals?",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-md border border-slate-100 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <motion.div
                    className={`bg-gradient-to-r ${item.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>

                  <div className="p-4 bg-slate-50 rounded-lg mt-4 text-sm italic text-slate-700">"{item.question}"</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-gradient-to-r from-brand-900 to-purple-900 rounded-2xl p-8 md:p-12 overflow-hidden text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Additional Questions We Explore</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                  <p className="text-white">
                    "Imagine yourself integrated into TNET. What does 'growth' look like to you for our company, and
                    what role do you see yourself playing in making that vision a reality?"
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                  <p className="text-white">
                    "Beyond your immediate responsibilities, how do you see your presence at TNET contributing to a
                    broader culture of growth and forward momentum?"
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                  <p className="text-white">
                    "Can you provide a specific example from your past experience that demonstrates your ability to
                    contribute to company growth?"
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                  <p className="text-white">"What metrics would you use to measure your impact on TNET's growth?"</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-blue-100 mb-6">
                  These questions reflect our commitment to finding team members who are aligned with our growth mindset
                  and can contribute to our innovative culture.
                </p>
                <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-brand-700 hover:bg-blue-50">
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
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
              {t("careersOurValues")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("careersWhatDrivesUs")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("careersValuesDescription")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-brand-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-700 via-brand-800 to-purple-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4">
              {t("careersBenefitsPerks")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("careersWhatWeOffer")}</h2>
            <p className="mt-4 text-blue-100 md:text-xl/relaxed">{t("careersTakingCare")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-brand-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{t("careersAdditionalBenefits")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersPerformanceBonus")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersPaidTimeOff")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersRetirementPlan")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersWellnessPrograms")}</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{t("careersWorkEnvironment")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersModernWorkspace")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersTeamBuilding")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersDressCode")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>{t("careersSnacksBeverages")}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Application Process"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">
                {t("careersApplicationProcess")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                {t("careersHowToJoin")}
              </h2>
              <p className="text-slate-600 md:text-lg">{t("careersProcessDescription")}</p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep1Title")}</h3>
                    <p className="text-slate-600">{t("careersStep1Description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep2Title")}</h3>
                    <p className="text-slate-600">{t("careersStep2Description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep3Title")}</h3>
                    <p className="text-slate-600">{t("careersStep3Description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep4Title")}</h3>
                    <p className="text-slate-600">{t("careersStep4Description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep5Title")}</h3>
                    <p className="text-slate-600">{t("careersStep5Description")}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    {t("careersApplyNow")}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("careersReadyNextStep")}</h2>
            <p className="text-blue-100 md:text-xl/relaxed">{t("careersJoinPassionate")}</p>
            <div className="pt-6">
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("careersApplyNow")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
