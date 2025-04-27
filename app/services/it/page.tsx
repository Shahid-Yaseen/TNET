"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronRight, HardDrive, Server, Database, Cloud, Lock, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ITServicesPage() {
  const { t, direction } = useLanguage()

  // IT Services offered
  const services = [
    {
      icon: <Server className="h-6 w-6 text-brand-600" />,
      title: "IT Infrastructure Management",
      description:
        "Comprehensive management of your IT infrastructure including servers, networks, and storage systems to ensure optimal performance and reliability.",
    },
    {
      icon: <Database className="h-6 w-6 text-brand-600" />,
      title: "Data Management & Analytics",
      description:
        "Solutions for storing, managing, and analyzing your business data to derive actionable insights and make data-driven decisions.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-brand-600" />,
      title: "Cloud Services",
      description:
        "Migration, implementation, and management of cloud-based solutions to enhance scalability, flexibility, and cost-efficiency.",
    },
    {
      icon: <Lock className="h-6 w-6 text-brand-600" />,
      title: "Cybersecurity Solutions",
      description:
        "Robust security measures to protect your systems and data from cyber threats, including firewalls, encryption, and security audits.",
    },
    {
      icon: <Code className="h-6 w-6 text-brand-600" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business needs and streamline your operations.",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-brand-600" />,
      title: "IT Support & Maintenance",
      description:
        "Ongoing technical support and maintenance services to ensure your IT systems run smoothly and efficiently.",
    },
  ]

  // Benefits of our IT services
  const benefits = [
    {
      title: "Enhanced Operational Efficiency",
      description:
        "Our IT solutions streamline your business processes, reduce manual work, and optimize resource utilization, leading to significant improvements in operational efficiency.",
    },
    {
      title: "Scalable Technology Solutions",
      description:
        "We design flexible IT systems that can grow with your business, ensuring your technology infrastructure can adapt to changing needs and market conditions.",
    },
    {
      title: "Reduced Downtime & Disruptions",
      description:
        "Our proactive maintenance and monitoring services minimize system failures and downtime, ensuring business continuity and uninterrupted operations.",
    },
    {
      title: "Cost-Effective IT Management",
      description:
        "We help you optimize your IT spending by implementing efficient solutions, reducing unnecessary expenses, and maximizing the return on your technology investments.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Our innovative IT solutions give your business a technological edge, enabling you to outperform competitors and capitalize on new market opportunities.",
    },
  ]

  // Technology partners/solutions
  const technologies = [
    {
      name: "Microsoft",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      name: "AWS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Google Cloud",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png",
    },
    {
      name: "Cisco",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/512px-Cisco_logo_blue_2016.svg.png",
    },
    {
      name: "Oracle",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png",
    },
    {
      name: "IBM",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png",
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
                <HardDrive className="mr-2 h-4 w-4" />
                {t("it")}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Innovative IT Solutions for Modern Businesses
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                We deliver custom IT solutions and infrastructure support to help your business harness the power of
                technology for operational excellence and competitive advantage.
              </p>
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
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="IT Services"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Technology Solutions That Drive Business Growth
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Our IT services are designed to transform your business operations, enhance productivity, and create
              sustainable competitive advantages.
            </p>
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
              Comprehensive IT Services
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We offer a wide range of IT services tailored to meet your specific business needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-slate-100 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-brand-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology Partners Section */}
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
              Our Technology Partners
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We partner with the world's leading technology providers to deliver cutting-edge solutions for your
              business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
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
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">Success Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                How We Transformed a Manufacturing Company's IT Infrastructure
              </h2>
              <p className="text-slate-600 md:text-lg">
                A leading manufacturing company was struggling with outdated IT systems that were causing operational
                inefficiencies and hindering growth. Our team implemented a comprehensive IT transformation strategy
                that included:
              </p>
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
                    <h3 className="font-bold text-slate-900">Cloud Migration</h3>
                    <p className="text-slate-600">
                      Moving critical applications to the cloud for improved scalability and accessibility.
                    </p>
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
                    <h3 className="font-bold text-slate-900">Network Optimization</h3>
                    <p className="text-slate-600">
                      Redesigning the network infrastructure to eliminate bottlenecks and enhance performance.
                    </p>
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
                    <h3 className="font-bold text-slate-900">Custom Software Development</h3>
                    <p className="text-slate-600">
                      Creating tailored software solutions to streamline production processes and inventory management.
                    </p>
                  </div>
                </motion.li>
              </ul>
              <p className="text-slate-600 font-medium">
                The result? A 40% increase in operational efficiency, 30% reduction in IT costs, and a more agile
                business capable of responding quickly to market changes.
              </p>
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
                  src="https://plus.unsplash.com/premium_photo-1664301747246-ca55593015f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Case Study"
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Let's discuss how our IT services can help you optimize your technology investments, enhance operational
              efficiency, and drive business growth.
            </p>
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
