"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+56912345678"
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre los departamentos disponibles.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 md:hidden"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
