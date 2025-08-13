export function ContactMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl text-[#14B8A6] mb-4">Nuestra ubicación</h2>
          <p className="text-lg text-[#0F172A]">Paseo 111, 269 - Villa Gesell, Argentina</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="h-96 bg-slate-100 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.123456789!2d-56.974169352940194!3d-37.264248666741885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE1JzUxLjMiUyA1NsKwNTgnMjcuMCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Complejo Drina"
              ></iframe>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-slate-100 p-6 rounded-xl">
            <h3 className="font-serif font-bold text-xl text-[#14B8A6] mb-4">Cómo llegar</h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-[#14B8A6] mb-1">En auto</h4>
                <p className="text-[#0F172A]">
                  Desde Buenos Aires: Autopista 2 hacia Mar del Plata, salida Villa Gesell. Estacionamiento disponible.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#14B8A6] mb-1">En bus</h4>
                <p className="text-[#0F172A]">
                  Terminal de buses a 5 minutos caminando. Conexiones directas desde Buenos Aires y otras ciudades.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#14B8A6] mb-1">Servicios cercanos</h4>
                <ul className="text-[#0F172A] space-y-1">
                  <li>• Supermercado: 50m</li>
                  <li>• Farmacia: 150m</li>
                  <li>• Restaurantes: 100m</li>
                  <li>• Cajero automático: 300m</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
