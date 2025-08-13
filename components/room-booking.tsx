"use client"

interface RoomBookingProps {
  roomType: string
}

export function RoomBooking({ roomType }: RoomBookingProps) {
  return (
    <section className="py-16 bg-[#14B8A6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4">¿Te gusta lo que ves?</h2>
        <p className="text-lg text-[#B6D7F2] mb-8 max-w-2xl mx-auto">
          Reserva tu {roomType.toLowerCase()} ahora y asegura las mejores fechas para tus vacaciones.
        </p>

        <button
          data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
          className="bg-white hover:bg-slate-50 text-[#14B8A6] font-semibold px-8 py-3 text-lg rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border-none cursor-pointer"
        >
          Reservar ahora
        </button>

        <p className="text-sm text-[#B6D7F2] mt-4">Ver disponibilidad en tiempo real</p>
      </div>
    </section>
  )
}
