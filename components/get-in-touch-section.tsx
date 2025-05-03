"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function GetInTouchSection() {
  const { t, direction } = useLanguage()

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      // title: t("email"),
      value: "infotechtnet@gmail.com",
      link: "infotechtnet@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      //  title: t("phone"),
      value: t("phone"),
       link: "tel:+1 (351) 227-2277",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      // title: t("address"),
      value:
      t("address"),
      link: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      href: "https://www.facebook.com/tnet.ae",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      href: "https://x.com/tnetinfotech",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      href: "https://www.instagram.com/tnet.ae/#",
    },
    // {
    //   icon: <Linkedin className="h-5 w-5" />,
    //   name: "LinkedIn",
    //   href: "#",
    // },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" dir={direction}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-100 opacity-50 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-navy-100 opacity-50 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
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
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">{t("contactUs")}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              {t("getInTouchTitle")}
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("getInTouchDescription")}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2 bg-white rounded-xl shadow-xl p-8 border border-slate-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">{t("sendMessage")}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    {t("yourName")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("namePlaceholder")}
                    className="border-slate-200 focus:border-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    {t("yourEmail")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="border-slate-200 focus:border-red-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                  {t("subject")}
                </label>
                <Input
                  id="subject"
                  placeholder={t("subjectPlaceholder")}
                  className="border-slate-200 focus:border-red-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("messagePlaceholder")}
                  rows={5}
                  className="border-slate-200 focus:border-red-500"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-red-600 to-navy-600 hover:from-red-500 hover:to-navy-500"
                >
                  {t("sendMessageButton")}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-red-600 to-navy-800 text-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t("contactInfo")}</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-red-100">{item.title}</h4>
                    <Link href={item.link} className="hover:underline">
                      {item.value}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-medium text-red-100 mb-4">{t("followUs")}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
