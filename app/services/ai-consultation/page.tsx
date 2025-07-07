"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { GoogleGenerativeAI } from "@google/generative-ai" // Using official Google SDK
import {
  MessageSquare,
  Code,
  PenTool,
  Server,
  Shield,
  Send,
  Loader2,
  User,
  Bot,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Cloud,
  Calculator,
  Laptop,
  Search,
  AlertTriangle,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button" // Shadcn/UI component
import { Avatar } from "@/components/ui/avatar" // Shadcn/UI component
import { Textarea } from "@/components/ui/textarea" // Shadcn/UI component
import { cn } from "@/lib/utils" // Utility for conditional class names
import Link from "next/link"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import ReactMarkdown from "react-markdown"

// Mock useLanguage context (replace with your actual implementation if available)
const useLanguage = () => ({
  t: (str: string) => str, // Translation function (identity for now)
  direction: "ltr", // Left-to-right layout
})

// Define ServiceType for all supported services
type ServiceType =
  | "web-development"
  | "web-design"
  | "mobile-development"
  | "cloud-services"
  | "advertisement"
  | "hosting"
  | "it"
  | "security"
  | "seo"
  | "vulnerability"
  | "general"

// Define Message interface for chat messages
type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  service?: ServiceType
  feedback?: "positive" | "negative" | null
}

// Define ServiceInfo interface for service metadata
interface ServiceInfo {
  type: ServiceType
  label: string
  icon: React.ReactNode
  description: string
  color: string
  bgColor: string
}

