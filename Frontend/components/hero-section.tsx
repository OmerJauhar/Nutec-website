"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import CountdownTimer from "@/components/countdown-timer"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Auto-play video when it becomes visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Set volume to 0.3 (30%)
      videoRef.current.volume = 0.3

      // Play the video with a slight delay to ensure it's loaded
      const timer = setTimeout(() => {
        videoRef.current?.play().catch((err) => {
          console.log("Video autoplay prevented:", err)
        })
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <ParticleBackground />

      <div className="container relative z-10 px-4 py-12 md:py-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - NUTEC Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold holographic glitch" data-text="NUTEC 2025">
                NUTEC 2025
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 mx-auto"
            >
              <CountdownTimer targetDate="2025-05-02T00:00:00" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <p className="text-lg md:text-xl font-rajdhani text-cyan neon-text-cyan">MAY 2-4, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="animate-float flex justify-center"
            >
              <Button
                className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-orbitron text-base px-6 py-5 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                size="md"
              >
                BUY TICKETS
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="hidden lg:block">
            <div className="h-full w-full flex flex-col gap-3 items-center justify-center">
              {/* Content wrapper with 60% size (40% reduction) */}
              <div className="w-[72%]">
                {/* Top Row - Landscape Banner */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full aspect-video mb-3 rounded-lg overflow-hidden"
                >
                  {imageError ? (
                    <div className="relative w-full h-full bg-deep-space flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="text-cyan font-rajdhani text-lg">NUTEC Campus Display</p>
                        <p className="text-white/70 text-sm">Colorful NUTEC letters with decorated car</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%202.59.50%20PM-yThOfUUNsOJ2e43vKpHU7Wxp5ZM8nr.jpeg"
                        alt="NUTEC Campus Display"
                        className="w-full h-full object-cover rounded-lg"
                        onError={() => setImageError(true)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-30"></div>
                      <div className="absolute bottom-2 left-2 z-10">
                        <span className="bg-deep-space/70 text-cyan text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                          FAST Campus
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Middle Row - Two Images Side by Side */}
                <div className="flex gap-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-1/2 aspect-[4/7] rounded-lg overflow-hidden"
                  >
                    <div className="relative w-full h-full">
                      <video className="w-full h-full object-cover rounded-lg" loop muted playsInline controls autoPlay>
                        <source
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nutec-Day-2-P734Y6uhs0XGuliqMz8cfAVtbYERRf.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute bottom-2 left-2 z-20">
                        <span className="bg-deep-space/70 text-cyan text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                          Nutec Promo
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-1/2 aspect-[4/7] rounded-lg overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-60 z-10 pointer-events-none"></div>
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-lg"
                      loop
                      muted
                      playsInline
                      controls
                    >
                      <source src="/videos/nutec-promo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-2 right-2 z-20">
                      <span className="bg-deep-space/70 text-cyan text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                        NUTEC Promo
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image Grid (Simplified) */}
          <div className="lg:hidden flex justify-center">
            <div className="flex flex-col gap-2 w-[72%]">
              {" "}
              {/* Added width 60% (40% reduction) */}
              {/* Top landscape image for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video rounded-lg overflow-hidden"
              >
                {imageError ? (
                  <div className="relative w-full h-full bg-deep-space flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-cyan font-rajdhani text-sm">NUTEC Campus Display</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%202.59.50%20PM-yThOfUUNsOJ2e43vKpHU7Wxp5ZM8nr.jpeg"
                      alt="NUTEC Campus Display"
                      className="w-full h-full object-cover rounded-lg"
                      onError={() => setImageError(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-30"></div>
                  </div>
                )}
              </motion.div>
              {/* Middle row - two images */}
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="aspect-[4/7] rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    <video className="w-full h-full object-cover rounded-lg" loop muted playsInline controls>
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nutec-Day-2-P734Y6uhs0XGuliqMz8cfAVtbYERRf.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute bottom-1 left-1 z-20">
                      <span className="bg-deep-space/70 text-cyan text-[10px] px-1 py-0.5 rounded-md backdrop-blur-sm">
                        Nutec Promo
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="aspect-[4/7] rounded-lg overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-60 z-10 pointer-events-none"></div>
                  <video className="w-full h-full object-cover rounded-lg" loop muted playsInline controls>
                    <source src="/videos/nutec-promo.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute bottom-1 right-1 z-20">
                    <span className="bg-deep-space/70 text-cyan text-[10px] px-1 py-0.5 rounded-md backdrop-blur-sm">
                      NUTEC
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
