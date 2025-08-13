import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileBookingBar } from "@/components/mobile-booking-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedGallery } from "@/components/featured-gallery"
import { FeaturesSection } from "@/components/features-section"
import { OurStorySection } from "@/components/our-story-section"
import { LocationSection } from "@/components/location-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <FeaturedGallery />
        <FeaturesSection />
        <OurStorySection />
        <LocationSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </div>
  )
}
