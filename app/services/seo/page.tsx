"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronRight, Search, LineChart, Globe, FileText, Award, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function SEOPage() {
  const { t, direction } = useLanguage()

  // SEO services
  const services = [
    {
      title: "Technical SEO",
      description:
        "We optimize your website's technical foundation to ensure search engines can crawl and index your content effectively, addressing issues like site speed, mobile-friendliness, and structured data.",
      icon: <Globe className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "On-Page SEO",
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance for target keywords and enhance user experience.",
      icon: <FileText className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Off-Page SEO",
      description:
        "We build high-quality backlinks from authoritative websites to increase your domain authority and improve your search engine rankings.",
      icon: <Award className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Local SEO",
      description:
        "We optimize your online presence to attract more business from relevant local searches, including Google Business Profile optimization and local citation building.",
      icon: <Search className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Content Strategy",
      description:
        "We develop a comprehensive content strategy that targets valuable keywords, addresses user intent, and establishes your brand as an authority in your industry.",
      icon: <FileText className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "SEO Analytics & Reporting",
      description:
        "We provide detailed reports on your SEO performance, including rankings, traffic, and conversions, with actionable insights for continuous improvement.",
      icon: <LineChart className="h-6 w-6 text-brand-600" />,
    },
  ]

  // Key metrics
  const metrics = [
    {
      value: "93%",
      label: "of online experiences begin with a search engine",
    },
    {
      value: "75%",
      label: "of users never scroll past the first page of search results",
    },
    {
      value: "70-80%",
      label: "of users ignore paid ads and focus on organic results",
    },
    {
      value: "14.6%",
      label: "close rate for SEO leads (compared to 1.7% for outbound leads)",
    },
  ]

  // SEO process
  const process = [
    {
      number: "01",
      title: "Comprehensive Audit",
      description:
        "We analyze your website's current SEO performance, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      number: "02",
      title: "Keyword Research",
      description:
        "We identify high-value keywords that your target audience is searching for and that align with your business goals.",
    },
    {
      number: "03",
      title: "Strategy Development",
      description:
        "We create a customized SEO strategy based on our audit findings and keyword research to achieve your specific objectives.",
    },
    {
      number: "04",
      title: "On-Page & Technical Optimization",
      description:
        "We implement on-page and technical SEO improvements to enhance your website's search engine visibility.",
    },
    {
      number: "05",
      title: "Content Creation & Optimization",
      description:
        "We develop and optimize high-quality content that satisfies user intent and targets your priority keywords.",
    },
    {
      number: "06",
      title: "Link Building",
      description:
        "We execute strategic link building campaigns to increase your website's authority and improve rankings.",
    },
    {
      number: "07",
      title: "Monitoring & Refinement",
      description: "We continuously monitor your SEO performance and refine our strategy to ensure optimal results.",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. However, this timeline can vary depending on factors such as your website's current state, competition level, and the aggressiveness of your SEO strategy. Some improvements, like technical fixes, can show quicker results, while building domain authority takes more time.",
    },
    {
      question: "How is SEO different from paid advertising?",
      answer:
        "SEO (Search Engine Optimization) focuses on improving your website's organic (non-paid) visibility in search engine results, while paid advertising involves paying for placement in search results or on other platforms. SEO typically provides better long-term ROI, higher credibility, and more sustainable traffic, but takes longer to show results. Paid advertising delivers immediate visibility but stops when you stop paying.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No reputable SEO agency can guarantee specific rankings, as search algorithms consider hundreds of factors and are constantly evolving. We focus on implementing proven SEO strategies and best practices that improve your website's visibility and organic traffic over time. We track rankings as one of many performance metrics, but our ultimate goal is to increase qualified traffic and conversions.",
    },
    {
      question: "What makes your SEO services different?",
      answer:
        "Our approach to SEO is comprehensive, transparent, and results-focused. We combine technical expertise with strategic thinking to deliver customized solutions that align with your business goals. We stay current with the latest algorithm updates and industry trends, and we provide detailed reporting that clearly demonstrates the value of our services. Most importantly, we view SEO as part of your overall digital marketing strategy, not as an isolated tactic.",
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
                <Search className="mr-2 h-4 w-4" />
                {t("seo")}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Dominate Search Results & Drive Organic Growth
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                Our data-driven SEO strategies help businesses improve search rankings, increase organic traffic, and
                achieve sustainable online growth.
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
                    Explore SEO Services
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
                  src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Search Engine Optimization"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
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
              Why SEO Matters
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              The Power of Search Engine Optimization
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              In today's digital landscape, SEO is essential for businesses looking to increase their online visibility
              and attract qualified leads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-4xl font-bold text-brand-600 mb-2">{metric.value}</div>
                <p className="text-slate-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Comprehensive SEO Solutions
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We offer a full spectrum of SEO services to help your business achieve sustainable growth through organic
              search.
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

      {/* Benefits Section */}
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
              <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800">The Benefits</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Why Invest in SEO?</h2>
              <p className="text-slate-600 md:text-lg">
                SEO offers numerous advantages over other marketing channels, providing sustainable, long-term results
                that continue to benefit your business.
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
                    <h3 className="font-bold text-slate-900">Increased Organic Traffic</h3>
                    <p className="text-slate-600">
                      Drive more qualified visitors to your website without paying for each click.
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
                    <h3 className="font-bold text-slate-900">Higher ROI</h3>
                    <p className="text-slate-600">
                      SEO provides one of the best returns on investment of any digital marketing channel.
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
                    <h3 className="font-bold text-slate-900">Enhanced Credibility</h3>
                    <p className="text-slate-600">
                      High search rankings build trust with potential customers and establish your brand as an
                      authority.
                    </p>
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
                    <h3 className="font-bold text-slate-900">Better User Experience</h3>
                    <p className="text-slate-600">
                      SEO improvements enhance your website's usability and accessibility for all visitors.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Sustainable Results</h3>
                    <p className="text-slate-600">
                      Unlike paid advertising, SEO continues to deliver results long after the initial investment.
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
                  src="https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="SEO Benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
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
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Our Proven SEO Methodology
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We follow a systematic, data-driven approach to SEO that delivers consistent results for our clients.
            </p>
          </motion.div>

          <div className="space-y-12 mt-12">
            {process.map((step, index) => (
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

      {/* Results Section */}
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
              Client Success
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Real Results for Real Businesses
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Our SEO strategies have helped businesses across various industries achieve significant improvements in
              search visibility and organic traffic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center justify-center mb-4">
                <ArrowUp className="h-8 w-8 text-green-500" />
                <span className="text-4xl font-bold text-green-500 ml-2">320%</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Increase in Organic Traffic</h3>
              <p className="text-slate-600 text-center">
                For an e-commerce client in the home goods industry within 6 months of implementing our SEO strategy.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center justify-center mb-4">
                <ArrowUp className="h-8 w-8 text-green-500" />
                <span className="text-4xl font-bold text-green-500 ml-2">85%</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">First-Page Rankings</h3>
              <p className="text-slate-600 text-center">
                Of target keywords for a B2B software company, resulting in a 200% increase in qualified leads.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center justify-center mb-4">
                <ArrowUp className="h-8 w-8 text-green-500" />
                <span className="text-4xl font-bold text-green-500 ml-2">250%</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">ROI on SEO Investment</h3>
              <p className="text-slate-600 text-center">
                For a healthcare provider who saw a significant increase in appointment bookings from organic search.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Get answers to common questions about our SEO services and approach.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-slate-600">{item.answer}</p>
              </motion.div>
            ))}
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
              Ready to Climb the Search Rankings?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Contact us today for a free SEO audit and discover how our data-driven strategies can help your business
              achieve sustainable growth through organic search.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Get Your Free SEO Audit
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
