"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, CheckCircle, Users, Building, Briefcase, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ClientsPage() {
  const { t, direction } = useLanguage()

  // Updated with your actual clients
  const featuredClients = [
    {
      name: "Sabha Advertising",
      logo: "/sabha-advertising-logo.png",
      website: "https://sabhaadv.com/",
      description: "Creative advertising and marketing solutions for businesses of all sizes.",
      image: "/images/Sabha.png",
    },
    {
      name: "Knee UAE",
      logo: "/knee-uae-logo.png",
      website: "https://knee.ae",
      description: "Specialized healthcare services focused on knee treatments and rehabilitation.",
      image: "/images/Knee.png",
    },
    {
      name: "Aleter UAE",
      logo: "/generic-abstract-logo.png",
      website: "https://aleter.ae",
      description: "Professional services and solutions for businesses in the UAE.",
      image: "/images/Alter.png",
    },
    {
      name: "Noura Al Adala",
      logo: "/placeholder.svg?height=80&width=160&query=Noura Al Adala logo",
      website: "https://nouraladala.com/en/",
      description: "Legal services and consultation for individuals and businesses.",
      image: "/images/Noura.png",
    },
    {
      name: "EBCAD",
      logo: "/placeholder.svg?height=80&width=160&query=EBCAD logo",
      website: "https://www.facebook.com/EBCAD/",
      description: "Educational services and professional development programs.",
      image: "/images/EBCAD.png",
    },
    {
      name: "AllCare",
      logo: "/placeholder.svg?height=80&width=160&query=AllCare logo",
      website: "https://www.allcare.ae/",
      description: "Comprehensive healthcare services and patient care solutions.",
      image: "/images/allcare.png",
    },
  ]

  // Testimonials - reusing some from the homepage
  const testimonials = [
    {
      quote: t("testimonial1Quote"),
      author: t("testimonial1Author"),
      position: t("testimonial1Position"),
      company: t("testimonial1Company"),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote: t("testimonial2Quote"),
      author: t("testimonial2Author"),
      position: t("testimonial2Position"),
      company: t("testimonial2Company"),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote: t("testimonial3Quote"),
      author: t("testimonial3Author"),
      position: t("testimonial3Position"),
      company: t("testimonial3Company"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote: t("testimonial4Quote"),
      author: t("testimonial4Author"),
      position: t("testimonial4Position"),
      company: t("testimonial4Company"),
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
  ]

  // Industries served
  const industries = [
    {
      name: t("healthcare"),
      icon: <Users className="h-6 w-6 text-brand-600" />,
      description: t("healthcareDesc"),
    },
    {
      name: t("finance"),
      icon: <Building className="h-6 w-6 text-brand-600" />,
      description: t("financeDesc"),
    },
    {
      name: t("manufacturing"),
      icon: <Briefcase className="h-6 w-6 text-brand-600" />,
      description: t("manufacturingDesc"),
    },
    {
      name: t("retail"),
      icon: <Building className="h-6 w-6 text-brand-600" />,
      description: t("retailDesc"),
    },
    {
      name: t("education"),
      icon: <Users className="h-6 w-6 text-brand-600" />,
      description: t("educationDesc"),
    },
    {
      name: t("professionalServices"),
      icon: <Briefcase className="h-6 w-6 text-brand-600" />,
      description: t("professionalServicesDesc"),
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
              {t("ourClientsAndSuccessStories")}
            </h1>
            <p className="text-blue-100 md:text-xl/relaxed">{t("discoverHowWeHelped")}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  {t("becomeOurClient")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Clients Showcase - Enhanced Section */}
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
              {t("ourClients")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("trustedByLeadingOrganizations")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("proudToPartner")}</p>
          </motion.div>

          {/* Website Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredClients.map((client, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Website Preview */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-200 flex items-center px-2 z-10">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-600 mx-auto truncate max-w-[200px]">{client.website}</div>
                  </div>
                  <div className="absolute inset-0 mt-6 bg-white">
                    <Image
                      src={client.image || "/placeholder.svg"}
                      alt={`${client.name} website`}
                      fill
                      className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <Link
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-brand-700 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Visit Website
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{client.name}</h3>
                    {/* <div className="h-10 w-20 relative">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div> */}
                  </div>
                  <p className="text-slate-600 mb-4">{client.description}</p>
                  <Link
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-600 font-medium hover:underline"
                  >
                    {client.website.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "")}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {t("testimonials")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("whatClientsSay")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("dontJustTakeOurWord")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-slate-600 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              {t("industries")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("industriesWeServe")}
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">{t("extensiveExperience")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
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
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
                <p className="text-slate-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
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
                {t("clientResults")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                {t("deliveringMeasurableResults")}
              </h2>
              <p className="text-slate-600 md:text-lg">{t("committedToDelivering")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("increasedOperationalEfficiency")}</h3>
                    <p className="text-slate-600">{t("increasedOperationalEfficiencyDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("enhancedOnlinePresence")}</h3>
                    <p className="text-slate-600">{t("enhancedOnlinePresenceDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("improvedSecurityPosture")}</h3>
                    <p className="text-slate-600">{t("improvedSecurityPostureDesc")}</p>
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
                    <h3 className="font-bold text-slate-900">{t("costSavings")}</h3>
                    <p className="text-slate-600">{t("costSavingsDesc")}</p>
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
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=500&auto=format&fit=crop"
                  alt="Client Results"
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
              {t("readyToBecomeNextSuccess")}
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">{t("contactTodayToDiscuss")}</p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  {t("letsWorkTogether")}
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
