"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, RefreshCw, ImageIcon, Wand2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ImageGenerationPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [model, setModel] = useState("dalle-3")
  const [size, setSize] = useState("1024x1024")
  const [style, setStyle] = useState("vivid")
  const [quality, setQuality] = useState("standard")
  const [numImages, setNumImages] = useState([1])

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setGeneratedImages([])

    // Simulate image generation with placeholder images
    const placeholders = []
    for (let i = 0; i < numImages[0]; i++) {
      // Use the placeholder.svg service with the prompt as the query
      placeholders.push(`/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt)}`)
    }

    // Simulate a delay for the generation process
    setTimeout(() => {
      setGeneratedImages(placeholders)
      setIsGenerating(false)
    }, 2000)
  }

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `generated-image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const examplePrompts = [
    "A futuristic cityscape with flying cars and neon lights at sunset",
    "A photorealistic portrait of a cyberpunk character with glowing implants",
    "An oil painting of a serene mountain landscape with a lake reflection",
    "A surreal digital art piece showing a floating island with waterfalls",
    "A detailed illustration of a steampunk mechanical dragon",
    "A watercolor painting of a coastal village with sailboats at dawn",
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                AI Image Generation
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Transform Text into Stunning Images
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create beautiful, unique images from text descriptions with our advanced AI image generation tool.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="generate">Generate Images</TabsTrigger>
              <TabsTrigger value="examples">Example Prompts</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                            Image Description
                          </label>
                          <Textarea
                            id="prompt"
                            placeholder="Describe the image you want to generate..."
                            className="min-h-[120px]"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Be detailed and specific about what you want to see in the image.
                          </p>
                        </div>
                        <Button
                          onClick={handleGenerate}
                          disabled={isGenerating || !prompt.trim()}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          {isGenerating ? (
                            <>
                              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <Wand2 className="mr-2 h-4 w-4" />
                              Generate Images
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Generated Images</h3>
                    {isGenerating ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Array.from({ length: numImages[0] }).map((_, index) => (
                          <Card key={index} className="overflow-hidden">
                            <CardContent className="p-0">
                              <div className="aspect-square bg-slate-200 animate-pulse flex items-center justify-center">
                                <ImageIcon className="h-12 w-12 text-slate-400" />
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : generatedImages.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {generatedImages.map((image, index) => (
                          <Card key={index} className="overflow-hidden group">
                            <CardContent className="p-0 relative">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`Generated image ${index + 1}`}
                                className="w-full aspect-square object-cover"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button variant="secondary" size="sm" onClick={() => handleDownload(image)}>
                                  <Download className="mr-1 h-4 w-4" />
                                  Download
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <Card>
                        <CardContent className="p-12 flex flex-col items-center justify-center text-center">
                          <ImageIcon className="h-12 w-12 text-slate-300 mb-4" />
                          <h4 className="text-lg font-medium text-slate-900 mb-2">No Images Generated Yet</h4>
                          <p className="text-sm text-slate-500 max-w-md">
                            Enter a detailed description above and click "Generate Images" to create AI-generated
                            images.
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>

                <div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Generation Settings</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Model</label>
                          <Select value={model} onValueChange={setModel}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dalle-3">DALL-E 3</SelectItem>
                              <SelectItem value="dalle-2">DALL-E 2</SelectItem>
                              <SelectItem value="stable-diffusion-3">Stable Diffusion 3</SelectItem>
                              <SelectItem value="midjourney">Midjourney</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Image Size</label>
                          <Select value={size} onValueChange={setSize}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select image size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1024x1024">1024×1024 (Square)</SelectItem>
                              <SelectItem value="1792x1024">1792×1024 (Landscape)</SelectItem>
                              <SelectItem value="1024x1792">1024×1792 (Portrait)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Style</label>
                          <RadioGroup value={style} onValueChange={setStyle} className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="vivid" id="vivid" />
                              <Label htmlFor="vivid">Vivid</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="natural" id="natural" />
                              <Label htmlFor="natural">Natural</Label>
                            </div>
                          </RadioGroup>
                          <p className="text-xs text-gray-500">
                            Vivid creates hyper-real and dramatic images. Natural creates more realistic images.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Quality</label>
                          <RadioGroup value={quality} onValueChange={setQuality} className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="standard" id="standard" />
                              <Label htmlFor="standard">Standard</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="hd" id="hd" />
                              <Label htmlFor="hd">HD</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Number of Images</label>
                            <span className="text-sm text-gray-500">{numImages[0]}</span>
                          </div>
                          <Slider value={numImages} min={1} max={4} step={1} onValueChange={setNumImages} />
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
                              <span className="text-gray-500">Max Resolution</span>
                              <Badge variant="outline" className="font-mono">
                                {model === "dalle-3" ? "1792×1024" : "1024×1024"}
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

            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Example Prompts</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Click on any example to use it as your prompt. These examples are designed to showcase the
                    capabilities of our image generation models.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {examplePrompts.map((examplePrompt, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => {
                          setPrompt(examplePrompt)
                          document
                            .querySelector('[value="generate"]')
                            ?.dispatchEvent(new Event("click", { bubbles: true }))
                        }}
                      >
                        <CardContent className="p-4">
                          <p className="text-sm">{examplePrompt}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Prompt Engineering Tips</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Be Detailed and Specific</h4>
                      <p className="text-sm text-gray-500">
                        Include details about subject, setting, lighting, style, mood, colors, and perspective.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Specify Art Style</h4>
                      <p className="text-sm text-gray-500">
                        Mention specific art styles like "oil painting," "watercolor," "digital art," or
                        "photorealistic."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Reference Artists or Movements</h4>
                      <p className="text-sm text-gray-500">
                        Include references like "in the style of Van Gogh" or "inspired by cyberpunk aesthetics."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Describe Lighting and Atmosphere</h4>
                      <p className="text-sm text-gray-500">
                        Mention lighting conditions like "golden hour," "dramatic shadows," or "soft diffused light."
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
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="/ai-tools/text-generation">
                  Try Text Generation
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
