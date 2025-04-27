"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronRight, Globe, Server, Clock, Shield, Zap, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function HostingPage() {
  const { t, direction } = useLanguage()

  // Hosting features
  const features = [
    {
      icon: <Server className="h-6 w-6 text-brand-600" />,
      title: "High-Performance Servers",
      description:
        "Our hosting infrastructure is built on enterprise-grade hardware with SSD storage, ensuring lightning-fast loading times for your websites and applications.",
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-600" />,
      title: "99.9% Uptime Guarantee",
      description:
        "We guarantee 99.9% uptime for your websites and applications, ensuring your online presence is always available to your customers.",
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-600" />,
      title: "Advanced Security",
      description:
        "Our hosting solutions include robust security measures such as DDoS protection, SSL certificates, regular backups, and malware scanning.",
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-600" />,
      title: "Scalable Resources",
      description:
        "Easily scale your hosting resources up or down based on your needs, ensuring optimal performance during traffic spikes and cost efficiency during quieter periods.",
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-600" />,
      title: "Domain Management",
      description:
        "Register, transfer, and manage your domains with ease through our comprehensive domain management system.",
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-brand-600" />,
      title: "24/7 Expert Support",
      description:
        "Our team of hosting specialists is available 24/7 to assist you with any technical issues or questions you may have.",
    },
  ]

  // Hosting plans
  const hostingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "per month",
      description: "Perfect for small websites and blogs",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Business",
      price: "$19.99",
      period: "per month",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "Unlimited Websites",
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "Priority Support",
        "Free Domain for 1 Year",
        "E-commerce Ready",
      ],
      popular: true,
      buttonText: "Choose Plan",
    },
    {
      name: "Enterprise",
      price: "$39.99",
      period: "per month",
      description: "Advanced solutions for high-traffic websites",
      features: [
        "Unlimited Websites",
        "100 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Hourly Backups",
        "Priority Support",
        "Free Domain for 1 Year",
        "E-commerce Ready",
        "Dedicated Resources",
        "Advanced Security",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "What is web hosting?",
      answer:
        "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed on the Internet.",
    },
    {
      question: "What type of hosting do I need?",
      answer:
        "The type of hosting you need depends on your website's requirements. Shared hosting is suitable for small websites with low traffic, VPS hosting is ideal for growing websites that need more resources, and dedicated hosting is best for large websites with high traffic volumes or specific security requirements.",
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer:
        "Yes, you can easily upgrade your hosting plan as your website grows. Our scalable hosting solutions allow you to increase your resources without any downtime or complicated migration processes.",
    },
    {
      question: "Do you offer domain registration services?",
      answer:
        "Yes, we offer domain registration services for a wide range of domain extensions. You can register a new domain, transfer an existing domain, or manage your domains through our comprehensive domain management system.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 technical support through multiple channels including live chat, email, and phone. Our support team consists of hosting specialists who can assist you with any technical issues or questions you may have.",
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
                <Globe className="mr-2 h-4 w-4" />
                {t("hosting")}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Reliable Hosting Solutions for Your Digital Presence
              </h1>
              <p className="text-blue-100 md:text-xl/relaxed">
                Fast, secure, and scalable hosting services designed to keep your websites and applications running
                smoothly 24/7/365.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                    {t("getStarted")}
                    <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                  </Button>
                </Link>
                <Link href="#plans">
                  <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                    View Hosting Plans
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Hosting Services"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Our Hosting Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Powerful Hosting Infrastructure
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Our hosting solutions are built on cutting-edge technology to provide you with the performance, security,
              and reliability your website deserves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                  <div className="mt-1 bg-brand-50 p-2 rounded-full flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans Section */}
      <section id="plans" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              Hosting Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Choose the Perfect Hosting Plan
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We offer a range of hosting plans to meet your specific needs and budget. All plans include our core
              features and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full flex flex-col ${plan.popular ? "border-brand-500 shadow-lg" : "border-slate-200"}`}
                >
                  {plan.popular && (
                    <div className="bg-brand-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-slate-500 ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? "bg-brand-500 hover:bg-brand-600" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 mb-4">Need a custom hosting solution for your specific requirements?</p>
            <Link href="/contact">
              <Button variant="outline" className="border-brand-500 text-brand-500 hover:bg-brand-50">
                Contact Us for Custom Solutions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Domain Registration Section */}
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
                Domain Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                Find the Perfect Domain for Your Business
              </h2>
              <p className="text-slate-600 md:text-lg">
                Your domain name is your digital identity. We offer comprehensive domain registration and management
                services to help you secure the perfect domain for your business.
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
                    <h3 className="font-bold text-slate-900">Domain Registration</h3>
                    <p className="text-slate-600">
                      Register your domain name with a wide range of TLDs including .com, .net, .org, and many more.
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
                    <h3 className="font-bold text-slate-900">Domain Transfer</h3>
                    <p className="text-slate-600">
                      Easily transfer your existing domains to our platform for centralized management and renewal.
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
                    <h3 className="font-bold text-slate-900">DNS Management</h3>
                    <p className="text-slate-600">
                      Full control over your domain's DNS settings with an easy-to-use management interface.
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
                    <h3 className="font-bold text-slate-900">Domain Privacy</h3>
                    <p className="text-slate-600">
                      Protect your personal information from public WHOIS databases with our domain privacy service.
                    </p>
                  </div>
                </motion.li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-brand-600 hover:bg-brand-700">Check Domain Availability</Button>
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
                  src="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Domain Registration"
                  fill
                  className="object-cover"
                />
              </div>
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
              Find answers to common questions about our hosting services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
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
              Ready to Host Your Website with Us?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Get started with our reliable hosting services today and experience the perfect blend of performance,
              security, and support.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Get Started Now
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
