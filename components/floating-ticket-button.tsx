"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ticket } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function FloatingTicketButton() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed z-50 ${isMobile ? "bottom-4 right-4" : "bottom-8 right-8"}`}
        >
          <Button
            className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-orbitron rounded-full shadow-lg hover:shadow-cyan/20 group"
            size="lg"
          >
            <Ticket className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            {isMobile ? "" : "Buy Tickets"}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
