"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString()
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeUnit value={timeLeft.minutes} label="MINUTES" />
      <TimeUnit value={timeLeft.seconds} label="SECONDS" />
    </div>
  )
}

interface TimeUnitProps {
  value: number
  label: string
}

function TimeUnit({ value, label }: TimeUnitProps) {
  const formattedValue = value < 10 ? `0${value}` : value.toString()

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-20 h-24 md:w-28 md:h-32 bg-dark-grey rounded-lg overflow-hidden neon-border flex items-center justify-center perspective-500">
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
        <motion.span
          key={formattedValue}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-white"
        >
          {formattedValue}
        </motion.span>
      </div>
      <span className="mt-2 text-xs md:text-sm font-rajdhani text-cyan">{label}</span>
    </motion.div>
  )
}
