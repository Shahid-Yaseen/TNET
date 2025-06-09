"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t, direction } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)

    // Simulate form submission with a delay
    setTimeout(() => {
      setFormSubmitting(false)
      setFormSubmitted(true)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    }, 1500)
  }

  // Office locations
  const offices = [
    // {
    //   city: "Dubai",
    //   address: "Business Bay, Dubai, UAE",
    //   phone: "+971 4 123 4567",
    //   email: "dubai@tnet.com",
    //   hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    //   image: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   mapUrl: "https://maps.google.com/?q=Business+Bay+Dubai+UAE",
    // },
    // {
    //   city: "Abu Dhabi",
    //   address: "Corniche Road, Abu Dhabi, UAE",
    //   phone: "+971 2 123 4567",
    //   email: "abudhabi@tnet.com",
    //   hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    //   image: "https://images.unsplash.com/photo-1636110911594-84ef8a6b0a9d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   mapUrl: "https://maps.google.com/?q=Corniche+Road+Abu+Dhabi+UAE",
    // },
    {
      city: "Sharjah",
      address: "Research Technology and Innovation Park",
      // phone: "+1 (351) 227-2277",
      phone: "",
      email: "contact@tnet.ae",
      hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1637987897990-e660edd0af44?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mapUrl: "https://maps.google.com/?q=Al+Khan+Sharjah+UAE",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "What are your business hours?",
      answer:
        "Our standard business hours are Sunday to Thursday, 9:00 AM to 6:00 PM (Gulf Standard Time). However, our support team is available 24/7 for urgent technical issues.",
    },
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line for immediate assistance.",
    },
    {
      question: "Do you offer services outside the UAE?",
      answer:
        "Yes, while our offices are located in the UAE, we serve clients globally. Our team can work remotely with clients from any location, and we can arrange virtual meetings to accommodate different time zones.",
    },
    {
      question: "How can I request a quote for your services?",
      answer:
        "You can request a quote by filling out our contact form, specifying the services you're interested in, and providing some details about your project. Our team will get back to you with a customized quote based on your requirements.",
    },
  ]

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/tnet.ae",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/tnetinfotech",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/tnet.ae/#",
    },
    // {
    //   name: "LinkedIn",
    //   icon: <Linkedin className="h-5 w-5" />,
    //   url: "https://linkedin.com/company/tnet",
    // },
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>
            <p className="text-blue-100 md:text-xl/relaxed">
              Have a question or want to discuss your project? We're here to help. Reach out to us through any of our
              contact channels or visit one of our offices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <Link href="#contact-form">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Send a Message
                  <ChevronRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
              <Link href="#locations">
                <Button variant="outline" size="lg" className="border-white text-brand-700 hover:bg-white/10">
                  Our Locations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
     {/* Contact Section */}
<section className="py-16 md:py-24 bg-white relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-100 opacity-50 blur-3xl"
      animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
    />
    <motion.div
      className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-navy-100 opacity-50 blur-3xl"
      animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
    />
  </div>

  <div className="container px-4 md:px-6 relative z-10">
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">Contact Us</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We'd love to hear from you! Reach out with any questions or inquiries, and we'll get back to you promptly.
        </p>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <motion.div
        className="lg:col-span-2 bg-white rounded-xl shadow-xl p-8 border border-slate-100"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h3>

        {formSubmitted ? (
          <motion.div
            className="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-800 mb-2">Message Sent Successfully!</h3>
            <p className="text-red-700">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Your Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="border-slate-200 focus:border-red-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Your Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="border-slate-200 focus:border-red-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="border-slate-200 focus:border-red-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                Subject*
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="What is your message about?"
                className="border-slate-200 focus:border-red-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-slate-700">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-md border border-slate-200 py-2 px-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="">Select a service</option>
                <option value="web-design">Web Design</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="security">Security & Surveillance</option>
                <option value="social-media">Social Media Marketing</option>
                <option value="seo">SEO</option>
                <option value="hosting">Hosting & Domain</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message*
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your project or inquiry"
                rows={5}
                className="border-slate-200 focus:border-red-500"
              />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-red-600 to-navy-600 hover:from-red-500 hover:to-navy-500"
                disabled={formSubmitting}
              >
                {formSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </motion.div>
          </form>
        )}
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="bg-gradient-to-br from-red-600 to-navy-800 text-white rounded-xl shadow-xl p-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-6">
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-red-100">Phone</h4>
              <Link href="tel:+97141234567" className="hover:underline">
                <p>Main: 
                </p>
                {/* <p>Main: +1 (351) 227-2277
                </p> */}
                {/* <p>Support: +971 4 123 4568</p> */}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-red-100">Email</h4>
              <Link href="mailto:info@tnet.com" className="hover:underline">
                <p>General: contact@tnet.ae                </p>
                {/* <p>Support: support@tnet.com</p>
                <p>Sales: sales@tnet.com</p> */}
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-red-100">Headquarters</h4>
              <Link href="https://maps.google.com" className="hover:underline">
              United Arab Emirates Sharjah Sharjah Research Technology and Innovation Park
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-red-100">Business Hours</h4>
              <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
              <p>Friday - Saturday: Closed</p>
              <p className="mt-1">24/7 Support Available for Urgent Issues</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <h4 className="font-medium text-red-100 mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label={social.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Office Locations Section */}
      <section id="locations" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-800 mb-4">
              Our Locations
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Visit Our Offices
            </h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              We have offices across the UAE to better serve our clients. Feel free to visit us at any of our locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={`${office.city} Office`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600">{office.address}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600">{office.phone}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600">{office.email}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600">{office.hours}</p>
                  </div>
                  <div className="pt-4">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-600 font-medium hover:underline"
                    >
                      View on Map
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Find Us</h2>
            <p className="mt-4 text-slate-600 md:text-xl/relaxed">
              Our headquarters is conveniently located in Business Bay, Dubai.
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-md border border-slate-100 h-[400px] md:h-[500px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.421211562546!2d55.26442259999999!3d25.1851018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1654321234567!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TNET Headquarters Location"
            ></iframe>
          </motion.div>
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
              Find answers to common questions about contacting and working with us.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 md:text-xl/relaxed">
              Contact us today to discuss how our technology solutions can help you achieve your business goals.
            </p>
            <div className="pt-6">
              <Link href="#contact-form">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-blue-50">
                  Get in Touch Now
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
