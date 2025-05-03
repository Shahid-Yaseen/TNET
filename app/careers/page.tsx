
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight, Search, Heart, Clock, Coffee, Globe, Award, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

export default function CareersPage() {
  const { t, direction } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

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

  // Job openings
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Web Developer",
      department: "Technology",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "We're looking for an experienced web developer to join our team and help create innovative web solutions for our clients.",
      requirements: [
        "5+ years of experience in web development",
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with responsive design and mobile-first development",
        "Strong problem-solving skills and attention to detail",
      ],
      link: "/careers/senior-web-developer",
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      description:
        "Join our security team to help protect our clients' systems and data from cyber threats through vulnerability assessments and security implementations.",
      requirements: [
        "3+ years of experience in cybersecurity",
        "Knowledge of security frameworks and compliance standards",
        "Experience with vulnerability assessment tools",
        "Security certifications (e.g., CISSP, CEH) preferred",
      ],
      link: "/careers/cybersecurity-specialist",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Lead our digital marketing efforts to help clients grow their online presence through strategic marketing campaigns and SEO optimization.",
      requirements: [
        "4+ years of experience in digital marketing",
        "Expertise in SEO, SEM, and social media marketing",
        "Experience with marketing analytics and reporting",
        "Strong communication and client management skills",
      ],
      link: "/careers/digital-marketing-manager",
    },
    {
      id: 4,
      title: "IT Support Specialist",
      department: "Technology",
      location: "Sharjah, UAE",
      type: "Full-time",
      description:
        "Provide technical support to our clients, troubleshooting issues and ensuring their systems run smoothly and efficiently.",
      requirements: [
        "2+ years of experience in IT support",
        "Knowledge of Windows and Linux operating systems",
        "Experience with networking and hardware troubleshooting",
        "Strong customer service skills",
      ],
      link: "/careers/it-support-specialist",
    },
    {
      id: 5,
      title: "Project Manager",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Oversee the planning, execution, and delivery of client projects, ensuring they are completed on time, within budget, and to the highest standards.",
      requirements: [
        "5+ years of experience in project management",
        "PMP certification or equivalent",
        "Experience managing technology projects",
        "Strong leadership and communication skills",
      ],
      link: "/careers/project-manager",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Create intuitive and engaging user experiences for web and mobile applications, working closely with our development team to bring designs to life.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in design tools (Figma, Adobe XD, etc.)",
        "Portfolio demonstrating strong design skills",
        "Understanding of user-centered design principles",
      ],
      link: "/careers/ui-ux-designer",
    },
  ]

  // Filter jobs based on search term
  const filteredJobs = searchTerm
    ? jobOpenings.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : jobOpenings

  // Employee testimonials
  const testimonials = [
    {
      quote:
        "Working at TNET has been an incredible journey of growth and learning. The collaborative environment and challenging projects have helped me develop both professionally and personally.",
      name: "Sarah Ahmed",
      position: "Senior Web Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop",
      years: "3 years at TNET",
    },
    {
      quote:
        "What I love most about TNET is the culture of innovation. We're encouraged to explore new technologies and approaches, which keeps the work exciting and allows us to deliver cutting-edge solutions to our clients.",
      name: "Michael Chen",
      position: "Cybersecurity Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      years: "2 years at TNET",
    },
    {
      quote:
        "The leadership at TNET truly values work-life balance. The flexible work arrangements have allowed me to be productive professionally while still having time for my family and personal interests.",
      name: "Fatima Al-Mansoori",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&h=100&auto=format&fit=crop",
      years: "4 years at TNET",
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
            <p className="text-blue-100 md:text-xl/relaxed">
              {t("careersBuildCareer")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <Link href="#openings">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("careersViewPositions")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="#culture">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  {t("careersOurCulture")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="culture" className="py-16 md:py-24 bg-white">
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
                {t("careersWhyJoin")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                {t("careersCultureInnovation")}
              </h2>
              <p className="text-slate-600 md:text-lg">
                {t("careersPeopleAsset")}
              </p>
              <p className="text-slate-600 md:text-lg">
                {t("careersDiverseInclusive")}
              </p>
              <div className="pt-4">
                <Link href="#openings">
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    {t("careersExploreOpportunities")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
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
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="TNET Team"
                  fill
                  className="object-cover"
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
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              {t("careersValuesDescription")}
            </p>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("careersWhatWeOffer")}
            </h2>
            <p className="mt-4 text-blue-100 md:text-xl/relaxed">
              {t("careersTakingCare")}
            </p>
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

      {/* Employee Testimonials */}
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
              {t("careersEmployeeStories")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("careersHearFromTeam")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              {t("careersEmployeeExperiences")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mb-6">
                  <p className="text-slate-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.position}</p>
                    <p className="text-brand-600 text-xs">{testimonial.years}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              {t("careersOpenPositions")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("careersCurrentOpportunities")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              {t("careersExploreOpenings")}
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                placeholder={t("careersSearchJobs")}
                className="pl-10 py-6 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-brand-100 text-brand-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.department}
                        </span>
                        <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.location}
                        </span>
                        <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Link href={job.link} className="mt-4 md:mt-0">
                      <Button className="bg-brand-600 hover:bg-brand-700">
                        {t("careersApplyNow")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-slate-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{t("careersKeyRequirements")}</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-right">
                    <Link href={job.link} className="text-brand-600 font-medium hover:underline">
                      {t("careersViewFullJob")}
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">
                  {t("careersNoJobsMatch")}
                </p>
                <Button className="mt-4 bg-brand-600 hover:bg-brand-700" onClick={() => setSearchTerm("")}>
                  {t("careersViewAllOpenings")}
                </Button>
              </div>
            )}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">{t("careersHowToJoin")}</h2>
              <p className="text-slate-600 md:text-lg">
                {t("careersProcessDescription")}
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep1Title")}</h3>
                    <p className="text-slate-600">
                      {t("careersStep1Description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep2Title")}</h3>
                    <p className="text-slate-600">
                      {t("careersStep2Description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep3Title")}</h3>
                    <p className="text-slate-600">
                      {t("careersStep3Description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep4Title")}</h3>
                    <p className="text-slate-600">
                      {t("careersStep4Description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-600 text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{t("careersStep5Title")}</h3>
                    <p className="text-slate-600">
                      {t("careersStep5Description")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No Suitable Positions Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              {t("careersDontSeeMatch")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 mb-4">
              {t("careersAlwaysLookingTalent")}
            </h2>
            <p className="text-slate-600 md:text-xl/relaxed mb-8">
              {t("careersNoPositionMatch")}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                {t("careersSubmitResume")}
                <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
              </Button>
            </Link>
          </motion.div>
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
              {t("careersReadyNextStep")}
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              {t("careersJoinPassionate")}
            </p>
            <div className="pt-6">
              <Link href="#openings">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("careersViewPositions")}
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
