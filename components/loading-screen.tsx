"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced from 3000ms to 1500ms (50% reduction)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }} // Reduced from 0.5 to 0.4
          >
            <motion.div
              className="relative w-28 h-28 mb-6" // Reduced from w-40 h-40 to w-28 h-28
              animate={{ rotate: 360 }}
              transition={{ duration: 3, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-cyan opacity-20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-t-cyan border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-2 border-magenta opacity-20"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-t-transparent border-r-magenta border-b-transparent border-l-transparent animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>
              <div className="absolute inset-4 rounded-full border-2 border-yellow opacity-20"></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-t-transparent border-r-transparent border-b-yellow border-l-transparent animate-spin"
                style={{ animationDuration: "1.5s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-orbitron text-lg font-bold text-white holographic">NUTEC</span>{" "}
                {/* Reduced from text-2xl to text-lg */}
              </div>
            </motion.div>
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan via-magenta to-yellow rounded-full overflow-hidden w-40" // Reduced from w-48 to w-40
              initial={{ width: 0 }}
              animate={{ width: "10rem" }} // Reduced from 12rem to 10rem
              transition={{ duration: 1.2, ease: "easeInOut" }} // Reduced from 2.5 to 1.2
            ></motion.div>
            <motion.p
              className="mt-4 text-xs text-white font-rajdhani" // Reduced from text-sm to text-xs
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }} // Reduced from 0.5 to 0.3
            >
              LOADING FUTURE TECH...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
