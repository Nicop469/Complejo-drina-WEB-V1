import { MapPin, ChefHat, Wifi, Car, Waves, Shield } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    description: "A 2 cuadras y media de la playa, 3 del centro peatonal",
  },
  {
    icon: ChefHat,
    title: "Cocina totalmente equipada",
    description: "Todo lo necesario para cocinar cómodamente",
  },
  {
    icon: Wifi,
    title: "WiFi y TV por cable",
    description: "Conexión rápida y entretenimiento garantizado",
  },
  {
    icon: Car,
    title: "Estacionamiento semi cubierto",
    description: "Con portón eléctrico para mayor seguridad",
  },
  {
    icon: Waves,
    title: "Piscina y solarium",
    description: "Áreas comunes para relajarse y disfrutar",
  },
  {
    icon: Shield,
    title: "Seguridad completa",
    description: "Cámaras de seguridad y acceso controlado",
  },
]

export function FeaturesSection() {
  return (
    <section id="habitaciones" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mb-4">Características generales</h2>
          <p className="text-lg text-[#0F172A] max-w-2xl mx-auto">
            Departamentos de 1 y 2 dormitorios diseñados para 2, 4 y 6 personas con todas las comodidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#14B8A6] rounded-lg mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-[#0F172A]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
