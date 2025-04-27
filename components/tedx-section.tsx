"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TedxSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-deep-space to-[#300]">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-lg bg-[#e62b1e]/20 px-3 py-1 text-sm text-[#e62b1e] mb-4">
            Special Feature
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#e62b1e]">TEDx</span>FASTPeshawar
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-exo2">
            Ideas worth spreading from the heart of KPK
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-[#e62b1e]/20"
          >
            <div className="aspect-[21/9] relative w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-25%20at%207.16.16%20PM-Rak0Nmh5smayrVyTD0vjUe03zDcS9m.jpeg"
                alt="TEDx FAST Peshawar"
                fill
                className="object-contain md:object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-grey/30 backdrop-blur-sm rounded-xl p-8 border border-[#e62b1e]/20"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Join the TEDx Experience at NUTEC 2025</h3>

            <p className="text-gray-300 mb-6 font-exo2">
              We're proud to announce that NUTEC 2025 will feature a special TEDxFASTPeshawar session, bringing together
              thought leaders, innovators, and visionaries to share ideas that matter.
            </p>

            <p className="text-gray-300 mb-8 font-exo2">
              TEDx is a program of local, self-organized events that bring people together to share a TED-like
              experience. At TEDxFASTPeshawar, speakers from diverse backgrounds will present fascinating ideas in
              engaging short talks.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e62b1e]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-[#e62b1e]" />
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold text-lg">May 3, 2025</h4>
                  <p className="text-gray-400 text-sm">Day 2 of NUTEC 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e62b1e]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-[#e62b1e]" />
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold text-lg">8 Inspiring Speakers</h4>
                  <p className="text-gray-400 text-sm">From technology, arts, and sciences</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e62b1e]/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-[#e62b1e]" />
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold text-lg">Theme: "Echoes of Tomorrow"</h4>
                  <p className="text-gray-400 text-sm">Exploring innovations that will shape our tomorrow</p>
                </div>
              </div>
            </div>

            <Link href="https://www.instagram.com/tedxfastpwr?igsh=MW9mcHg5YmhhcGszdA==" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#e62b1e] hover:bg-[#c4251a] text-white font-rajdhani flex items-center gap-2">
                Learn More <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#e62b1e]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#e62b1e]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
