import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { RoomGallery } from "@/components/room-gallery"
import { RoomFeatures } from "@/components/room-features"
import { RoomBooking } from "@/components/room-booking"
import type { Metadata } from "next"

const room4PersonImages = [
  {
    src: "/drina-cama-principal.jpeg",
    alt: "Dormitorio principal con cama matrimonial y decoración moderna",
  },
  {
    src: "/drina-cocina-comedor.jpeg",
    alt: "Cocina integrada con comedor y acceso a terraza",
  },
  {
    src: "/drina-terraza-parrilla.jpeg",
    alt: "Terraza privada con parrilla y mesa de exterior",
  },
  {
    src: "/drina-cocina-compacta.jpeg",
    alt: "Cocina completamente equipada con electrodomésticos",
  },
  {
    src: "/drina-dormitorio-individual.jpeg",
    alt: "Dormitorio secundario con cama individual",
  },
  {
    src: "/drina-habitacion-matrimonial.jpeg",
    alt: "Habitación matrimonial con pared de acento",
  },
  {
    src: "/drina-cocina-vista-adicional.jpeg",
    alt: "Vista adicional de la cocina con distribución en L",
  },
]

const room4PersonFeatures = [
  "Capacidad: 4 personas",
  "Departamento de 2 dormitorios con baños en suite",
  "Sala de estar y cocina totalmente equipada",
  "Aire acondicionado, Wi-Fi y TV por cable",
  "Terraza privada con parrilla individual",
  "Acceso a piscina y solarium compartidos",
  "Parrilla tipo fogonero en áreas comunes",
  "Estacionamiento semi cubierto",
  "Portón eléctrico y cámaras de seguridad",
  "Check-in: 15:00 hrs / Check-out: 11:00 hrs",
]

export const metadata: Metadata = {
  title: "Habitación 4 Personas - Complejo Drina",
  description:
    "Habitación familiar para 4 personas con vista al mar. Cama matrimonial + 2 individuales, cocina equipada y todas las comodidades.",
  openGraph: {
    title: "Habitación 4 Personas - Complejo Drina",
    description: "Habitación familiar perfecta para 4 personas con vista al mar y todas las comodidades.",
    images: ["/drina-cama-principal.jpeg"],
  },
}

export default function Room4PersonPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-[#EAEFF5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#0F172A] mb-4">
              Habitación Familiar — 4 personas
            </h1>
            <p className="text-lg text-[#0F172A] max-w-2xl mx-auto">
              Perfecta para parejas con niños o grupos pequeños que buscan comodidad y vista al mar
            </p>
          </div>
        </section>

        {/* Gallery */}
        <RoomGallery images={room4PersonImages} />

        {/* Description and Features */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Description */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-[#0F172A] mb-6">Descripción</h2>
                <div className="prose prose-lg">
                  <p className="text-[#0F172A] leading-relaxed mb-4">
                    Nuestro departamento de 2 dormitorios está diseñado para brindar máxima comodidad a familias y
                    grupos de hasta 4 personas. Ubicado a solo 2 cuadras y media de la playa y 3 del centro peatonal,
                    ofrece la ubicación perfecta para disfrutar de Villa Gesell.
                  </p>
                  <p className="text-[#0F172A] leading-relaxed">
                    Cada unidad cuenta con baños en suite, sala de estar, cocina totalmente equipada y tu propia terraza
                    con parrilla. Además, podrás disfrutar de las áreas comunes: piscina, solarium y parrilla tipo
                    fogonero para momentos especiales al aire libre.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <RoomFeatures features={room4PersonFeatures} />
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
                  Mascotas pequeñas bienvenidas con cargo adicional de $10.000 por noche.
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
        <RoomBooking roomType="Habitación Familiar 4 personas" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