export default function AIConsultation() {
  const { t, direction } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Welcome to our AI IT Consultation service. How can I assist you today with your IT needs?",
      role: "assistant",
      timestamp: new Date(),
      service: "general",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceType>("general")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)

  // Define services with metadata
  const services: ServiceInfo[] = [
    {
      type: "general",
      label: "General IT",
      icon: <MessageSquare className="h-4 w-4" />,
      description: "Get answers to general IT questions and guidance on various technology topics.",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      type: "web-development",
      label: "Web Development",
      icon: <Code className="h-4 w-4" />,
      description: "Learn about web technologies, frameworks, and development best practices.",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      type: "web-design",
      label: "Web Design",
      icon: <PenTool className="h-4 w-4" />,
      description: "Discover UI/UX principles, design trends, and creative solutions for your website.",
      color: "text-pink-500",
      bgColor: "bg-pink-100",
    },
    {
      type: "mobile-development",
      label: "Mobile Development",
      icon: <Smartphone className="h-4 w-4" />,
      description: "Explore mobile app development, platforms, and strategies for your business.",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      type: "cloud-services",
      label: "Cloud Services",
      icon: <Cloud className="h-4 w-4" />,
      description: "Understand cloud infrastructure, services, and migration strategies.",
      color: "text-sky-500",
      bgColor: "bg-sky-100",
    },
    {
      type: "advertisement",
      label: "Advertisement",
      icon: <Rocket className="h-4 w-4" />,
      description: "Ignite Your Digital Presence.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
    },
    {
      type: "hosting",
      label: "Hosting",
      icon: <Server className="h-4 w-4" />,
      description: "Learn about web hosting options, server management, and domain services.",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
    {
      type: "it",
      label: "IT Services",
      icon: <Laptop className="h-4 w-4" />,
      description: "Discover IT infrastructure, support services, and technology management solutions.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
    },
    {
      type: "security",
      label: "Security",
      icon: <Shield className="h-4 w-4" />,
      description: "Get insights on security best practices, threat prevention, and data protection.",
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      type: "seo",
      label: "SEO",
      icon: <Search className="h-4 w-4" />,
      description: "Learn about search engine optimization strategies to improve your online visibility.",
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      type: "vulnerability",
      label: "Vulnerability",
      icon: <AlertTriangle className="h-4 w-4" />,
      description: "Understand security vulnerabilities, risk assessment, and remediation strategies.",
      color: "text-rose-500",
      bgColor: "bg-rose-100",
    },
  ]

  // Define suggestion prompts for each service
  const suggestions = {
    general: [
      "What IT services would benefit my small business?",
      "How can I improve my company's IT infrastructure?",
      "What are the latest IT trends for businesses?",
    ],
    "web-development": [
      "What framework is best for my e-commerce website?",
      "How can I optimize my website's performance?",
      "What's the difference between frontend and backend development?",
    ],
    "web-design": [
      "What are the current web design trends?",
      "How can I make my website more user-friendly?",
      "What color schemes work best for professional websites?",
    ],
    "mobile-development": [
      "Should I develop a native app or a cross-platform app?",
      "What's the process for publishing an app to the App Store?",
      "How can I ensure my app is accessible to all users?",
    ],
    "cloud-services": [
      "What cloud solution is best for a small business?",
      "How can I migrate my on-premise servers to the cloud?",
      "What are the security considerations for cloud storage?",
    ],
    "advertisement": [
      "What advertisement Technique is best for a small business?",
      "How can I streamline my advertisement processes?",
      "",
    ],
    hosting: [
      "What type of hosting is best for my website?",
      "How can I improve my website's loading speed?",
      "What's the difference between shared and dedicated hosting?",
    ],
    it: [
      "How can I set up a reliable IT infrastructure for my business?",
      "What IT support services do I need for my team?",
      "How can I reduce IT costs while maintaining quality?",
    ],
    security: [
      "How can I protect my business from cyber threats?",
      "What security measures should I implement for remote workers?",
      "How often should I update my security protocols?",
    ],
    seo: [
      "How can I improve my website's search engine ranking?",
      "What are the most important SEO factors in 2023?",
      "How long does it take to see results from SEO efforts?",
    ],
    vulnerability: [
      "How can I identify vulnerabilities in my IT systems?",
      "What is the process for conducting a vulnerability assessment?",
      "How can I prioritize vulnerability remediation efforts?",
    ],
  }

  // Scroll to the bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Auto-resize textarea based on input content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [input])

  // Handle service selection change
  const handleServiceChange = (service: ServiceType) => {
    setSelectedService(service)
    const serviceInfo = services.find((s) => s.type === service)

    if (serviceInfo) {
      setMessages([
        ...messages,
        {
          id: `service-change-${Date.now()}`,
          content: `You're now chatting about ${serviceInfo.label}. ${serviceInfo.description}`,
          role: "assistant",
          timestamp: new Date(),
          service,
        },
      ])
      setShowSuggestions(true)
    }
  }

  // Handle clicking a suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setShowSuggestions(false)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  // Handle form submission to generate AI response
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      role: "user",
      timestamp: new Date(),
      service: selectedService,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowSuggestions(false)

    try {
      // Create a context-aware prompt based on the selected service
      const serviceInfo = services.find((s) => s.type === selectedService)
      const serviceContext = serviceInfo
        ? `You are an IT consultant specializing in ${serviceInfo.label}. `
        : "You are a general IT consultant. "

      // Include previous messages for context (limit to last 6 messages)
      const recentMessages = messages
        .slice(-6)
        .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
        .join("\n")

      const prompt = `${serviceContext}
Provide helpful, accurate, and concise information about IT services, focusing on practical advice and solutions.
Format your response using markdown for better readability. Use bullet points, headings, and bold text where appropriate.
Previous conversation:
${recentMessages}

User: ${input}`

      // Initialize Google Generative AI
      const genAI = new GoogleGenerativeAI("AIzaSyCpYQSUiJY91Zbn1_MUB43u5AwXoV5cTao")
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }) // Using gemini-1.5-flash for broader access
      const result = await model.generateContent(prompt)
      const text = await result.response.text()

      const aiMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: text,
        role: "assistant",
        timestamp: new Date(),
        service: selectedService,
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error generating response:", error)
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: "I'm sorry, I encountered an error while processing your request. Please try again later.",
        role: "assistant",
        timestamp: new Date(),
        service: selectedService,
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Format timestamp for display
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date)
  }

  // Handle message feedback
  const handleFeedback = (messageId: string, feedback: "positive" | "negative") => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id === messageId) {
          return { ...msg, feedback }
        }
        return msg
      }),
    )
  }

  // Handle copy message to clipboard
  const handleCopyMessage = (content: string, messageId: string) => {
    navigator.clipboard.writeText(content)
    setCopiedMessageId(messageId)
    setTimeout(() => setCopiedMessageId(null), 2000)
  }

  // Extract links from message content
  const extractLinks = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return content.match(urlRegex) || []
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" dir={direction}>
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-navy-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI IT Consultation Assistant</h1>
            <p className="text-lg text-red-100 max-w-3xl mx-auto">
              Get expert advice on web development, design, and other IT services through our AI-powered consultation
              tool.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold mb-4">Services</h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.type}
                      onClick={() => handleServiceChange(service.type)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left",
                        selectedService === service.type
                          ? `${service.bgColor} ${service.color} font-medium`
                          : "hover:bg-gray-100",
                      )}
                    >
                      <div
                        className={cn(
                          "p-1.5 rounded-md",
                          selectedService === service.type ? service.bgColor : "bg-gray-100",
                        )}
                      >
                        {service.icon}
                      </div>
                      <span>{service.label}</span>
                      {selectedService === service.type && <ChevronRight className="ml-auto h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-red-700 to-navy-900 text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    {services.find((s) => s.type === selectedService)?.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {services.find((s) => s.type === selectedService)?.label} Consultation
                    </h3>
                    <p className="text-xs text-red-100">Ask questions about your IT needs</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 h-[500px] overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "flex gap-3",
                        message.role === "user" ? "ml-auto flex-row-reverse" : "",
                        message.role === "user" ? "max-w-[85%]" : "max-w-[90%]",
                      )}
                    >
                      <Avatar
                        className={cn(
                          "h-8 w-8 rounded-full flex items-center justify-center text-white shrink-0",
                          message.role === "user" ? "bg-red-600" : "bg-navy-800",
                        )}
                      >
                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </Avatar>
                      <div className="w-full">
                        <div
                          className={cn(
                            "rounded-2xl px-4 py-2.5 shadow-sm",
                            message.role === "user"
                              ? "bg-red-600 text-white rounded-tr-none"
                              : "bg-white rounded-tl-none",
                          )}
                        >
                          {message.role === "assistant" ? (
                            <div className="prose prose-sm max-w-none dark:prose-invert">
                              <ReactMarkdown>{message.content}</ReactMarkdown>
                            </div>
                          ) : (
                            <p className="text-sm">{message.content}</p>
                          )}

                          {/* Links extracted from message */}
                          {message.role === "assistant" && extractLinks(message.content).length > 0 && (
                            <div className="mt-2 pt-2 border-t border-gray-100">
                              <p className="text-xs font-medium text-gray-500 mb-1">Helpful Links:</p>
                              <div className="flex flex-wrap gap-2">
                                {extractLinks(message.content).map((link, index) => (
                                  <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-blue-600 px-2 py-1 rounded-md transition-colors"
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                    Resource {index + 1}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500">{formatTime(message.timestamp)}</p>

                          {message.role === "assistant" && (
                            <div className="flex items-center gap-1">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => handleCopyMessage(message.content, message.id)}
                                      className="p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors"
                                    >
                                      {copiedMessageId === message.id ? (
                                        <Check className="h-3.5 w-3.5" />
                                      ) : (
                                        <Copy className="h-3.5 w-3.5" />
                                      )}
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{copiedMessageId === message.id ? "Copied!" : "Copy message"}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => handleFeedback(message.id, "positive")}
                                      className={cn(
                                        "p-1 rounded-full transition-colors",
                                        message.feedback === "positive"
                                          ? "text-green-500"
                                          : "text-gray-400 hover:text-gray-600",
                                      )}
                                    >
                                      <ThumbsUp className="h-3.5 w-3.5" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Helpful</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => handleFeedback(message.id, "negative")}
                                      className={cn(
                                        "p-1 rounded-full transition-colors",
                                        message.feedback === "negative"
                                          ? "text-red-500"
                                          : "text-gray-400 hover:text-gray-600",
                                      )}
                                    >
                                      <ThumbsDown className="h-3.5 w-3.5" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Not helpful</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 max-w-[85%]"
                    >
                      <Avatar className="h-8 w-8 rounded-full bg-navy-800 flex items-center justify-center text-white">
                        <Bot className="h-4 w-4" />
                      </Avatar>
                      <div>
                        <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                            <p className="text-sm text-gray-500">Thinking...</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Suggestions */}
              {showSuggestions && suggestions[selectedService as keyof typeof suggestions] && (
                <div className="px-4 py-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions[selectedService as keyof typeof suggestions].map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-100">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <Textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your question here..."
                      className="min-h-[50px] max-h-[150px] pr-12 resize-none"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSubmit(e)
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="absolute right-2 bottom-2 h-8 w-8 bg-red-600 hover:bg-red-700"
                      disabled={isLoading || !input.trim()}
                    >
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </div>
                </form>
                <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for a new line</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Use Our AI Consultation?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get instant answers to your IT questions and expert guidance for your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Availability",
                description:
                  "Get answers to your IT questions anytime, day or night, without waiting for business hours.",
                icon: <MessageSquare className="h-10 w-10 text-red-600" />,
              },
              {
                title: "Expert Knowledge",
                description:
                  "Access a wealth of IT expertise across multiple domains, from web development to cybersecurity.",
                icon: <Code className="h-10 w-10 text-navy-800" />,
              },
              {
                title: "Tailored Advice",
                description:
                  "Receive personalized recommendations based on your specific business needs and challenges.",
                icon: <PenTool className="h-10 w-10 text-red-600" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="bg-gray-50 p-3 rounded-full w-fit mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 to-navy-900 text-white py-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Need More Personalized Help?</h2>
            <p className="text-lg text-red-100 max-w-3xl mx-auto mb-8">
              While our AI can answer many questions, sometimes you need a human touch. Contact our team of IT experts
              for personalized consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                Contact Our Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-8">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company. All rights reserved. Our AI consultation tool is designed to
            provide general guidance and information.
          </p>
        </div>
      </footer>
    </div>
  )
}
