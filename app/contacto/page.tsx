import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { OwnerInfo } from "@/components/owner-info"
import { ContactMap } from "@/components/contact-map"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Complejo Drina",
  description:
    "Contáctanos para reservar tu departamento frente al mar. Teléfono, WhatsApp y formulario de contacto disponibles.",
  openGraph: {
    title: "Contacto - Complejo Drina",
    description: "Contáctanos para reservar tu departamento frente al mar en Chile.",
    images: ["/owner-carlos.png"],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-[#EAEFF5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#0F172A] mb-4">Contacto</h1>
            <p className="text-lg text-[#0F172A] max-w-2xl mx-auto">
              Estamos aquí para ayudarte a planificar tus vacaciones perfectas
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Owner Info */}
        <OwnerInfo />

        {/* Map */}
        <ContactMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
