"use client"

import Link from "next/link"
import { ArrowRight, Code, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function ApisPage() {
  const { t, direction } = useLanguage()

  return (
    <main className="flex-1" dir={direction}>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("aiAPIsHeader")}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("aiAPIsDescription")}
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="inline-flex h-10 items-center justify-center bg-red-600 hover:bg-red-700 text-white"
              >
                {t("getStartedWithAPIs")}
                <ArrowRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* API Details Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">
                {t("aiTools")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                {t("exploreOurAPIs")}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("exploreAPIsDescription")}
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <Code className="h-6 w-6 flex-shrink-0" />
                    <h3 className="text-xl font-bold">{t("openAIAPI")}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">{t("openAIAPIDetail")}</p>
                  <Link href="/contact">
                    <Button className="mt-4 inline-flex h-10 items-center justify-center bg-red-600 hover:bg-red-700">
                      {t("integrateOpenAIAPI")}
                      <ChevronRight className={`${direction === "rtl" ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <Code className="h-6 w-6 flex-shrink-0" />
                    <h3 className="text-xl font-bold">{t("googleCloudNLAPI")}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">{t("googleCloudNLAPIDetail")}</p>
                  <Link href="/contact">
                    <Button className="mt-4 inline-flex h-10 items-center justify-center bg-red-600 hover:bg-red-700">
                      {t("integrateGoogleCloudNLAPI")}
                      <ChevronRight className={`${direction === "rtl" ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <Code className="h-6 w-6 flex-shrink-0" />
                    <h3 className="text-xl font-bold">{t("tavusAPI")}</h3>
                  </div>
                  <p className="text-gray-500 flex-grow">{t("tavusAPIDetail")}</p>
                  <Link href="/contact">
                    <Button className="mt-4 inline-flex h-10 items-center justify-center bg-red-600 hover:bg-red-700">
                      {t("integrateTavusAPI")}
                      <ChevronRight className={`${direction === "rtl" ? "mr-1 rotate-180" : "ml-1"} h-4 w-4`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-700 via-red-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 rounded-full bg-red-500 opacity-10 blur-3xl"
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
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-navy-500 opacity-10 blur-3xl"
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
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("readyToIntegrate")}
              </h2>
              <p className="mx-auto max-w-[700px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("apiCTADescription")}
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="inline-flex items-center justify-center bg-white text-red-700 hover:bg-red-50"
                >
                  {t("contactUsForAPIs")}
                  <ArrowRight className={`${direction === "rtl" ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}