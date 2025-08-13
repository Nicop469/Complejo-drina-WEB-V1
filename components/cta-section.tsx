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
          style={{
            backgroundColor: "white",
            color: "#14B8A6",
            fontWeight: "600",
            padding: "12px 32px",
            fontSize: "18px",
            borderRadius: "16px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#f8fafc"
            e.currentTarget.style.transform = "scale(1.05)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "white"
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          Reservar ahora
        </button>

        <p className="text-sm text-[#B6D7F2] mt-4">Ver disponibilidad en tiempo real</p>
      </div>
    </section>
  )
}
