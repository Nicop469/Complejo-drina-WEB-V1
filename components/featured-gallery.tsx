"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/villa-gesell-playa-aerea.jpeg",
    alt: "Vista aérea de Villa Gesell y su extensa playa",
  },
  {
    src: "/drina-piscina.jpeg",
    alt: "Piscina del Complejo Drina con área de descanso",
  },
  {
    src: "/drina-frente.jpeg",
    alt: "Fachada exterior del Complejo Drina",
  },
  {
    src: "/drina-piscina-parrilla.jpeg",
    alt: "Área de piscina y parrilla tipo fogonero",
  },
  {
    src: "/villa-gesell-atardecer.jpeg",
    alt: "Atardecer en la playa de Villa Gesell",
  },
  {
    src: "/villa-gesell-centro.jpeg",
    alt: "Centro peatonal de Villa Gesell",
  },
  {
    src: "/villa-gesell-centro-2.jpeg",
    alt: "Avenida principal de Villa Gesell",
  },
  {
    src: "/villa-gesell-centro-peatonal.jpeg",
    alt: "Centro peatonal de Villa Gesell con fuente y vida nocturna",
  },
]

export function FeaturedGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openLightbox = (index: number) => {
    setLightboxImage(index)
    setLightboxOpen(true)
  }

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevLightboxImage = () => {
    setLightboxImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mb-4">Galería destacada</h2>
          <p className="text-lg text-[#0F172A] max-w-2xl mx-auto">
            Descubre nuestros espacios y la belleza del entorno costero
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={galleryImages[currentImage].src || "/placeholder.svg"}
              alt={galleryImages[currentImage].alt}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(currentImage)}
            />

            <Button
              onClick={prevImage}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              onClick={nextImage}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImage ? "ring-2 ring-[#14B8A6] scale-105" : "hover:scale-105"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages[lightboxImage].src || "/placeholder.svg"}
              alt={galleryImages[lightboxImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            <Button
              onClick={() => setLightboxOpen(false)}
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white border-white/20"
            >
              <X className="h-4 w-4" />
            </Button>

            <Button
              onClick={prevLightboxImage}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              onClick={nextLightboxImage}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-white/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
