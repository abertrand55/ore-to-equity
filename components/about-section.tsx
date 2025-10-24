const features = [
  {
    title: "Actionable Insights",
    description: "Clear, data-backed commentary on critical minerals & industrial innovation",
    icon: "📈",
  },
  {
    title: "Data-Driven Analysis",
    description: "We filter through the noise to identify the most promising opportunities",
    icon: "💾",
  },
  {
    title: "Global Network",
    description: "A community of investors with a shared vision for the energy transition",
    icon: "🌐",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Turning Raw Potential into Equity</h2>
          <p className="text-lg text-muted-foreground mb-16 leading-relaxed text-balance">
            OreToEquity filters through the noise to identify the most promising public companies in the global energy
            transition — from mining to infrastructure. We provide investors with the intelligence they need to navigate
            the complex landscape of critical minerals and industrial innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
