"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navigation, MapPin, Clock, Calendar } from "lucide-react"

export default function VenueLocation() {
  const locationUrl =
    "https://www.google.com/maps/dir//National+University+of+Computer+%26+Emerging+Sciences+-+FAST+Peshawar+Campus/@33.9820266,71.4303789,17z/"

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#300] via-[#1a0920] to-deep-space">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-lg bg-dark-grey px-3 py-1 text-sm text-cyan mb-4">Venue Location</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Way to NUTEC</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-exo2">
            Join us at FAST Peshawar Campus for an unforgettable tech experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map Container - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-cyan/20 h-[400px]"
          >
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.225184722854!2d71.43037891468128!3d33.982026556062124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9105fb03d7d69%3A0xa6e5687326894f74!2sNational%20University%20of%20Computer%20%26%20Emerging%20Sciences%20-%20FAST%20Peshawar%20Campus!5e0!3m2!1sen!2s!4v1744565057213!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Action Button */}
            <div className="absolute bottom-4 right-4 z-10">
              <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-rajdhani flex items-center gap-2">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Address Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-grey/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 h-full flex flex-col justify-center"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-orbitron font-bold text-white mb-4">Event Venue</h3>
              <div className="w-20 h-1 bg-white rounded-full mb-6"></div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold text-xl mb-1">Address</h4>
                  <p className="text-white">
                    National University of Computer & Emerging Sciences
                    <br />
                    FAST Peshawar Campus
                    <br />
                    160 Industrial Estate, Jamrud Road
                    <br />
                    Peshawar, KPK, Pakistan
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold text-xl mb-1">Event Date</h4>
                  <p className="text-white">May 2-4, 2025</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-rajdhani font-bold text-xl mb-1">Event Time</h4>
                  <p className="text-white">9:00 AM - 6:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
