"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToRooms = () => {
    const roomsSection = document.getElementById("habitaciones")
    roomsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-white pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/villa-gesell-atardecer.jpeg"
          alt="Atardecer en la playa de Villa Gesell, Argentina"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] mb-6">
          Descanso frente al mar
        </h1>
        <p className="text-lg sm:text-xl text-[#0F172A] mb-8 max-w-2xl mx-auto leading-relaxed">
          Departamentos equipados, ubicación privilegiada y atención cercana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
            className="bg-[#14B8A6] hover:bg-[#0f766e] text-white font-medium px-8 py-3 text-lg rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border-none cursor-pointer"
          >
            Reservar ahora
          </button>
          <Button
            onClick={scrollToRooms}
            variant="outline"
            size="lg"
            className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white px-8 py-3 text-lg transition-all duration-300 bg-transparent"
          >
            Ver habitaciones
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#14B8A6] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#14B8A6] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
