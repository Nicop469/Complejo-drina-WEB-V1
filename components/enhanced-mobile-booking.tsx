"use client"

import { useEffect, useState } from "react"
import { Phone, Calendar } from "lucide-react"

export default function EnhancedMobileBooking() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 240)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491123839628?text=Hola, me interesa reservar en Complejo Drina", "_blank")
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-out ${
        isVisible ? "mobile-booking-enter show" : "mobile-booking-enter"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-3 shadow-lg">
        <div className="flex gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 modern-cta text-white font-medium py-3 rounded-2xl flex items-center justify-center gap-2 bg-[#14B8A6] hover:bg-[#0f766e]"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </button>
          <button
            data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
            className="flex-1 bg-[#B6D7F2] hover:bg-[#9AC5E8] text-[#0F172A] font-medium py-3 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Reservar
          </button>
        </div>
      </div>
    </div>
  )
}
