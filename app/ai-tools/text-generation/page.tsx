"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Copy, Download, Sparkles, RefreshCw, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function TextGenerationPage() {
  const [prompt, setPrompt] = useState("")
  const [output, setOutput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [model, setModel] = useState("gpt-4o")
  const [temperature, setTemperature] = useState([0.7])
  const [maxTokens, setMaxTokens] = useState([1024])
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("generate")

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setOutput("")

    // Simulate streaming text generation
    const text =
      "AI-generated text based on your prompt would appear here. This is a simulation of what the actual output would look like when integrated with a real AI model API.\n\nThe text would be generated based on the parameters you've set, such as the model (GPT-4o), temperature (0.7), and max tokens (1024).\n\nYou can adjust these parameters to control the creativity and length of the generated text."

    let currentText = ""
    for (let i = 0; i < text.length; i++) {
      currentText += text[i]
      setOutput(currentText)
      await new Promise((resolve) => setTimeout(resolve, 10))
    }

    setIsGenerating(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "generated-text.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const templates = [
    {
      title: "Blog Post",
      prompt:
        "Write a comprehensive blog post about [topic] that includes an introduction, 3 main points with supporting details, and a conclusion.",
    },
    {
      title: "Marketing Copy",
      prompt:
        "Create compelling marketing copy for [product/service] that highlights its unique features, benefits, and includes a strong call to action.",
    },
    {
      title: "Email",
      prompt:
        "Draft a professional email to [recipient] regarding [subject] that is concise, clear, and includes all necessary information.",
    },
    {
      title: "Social Media",
      prompt:
        "Generate 5 engaging social media posts for [platform] about [topic/product] that will drive engagement and include relevant hashtags.",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-900 to-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800">
                AI Text Generation
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Generate High-Quality Text with AI
              </h1>
              <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create blog posts, marketing copy, emails, and more with our advanced AI text generation tool.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="generate" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="generate">Generate Text</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Prompt
                          </label>
                          <Textarea
                            id="prompt"
                            placeholder="Enter your prompt here..."
                            className="min-h-[200px]"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                          />
                        </div>
                        <Button
                          onClick={handleGenerate}
                          disabled={isGenerating || !prompt.trim()}
                          className="w-full bg-purple-600 hover:bg-purple-700"
                        >
                          {isGenerating ? (
                            <>
                              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" />
                              Generate Text
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-gray-700">Generated Output</label>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopy}
                            disabled={!output}
                            className="text-xs"
                          >
                            {copied ? (
                              <>
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="mr-1 h-3 w-3" />
                                Copy
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleDownload}
                            disabled={!output}
                            className="text-xs"
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="bg-white border rounded-md p-4 min-h-[300px] whitespace-pre-wrap">
                        {output || "Generated text will appear here..."}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Model Settings</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Model</label>
                          <Select value={model} onValueChange={setModel}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                              <SelectItem value="gpt-4">GPT-4</SelectItem>
                              <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Temperature</label>
                            <span className="text-sm text-gray-500">{temperature[0].toFixed(1)}</span>
                          </div>
                          <Slider value={temperature} min={0} max={1} step={0.1} onValueChange={setTemperature} />
                          <p className="text-xs text-gray-500">
                            Controls randomness: Lower values are more deterministic, higher values are more creative.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Max Tokens</label>
                            <span className="text-sm text-gray-500">{maxTokens[0]}</span>
                          </div>
                          <Slider value={maxTokens} min={256} max={4096} step={128} onValueChange={setMaxTokens} />
                          <p className="text-xs text-gray-500">Controls the maximum length of the generated text.</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Model Information</h4>
                          <div className="bg-slate-50 p-3 rounded-md text-xs space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Model</span>
                              <Badge variant="outline" className="font-mono">
                                {model}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Context Window</span>
                              <Badge variant="outline" className="font-mono">
                                {model.includes("gpt-4o") ? "128K tokens" : "8K tokens"}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Updated</span>
                              <Badge variant="outline" className="font-mono">
                                April 2024
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="templates" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-2">{template.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{template.prompt}</p>
                      <Button
                        onClick={() => {
                          setPrompt(template.prompt)
                          setActiveTab("generate")
                        }}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                      >
                        Use Template
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Prompt Engineering Tips</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Be Specific</h4>
                      <p className="text-sm text-gray-500">
                        The more specific your prompt, the better the results. Include details about tone, style, and
                        format.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Use Examples</h4>
                      <p className="text-sm text-gray-500">
                        Provide examples of the kind of output you want to guide the AI's response.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Break Down Complex Tasks</h4>
                      <p className="text-sm text-gray-500">
                        For complex content, break it down into smaller, more manageable prompts.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Iterate</h4>
                      <p className="text-sm text-gray-500">
                        Don't expect perfect results on the first try. Refine your prompt based on the output.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Explore More AI Tools</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg">
                Discover our full suite of AI-powered tools designed to enhance your productivity and creativity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="/ai-tools/image-generation">
                  Try Image Generation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/ai-tools">View All Tools</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
