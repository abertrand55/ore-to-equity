import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const insights = [
  {
    title: "Nickel is Back: The Quiet Comeback of a Critical Metal",
    excerpt:
      "After years of price volatility, nickel is emerging as a key player in the battery revolution. Discover why major automakers are securing supply chains.",
    image: "/nickel-mining-industrial-facility.jpg",
    category: "Critical Minerals",
  },
  {
    title: "How Québec Became the Battery Capital of North America",
    excerpt:
      "From lithium to graphite processing, Québec is positioning itself as the epicenter of North American battery production. Here's what investors need to know.",
    image: "/battery-manufacturing-facility.jpg",
    category: "Regional Focus",
  },
  {
    title: "Copper: The New Oil of Electrification",
    excerpt:
      "As the world electrifies, copper demand is set to soar. We analyze the supply deficit and the companies best positioned to capitalize.",
    image: "/copper-mining-operation.jpg",
    category: "Market Analysis",
  },
  {
    title: "The Graphite Shortage Nobody is Talking About",
    excerpt:
      "While lithium grabs headlines, graphite remains the unsung hero of battery technology. Explore the supply chain challenges ahead.",
    image: "/graphite-processing-plant.jpg",
    category: "Supply Chain",
  },
  {
    title: "Rare Earth Elements: China's Grip and the Western Response",
    excerpt:
      "The geopolitics of rare earth elements are reshaping global supply chains. Learn about the emerging players challenging China's dominance.",
    image: "/rare-earth-mining.jpg",
    category: "Geopolitics",
  },
  {
    title: "Energy Storage: Beyond Lithium-Ion Batteries",
    excerpt:
      "From solid-state to sodium-ion, next-generation battery technologies are emerging. We break down the investment opportunities.",
    image: "/battery-technology-lab.jpg",
    category: "Innovation",
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Energy & Mining Insights</h2>
          <p className="text-muted-foreground text-center mb-12 text-balance">
            Deep dives into the trends shaping the energy transition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground text-balance leading-relaxed">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{insight.excerpt}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
