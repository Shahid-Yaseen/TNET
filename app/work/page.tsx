"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight, ExternalLink, Monitor, Smartphone, Code, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import WorkProcessSection from "@/components/work-process-section"

export default function WorkPage() {
  const { direction } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  // Project categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-design", name: "Web Design" },
    { id: "e-commerce", name: "E-Commerce" },
    { id: "healthcare", name: "Healthcare" },
    { id: "corporate", name: "Corporate" },
  ]

  // Client websites
  const clientWebsites = [
    {
      id: 1,
      title: "Sabha Advertising",
      description: "Creative advertising and marketing solutions for businesses across the UAE.",
      image: "/images/Sabha.png",
      logo: "/images/clients/sabha-logo.png",
      category: "corporate",
      tags: ["Advertising", "Marketing", "Branding"],
      year: "2023",
      url: "https://sabhaadv.com/",
      features: ["Modern responsive design", "Portfolio showcase", "Service listings", "Contact integration"],
    },
    {
      id: 2,
      title: "Knee UAE",
      description: "Specialized healthcare provider focused on knee treatments and orthopedic services.",
      image: "/images/Knee.png",
      logo: "/images/knee.png",
      category: "healthcare",
      tags: ["Healthcare", "Medical", "Orthopedics"],
      year: "2022",
      url: "https://knee.ae",
      features: ["Patient information portal", "Doctor profiles", "Treatment information", "Appointment booking"],
    },
    {
      id: 3,
      title: "Aleter UAE",
      description: "Professional services company providing innovative solutions for businesses.",
      image: "/images/Alter.png",
      logo: "/images/clients/aleter-logo.png",
      category: "corporate",
      tags: ["Business Services", "Consulting"],
      year: "2022",
      url: "https://aleter.ae",
      features: ["Corporate branding", "Service showcase", "Team profiles", "Client testimonials"],
    },
    {
      id: 4,
      title: "Noura Al Adala",
      description: "Legal services and consultancy firm offering expert advice on UAE law and regulations.",
      image: "/images/noura.png",
      logo: "/images/clients/nouraladala-logo.png",
      category: "corporate",
      tags: ["Legal", "Consultancy", "Professional Services"],
      year: "2021",
      url: "https://nouraladala.com/en/",
      features: ["Bilingual interface", "Practice areas", "Legal resources", "Consultation booking"],
    },
    {
      id: 5,
      title: "EBCAD",
      description: "Educational institution providing specialized training and certification programs.",
      image: "/images/EBCAD.png",
      logo: "/images/clients/ebcad-logo.png",
      category: "education",
      tags: ["Education", "Training"],
      year: "2021",
      url: "https://www.facebook.com/EBCAD/",
      features: ["Course listings", "Student testimonials", "Faculty profiles", "Registration system"],
    },
    {
      id: 6,
      title: "AllCare Medical Center",
      description: "Comprehensive healthcare provider offering a wide range of medical services and specialties.",
      image: "/images/allcare.png",
      logo: "/images/allcare.png",
      category: "healthcare",
      tags: ["Healthcare", "Medical Services"],
      year: "2020",
      url: "https://www.allcare.ae/",
      features: ["Service directory", "Doctor profiles", "Online appointment booking", "Patient resources"],
    },
  ]

  // Filter projects based on active category
  const filteredWebsites =
    activeFilter === "all" ? clientWebsites : clientWebsites.filter((website) => website.category === activeFilter)

  // Services we provide
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-brand-600" />,
      title: "Web Design & Development",
      description: "We create beautiful, functional websites that represent your brand and engage your audience.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-brand-600" />,
      title: "Responsive Design",
      description: "All our websites are fully responsive, ensuring a seamless experience across all devices.",
    },
    {
      icon: <Code className="h-8 w-8 text-brand-600" />,
      title: "Custom Functionality",
      description: "We build custom features and integrations tailored to your specific business requirements.",
    },
    {
      icon: <Search className="h-8 w-8 text-brand-600" />,
      title: "SEO Optimization",
      description: "Our websites are built with search engine optimization in mind to improve your online visibility.",
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Work</h1>
            <p className="text-blue-100 md:text-xl/relaxed">
              Explore our portfolio of successful projects and client websites
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <Link href="#projects">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  View Projects
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Website Showcase */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Our Latest Project
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Explore our recent work and see how we help businesses succeed online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Browser Chrome */}
              <div className="bg-slate-800 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto px-8 py-1 bg-slate-700 rounded-md text-slate-300 text-sm truncate max-w-xs">
                  {clientWebsites[0].url}
                </div>
              </div>
              <div className="relative aspect-[16/9]">
                <Image
                  src={clientWebsites[0].image || "/placeholder.svg"}
                  alt={clientWebsites[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                {/* {clientWebsites[0].logo && (
                  // <div className="h-12 w-12 bg-white rounded-full p-1 shadow-md flex items-center justify-center">
                  //   <Image
                  //     src={clientWebsites[0].logo || "/placeholder.svg"}
                  //     alt={`${clientWebsites[0].title} logo`}
                  //     width={40}
                  //     height={40}
                  //     className="object-contain"
                  //   />
                  // </div>
                )} */}
                <h3 className="text-2xl font-bold text-slate-900">{clientWebsites[0].title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {clientWebsites[0].tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-brand-100 text-brand-800 hover:bg-brand-200">
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-slate-600">{clientWebsites[0].description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Key Features</h4>
                <ul className="space-y-2">
                  {clientWebsites[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link href={clientWebsites[0].url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
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
              Our Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Client Websites
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Browse our collection of custom-designed websites for clients across various industries
            </p>
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

          {/* Websites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map((website, index) => (
              <motion.div
                key={website.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-slate-200 h-full shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    {/* Browser Chrome */}
                    <div className="absolute top-0 left-0 right-0 bg-slate-800 px-3 py-2 flex items-center z-10">
                      <div className="flex space-x-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-xs text-slate-300 truncate max-w-[150px]">
                        {website.url.replace(/(^\w+:|^)\/\//, "")}
                      </div>
                    </div>

                    <div className="relative aspect-[16/10] mt-8">
                      <Image
                        src={website.image || "/placeholder.svg"}
                        alt={website.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <Link
                          href={website.url}
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

                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-slate-900">{website.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {website.year}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {website.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {website.tags.length > 2 && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                          +{website.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 line-clamp-2 mb-4">{website.description}</p>

                    <Link
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-brand-600 font-medium hover:underline"
                    >
                      View Website
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <WorkProcessSection />

      {/* Services Section */}
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
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              What We Offer
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Comprehensive web solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Showcase */}
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
                Client Spotlight
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                {clientWebsites[1].title}
              </h2>
              <p className="text-slate-600 md:text-lg">{clientWebsites[1].description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {clientWebsites[1].tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-brand-100 text-brand-800">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-semibold text-slate-900">Key Features</h4>
                <ul className="space-y-2">
                  {clientWebsites[1].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link href={clientWebsites[1].url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
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
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                {/* Browser Chrome */}
                <div className="bg-slate-800 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto px-8 py-1 bg-slate-700 rounded-md text-slate-300 text-sm truncate max-w-xs">
                    {clientWebsites[1].url}
                  </div>
                </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={clientWebsites[1].image || "/placeholder.svg"}
                    alt={clientWebsites[1].title}
                    fill
                    className="object-cover"
                  />
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Contact us today to discuss how we can help bring your vision to life
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Let's Discuss Your Project
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

