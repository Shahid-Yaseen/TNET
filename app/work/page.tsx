"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import WorkProcessSection from "@/components/work-process-section"

export default function WorkPage() {
  const { t, direction } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  // Project categories
  const categories = [
    { id: "all", name: t("allProjects") },
    { id: "web-design", name: t("webDesign") },
    { id: "it-infrastructure", name: t("itInfrastructure") },
    { id: "security", name: t("security") },
    { id: "digital-marketing", name: t("digitalMarketing") },
  ]

  // Featured projects
  const projects = [
    {
      id: 1,
      title: t("healthcareWebsiteRedesignTitle"),
      description: t("healthcareWebsiteRedesignDescription"),
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=600&auto=format&fit=crop",
      category: "web-design",
      client: t("regionalMedicalCenter"),
      year: "2023",
      link: "/work/healthcare-website-redesign",
    },
    {
      id: 2,
      title: t("manufacturingItUpgradeTitle"),
      description: t("manufacturingItUpgradeDescription"),
      image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "it-infrastructure",
      client: t("industrialInnovations"),
      year: "2023",
      link: "/work/manufacturing-it-upgrade",
    },
    {
      id: 3,
      title: t("financialCybersecurityTitle"),
      description: t("financialCybersecurityDescription"),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&h=600&auto=format&fit=crop",
      category: "security",
      client: t("globalFinancialGroup"),
      year: "2022",
      link: "/work/financial-cybersecurity",
    },
    {
      id: 4,
      title: t("ecommerceMarketingTitle"),
      description: t("ecommerceMarketingDescription"),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&h=600&auto=format&fit=crop",
      category: "digital-marketing",
      client: t("urbanStyleOutlet"),
      year: "2022",
      link: "/work/ecommerce-marketing",
    },
    {
      id: 5,
      title: t("educationWebsiteTitle"),
      description: t("educationWebsiteDescription"),
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&h=600&auto=format&fit=crop",
      category: "web-design",
      client: t("internationalAcademy"),
      year: "2022",
      link: "/work/education-website",
    },
    {
      id: 6,
      title: t("retailSecurityTitle"),
      description: t("retailSecurityDescription"),
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&h=600&auto=format&fit=crop",
      category: "security",
      client: t("premiumRetailGroup"),
      year: "2021",
      link: "/work/retail-security",
    },
    {
      id: 7,
      title: t("hospitalityCloudTitle"),
      description: t("hospitalityCloudDescription"),
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=600&auto=format&fit=crop",
      category: "it-infrastructure",
      client: t("luxuryResortsInternational"),
      year: "2021",
      link: "/work/hospitality-cloud",
    },
    {
      id: 8,
      title: t("professionalSeoTitle"),
      description: t("professionalSeoDescription"),
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&h=600&auto=format&fit=crop",
      category: "digital-marketing",
      client: t("eliteConsultingPartners"),
      year: "2021",
      link: "/work/professional-seo",
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  // Technologies used
  const technologies = [
    { name: "React", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Microsoft Azure", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Cisco", logo: "/placeholder.svg?height=60&width=60" },
    { name: "WordPress", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Shopify", logo: "/placeholder.svg?height=60&width=60" },
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{t("ourWork")}</h1>
            <p className="text-blue-100 md:text-xl/relaxed">{t("explorePortfolio")}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <Link href="#projects">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("viewProjects")}
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  {t("startYourProject")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              {t("ourPortfolio")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("featuredProjects")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("browsePortfolio")}</p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={project.link} className="group h-full block">
                  <Card className="overflow-hidden h-full border-0 shadow-lg transition-all duration-200 group-hover:shadow-xl">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-600 text-xs font-medium px-2.5 py-0.5 rounded">
                          {categories.find((cat) => cat.id === project.category)?.name || project.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-2 text-sm text-slate-500">
                        {project.client} • {project.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-brand-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 flex-grow mb-4">{project.description}</p>
                      <div
                        className={`flex items-center text-brand-600 font-medium mt-auto ${direction === "rtl" ? "flex-row-reverse" : ""}`}
                      >
                        <span className="group-hover:underline">{t("viewProject")}</span>
                        <ArrowRight
                          className={`${direction === "rtl" ? "mr-1 rotate-180" : "ml-1"} h-4 w-4 transition-transform ${direction === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
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

      {/* Work Process Section */}
      <WorkProcessSection />

      {/* Technologies Section */}
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
              {t("technologies")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("technologiesWeUse")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("leverageTechnologies")}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={60} height={60} className="mb-3" />
                <span className="text-center font-medium text-slate-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Metrics Section */}
      <section className="py-16 md:py-24 bg-slate-50">
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
                {t("projectMetrics")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                {t("deliveringResults")}
              </h2>
              <p className="text-slate-600 md:text-lg">{t("measuringSuccess")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-600 mb-2">150%</div>
                  <p className="text-slate-700 font-medium">{t("increaseWebsiteConversions")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-600 mb-2">40%</div>
                  <p className="text-slate-700 font-medium">{t("improvementOperationalEfficiency")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-600 mb-2">75%</div>
                  <p className="text-slate-700 font-medium">{t("reductionSecurityIncidents")}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-brand-600 mb-2">200%</div>
                  <p className="text-slate-700 font-medium">{t("increaseQualifiedLeads")}</p>
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
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=500&auto=format&fit=crop"
                  alt="Project Metrics"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
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
              {t("projectSpotlight")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("featuredProjectHealthcare")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("closerLook")}</p>
          </motion.div>

          <div className="bg-slate-50 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Healthcare Website Redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-brand-100 text-brand-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t("webDesign")}
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t("healthcare")}
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded">2023</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t("theChallenge")}</h3>
                <p className="text-slate-600">{t("healthcareChallenge")}</p>
                <h3 className="text-2xl font-bold text-slate-900">{t("ourSolution")}</h3>
                <p className="text-slate-600">{t("healthcareSolution")}</p>
                <h3 className="text-2xl font-bold text-slate-900">{t("theResults")}</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{t("increaseOnlineAppointments")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{t("increaseTimeOnWebsite")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{t("improvementPatientSatisfaction")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{t("newPatientsCitedWebsite")}</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/work/healthcare-website-redesign">
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      {t("viewFullCaseStudy")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("readyToStartProject")}</h2>
            <p className="text-blue-100 md:text-xl/relaxed">{t("contactToDiscuss")}</p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("letsDiscussProject")}
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
