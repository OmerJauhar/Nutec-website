"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  BarChartIcon,
  Trophy,
  Users,
  Building,
  Calendar,
  Code,
  Laptop,
  Lightbulb,
  Award,
  Zap,
  Briefcase,
  Globe,
  Clock,
  Coffee,
  Wifi,
  Monitor,
  Cpu,
} from "lucide-react"

export default function StatsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const statsData = [
    { title: "Events", value: "35+", icon: <BarChartIcon className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Raised", value: "1M+", icon: <Calendar className="h-5 w-5" />, color: "#9370DB" },
    { title: "Prize Money", value: "750K", icon: <Trophy className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Institutes", value: "15+", icon: <Building className="h-5 w-5" />, color: "#9370DB" },
    { title: "Attendance", value: "3K+", icon: <Users className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Projects", value: "120+", icon: <Code className="h-5 w-5" />, color: "#9370DB" },
    { title: "Sponsors", value: "5+", icon: <Briefcase className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Workshops", value: "20+", icon: <Laptop className="h-5 w-5" />, color: "#9370DB" },
    { title: "Speakers", value: "25+", icon: <Lightbulb className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Awards", value: "40+", icon: <Award className="h-5 w-5" />, color: "#9370DB" },
    { title: "Hours", value: "72+", icon: <Clock className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Startups", value: "4+", icon: <Zap className="h-5 w-5" />, color: "#9370DB" },
    { title: "Countries", value: "1", icon: <Globe className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Coffee Cups", value: "500+", icon: <Coffee className="h-5 w-5" />, color: "#9370DB" },
    { title: "Wi-Fi GB", value: "500+", icon: <Wifi className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Screens", value: "20+", icon: <Monitor className="h-5 w-5" />, color: "#9370DB" },
    { title: "Lines of Code", value: "500K", icon: <Code className="h-5 w-5" />, color: "#8A2BE2" },
    { title: "Servers", value: "5+", icon: <Cpu className="h-5 w-5" />, color: "#9370DB" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#1a0033] to-deep-space">
      {/* Gradient transitions */}
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
          <div className="inline-block rounded-lg bg-[#8A2BE2]/20 px-3 py-1 text-sm text-white mb-4">
            Previous Year Stats
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="max-w-2xl mx-auto text-lg text-white font-exo2">
            Celebrating the success of our previous events with impressive statistics that showcase our growth and
            impact.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface StatCardProps {
  stat: {
    title: string
    value: string | number
    icon: React.ReactNode
    color: string
  }
  index: number
  variants: any
}

function StatCard({ stat, index, variants }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView && typeof stat.value === "number") {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, stat.value])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="bg-[#8A2BE2] rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A2BE2]/20 border border-[#8A2BE2]/30 flex flex-col items-center justify-center text-center h-24"
      whileHover={{ y: -3, scale: 1.02 }}
    >
      <motion.div
        className="text-2xl md:text-3xl font-orbitron font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 + (index % 6) * 0.05 }}
      >
        {typeof stat.value === "number" ? count : stat.value}
      </motion.div>

      <motion.div
        className="text-xs md:text-sm font-rajdhani uppercase tracking-wider text-white"
        initial={{ opacity: 0, y: 5 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ duration: 0.5, delay: 0.3 + (index % 6) * 0.05 }}
      >
        {stat.title}
      </motion.div>
    </motion.div>
  )
}
