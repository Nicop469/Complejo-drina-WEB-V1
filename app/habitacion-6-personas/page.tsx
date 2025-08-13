import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { RoomGallery } from "@/components/room-gallery"
import { RoomFeatures } from "@/components/room-features"
import { RoomBooking } from "@/components/room-booking"
import type { Metadata } from "next"

const room6PersonImages = [
  {
    src: "/drina-cama-principal.jpeg",
    alt: "Dormitorio principal con cama matrimonial y decoración moderna",
  },
  {
    src: "/drina-habitacion-matrimonial.jpeg",
    alt: "Segundo dormitorio con cama matrimonial",
  },
  {
    src: "/drina-dormitorio-individual.jpeg",
    alt: "Dormitorio con cama individual",
  },
  {
    src: "/drina-cocina-comedor.jpeg",
    alt: "Cocina integrada con comedor y acceso a terraza",
  },
  {
    src: "/drina-cocina-compacta.jpeg",
    alt: "Cocina completamente equipada con electrodomésticos",
  },
  {
    src: "/drina-cocina-vista-adicional.jpeg",
    alt: "Vista adicional de la cocina con distribución en L",
  },
  {
    src: "/drina-terraza-parrilla.jpeg",
    alt: "Terraza privada con parrilla y mesa de exterior",
  },
]

const room6PersonFeatures = [
  "Capacidad: 6 personas",
  "Departamento de 2 dormitorios con baños en suite",
  "Sala de estar amplia y cocina totalmente equipada",
  "Aire acondicionado, Wi-Fi y TV por cable",
  "Terraza privada con parrilla individual",
  "Acceso a piscina y solarium compartidos",
  "Parrilla tipo fogonero en áreas comunes",
  "Estacionamiento semi cubierto",
  "Portón eléctrico y cámaras de seguridad",
  "Espacios amplios ideales para grupos grandes",
  "Check-in: 15:00 hrs / Check-out: 11:00 hrs",
]

export const metadata: Metadata = {
  title: "Departamento 6 Personas - Complejo Drina",
  description:
    "Departamento premium para 6 personas con 2 baños, terraza con vista panorámica al mar y amplios espacios comunes.",
  openGraph: {
    title: "Departamento 6 Personas - Complejo Drina",
    description: "Departamento premium para grupos grandes con terraza panorámica y todas las comodidades.",
    images: ["/drina-cama-principal.jpeg"],
  },
}

export default function Room6PersonPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-[#EAEFF5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#0F172A] mb-4">Departamento — 6 personas</h1>
            <p className="text-lg text-[#0F172A] max-w-2xl mx-auto">
              Ideal para familias grandes o grupos de amigos que buscan espacio, comodidad y vistas espectaculares
            </p>
          </div>
        </section>

        {/* Gallery */}
        <RoomGallery images={room6PersonImages} />

        {/* Description and Features */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Description */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-[#0F172A] mb-6">Descripción</h2>
                <div className="prose prose-lg">
                  <p className="text-[#0F172A] leading-relaxed mb-4">
                    Nuestro departamento premium de 2 dormitorios ofrece el máximo confort para grupos de hasta 6
                    personas. Con baños en suite, amplios espacios comunes y ubicación estratégica a 2 cuadras y media
                    de la playa, es perfecto para familias grandes o grupos de amigos.
                  </p>
                  <p className="text-[#0F172A] leading-relaxed">
                    Disfruta de tu terraza privada con parrilla, además de acceso completo a nuestras áreas comunes:
                    piscina, solarium y parrilla tipo fogonero. Todo esto con la tranquilidad de contar con
                    estacionamiento semi cubierto, portón eléctrico y sistema de seguridad con cámaras.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <RoomFeatures features={room6PersonFeatures} />
              </div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="py-12 bg-[#EAEFF5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif font-bold text-2xl text-[#0F172A] mb-6 text-center">Políticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-xl">
                <h3 className="font-semibold text-[#0F172A] mb-2">Mascotas</h3>
                <p className="text-[#0F172A]">
                  Mascotas pequeñas bienvenidas con cargo adicional de $15.000 por noche.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <h3 className="font-semibold text-[#0F172A] mb-2">No fumar</h3>
                <p className="text-[#0F172A]">Departamento libre de humo. Área designada para fumadores en terraza.</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <h3 className="font-semibold text-[#0F172A] mb-2">Cancelación</h3>
                <p className="text-[#0F172A]">Cancelación gratuita hasta 48 horas antes del check-in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <RoomBooking roomType="Departamento 6 personas" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
