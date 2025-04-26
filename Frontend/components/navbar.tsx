"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Stats", href: "#stats" },
    { name: "Gallery", href: "#gallery" },
    { name: "TEDx", href: "#tedx" },
    { name: "Venue", href: "#venue" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-space shadow-lg py-3 border-b border-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image src="/images/nutec_logo_new.png" alt="Nutec Logo" width={150} height={50} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-rajdhani text-lg hover:text-cyan transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-orbitron">Buy Tickets</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-deep-space"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white font-rajdhani text-lg py-2 border-b border-cyan/20 hover:text-cyan transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-orbitron mt-4">Buy Tickets</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
