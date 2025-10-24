"use client"
import { useEffect, useState } from "react"
import { Sparkline } from "./sparkline"

interface StockData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  sparklineData: number[]
}

export function PortfolioSection() {
  const [stocks, setStocks] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)

  const stockSymbols = [
    { symbol: "TSLA", name: "Tesla Inc." },
    { symbol: "ALB", name: "Albemarle Corp" },
    { symbol: "LAC", name: "Lithium Americas" },
    { symbol: "RIO", name: "Rio Tinto" },
    { symbol: "ENPH", name: "Enphase Energy" },
  ]

  const fetchPrices = async () => {
    try {
      const promises = stockSymbols.map(async ({ symbol, name }) => {
        const res = await fetch(`/api/price?symbol=${symbol}`)
        const data = await res.json()

        // Generate mock sparkline data based on current price
        const basePrice = data.price || 100
        const sparklineData = Array.from({ length: 7 }, (_, i) => {
          const variance = (Math.random() - 0.5) * basePrice * 0.1
          return basePrice + variance
        })
        sparklineData[6] = basePrice // Last point is current price

        // Calculate change (mock for now)
        const change = (Math.random() - 0.5) * basePrice * 0.05
        const changePercent = (change / basePrice) * 100

        return {
          symbol,
          name,
          price: data.price || basePrice,
          change,
          changePercent,
          sparklineData,
        }
      })

      const results = await Promise.all(promises)
      setStocks(results)
      setLoading(false)
    } catch (error) {
      console.error("[v0] Error fetching prices:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 60000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section id="portfolio" className="py-24 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#00FF8C] border-r-transparent" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">Live Portfolio</h2>
          <p className="text-lg text-gray-400">Real-time tracking of key energy transition investments</p>
        </div>

        <div className="hidden md:block overflow-hidden rounded-lg border border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Company</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Price</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Change (%)</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Trend</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => (
                <tr
                  key={stock.symbol}
                  className={`border-b border-gray-800 hover:bg-gray-900/30 transition-all duration-200 group ${
                    index === stocks.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-5 px-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono font-bold text-[#00FF8C]">{stock.symbol}</span>
                      <span className="text-sm text-gray-400">{stock.name}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="font-mono text-white text-lg">${stock.price.toFixed(2)}</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex flex-col items-end gap-1">
                      <span className={`font-mono text-lg ${stock.change >= 0 ? "text-[#00FF8C]" : "text-red-500"}`}>
                        {stock.change >= 0 ? "+" : ""}${Math.abs(stock.change).toFixed(2)}
                      </span>
                      <span
                        className={`text-sm font-mono ${stock.changePercent >= 0 ? "text-[#00FF8C]" : "text-red-500"}`}
                      >
                        {stock.changePercent >= 0 ? "+" : ""}
                        {stock.changePercent.toFixed(2)}%
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex justify-end transition-transform duration-200 group-hover:scale-110">
                      <Sparkline data={stock.sparklineData} positive={stock.change >= 0} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-mono font-bold text-[#00FF8C] text-lg mb-1">{stock.symbol}</div>
                  <div className="text-sm text-gray-400">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-white text-xl mb-1">${stock.price.toFixed(2)}</div>
                  <div className={`text-sm font-mono ${stock.changePercent >= 0 ? "text-[#00FF8C]" : "text-red-500"}`}>
                    {stock.changePercent >= 0 ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <div className={`font-mono ${stock.change >= 0 ? "text-[#00FF8C]" : "text-red-500"}`}>
                  {stock.change >= 0 ? "+" : ""}${Math.abs(stock.change).toFixed(2)}
                </div>
                <Sparkline data={stock.sparklineData} positive={stock.change >= 0} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
