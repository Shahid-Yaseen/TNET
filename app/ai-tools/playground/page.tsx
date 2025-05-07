"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  MessageSquare,
  ImageIcon,
  Sparkles,
  RefreshCw,
  Copy,
  Download,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function AIPlaygroundPage() {
  const [prompt, setPrompt] = useState("")
  const [output, setOutput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [model, setModel] = useState("gpt-4o")
  const [temperature, setTemperature] = useState([0.7])
  const [maxTokens, setMaxTokens] = useState([1024])
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [streamOutput, setStreamOutput] = useState(true)
  const [generatedImage, setGeneratedImage] = useState("")

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setOutput("")
    setGeneratedImage("")

    if (activeTab === "chat" || activeTab === "code") {
      // Simulate streaming text generation
      const text =
        activeTab === "chat"
          ? "This is a simulated response from an AI assistant. In a real implementation, this would be connected to an AI model API like OpenAI's GPT-4o or Claude 3.\n\nThe response would be tailored to your specific prompt and would provide helpful, accurate information based on the model's training data.\n\nYou can adjust parameters like temperature and max tokens to control the style and length of the response."
          : "```javascript\n// Here's a simple example based on your prompt\nconst generateResponse = async (prompt) => {\n  try {\n    const response = await fetch('https://api.openai.com/v1/chat/completions', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`\n      },\n      body: JSON.stringify({\n        model: 'gpt-4o',\n        messages: [{ role: 'user', content: prompt }],\n        temperature: 0.7,\n        max_tokens: 1024\n      })\n    });\n    \n    const data = await response.json();\n    return data.choices[0].message.content;\n  } catch (error) {\n    console.error('Error generating response:', error);\n    return 'An error occurred while generating the response.';\n  }\n};\n\n// Usage\ngenerateResponse('Your prompt here')\n  .then(result => console.log(result))\n  .catch(error => console.error(error));\n```"

      if (streamOutput) {
        let currentText = ""
        for (let i = 0; i < text.length; i++) {
          currentText += text[i]
          setOutput(currentText)
          await new Promise((resolve) => setTimeout(resolve, 10))
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setOutput(text)
      }
    } else if (activeTab === "image") {
      // Simulate image generation with a placeholder
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setGeneratedImage(`/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt)}`)
    }

    setIsGenerating(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    if (activeTab === "image" && generatedImage) {
      const link = document.createElement("a")
      link.href = generatedImage
      link.download = `generated-image-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      const blob = new Blob([output], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = activeTab === "code" ? "generated-code.js" : "generated-text.txt"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800">
                AI Playground
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Experiment with AI Models
              </h1>
              <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Try different AI models, adjust parameters, and see the results in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="chat" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="chat" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Image
                  </TabsTrigger>
                </TabsList>

                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                          {activeTab === "chat"
                            ? "Your Message"
                            : activeTab === "code"
                              ? "Code Description"
                              : "Image Description"}
                        </label>
                        <Textarea
                          id="prompt"
                          placeholder={
                            activeTab === "chat"
                              ? "Ask a question or start a conversation..."
                              : activeTab === "code"
                                ? "Describe the code you want to generate..."
                                : "Describe the image you want to generate..."
                          }
                          className="min-h-[120px]"
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
                            Generate {activeTab === "chat" ? "Response" : activeTab === "code" ? "Code" : "Image"}
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {activeTab === "chat"
                        ? "AI Response"
                        : activeTab === "code"
                          ? "Generated Code"
                          : "Generated Image"}
                    </label>
                    {(activeTab === "chat" || activeTab === "code") && output && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs">
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
                        <Button variant="outline" size="sm" onClick={handleDownload} className="text-xs">
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                      </div>
                    )}
                    {activeTab === "image" && generatedImage && (
                      <Button variant="outline" size="sm" onClick={handleDownload} className="text-xs">
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    )}
                  </div>

                  {activeTab === "image" ? (
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        {isGenerating ? (
                          <div className="aspect-square bg-slate-200 animate-pulse flex items-center justify-center">
                            <ImageIcon className="h-12 w-12 text-slate-400" />
                          </div>
                        ) : generatedImage ? (
                          <img
                            src={generatedImage || "/placeholder.svg"}
                            alt="Generated image"
                            className="w-full aspect-square object-cover"
                          />
                        ) : (
                          <div className="aspect-square bg-white border rounded-md flex items-center justify-center">
                            <div className="text-center p-6">
                              <ImageIcon className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                              <p className="text-sm text-slate-500">Generated image will appear here...</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="p-0">
                        <pre className="bg-white border rounded-md p-4 min-h-[300px] max-h-[500px] overflow-auto whitespace-pre-wrap text-sm">
                          {output || `Generated ${activeTab === "chat" ? "response" : "code"} will appear here...`}
                        </pre>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </Tabs>
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
                          {activeTab === "image" ? (
                            <>
                              <SelectItem value="dalle-3">DALL-E 3</SelectItem>
                              <SelectItem value="stable-diffusion-3">Stable Diffusion 3</SelectItem>
                              <SelectItem value="midjourney">Midjourney</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                              <SelectItem value="gpt-4">GPT-4</SelectItem>
                              <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    {activeTab !== "image" && (
                      <>
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

                        <div className="flex items-center space-x-2">
                          <Switch id="stream-output" checked={streamOutput} onCheckedChange={setStreamOutput} />
                          <Label htmlFor="stream-output">Stream Output</Label>
                        </div>
                      </>
                    )}

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Model Information</h4>
                      <div className="bg-slate-50 p-3 rounded-md text-xs space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Model</span>
                          <Badge variant="outline" className="font-mono">
                            {model}
                          </Badge>
                        </div>
                        {activeTab !== "image" ? (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Context Window</span>
                            <Badge variant="outline" className="font-mono">
                              {model.includes("gpt-4o") ? "128K tokens" : "8K tokens"}
                            </Badge>
                          </div>
                        ) : (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Max Resolution</span>
                            <Badge variant="outline" className="font-mono">
                              {model === "dalle-3" ? "1792×1024" : "1024×1024"}
                            </Badge>
                          </div>
                        )}
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

              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Playground Tips</CardTitle>
                  <CardDescription>Get the most out of the AI playground</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium">Experiment with Parameters</h4>
                    <p className="text-gray-500">
                      Try different temperature settings to see how they affect creativity and randomness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Compare Models</h4>
                    <p className="text-gray-500">
                      Try the same prompt with different models to compare their capabilities and responses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Refine Your Prompts</h4>
                    <p className="text-gray-500">
                      Iteratively improve your prompts based on the results to get better outputs.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/ai-tools/guides" target="_blank" rel="noreferrer">
                      View Prompt Engineering Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Ready to Integrate AI into Your Projects?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg">
                Explore our API documentation and developer resources to start building with our AI tools.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="/api-docs">
                  View API Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/ai-tools">Explore More Tools</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
