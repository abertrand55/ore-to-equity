"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterCTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscribe:", email)
    // Add subscription logic here
  }

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 text-3xl">
              ✉️
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get Weekly Market Intelligence</h2>
            <p className="text-muted-foreground mb-8 text-balance">No Cost, Just Knowledge.</p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
