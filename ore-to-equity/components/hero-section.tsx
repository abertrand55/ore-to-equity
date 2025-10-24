"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
    // Add subscription logic here
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0B0F0D]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF8C]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-9xl font-bold text-balance leading-tight">
            <span className="text-white">Ore</span>
            <span className="text-[#00FF8C]">To</span>
            <span className="text-white">Equity</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 text-balance max-w-2xl mx-auto">
            Your Energy Transition Investment Scout
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => scrollToSection("insights")}
              className="bg-[#00FF8C] text-[#0B0F0D] hover:bg-[#00FF8C]/90 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Explore Insights
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="outline"
              className="border-[#00FF8C] text-[#00FF8C] hover:bg-[#00FF8C]/10 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Live Portfolio
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#1a1f1d] border-gray-800 text-white placeholder:text-gray-500"
                required
              />
              <Button type="submit" className="bg-[#FFD95C] text-[#0B0F0D] hover:bg-[#FFD95C]/90 font-semibold">
                Subscribe →
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">Get Market Insights to Your Inbox</p>
          </form>
        </div>
      </div>
    </section>
  )
}
