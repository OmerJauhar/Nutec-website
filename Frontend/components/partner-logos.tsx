"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function PartnerLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = containerRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 0.5
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Updated logos array with all the new logos - removed placeholder
  const logos = [
    {
      id: 1,
      src: "/images/california-pizza-logo.png",
      alt: "California Pizza",
      width: 90,
      height: 45,
    },
    {
      id: 2,
      src: "/images/student-association-logo.png",
      alt: "FAST Student Association",
      width: 80,
      height: 80,
    },
    {
      id: 3,
      src: "/images/gdg-fast-pwr-logo.png",
      alt: "Google Developer Groups FAST Peshawar",
      width: 100,
      height: 70,
    },
    {
      id: 4,
      src: "/images/fast-sports-society-logo.png",
      alt: "FAST Peshawar Sports Society",
      width: 80,
      height: 80,
    },
    {
      id: 5,
      src: "/images/fast-nuces-logo.png",
      alt: "FAST NUCES",
      width: 80,
      height: 80,
    },
    // Removed the placeholder logo that was causing the empty box
  ]

  return (
    <section className="relative py-12 overflow-hidden bg-deep-space border-t border-cyan/20">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-400 font-rajdhani">Proudly Supported By</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-deep-space to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-deep-space to-transparent"></div>

          <div ref={containerRef} className="flex overflow-x-hidden">
            <div className="flex space-x-24 py-4">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 w-28 h-28 bg-white rounded-lg flex items-center justify-center shadow-md mx-2 p-2"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex space-x-24 py-4">
              {logos.map((logo) => (
                <div
                  key={`dup-${logo.id}`}
                  className="flex-shrink-0 w-28 h-28 bg-white rounded-lg flex items-center justify-center shadow-md mx-2 p-2"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
