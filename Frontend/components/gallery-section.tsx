"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      caption: "Coding Competition 2023",
      location: "Main Auditorium",
    },
    {
      id: 2,
      type: "image",
      src: "/placeholder.svg?height=300&width=600",
      caption: "Robotics Showcase",
      location: "Innovation Lab",
    },
    {
      id: 3,
      type: "image",
      src: "/placeholder.svg?height=600&width=400",
      caption: "Award Ceremony",
      location: "Grand Hall",
    },
    {
      id: 4,
      type: "image",
      src: "/placeholder.svg?height=400&width=400",
      caption: "Hackathon Winners",
      location: "Tech Hub",
    },
    {
      id: 5,
      type: "image",
      src: "/placeholder.svg?height=300&width=300",
      caption: "VR Experience Zone",
      location: "Digital Pavilion",
    },
    {
      id: 6,
      type: "image",
      src: "/placeholder.svg?height=500&width=300",
      caption: "AI Workshop",
      location: "Learning Center",
    },
    // Duplicate items to create continuous scroll effect
    {
      id: 7,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      caption: "Coding Competition 2023",
      location: "Main Auditorium",
    },
    {
      id: 8,
      type: "image",
      src: "/placeholder.svg?height=300&width=600",
      caption: "Robotics Showcase",
      location: "Innovation Lab",
    },
    {
      id: 9,
      type: "image",
      src: "/placeholder.svg?height=600&width=400",
      caption: "Award Ceremony",
      location: "Grand Hall",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-deep-space">
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
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h2>
          </div>
        </motion.div>

        {/* Static gallery grid instead of horizontal scrolling */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
              className="relative overflow-hidden rounded-xl group h-64 sm:h-72 md:h-80 border border-cyan/20 bg-dark-grey/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-rajdhani font-bold text-lg">{item.caption}</h3>
                  <p className="text-cyan text-sm">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.8 } },
          }}
          className="flex justify-center mt-12"
        >
          <Button className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-orbitron">View Full Gallery</Button>
        </motion.div>
      </div>
    </section>
  )
}

interface GalleryItemProps {
  item: {
    id: number
    type: string
    src: string
    caption: string
    location: string
  }
  index: number
}

function GalleryItem({ item, index }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, delay: index * 0.1 },
        },
      }}
      className="relative overflow-hidden rounded-xl group flex-shrink-0 w-72 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`relative h-full w-full overflow-hidden ${isHovered ? "border-2 border-yellow" : ""}`}>
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1, filter: isHovered ? "blur(2px)" : "blur(0px)" }}
          transition={{ duration: 0.3 }}
        >
          <Image src={item.src || "/placeholder.svg"} alt={item.caption} fill className="object-cover" />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent p-4 flex flex-col justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white font-rajdhani font-bold text-lg">{item.caption}</h3>
          <p className="text-cyan text-sm">{item.location}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
