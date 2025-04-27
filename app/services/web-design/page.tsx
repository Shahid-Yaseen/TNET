"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  ChevronRight,
  Smartphone,
  Layout,
  Palette,
  Users,
  Gauge,
  Search,
  Code,
  Monitor,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function WebDesignPage() {
  const { t, direction } = useLanguage()

  // Benefits of professional website
  const benefits = [
    {
      title: "Building Trust and Credibility",
      description:
        "A professional, modern website establishes trust and credibility with potential patients. It signals that your practice is up-to-date and dedicated to providing quality care.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Accessibility",
      description:
        "Healthcare websites must be accessible to all, including individuals with disabilities. A well-designed site ensures everyone can easily access information about your services, providers, and contact details.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Patient Engagement and Education",
      description:
        "Websites offer a platform to share educational resources, answer FAQs, and engage patients with relevant health information. This can empower patients to make informed decisions about their care and improve health outcomes.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Appointment Scheduling and Communication",
      description:
        "Online appointment scheduling and secure messaging features streamline patient communication, making it convenient for them to book appointments and contact your practice.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Telehealth Integration",
      description:
        "With the rise of telemedicine, integrating a telehealth platform into your website enables remote consultations, expands access to care, and improves patient convenience.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Marketing and Patient Acquisition",
      description:
        "A well-designed website can serve as a powerful marketing tool, attracting new patients through search engine optimization (SEO), social media integration, and targeted advertising.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Enhanced Patient Experience",
      description:
        "A user-friendly website with clear navigation and relevant information enhances the overall patient experience, making it easier for them to find what they need and fostering a positive impression of your practice.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Data Collection and Analysis",
      description:
        "Websites can collect valuable data on patient demographics, preferences, and behaviors, helping you tailor your services and marketing efforts more effectively.",
      icon: <CheckCircle className="h-6 w-6 text-brand-600" />,
    },
  ]

  // Our approach
  const approaches = [
    {
      title: "Strategic Design",
      description:
        "We don't just create pretty websites. We dive deep into your business goals, target audience, and industry landscape to craft a design that aligns with your overall strategy.",
      icon: <Layout className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "User-Centric Experience (UX)",
      description:
        "We prioritize intuitive navigation, seamless interactions, and fast loading times to ensure a positive user experience that keeps visitors coming back for more.",
      icon: <Users className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Conversion-Focused Design",
      description:
        "Every element of your website is intentionally designed to guide users towards a desired action, whether it's making a purchase, filling out a form, or subscribing to your newsletter.",
      icon: <Gauge className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Mobile-First Approach",
      description:
        "We know that most users browse the web on their smartphones. Our responsive designs look stunning and function flawlessly on all devices.",
      icon: <Smartphone className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "SEO Optimization",
      description:
        "We build your website with search engine optimization (SEO) in mind, ensuring your content is discoverable by the right audience.",
      icon: <Search className="h-6 w-6 text-brand-600" />,
    },
  ]

  // Design process
  const designProcess = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and target audience.",
    },
    {
      number: "02",
      title: "Concept and Strategy",
      description: "We develop a creative concept and strategy that aligns with your objectives.",
    },
    {
      number: "03",
      title: "Design and Development",
      description:
        "We bring your vision to life with stunning visuals, intuitive user interfaces, and cutting-edge technology.",
    },
    {
      number: "04",
      title: "Testing and Launch",
      description:
        "We thoroughly test your website on all devices to ensure optimal performance and a seamless user experience before launch.",
    },
    {
      number: "05",
      title: "Continuous Improvement",
      description: "We provide ongoing support and maintenance to ensure your website stays ahead of the curve.",
    },
  ]

  // Web design services
  const services = [
    {
      title: "Custom Website Design",
      description:
        "We create unique, bespoke designs that reflect your brand's personality and resonate with your target audience.",
      icon: <Palette className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "E-commerce Website Design",
      description:
        "We build online stores that are visually appealing, easy to navigate, and optimized for conversions.",
      icon: <Monitor className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Landing Page Design",
      description:
        "We craft landing pages that are laser-focused on driving specific actions, like lead generation or product promotion.",
      icon: <Layout className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Website Redesign",
      description:
        "If your existing website is outdated or underperforming, we can give it a fresh, modern makeover that delivers results.",
      icon: <Code className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Healthcare Website Design",
      description:
        "We specialize in creating websites for healthcare providers that build trust, improve patient engagement, and streamline communication.",
      icon: <Smartphone className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Ongoing Website Maintenance",
      description: "We offer website maintenance services to keep your site secure, up-to-date, and running smoothly.",
      icon: <Gauge className="h-6 w-6 text-brand-600" />,
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
                <Smartphone className="mr-2 h-4 w-4" />
                {t("webDesign")}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Web Design That Doesn't Just Look Good, It Works
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                At TNET, we believe your website is more than just a digital storefront – it's the heart of your online
                brand, a 24/7 ambassador for your business. Our web design philosophy is simple: form follows function.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    {t("getStarted")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#benefits">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    {t("learnMore")}
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
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Web Design"
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
      <section id="benefits" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              Why Web Design is Important
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Benefits of a Professional Website
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              In the digital age, a well-designed website is essential for healthcare providers for several crucial
              reasons.
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
                  <div className="mt-1 bg-brand-100 rounded-full p-2 flex-shrink-0">{benefit.icon}</div>
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

      {/* Our Approach Section */}
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
              Our Approach
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Strategic Design That Delivers Results
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We create visually stunning websites that are strategically engineered to captivate your audience, drive
              engagement, and deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
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
                  {approach.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{approach.title}</h3>
                <p className="text-slate-600">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
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
              Comprehensive Web Design Solutions
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We offer a full range of web design services to help you establish a powerful online presence.
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

      {/* Healthcare Focus Section */}
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
                Healthcare Websites
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                Healing Starts Online: Elevate Patient Care with TNET's Healthcare Web Design
              </h2>
              <p className="text-slate-600 md:text-lg">
                In the digital age, a healthcare provider's website is often the first point of contact for patients
                seeking information, care, and connection. At TNET, we craft web experiences that go beyond
                aesthetics—we build digital environments that foster trust, comfort, and seamless access to healthcare
                resources.
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
                    <h3 className="font-bold text-slate-900">Trust and Credibility</h3>
                    <p className="text-slate-600">
                      Your website is the digital face of your practice. It needs to convey professionalism, expertise,
                      and a commitment to patient well-being.
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
                    <h3 className="font-bold text-slate-900">Patient-Centric Navigation</h3>
                    <p className="text-slate-600">
                      We streamline pathways to appointments, services, and educational resources, making the patient
                      journey effortless.
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
                    <h3 className="font-bold text-slate-900">Telehealth Integration</h3>
                    <p className="text-slate-600">
                      We seamlessly integrate telehealth platforms, expanding access to care and convenience for your
                      patients.
                    </p>
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
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&h=500&auto=format&fit=crop"
                  alt="Healthcare Web Design"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
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
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Our Design Process
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We follow a proven methodology to ensure your website not only looks amazing but also delivers measurable
              results for your business.
            </p>
          </motion.div>

          <div className="space-y-12 mt-12">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-brand-100 text-brand-800 text-4xl font-bold rounded-lg p-6 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
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
              Success Story
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              How We Transformed a Healthcare Provider's Online Presence
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Learn how our web design services helped a healthcare provider increase patient engagement and appointment
              bookings.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500&h=300&auto=format&fit=crop"
                  alt="Healthcare Website Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
                <p className="text-slate-600">
                  A multi-location healthcare practice was struggling with an outdated website that was difficult to
                  navigate, not mobile-friendly, and failed to effectively communicate their services and expertise.
                  They were losing potential patients to competitors with more modern online presences.
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
                <p className="text-slate-600">We implemented a comprehensive website redesign that included:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>A clean, modern design that established trust and credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Intuitive navigation and patient-centric user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Online appointment scheduling and secure patient portal integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>Responsive design that worked flawlessly on all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>SEO optimization to improve search visibility</span>
                  </li>
                </ul>
                <h3 className="text-2xl font-bold text-slate-900">The Results</h3>
                <p className="text-slate-600">
                  Within three months of launching the new website, the healthcare practice saw a 150% increase in
                  online appointment bookings, a 200% increase in time spent on the website, and a significant
                  improvement in patient satisfaction scores related to their digital experience. The practice also
                  reported that new patients frequently mentioned that their professional website was a key factor in
                  choosing them over competitors.
                </p>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Contact us today for a free consultation and discover how TNET can create a website that not only looks
              amazing but also drives measurable results for your business.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Get Your Free Consultation
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
