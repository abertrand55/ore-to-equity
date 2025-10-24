"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">O→E</div>
            <span className="text-xl font-semibold text-foreground">OreToEquity</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#insights" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Latest Insights
            </a>
            <a href="#research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Our Research
            </a>
            <a href="#portfolios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolios
            </a>
            <a href="#energy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Energy Transition
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            Search
          </Button>
        </div>
      </div>
    </header>
  )
}
