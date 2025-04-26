"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Slider } from "@/components/ui/slider"

export default function AboutSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [timelineYear, setTimelineYear] = useState(2023)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Auto-play video when it becomes visible
  useEffect(() => {
    if (inView && videoRef.current) {
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
  }, [inView])

  const timelineData = [
    { year: 2019, title: "First Edition", description: "The inaugural NUTEC Olympiad with 1000+ participants." },
    {
      year: 2020,
      title: "Virtual Edition",
      description: "Adapted to a fully online format with global participation.",
    },
    { year: 2021, title: "Hybrid Format", description: "Combined virtual and in-person events with 3000+ attendees." },
    { year: 2022, title: "Innovation Focus", description: "Expanded to include AI and blockchain competitions." },
    { year: 2023, title: "Record Breaking", description: "Largest tech olympiad in KPK with 5000+ participants." },
    {
      year: 2024,
      title: "Global Expansion",
      description: "First international edition with participants from 8+ countries.",
    },
    { year: 2025, title: "Future Tech", description: "Focusing on emerging technologies and sustainable innovation." },
  ]

  const currentTimelineItem =
    timelineData.find((item) => item.year === timelineYear) || timelineData[timelineData.length - 1]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#1a0033] to-deep-space">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-deep-space to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-space to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[#8A2BE2]/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#8A2BE2]/10 blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-lg bg-[#8A2BE2]/20 px-3 py-1 text-sm text-white mb-4">About NUTEC</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">KPK's Premier Tech Olympiad</h2>
          <p className="max-w-2xl mx-auto text-lg text-white font-exo2">
            Bringing together the brightest minds in technology for competition, innovation, and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            ref={ref}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
            initial="hidden"
            animate={controls}
            className="relative lg:col-span-7"
            style={{
              transform: "scale(0.85) translateX(-5%)",
            }}
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent opacity-30 z-10"></div>

              {/* Video container without rotation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    controls
                  >
                    <source src="/videos/campus.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Caption at the bottom */}
              <div className="absolute bottom-4 left-0 right-0 z-30 text-center">
                {/* Caption removed as requested */}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
            initial="hidden"
            animate={controls}
            className="bg-[#2D1A45]/80 backdrop-blur-sm rounded-xl p-8 border border-[#8A2BE2]/30 lg:col-span-5"
            style={{ transform: "scale(0.85)" }}
          >
            <div className="text-white mb-6 font-orbitron text-2xl font-bold">Our Mission</div>
            <p className="text-white mb-6 font-exo2">
              NUTEC aims to foster innovation and technological advancement in KPK by providing a platform for students
              to showcase their skills, compete with peers, and connect with industry leaders.
            </p>
            <p className="text-white mb-8 font-exo2">
              Since our inception in 2019, we've grown from a small campus event to KPK's largest tech olympiad, with
              participation from over 30 institutes and thousands of students.
            </p>

            <div className="mt-10">
              <h4 className="text-white font-rajdhani text-xl mb-4">NUTEC Timeline</h4>
              <div className="mb-4">
                <Slider
                  defaultValue={[2023]}
                  min={2019}
                  max={2025}
                  step={1}
                  value={[timelineYear]}
                  onValueChange={(value) => setTimelineYear(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  {timelineData.map((item) => (
                    <div key={item.year} className="flex flex-col items-center">
                      <span className={timelineYear === item.year ? "text-[#8A2BE2] font-bold" : "text-white"}>
                        {item.year}
                      </span>
                      <button
                        onClick={() => setTimelineYear(item.year)}
                        className={`mt-1 w-4 h-4 rounded-full transition-all ${
                          timelineYear === item.year ? "bg-[#8A2BE2] scale-125" : "bg-white/50 hover:bg-white"
                        }`}
                        aria-label={`Select year ${item.year}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                key={timelineYear}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#2D1A45]/80 p-4 rounded-lg border border-[#8A2BE2]/30"
              >
                <h5 className="text-[#8A2BE2] font-rajdhani font-bold">{currentTimelineItem.title}</h5>
                <p className="text-white text-sm">{currentTimelineItem.description}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
