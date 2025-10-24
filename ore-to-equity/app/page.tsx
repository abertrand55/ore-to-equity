import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { InsightsSection } from "@/components/insights-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <InsightsSection />
      <AboutSection />
      <NewsletterCTA />
      <Footer />
    </main>
  )
}
