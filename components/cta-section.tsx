"use client"

export function CTASection() {
  return (
    <section className="py-16 bg-[#14B8A6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4">¿Listo para tu escape perfecto?</h2>
        <p className="text-lg text-[#B6D7F2] mb-8 max-w-2xl mx-auto">
          Reserva ahora y asegura tu lugar en el paraíso. Disponibilidad en tiempo real y confirmación inmediata.
        </p>

        <button
          data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
          className="modern-cta font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-[#14B8A6] hover:bg-[#0f766e] text-white rounded-2xl shadow-lg"
        >
          Reservar ahora
        </button>

        <p className="text-sm text-[#B6D7F2] mt-4">Ver disponibilidad en tiempo real</p>
      </div>
    </section>
  )
}
