"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setIsDialogOpen(false)
    }, 3000)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsNewsletterSubmitted(true)
    }
  }

  return (
    <footer className="bg-deep-space border-t border-cyan/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Image src="/images/nutec_logo_new.png" alt="Nutec Logo" width={180} height={60} className="mb-6" />
            <p className="text-gray-300 mb-6">
              KPK's Biggest Tech Olympiad bringing together the brightest minds in technology for competition,
              innovation, and collaboration.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-rajdhani text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#stats">Stats</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#tedx">TEDx</FooterLink>
              <FooterLink href="#venue">Venue</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-rajdhani text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-cyan mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@nutec.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-cyan mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">+92 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-cyan mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">FAST Peshawar Campus, KPK, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-rajdhani text-xl mb-6">Stay Updated</h3>
            {!isNewsletterSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <p className="text-gray-300 mb-4 font-exo2">
                  Subscribe to our newsletter for exclusive updates and early bird tickets.
                </p>
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-deep-space border-cyan/30 focus:border-cyan text-white"
                  />
                </div>
                <Button type="submit" className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-rajdhani w-full">
                  Subscribe Now
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-cyan/10 border border-cyan/30 rounded-lg p-4 text-center"
              >
                <p className="text-cyan font-rajdhani font-bold">Thank you for subscribing!</p>
                <p className="text-white text-sm mt-2">We'll keep you updated with the latest news.</p>
              </motion.div>
            )}

            <div className="mt-6">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-rajdhani w-full">
                    Become a Sponsor
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-dark-grey border border-cyan/30 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-orbitron text-gradient-cyan-magenta">
                      Become a Sponsor
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                      To become an official sponsor for Nutec'25, please give us some information and we will reach you
                      out.
                    </DialogDescription>
                  </DialogHeader>

                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-300">
                            Company Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your company name"
                            className="bg-deep-space border-cyan/30"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-300">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="contact@company.com"
                            className="bg-deep-space border-cyan/30"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your company and sponsorship interests"
                          className="bg-deep-space border-cyan/30 min-h-[100px]"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#4A2A82] hover:bg-[#5A3A92] text-white font-rajdhani">
                        Submit
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-cyan/10 border border-cyan/30 rounded-lg p-6 text-center my-4"
                    >
                      <p className="text-cyan font-rajdhani font-bold text-xl mb-2">Thank you!</p>
                      <p className="text-white">
                        We've received your information and our team will contact you shortly.
                      </p>
                    </motion.div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} NUTEC. All rights reserved.</p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-3">
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-cyan text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan text-sm">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan text-sm">
                  Cookie Policy
                </Link>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 text-sm mr-2">Made with</span>
                <Heart className="h-4 w-4 text-magenta mx-1" />
                <span className="text-gray-400 text-sm mr-2">by</span>
                <a href="https://www.foslx.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Image src="/images/foslx-logo.png" alt="FOSLX Logo" width={24} height={24} className="mr-1" />
                  <span className="text-cyan hover:text-magenta transition-colors duration-300">FOSLX</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-dark-grey flex items-center justify-center text-gray-300 hover:text-cyan hover:bg-cyan/10 transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-cyan transition-colors duration-300">
        {children}
      </Link>
    </li>
  )
}
