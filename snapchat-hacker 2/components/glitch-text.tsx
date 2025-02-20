"use client"

import { useState, useEffect, useCallback } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)

  const glitch = useCallback(() => {
    const chars = "!@#$%^&*()_+"
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)]
    const pos = Math.floor(Math.random() * text.length)
    setDisplayText(text.substring(0, pos) + randomChar() + text.substring(pos + 1))
    setTimeout(() => setDisplayText(text), 100)
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        glitch()
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [glitch])

  return (
    <div className={`relative ${className}`} onMouseOver={glitch}>
      <span className="relative">
        {displayText}
        <span
          className="absolute left-0 top-0 w-full h-full"
          style={{
            textShadow: "2px 2px #0f0, -2px -2px #0ff",
            opacity: 0.5,
            animation: "glitch 0.3s infinite",
          }}
        >
          {displayText}
        </span>
      </span>
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
      `}</style>
    </div>
  )
}

