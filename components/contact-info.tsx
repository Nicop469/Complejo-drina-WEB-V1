"use client"

import { Phone, MessageCircle, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5491123839628"
    const message = encodeURIComponent(
      "Hola! Me interesa conocer más sobre los departamentos disponibles en Complejo Drina.",
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleInstagramClick = () => {
    window.open("https://instagram.com/complejodrina", "_blank")
  }

  const handleFacebookClick = () => {
    window.open("https://facebook.com/complejodrina", "_blank")
  }

  return (
    <div>
      <h2 className="font-serif font-bold text-2xl text-[#14B8A6] mb-8">Información de contacto</h2>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-[#14B8A6] rounded-xl flex items-center justify-center mr-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#14B8A6]">Teléfono</h3>
            <a href="tel:+5491123839628" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors">
              +54 9 11 2383-9628
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#14B8A6]">WhatsApp</h3>
            <button onClick={handleWhatsAppClick} className="text-[#0F172A] hover:text-[#14B8A6] transition-colors">
              +54 9 11 2383-9628
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-[#14B8A6] rounded-xl flex items-center justify-center mr-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#14B8A6]">Correo electrónico</h3>
            <a
              href="mailto:reservas@edificiodrina.com"
              className="text-[#0F172A] hover:text-[#14B8A6] transition-colors"
            >
              reservas@edificiodrina.com
            </a>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 pt-8 border-t border-slate-200">
        <h3 className="font-semibold text-[#14B8A6] mb-4">Síguenos en redes sociales</h3>
        <div className="flex space-x-4">
          <Button
            onClick={handleInstagramClick}
            variant="outline"
            size="icon"
            className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white bg-transparent rounded-xl"
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleFacebookClick}
            variant="outline"
            size="icon"
            className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white bg-transparent rounded-xl"
          >
            <Facebook className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
