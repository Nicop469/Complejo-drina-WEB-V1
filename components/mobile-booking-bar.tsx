"use client"

import { Calendar } from "lucide-react"

export function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-[#E2E8F0] shadow-2xl">
      <div className="flex items-center justify-between p-4 gap-3">
        <div className="flex-1">
          <p className="text-sm font-medium text-[#0F172A]">¿Listo para reservar?</p>
          <p className="text-xs text-[#64748B]">Disponibilidad en tiempo real</p>
        </div>
        <div className="flex gap-2">
          <button
            data-be-url="https://hotels.cloudbeds.com/reservation/S3GnS9"
            className="modern-cta text-white font-semibold px-6 rounded-2xl shadow-lg bg-[#14B8A6] hover:bg-[#0f766e] flex items-center"
          >
            <Calendar size={16} className="mr-2" />
            Reservar
          </button>
        </div>
      </div>
    </div>
  )
}
