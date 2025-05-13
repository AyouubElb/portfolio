"use client"

import type React from "react"

import { forwardRef, useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
  aboutRef: React.RefObject<HTMLDivElement>
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ scrollToSection, aboutRef }, ref) => {
  const [matrixColumns, setMatrixColumns] = useState<number[]>([])

  useEffect(() => {
    // Calculate number of columns based on screen width
    const calculateColumns = () => {
      const width = window.innerWidth
      const columnCount = Math.floor(width / 25) // Adjust spacing between columns
      return Array.from({ length: columnCount }, (_, i) => i)
    }

    setMatrixColumns(calculateColumns())

    const handleResize = () => {
      setMatrixColumns(calculateColumns())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Matrix Digital Rain Background */}
      <div className="absolute inset-0 bg-green-950/90">
        <div className="matrix-container">
          {matrixColumns.map((col, i) => (
            <div
              key={`col-${i}`}
              className="matrix-column"
              style={{
                left: `${(i / matrixColumns.length) * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            >
              {Array.from({ length: Math.floor(Math.random() * 25) + 15 }, (_, j) => (
                <span
                  key={`char-${j}`}
                  className="matrix-character"
                  style={{
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 2 + 1}s`,
                    opacity: Math.random() * 0.5 + 0.1,
                  }}
                >
                  {
                    String.fromCharCode(
                      Math.random() > 0.5
                        ? Math.floor(Math.random() * 10) + 48 // 0-9
                        : Math.floor(Math.random() * 26) + (Math.random() > 0.5 ? 65 : 97),
                    ) // A-Z or a-z
                  }
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font backdrop-blur-sm">
          Hello World!
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight text-shadow-lg">
          I'm <span className="text-lime-400">Ayoub EL Bouasri</span>
          <br />
          <span className="typing-effect inline-block mt-4">Full Stack Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-shadow-sm">
          I craft elegant solutions to complex problems with code.
          <br className="hidden md:block" />
          Turning ideas into digital reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="px-8 py-4 rounded-md bg-lime-400 text-green-950 hover:bg-lime-500 transition-colors font-bold text-lg shadow-lg shadow-lime-400/20"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="px-8 py-4 rounded-md border-2 border-lime-400 text-lime-400 hover:bg-lime-400/10 transition-colors font-bold text-lg backdrop-blur-sm"
          >
            Contact Me
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-lime-400 hover:text-lime-500 transition-colors"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"
export default Hero
