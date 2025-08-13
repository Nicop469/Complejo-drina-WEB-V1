export function LocationSection() {
  return (
    <section className="py-16 bg-[#EAEFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#14B8A6] mb-4">Ubicación</h2>
          <p className="text-lg text-[#0F172A] max-w-2xl mx-auto">
            A minutos de restaurantes, supermercados y atracciones locales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-serif font-semibold text-xl text-[#14B8A6] mb-4">
                Paseo 111, 269 - Villa Gesell, Argentina
              </h3>
              <p className="text-[#0F172A] mb-6 leading-relaxed">
                Nuestros departamentos están estratégicamente ubicados a solo 300 metros de la playa, en una zona
                tranquila de Villa Gesell con fácil acceso al mar y proximidad a todos los servicios que necesitas
                durante tu estadía.
              </p>

              <div className="space-y-3 text-sm text-[#0F172A]">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3"></span>
                  Playa: 300 metros
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3"></span>
                  Supermercado: 50 metros
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3"></span>
                  Restaurantes: 100 metros
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3"></span>
                  Centro de la ciudad: 10 minutos a pie
                </div>
              </div>
            </div>
          </div>

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
      </div>
    </section>
  )
}
