"use client"

import { useEffect, useRef } from "react"

interface SparklineProps {
  data: number[]
  positive: boolean
}

export function Sparkline({ data, positive }: SparklineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = 2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate min and max
    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = positive ? "#00FF8C" : "#ef4444"
    ctx.lineWidth = 2

    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * (width - padding * 2) + padding
      const y = height - ((value - min) / range) * (height - padding * 2) - padding

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }, [data, positive])

  return <canvas ref={canvasRef} width={100} height={40} className="inline-block" />
}
