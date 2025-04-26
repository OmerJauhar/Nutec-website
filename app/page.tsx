import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import LoadingScreen from "@/components/loading-screen"
import PartnerLogos from "@/components/partner-logos"
import FloatingTicketButton from "@/components/floating-ticket-button"
import VenueLocation from "@/components/venue-location"
import TedxSection from "@/components/tedx-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <LoadingScreen />
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="stats">
        <StatsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="tedx">
        <TedxSection />
      </section>
      <section id="venue">
        <VenueLocation />
      </section>
      <PartnerLogos />
      <FloatingTicketButton />
      <Footer />
    </main>
  )
}
